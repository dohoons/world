(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{115:function(n,e,t){"use strict";e.a=function(n){return n.history.push({pathname:"/login",state:{prevLocation:n.location.pathname,loginMsg:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4"}}),null}},116:function(n,e,t){"use strict";t.r(e),t.d(e,"fetch",function(){return u}),t.d(e,"reset",function(){return l}),t.d(e,"createComment",function(){return s}),t.d(e,"deleteComment",function(){return d});var a=t(163),r=t(80),o=t(23),c=t(9),i=t(158),u=function(n){return{type:"ARTICLE_PAGE_LOAD",payload:Promise.all([c.a.Articles.get({slug:n}),c.a.Comments.get({slug:n})])}},l=function(){return{type:"ARTICLE_PAGE_UNLOAD"}},s=function(n){var e=n.slug,t=n.comment;return{type:"CREATE_COMMENT",payload:c.a.Comments.create({slug:e,comment:t})}},d=function(n){return{type:"DELETE_COMMENT",commentId:n}},f={article:null,comments:[]};e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;return Object(o.a)(n,function(t){switch(e.type){case"ARTICLE_PAGE_LOAD_SUCCESS":return t.article=Object(r.a)({},e.payload[0].data.article,{body:i.markdown.toHTML(e.payload[0].data.article.body)}),t.comments=e.payload[1].data.comments,void(t.loading=!1);case"ARTICLE_PAGE_UNLOAD":return t.article=null,void(t.comments=[]);case"CREATE_COMMENT_SUCCESS":return void(t.comments=[e.payload.data.comment].concat(Object(a.a)(n.comments)));case"DELETE_COMMENT":return void(t.comments=n.comments.filter(function(n){return n.id!==e.commentId}));default:return n}})}},117:function(n,e,t){"use strict";t.r(e),t.d(e,"fetch",function(){return i}),t.d(e,"reset",function(){return u});var a=t(80),r=t(23),o=t(9),c={undefined:"all",all:"all",feed:"feed",articles:"byAuthor",favorites:"favoritedBy"},i=function(n){var e=n.filter,t=n.param;return{type:"ARTICLE_LIST_LOAD",payload:o.a.Articles[c[e]](Object(a.a)({},t))}},u=function(){return{type:"ARTICLE_LIST_UNLOAD"}},l={loading:!1,articles:[],articlesCount:0};e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;return Object(r.a)(n,function(t){switch(e.type){case"ARTICLE_LIST_LOAD_PENDING":return void(t.loading=!0);case"ARTICLE_LIST_LOAD_SUCCESS":var a=e.payload.data,r=a.articles,o=a.articlesCount;return t.loading=!1,t.articles=r,void(t.articlesCount=o);case"ARTICLE_LIST_LOAD_FAILURE":case"ARTICLE_LIST_UNLOAD":return t.loading=!1,t.articles=[],void(t.articlesCount=0);default:return n}})}},155:function(n,e,t){"use strict";t.r(e),t.d(e,"fetch",function(){return o}),t.d(e,"reset",function(){return c}),t.d(e,"follow",function(){return i}),t.d(e,"unfollow",function(){return u});var a=t(23),r=t(9),o=function(n){return{type:"PROFILE_LOAD",payload:r.a.Profile.get({username:n})}},c=function(){return{type:"PROFILE_UNLOAD"}},i=function(n){return{type:"PROFILE_FOLLOW",payload:r.a.Profile.follow({username:n})}},u=function(n){return{type:"PROFILE_UNFOLLOW",payload:r.a.Profile.unfollow({username:n})}},l={loading:!1,profile:{}};e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;return Object(a.a)(n,function(t){switch(e.type){case"PROFILE_LOAD_PENDING":return void(t.loading=!0);case"PROFILE_LOAD_SUCCESS":return t.loading=!1,void(t.profile=e.payload.data.profile);case"PROFILE_LOAD_FAILURE":case"PROFILE_UNLOAD":return t.loading=!1,void(t.profile={});case"PROFILE_FOLLOW_SUCCESS":case"PROFILE_UNFOLLOW_SUCCESS":return void(t.profile=e.payload.data.profile);default:return n}})}},166:function(n,e,t){n.exports=t(366)},362:function(n,e,t){},366:function(n,e,t){"use strict";t.r(e);t(167);var a=t(0),r=t.n(a),o=t(77),c=t.n(o),i=t(471),u=t(76),l=t(36),s=t(17),d=t(54),f=t(116),m=t(117),p=t(155),g=Object(s.c)({auth:d.default,article:f.default,articleList:m.default,profile:p.default}),E=t(159),h=t(164),b=Object(h.a)({promiseTypeSuffixes:["PENDING","SUCCESS","FAILURE"]}),v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,O=Object(s.e)(g,v(Object(s.a)(E.a,b))),L=t(49),y=t(50),x=t(52),I=t(51),_=t(53),A=t(468),C=t(460),T=t(469),w=t(9),S=t(48),j=t.n(S),N=t(115),R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=function(e){function t(n){var e;return Object(L.a)(this,t),e=Object(x.a)(this,Object(I.a)(t).call(this,n)),n.user||Object(N.a)(n),e}return Object(_.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(n,this.props)}}]),t}(a.Component);return Object(l.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo}},function(n){return{authActions:Object(s.b)(d,n)}})(e)},P=(t(362),t(23)),U=t(459),k=t(112);function D(){var n=Object(k.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  /* justify-content: space-between; */\n  align-items: center;\n  padding: 12px 5%;\n  background: #fff;\n  box-shadow: 0 5px 5px 0 rgba(0,0,0,.05);\n  position: relative;\n  z-index: 300;\n\n  .logo {\n    margin: 0;\n    padding: 0;\n    font-weight: 700;\n    font-size: 24px;\n    color: #07c;\n\n    a {\n      text-decoration: none;\n      color: inherit;\n    }\n  }\n\n  .nav {\n    display: flex;\n    margin: 0 0 0 auto;\n    padding: 0;\n\n    li {\n      flex-shrink: 0;\n      list-style: none;\n    }\n\n    a {\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      height: 35px;\n      padding: 0 10px;\n      text-decoration: none;\n      font-weight: 400;\n      font-size: 15px;\n      color: #7f8a93;\n      border-radius: 4px;\n      transition: all .2s;\n\n      &:hover,\n      &:focus {\n        color: #374047;\n        background: #ebedee;\n      }\n    }\n\n    i {\n      margin-right: 4px;\n    }\n\n    .home {\n      color: #374047;\n    }\n\n    .logout {\n      i {\n        font-size: 17px;\n      }\n      .txt {\n        position: absolute;\n        left: -9999px;\n      }\n    }\n  }\n\n  .btn-wrap {\n    width: 46px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n    overflow: hidden;\n  }\n  \n  .btn-menu {\n    box-sizing: border-box;\n    display: block;\n    width: 46px;\n    height: 46px;\n    padding: 0;\n    color: #374047;\n    background: transparent;\n    border: 0;\n    position: absolute;\n    top: 0;\n    right: -46px;\n    cursor: pointer;\n\n    i {\n      font-size: 18px;\n    }\n\n    span {\n      position: absolute;\n      left: -9999px;\n    }\n  }\n\n  & + .dim {\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: rgba(0,0,0,.3);\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    left: -100%;\n    z-index: 200;\n  }\n\n  @media screen and (max-width: 768px) {\n    height: 46px;\n    padding: 8px 15px;\n\n    .logo {\n      font-size: 16px;\n    }\n\n    .nav {\n      margin-right: -5px;\n\n      a {\n        height: 30px;\n        padding: 0 5px;\n        font-size: 12px;\n      }\n    }\n  }\n\n  @media screen and (max-width: 640px) {\n    .btn-menu {\n      right: 0;\n      transition: all .4s;\n    }\n\n    .nav {\n      display: none;\n      flex-direction: column;\n      background: #fff;\n      box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);\n      position: absolute;\n      top: 46px;\n      right: 0;\n      z-index: 201;\n\n      li {\n        &:not(:first-child) {\n          border-top: 1px solid #ebedee;\n        }\n      }\n\n      a {\n        min-width: 150px;\n        height: 40px;\n        padding: 0 20px;\n        color: #374047;\n        border-radius: 0;\n      }\n    }\n\n    &.is-opened {\n      .btn-menu {\n        color: #07c;\n      }\n\n      .nav {\n        display: flex;\n      }\n\n      & + .dim {\n        opacity: 1;\n        left: 0;\n        transition: opacity .6s;\n      }\n    }\n  }\n"]);return D=function(){return n},n}var F=t(113).a.header(D()),G=function(n){function e(){var n,t;Object(L.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(x.a)(this,(n=Object(I.a)(e)).call.apply(n,[this].concat(r)))).state={menu:!1},t.toggleMenu=function(){t.setState(Object(P.a)(function(n){n.menu=!n.menu}))},t.menuClose=function(){t.state.menu&&t.setState(Object(P.a)(function(n){n.menu=!1}))},t}return Object(_.a)(e,n),Object(y.a)(e,[{key:"render",value:function(){var n=this.props,e=n.user,t=n.userInfo,a=this.state.menu;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{className:a?"is-opened":"",onClick:this.menuClose},r.a.createElement("h1",{className:"logo"},r.a.createElement(U.a,{to:"/"},r.a.createElement("i",{className:"fas fa-globe"})," World")),r.a.createElement("div",{className:"btn-wrap"},r.a.createElement("button",{type:"button",className:"btn-menu",onClick:this.toggleMenu},r.a.createElement("i",{className:"fas fa-bars"})," ",r.a.createElement("span",null,"\uba54\ub274"))),r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(U.a,{to:"/",className:"home"},"Home")),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(U.a,{to:"/form"},r.a.createElement("i",{className:"far fa-edit"})," \uae00\ub4f1\ub85d")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/@".concat(t.username)},r.a.createElement("i",{className:"far fa-user"})," \ud504\ub85c\ud544")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/Logout"},"\ub85c\uadf8\uc544\uc6c3"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(U.a,{to:"/login"},"\ub85c\uadf8\uc778")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/join"},"\ud68c\uc6d0\uac00\uc785"))))),r.a.createElement("div",{className:"dim",onClick:this.menuClose}))}}]),e}(a.Component),z=Object(l.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo}},function(n){return{}})(G),M=t(35),W=t.n(M),H=function(){return r.a.createElement("div",null,"Loading...")},B=W()({loader:function(){return Promise.all([t.e(1),t.e(3)]).then(t.bind(null,470))},loading:H}),J=W()({loader:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,461))},loading:H}),X=W()({loader:function(){return t.e(5).then(t.bind(null,462))},loading:H}),V=W()({loader:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,463))},loading:H}),q=W()({loader:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,464))},loading:H}),K=W()({loader:function(){return t.e(8).then(t.bind(null,466))},loading:H}),Q=W()({loader:function(){return Promise.all([t.e(1),t.e(9)]).then(t.bind(null,467))},loading:H}),Y=W()({loader:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,465))},loading:H}),Z=function(n){function e(n){var t;Object(L.a)(this,e),t=Object(x.a)(this,Object(I.a)(e).call(this,n));var a=j.a.get("jwt");return a&&(w.a.setToken(a),n.authActions.init()),t}return Object(_.a)(e,n),Object(y.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(A.a,null,r.a.createElement(C.a,{exact:!0,path:"/",component:B}),r.a.createElement(C.a,{path:"/articles/:page?",component:B}),r.a.createElement(C.a,{path:"/feed/:page?",component:R(B)}),r.a.createElement(C.a,{exact:!0,path:"/login",component:J}),r.a.createElement(C.a,{exact:!0,path:"/logout",component:X}),r.a.createElement(C.a,{exact:!0,path:"/join",component:V}),r.a.createElement(C.a,{path:"/article/:slug",component:K}),r.a.createElement(C.a,{exact:!0,path:"/form",component:R(q)}),r.a.createElement(C.a,{path:"/form/:slug",component:R(q)}),r.a.createElement(C.a,{path:"/@:username/:filter?/:page?",component:Q}),r.a.createElement(C.a,{path:"/profile",component:R(Y)}),r.a.createElement(C.a,{component:B})))}}]),e}(a.Component),$=Object(T.a)(Object(l.b)(function(n){return{user:n.auth.user}},function(n){return{authActions:Object(s.b)(d,n)}})(Z)),nn=Object(u.a)({basename:"/world"});c.a.render(r.a.createElement(l.a,{store:O},r.a.createElement(i.a,{history:nn},r.a.createElement($,null))),document.getElementById("root"))},54:function(n,e,t){"use strict";t.r(e),t.d(e,"init",function(){return c}),t.d(e,"login",function(){return i}),t.d(e,"logout",function(){return u}),t.d(e,"register",function(){return l}),t.d(e,"update",function(){return s}),t.d(e,"resetAuth",function(){return d});var a=t(23),r=t(9),o=t(48),c=function(){return{type:"LOGIN",payload:r.a.Auth.current()}},i=function(n){var e=n.email,t=n.password;return{type:"LOGIN",payload:r.a.Auth.login({email:e,password:t})}},u=function(){return{type:"LOGOUT"}},l=function(n){var e=n.username,t=n.email,a=n.password;return{type:"REGISTER",payload:r.a.Auth.register({username:e,email:t,password:a})}},s=function(n){var e=n.user;return{type:"UPDATE",payload:r.a.Auth.save({user:e})}},d=function(){return{type:"RESET_AUTH"}},f={user:t.n(o).a.get("jwt")||null,userInfo:{},loading:!1,error:[]};e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;return Object(a.a)(n,function(t){switch(e.type){case"LOGIN_PENDING":case"REGISTER_PENDING":case"UPDATE_PENDING":return void(t.loading=!0);case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":var a=e.payload.data.user.token;return r.a.setToken(a),t.user=a,t.userInfo=e.payload.data.user,t.loading=!1,void(t.error=[]);case"UPDATE_SUCCESS":return t.userInfo=e.payload.data.user,t.loading=!1,void(t.error=[]);case"LOGIN_FAILURE":case"REGISTER_FAILURE":case"UPDATE_FAILURE":var o=e.payload.response.data.errors,c=Object.keys(o).map(function(n){return"".concat(n," ").concat(o[n].join(", "))});return t.loading=!1,void(t.error=c);case"LOGOUT":return r.a.setToken(null),t.user=null,void(t.userInfo={});case"RESET_AUTH":return t.loading=!1,void(t.error=[]);default:return n}})}},9:function(n,e,t){"use strict";var a=t(109),r=t.n(a),o=t(48),c=t.n(o),i=r.a.create({baseURL:"https://conduit.productionready.io/api"}),u=r.a.CancelToken,l=function(n,e){return i.delete(n,e?{cancelToken:e.token}:{})},s=function(n,e){return i.get(n,e?{cancelToken:e.token}:{})},d=function(n,e,t){return i.put(n,e,t?{cancelToken:t.token}:{})},f=function(n,e,t){return i.post(n,e,t?{cancelToken:t.token}:{})},m={current:function(){return s("/user")},login:function(n){var e=n.email,t=n.password,a=n.source;return f("/users/login",{user:{email:e,password:t}},a)},register:function(n){var e=n.username,t=n.email,a=n.password,r=n.source;return f("/users",{user:{username:e,email:t,password:a}},r)},save:function(n){var e=n.user,t=n.source;return d("/user",{user:e},t)}},p=function(n,e){return"limit=".concat(n,"&offset=").concat(e?e*n:0)},g={all:function(n){var e=n.page,t=n.source;return s("/articles?".concat(p(10,e)),t)},feed:function(n){var e=n.page,t=n.source;return s("/articles/feed?".concat(p(10,e)),t)},byAuthor:function(n){var e=n.username,t=n.page,a=n.source;return s("/articles?author=".concat(encodeURIComponent(e),"&").concat(p(5,t)),a)},favoritedBy:function(n){var e=n.username,t=n.page,a=n.source;return s("/articles?favorited=".concat(encodeURIComponent(e),"&").concat(p(5,t)),a)},favorite:function(n){var e=n.slug,t=n.source;return f("/articles/".concat(e,"/favorite"),t)},unfavorite:function(n){var e=n.slug,t=n.source;return l("/articles/".concat(e,"/favorite"),t)},create:function(n){var e=n.article,t=n.source;return f("/articles",{article:e},t)},update:function(n){var e=n.article,t=n.source;return d("/articles/".concat(e.slug),{article:e},t)},delete:function(n){var e=n.slug,t=n.source;return l("/articles/".concat(e),t)},get:function(n){var e=n.slug,t=n.source;return s("/articles/".concat(e),t)}},E={get:function(n){var e=n.slug,t=n.source;return s("/articles/".concat(e,"/comments"),t)},create:function(n){var e=n.slug,t=n.comment,a=n.source;return f("/articles/".concat(e,"/comments"),{comment:t},a)},delete:function(n){var e=n.slug,t=n.commentId,a=n.source;return l("/articles/".concat(e,"/comments/").concat(t),a)}},h={get:function(n){var e=n.username,t=n.source;return s("/profiles/".concat(e),t)},follow:function(n){var e=n.username,t=n.source;return f("/profiles/".concat(e,"/follow"),t)},unfollow:function(n){var e=n.username,t=n.source;return l("/profiles/".concat(e,"/follow"),t)}};e.a={CancelToken:u,setToken:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;n?(c.a.set("jwt",n),i.defaults.headers.common.Authorization="Token ".concat(n)):(c.a.remove("jwt",n),delete i.defaults.headers.common.Authorization)},Auth:m,Articles:g,Comments:E,Profile:h}}},[[166,12,11]]]);