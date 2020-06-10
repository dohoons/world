import React from 'react';
import PropTypes, { func, node, number, shape, string } from 'prop-types';
import { withRouter } from 'react-router-dom';

const debounce = (fn, time) => {
  let timeout;

  return function (...args) {
    const functionCall = () => fn.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

class ScrollManager extends React.Component {
  constructor(props) {
    super(props);

    this.scrollSyncData = {
      x: 0,
      y: 0,
      attemptsRemaining: props.scrollSyncAttemptLimit,
    };

    const scrollCapture = () => {
      requestAnimationFrame(() => {
        const { pageXOffset: x, pageYOffset: y } = window;
        const { pathname, search, hash } = this.props.location;

        // use browser history instead of router history
        // to avoid infinite history.replace loop
        const historyState = window.history.state || {};
        const { state = {} } = historyState;
        if (
          !state.scroll ||
          state.scroll.x !== window.pageXOffset ||
          state.scroll.y !== window.pageYOffset
        ) {
          window.history.replaceState(
            {
              ...historyState,
              state: { ...state, scroll: { x, y } },
            },
            null,
            `${this.props.basename}${pathname}${search}${hash}`,
          );
        }
      });
    };

    const innerScrollSync = () => {
      requestAnimationFrame(() => {
        const { x, y, attemptsRemaining } = this.scrollSyncData;

        if (attemptsRemaining < 1) {
          return;
        }

        const { pageXOffset, pageYOffset } = window;
        if (
          y < window.document.body.scrollHeight &&
          (x !== pageXOffset || y !== pageYOffset)
        ) {
          window.scrollTo(x, y);
          this.scrollSyncData.attemptsRemaining = attemptsRemaining - 1;
          innerScrollSync();
        }
      });
    };

    const scrollSync = (x = 0, y = 0) => {
      this.scrollSyncData = {
        x,
        y,
        attemptsRemaining: this.props.scrollSyncAttemptLimit,
      };
      innerScrollSync();
    };

    this.debouncedScroll = debounce(scrollCapture, props.scrollCaptureDebounce);
    this.debouncedScrollSync = debounce(scrollSync, props.scrollSyncDebounce);
  }

  componentDidMount() {
    const { location, onLocationChange } = this.props;
    if (onLocationChange) {
      onLocationChange(location);
    }

    this.onPop(this.props);
    window.addEventListener('scroll', this.debouncedScroll, { passive: true });
  }

  componentDidUpdate() {
    switch (this.props.history.action) {
      case 'PUSH':
        this.onPush();
        break;
      case 'REPLACE':
        break;
      case 'POP':
        this.onPop(this.props);
        break;
      default:
        console.warn(
          `Unrecognized location change action! "${this.props.history.action}"`,
        );
    }
    if (this.props.onLocationChange) {
      this.props.onLocationChange(this.props.location);
    }
  }

  componentWillUnmount() {
    this.scrollSyncPending = false;
    window.removeEventListener('scroll', this.debouncedScroll, {
      passive: true,
    });
  }

  onPush() {
    this.debouncedScrollSync(0, 0);
  }

  onPop({ location: { state = {} } }) {
    // attempt location restore
    const { x = 0, y = 0 } = state.scroll || {};
    this.debouncedScrollSync(x, y);
  }

  render() {
    return this.props.children;
  }
}

ScrollManager.propTypes = {
  children: node.isRequired,
  history: shape({
    action: string.isRequired,
    push: func.isRequired,
    replace: func.isRequired,
  }).isRequired,
  basename: string,
  location: PropTypes.oneOfType([PropTypes.object]),
  onLocationChange: func,
  scrollCaptureDebounce: number,
  scrollSyncDebounce: number,
  scrollSyncAttemptLimit: number,
};

ScrollManager.defaultProps = {
  basename: '',
  location: { state: {} },
  onLocationChange: () => {},
  scrollCaptureDebounce: 50,
  scrollSyncDebounce: 100,
  scrollSyncAttemptLimit: 5,
};

export default withRouter(ScrollManager);
