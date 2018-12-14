import axios from 'axios'
import Cookies from 'js-cookie'

const http = axios.create({ baseURL: 'https://conduit.productionready.io/api' })

const CancelToken = axios.CancelToken

const setToken = (token = null) => {
  if(token) {
    Cookies.set('jwt', token)
    http.defaults.headers.common['Authorization'] = `Token ${token}`
  } else {
    Cookies.remove('jwt', token)
    delete http.defaults.headers.common['Authorization']
  }
}

const Auth = {
  current: () => {
    return http.get(`/user`)
  },
  login: ({ email, password, config }) => {
    return http.post(`/users/login`, { user: { email, password } }, config)
  },
  register: ({ username, email, password, config }) => {
    return http.post(`/users`, { user: { username, email, password } }, config)
  },
  save: ({ user, config }) => {
    return http.put(`/user`, { user }, config)
  },
}

const Tags = {
  getAll: () => {
    return http.get('/tags')
  }
}

const limit = (count, page) => `limit=${count}&offset=${page ? page * count : 0}`
const Articles = {
  all: ({ page, config }) => {
    return http.get(`/articles?${limit(10, page)}`, config)
  },
  feed: ({ page, config }) => {
    return http.get(`/articles/feed?${limit(10, page)}`, config)
  },
  byAuthor: ({ username, page, config }) => {
    return http.get(`/articles?author=${encodeURIComponent(username)}&${limit(5, page)}`, config)
  },
  favoritedBy: ({ username, page, config }) => {
    return http.get(`/articles?favorited=${encodeURIComponent(username)}&${limit(5, page)}`, config)
  },
  byTag: ({ tag, page, config }) => {
    return http.get(`/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`, config)
  },
  favorite: ({ slug, config }) => {
    return http.post(`/articles/${slug}/favorite`, config)
  },
  unfavorite: ({ slug, config }) => {
    return http.delete(`/articles/${slug}/favorite`, config)
  },
  create: ({ article, config }) => { 
    return http.post(`/articles`, { article }, config)
  },
  update: ({ article, config }) => {
    return http.put(`/articles/${article.slug}`, { article }, config)
  },
  delete: ({ slug, config }) => {
    return http.delete(`/articles/${slug}`, config)
  },
  get: ({ slug, config }) => {
    return http.get(`/articles/${slug}`, config)
  },
}

const Comments = {
  get: ({ slug, config }) => {
    return http.get(`/articles/${slug}/comments`, config)
  },
  create: ({ slug, comment, config }) => {
    return http.post(`/articles/${slug}/comments`, { comment }, config)
  },
  delete: ({ slug, commentId, config }) => {
    return http.delete(`/articles/${slug}/comments/${commentId}`, config)
  },
}

const Profile = {
  get: ({ username, config }) => {
    return http.get(`/profiles/${username}`, config)
  },
  follow: ({ username, config }) => {
    return http.post(`/profiles/${username}/follow`, config)
  },
  unfollow: ({ username, config }) => {
    return http.delete(`/profiles/${username}/follow`, config)
  },
}

export default {
  CancelToken,
  setToken,
  Auth,
  Tags,
	Articles,
  Comments,
  Profile,
}