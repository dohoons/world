(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{455:function(t,e,r){t.exports=r(463)},456:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise(function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)})}}r.d(e,"a",function(){return a})},463:function(t,e,r){var n=function(){return this||"object"===typeof self&&self}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(464),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(i){n.regeneratorRuntime=void 0}},464:function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=w;var h="suspendedStart",f="suspendedYield",p="executing",m="completed",d={},g={};g[i]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(A([])));v&&v!==n&&a.call(v,i)&&(g=v);var b=j.prototype=x.prototype=Object.create(g);N.prototype=b.constructor=j,j.constructor=N,j[s]=N.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===N||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},O(k.prototype),k.prototype[c]=function(){return this},u.AsyncIterator=k,u.async=function(t,e,r,n){var a=new k(w(t,e,r,n));return u.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},O(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=A,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return c.type="throw",c.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function w(t,e,r,n){var a=e&&e.prototype instanceof x?e:x,o=Object.create(a.prototype),i=new P(n||[]);return o._invoke=function(t,e,r){var n=h;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return I()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=E(t,e,r);if("normal"===s.type){if(n=r.done?m:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function E(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function x(){}function N(){}function j(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,i){var c=E(t[r],t,n);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(l).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,i)})}i(c.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=E(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:I}}function I(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},554:function(t,e,r){"use strict";r.r(e);var n=r(455),a=r.n(n),o=r(456),i=r(46),c=r(47),s=r(50),l=r(48),u=r(51),h=r(0),f=r.n(h),p=r(49),m=r(68),d=r(136),g=r(19),y=r(7),v=r(465),b=r.n(v),w=r(138),E=r(81);function x(){var t=Object(E.a)(["\n"]);return x=function(){return t},t}var N=r(82).a.div(x()),j=function(t){function e(){var t,r;Object(i.a)(this,e);for(var n=arguments.length,c=new Array(n),u=0;u<n;u++)c[u]=arguments[u];return(r=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(c)))).state={loading:!1,sending:!1,errors:{},slug:"",title:"",description:"",body:"",tag:""},r.fetchArticles=function(){var t=Object(o.a)(a.a.mark(function t(e){var n,o,i,c,s,l,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.setState(Object(g.a)(function(t){t.loading=!0})),n=r.props,o=n.history,i=n.userInfo,c=n.t,t.prev=2,r.req=y.a.CancelToken.source(),t.next=6,y.a.Articles.get({slug:e,config:{cancelToken:r.req.token}});case 6:if(s=t.sent,l=s.data,(u=l.article).author.username===i.username){t.next=13;break}return r.props.alert.error(c("errorModifyAuth")),o.goBack(),t.abrupt("return");case 13:r.setState(Object(g.a)(function(t){t.loading=!1,t.slug=u.slug,t.title=u.title,t.description=u.description,t.body=u.body,t.tag=u.tagList.join(", ")})),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),t.t0.response&&"404"===t.t0.response.data.status&&o.goBack();case 19:case"end":return t.stop()}},t,this,[[2,16]])}));return function(e){return t.apply(this,arguments)}}(),r.submitHandle=function(t){var e=r.props,n=e.history,a=e.match,o=e.t,i=r.state,c=i.slug,s=i.title,l=i.description,u=i.body,h=i.tag,f=h.length?h.split(",").map(function(t){return t.trim()}):[];if(t.preventDefault(),r.validate()){r.setState(Object(g.a)(function(t){t.sending=!0,t.errors={}}));var p=a.params.slug?"update":"create";y.a.Articles[p]({article:{slug:c,title:s,description:l,body:u,tagList:f}}).then(function(t){r.setState(Object(g.a)(function(t){t.sending=!1})),n.push("/article/".concat(t.data.article.slug))}).catch(function(t){r.props.alert.error(o("errorWrite")),r.setState(Object(g.a)(function(t){t.sending=!1}))})}},r.changeInput=function(t){return function(e){var n=e.target.value;r.setState(Object(g.a)(function(e){e[t]=n}))}},r}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(t){t.match.params.slug!==this.props.match.params.slug&&(this.props.match.params.slug?this.fetchArticles(this.props.match.params.slug):this.setState(Object(g.a)(function(t){t.loading=!1,t.sending=!1,t.slug="",t.title="",t.description="",t.body="",t.tag=""})))}},{key:"componentDidMount",value:function(){var t=this.props.match.params;t&&t.slug&&this.fetchArticles(t.slug)}},{key:"componentWillUnmount",value:function(){this.req&&this.req.cancel()}},{key:"validate",value:function(){var t={},e=this.props.t,r=this.state,n=r.title,a=r.description,o=r.body;return b.a.isEmpty(n)&&(t.title=e("validate:emptyTitle")),b.a.isEmpty(a)&&(t.description=e("validate:emptyDescription")),b.a.isEmpty(o)&&(t.body=e("validate:emptyBody")),0===Object.keys(t).length||(this.setState(Object(g.a)(function(e){e.errors=t})),!1)}},{key:"render",value:function(){var t=this.props,e=t.history,r=t.t,n=this.state,a=n.loading,o=n.sending,i=n.errors,c=n.slug,s=n.title,l=n.description,u=n.body,h=n.tag;return a?f.a.createElement("div",null):f.a.createElement(N,{className:"container"},f.a.createElement(d.Helmet,null,f.a.createElement("title",null,r(c?"headingModify":"headingWrite")," - ",r("common:siteName"))),f.a.createElement("div",{className:"common-form"},f.a.createElement("h2",{className:"form-title"},r(c?"headingModify":"headingWrite")),f.a.createElement("form",{onSubmit:this.submitHandle},f.a.createElement("fieldset",null,f.a.createElement("div",{className:"form-row"},f.a.createElement("label",null,f.a.createElement("span",{className:"form-head"},r("title")),f.a.createElement("input",{type:"text",placeholder:r("title"),className:"txt large block",disabled:o,value:s,onChange:this.changeInput("title")})),i.title&&f.a.createElement("p",{className:"input-error"},f.a.createElement("i",{className:"fas fa-times-circle"})," ",i.title)),f.a.createElement("div",{className:"form-row"},f.a.createElement("label",null,f.a.createElement("span",{className:"form-head"},r("description")),f.a.createElement("input",{type:"text",placeholder:r("description"),className:"txt large block",disabled:o,value:l,onChange:this.changeInput("description")})),i.description&&f.a.createElement("p",{className:"input-error"},f.a.createElement("i",{className:"fas fa-times-circle"})," ",i.description)),f.a.createElement("div",{className:"form-row"},f.a.createElement("label",null,f.a.createElement("span",{className:"form-head"},r("body")),f.a.createElement("textarea",{cols:"60",rows:"10",placeholder:r("body"),className:"txt large block",disabled:o,value:u,onChange:this.changeInput("body")})),i.body&&f.a.createElement("p",{className:"input-error"},f.a.createElement("i",{className:"fas fa-times-circle"})," ",i.body)),f.a.createElement("div",{className:"form-row"},f.a.createElement("label",null,f.a.createElement("span",{className:"form-head"},r("tag")),f.a.createElement("input",{type:"text",placeholder:r("tag"),className:"txt large block",disabled:o,value:h,onChange:this.changeInput("tag")}))),o&&f.a.createElement("div",null,r("sending")),f.a.createElement("div",{className:"form-action"},f.a.createElement("button",{type:"submit",className:"btn large primary",disabled:o},r("common:write"))," ",f.a.createElement("button",{type:"button",className:"btn large",disabled:o,onClick:e.goBack},r("common:cancel")))))))}}]),e}(h.Component);e.default=Object(m.a)(w.b,Object(p.d)("form"))(j)}}]);