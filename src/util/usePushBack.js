import { useLastLocation } from 'react-router-last-location'
import { history } from '~/index'

const usePushBack = () => {
  const lastLocation = useLastLocation()
  
  const pushBack = () => {
    if(lastLocation) {
      history.push(lastLocation.pathname)
    } else {
      history.goBack()
    }
  }

  return pushBack
}

export default usePushBack