import React from 'react'
import loadable from '@loadable/component'
import ReactPlaceholder from 'react-placeholder'

const PageLoading = (
  <div className="page-loading">
    <ReactPlaceholder showLoadingAnimation={true} type='text' ready={false} rows={20} color='#E0E0E0'><div></div></ReactPlaceholder>
  </div>
)

export const Home = loadable(
  () => import('./Home'),
  { fallback: PageLoading }
)

export const Login = loadable(
  () => import('./Login'),
  { fallback: PageLoading }
)

export const Logout = loadable(
  () => import('./Logout'),
  { fallback: PageLoading }
)

export const Join = loadable(
  () => import('./Join'),
  { fallback: PageLoading }
)

export const Form = loadable(
  () => import('./Form'),
  { fallback: PageLoading }
)

export const Article = loadable(
  () => import('./Article'),
  { fallback: PageLoading }
)

export const Profile = loadable(
  () => import('./Profile'),
  { fallback: PageLoading }
)

export const ProfileEdit = loadable(
  () => import('./ProfileEdit'),
  { fallback: PageLoading }
)