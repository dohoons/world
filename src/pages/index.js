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

export const Home = () => (
  <AsyncPage page='Home' />
)

export const Login = () => (
  <AsyncPage page='Login' />
)

export const Logout = () => (
  <AsyncPage page='Logout' />
)

export const Join = () => (
  <AsyncPage page='Join' />
)

export const Form = () => (
  <AsyncPage page='Form' />
)

export const Article = () => (
  <AsyncPage page='Article' />
)

export const Profile = () => (
  <AsyncPage page='Profile' />
)

export const ProfileEdit = () => (
  <AsyncPage page='ProfileEdit' />
)