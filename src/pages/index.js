import React from 'react'
import Loadable from 'react-loadable'
import ReactPlaceholder from 'react-placeholder'

const PageLoading = () => <div className="page-loading">
  <ReactPlaceholder showLoadingAnimation={true} type='text' ready={false} rows={20} color='#E0E0E0'><div></div></ReactPlaceholder>
</div>

export const Home = Loadable({
  loader: () => import('./Home'),
  loading: PageLoading
})

export const Login = Loadable({
  loader: () => import('./Login'),
  loading: PageLoading
})

export const Logout = Loadable({
  loader: () => import('./Logout'),
  loading: PageLoading
})

export const Join = Loadable({
  loader: () => import('./Join'),
  loading: PageLoading
})

export const Form = Loadable({
  loader: () => import('./Form'),
  loading: PageLoading
})

export const Article = Loadable({
  loader: () => import('./Article'),
  loading: PageLoading
})

export const Profile = Loadable({
  loader: () => import('./Profile'),
  loading: PageLoading
})

export const ProfileEdit = Loadable({
  loader: () => import('./ProfileEdit'),
  loading: PageLoading
})