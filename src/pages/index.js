import React from 'react'
import loadable from '@loadable/component'
import ReactPlaceholder from 'react-placeholder'

const PageLoading = (
  <div className="page-loading">
    <ReactPlaceholder showLoadingAnimation={true} type='text' ready={false} rows={20} color='#E0E0E0'><div></div></ReactPlaceholder>
  </div>
)
 
const AsyncPage = loadable(
  props => import(`./${props.page}`),
  { fallback: PageLoading }
)

export const Home = props => <AsyncPage page='Home' {...props} />
export const Login = props => <AsyncPage page='Login' {...props} />
export const Join = props => <AsyncPage page='Join' {...props} />
export const Form = props => <AsyncPage page='Form' {...props} />
export const Article = props => <AsyncPage page='Article' {...props} />
export const Profile = props => <AsyncPage page='Profile' {...props} />
export const ProfileEdit = props => <AsyncPage page='ProfileEdit' {...props} />