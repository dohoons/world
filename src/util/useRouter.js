import { useContext } from 'react'
import { __RouterContext } from 'react-router-dom'

function useRouter() {
  return useContext(__RouterContext)
}

export default useRouter
