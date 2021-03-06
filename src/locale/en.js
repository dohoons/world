export default {
  common: {
    siteName: 'World',
    modify: 'Modify',
    delete: 'Delete',
    list: 'List',
    write: 'Write',
    cancel: 'Cancel',
  },
  validate: {
    emptyUsername: 'Please enter your username.',
    lengthUsername: 'Please enter a user name between 1 and 20 characters.',
    emptyEmail: 'Please enter your email address.',
    notEmail: 'Email format is incorrect.',
    emptyPassword: 'Please enter a password.',
    lengthPassword: 'Please enter at least 8 characters.',
    emptyTitle: 'Please enter the subject.',
    emptyDescription: 'Please enter a description.',
    emptyBody: 'Please enter your article.',
  },
  components: {
    like: {
      actionText: 'Like',
    },
    comment: {
      heading: 'Comments',
      loginMsg: '<1>Sign in</1> to leave a comment.',
      confirmDelete: 'Are you sure you want to delete this comment?',
      errorDelete: 'Deletion failed.',
      placeHolder: 'Write a comment..',
      submit: 'Post Comment',
      noItem: 'No comments.',
      errorWrite: 'Failed to send.',
    },
    pagination: {
      first: 'First',
      prev: 'Prev',
      next: 'Next',
      last: 'Last',
    },
    profileInfo: {
      follow: 'Follow',
      unfollow: 'Unfollow',
      profile: 'Edit Profile',
    },
  },
  header: {
    home: 'Home',
    write: 'Write',
    profile: 'Profile',
    logout: 'Sign out',
    login: 'Sign in',
    join: 'Sign up',
  },
  footer: {
    heading: 'Footer',
  },
  home: {
    myfeed: 'My Feed',
    globalfeed: 'Global Feed',
    needLogin: 'Sign-in required',
    loginMsg: 'You can view it after sign-in.',
    hotTag: 'Popular Tags',
  },
  article: {
    confirmDelete: 'Are you sure you want to delete?',
    canAuthorDelete: 'You can only delete author.',
    errorDelete: 'Deletion failed.',
  },
  form: {
    headingWrite: 'New Article',
    headingModify: 'Edit Article',
    title: 'Subject',
    description: 'Description',
    body: 'Content',
    tag: 'Tag',
    sending: 'Sending...',
    errorModifyAuth: 'You do not have edit rights.',
    errorWrite: 'Failed to send.',
  },
  join: {
    heading: 'Sign up',
    username: 'Username',
    email: 'Email',
    password: 'Password',
    sending: 'Sending...',
    join: 'Sign up',
    infoDesc: 'Already have an account? Please <1>sign in.</1>',
  },
  login: {
    heading: 'Sign in',
    email: 'Email',
    password: 'Password',
    sending: 'Sending...',
    login: 'Sign in',
    demoLogin: 'Sign in (Demo)',
    infoDesc: 'Do you need an account? Please <1>Sign up.</1>',
    invalidLoginInfo: 'Email or password is incorrect.',
    loginFail: 'Login failed.',
    needLogin: 'Login is required.',
  },
  profile: {
    myArticles: 'My Articles',
    favoritedArticles: 'Favorited Articles',
  },
  profileEdit: {
    heading: 'Edit Profile',
    image: 'profile picture',
    imageURL: 'URL of profile picture',
    username: 'Username',
    bio: 'Bio',
    email: 'Email',
    newPassword: 'New Password',
    sending: 'Sending...',
    demoUserMsg: 'Demo accounts can not be edited.',
  },
}