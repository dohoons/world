(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{115:function(e,n,t){"use strict";n.a=function(e){return e.history.push({pathname:"/login",state:{prevLocation:e.location.pathname,loginMsg:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4"}}),null}},116:function(e,n,t){"use strict";t.r(n),t.d(n,"fetch",function(){return u}),t.d(n,"reset",function(){return l}),t.d(n,"createComment",function(){return s}),t.d(n,"deleteComment",function(){return d});var a=t(168),r=t(80),o=t(23),c=t(9),i=t(163),u=function(e){return{type:"ARTICLE_PAGE_LOAD",payload:Promise.all([c.a.Articles.get({slug:e}),c.a.Comments.get({slug:e})])}},l=function(){return{type:"ARTICLE_PAGE_UNLOAD"}},s=function(e){var n=e.slug,t=e.comment;return{type:"CREATE_COMMENT",payload:c.a.Comments.create({slug:n,comment:t})}},d=function(e){return{type:"DELETE_COMMENT",commentId:e}},f={article:null,comments:[]};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;return Object(o.a)(e,function(t){switch(n.type){case"ARTICLE_PAGE_LOAD_SUCCESS":return t.article=Object(r.a)({},n.payload[0].data.article,{body:i.markdown.toHTML(n.payload[0].data.article.body)}),t.comments=n.payload[1].data.comments,void(t.loading=!1);case"ARTICLE_PAGE_UNLOAD":return t.article=null,void(t.comments=[]);case"CREATE_COMMENT_SUCCESS":return void(t.comments=[n.payload.data.comment].concat(Object(a.a)(e.comments)));case"DELETE_COMMENT":return void(t.comments=e.comments.filter(function(e){return e.id!==n.commentId}));default:return e}})}},117:function(e,n,t){"use strict";t.r(n),t.d(n,"fetch",function(){return i}),t.d(n,"reset",function(){return u});var a=t(80),r=t(23),o=t(9),c={undefined:"all",all:"all",feed:"feed",articles:"byAuthor",favorites:"favoritedBy"},i=function(e){var n=e.filter,t=e.param;return{type:"ARTICLE_LIST_LOAD",payload:o.a.Articles[c[n]](Object(a.a)({},t))}},u=function(){return{type:"ARTICLE_LIST_UNLOAD"}},l={loading:!1,articles:[],articlesCount:0};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;return Object(r.a)(e,function(t){switch(n.type){case"ARTICLE_LIST_LOAD_PENDING":return void(t.loading=!0);case"ARTICLE_LIST_LOAD_SUCCESS":var a=n.payload.data,r=a.articles,o=a.articlesCount;return t.loading=!1,t.articles=r,void(t.articlesCount=o);case"ARTICLE_LIST_LOAD_FAILURE":case"ARTICLE_LIST_UNLOAD":return t.loading=!1,t.articles=[],void(t.articlesCount=0);default:return e}})}},156:function(e,n,t){"use strict";t.r(n),t.d(n,"fetch",function(){return o}),t.d(n,"reset",function(){return c}),t.d(n,"follow",function(){return i}),t.d(n,"unfollow",function(){return u});var a=t(23),r=t(9),o=function(e){return{type:"PROFILE_LOAD",payload:r.a.Profile.get({username:e})}},c=function(){return{type:"PROFILE_UNLOAD"}},i=function(e){return{type:"PROFILE_FOLLOW",payload:r.a.Profile.follow({username:e})}},u=function(e){return{type:"PROFILE_UNFOLLOW",payload:r.a.Profile.unfollow({username:e})}},l={loading:!1,profile:{}};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;return Object(a.a)(e,function(t){switch(n.type){case"PROFILE_LOAD_PENDING":return void(t.loading=!0);case"PROFILE_LOAD_SUCCESS":return t.loading=!1,void(t.profile=n.payload.data.profile);case"PROFILE_LOAD_FAILURE":case"PROFILE_UNLOAD":return t.loading=!1,void(t.profile={});case"PROFILE_FOLLOW_SUCCESS":case"PROFILE_UNFOLLOW_SUCCESS":return void(t.profile=n.payload.data.profile);default:return e}})}},171:function(e,n,t){e.exports=t(378)},370:function(e,n,t){},378:function(e,n,t){"use strict";t.r(n);t(172);var a=t(0),r=t.n(a),o=t(77),c=t(160),i=t(481),u=t(76),l=t(36),s=t(17),d=t(54),f=t(116),m=t(117),p=t(156),g=Object(s.c)({auth:d.default,article:f.default,articleList:m.default,profile:p.default}),E=t(164),h=t(169),b=Object(h.a)({promiseTypeSuffixes:["PENDING","SUCCESS","FAILURE"]}),v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,O=Object(s.e)(g,v(Object(s.a)(E.a,b))),y=t(49),L=t(50),x=t(52),A=t(51),I=t(53),_=t(483),C=t(472),w=t(482),T=t(9),S=t(48),j=t.n(S),N=t(115),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=function(n){function t(e){var n;return Object(y.a)(this,t),n=Object(x.a)(this,Object(A.a)(t).call(this,e)),e.user||Object(N.a)(e),n}return Object(I.a)(t,n),Object(L.a)(t,[{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),t}(a.Component);return Object(l.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{authActions:Object(s.b)(d,e)}})(n)},P=(t(368),t(370),t(23)),U=t(471),k=t(112);function D(){var e=Object(k.a)(["\n  /* justify-content: space-between; */\n  background: #fff;\n  box-shadow: 0 5px 5px 0 rgba(0,0,0,.05);\n  position: relative;\n  z-index: 300;\n\n  .wrap {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    box-sizing: border-box;\n    max-width: 1100px;\n    margin: 0 auto;\n    padding: 12px 5%;\n  }\n\n  .logo {\n    margin: 0;\n    padding: 0;\n    font-weight: 700;\n    font-size: 24px;\n    color: #07c;\n\n    a {\n      text-decoration: none;\n      color: inherit;\n    }\n  }\n\n  .nav {\n    display: flex;\n    margin: 0 0 0 auto;\n    padding: 0;\n\n    li {\n      flex-shrink: 0;\n      list-style: none;\n    }\n\n    a {\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      height: 35px;\n      padding: 0 10px;\n      text-decoration: none;\n      font-weight: 400;\n      font-size: 15px;\n      color: #7f8a93;\n      border-radius: 4px;\n      transition: all .2s;\n\n      &:hover,\n      &:focus {\n        color: #374047;\n        background: #ebedee;\n      }\n    }\n\n    i {\n      margin-right: 4px;\n    }\n\n    .home {\n      color: #374047;\n    }\n\n    .logout {\n      i {\n        font-size: 17px;\n      }\n      .txt {\n        position: absolute;\n        left: -9999px;\n      }\n    }\n  }\n\n  .btn-wrap {\n    width: 46px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n    overflow: hidden;\n  }\n  \n  .btn-menu {\n    box-sizing: border-box;\n    display: block;\n    width: 46px;\n    height: 46px;\n    padding: 0;\n    color: #374047;\n    background: transparent;\n    border: 0;\n    position: absolute;\n    top: 0;\n    right: -46px;\n    cursor: pointer;\n\n    i {\n      font-size: 18px;\n    }\n\n    span {\n      position: absolute;\n      left: -9999px;\n    }\n  }\n\n  & + .dim {\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: rgba(0,0,0,.3);\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    left: -100%;\n    z-index: 200;\n  }\n\n  @media screen and (max-width: 768px) {\n    .wrap {\n      height: 46px;\n      padding: 8px 15px;\n    }\n\n    .logo {\n      font-size: 16px;\n    }\n\n    .nav {\n      margin-right: -5px;\n\n      a {\n        height: 30px;\n        padding: 0 5px;\n        font-size: 12px;\n      }\n    }\n  }\n\n  @media screen and (max-width: 640px) {\n    .btn-menu {\n      right: 0;\n      transition: all .4s;\n    }\n\n    .nav {\n      display: none;\n      flex-direction: column;\n      background: #fff;\n      box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);\n      position: absolute;\n      top: 46px;\n      right: 0;\n      z-index: 201;\n\n      li {\n        &:not(:first-child) {\n          border-top: 1px solid #ebedee;\n        }\n      }\n\n      a {\n        min-width: 150px;\n        height: 40px;\n        padding: 0 20px;\n        color: #374047;\n        border-radius: 0;\n      }\n    }\n\n    &.is-opened {\n      .btn-menu {\n        color: #07c;\n      }\n\n      .nav {\n        display: flex;\n      }\n\n      & + .dim {\n        opacity: 1;\n        left: 0;\n        transition: opacity .6s;\n      }\n    }\n  }\n"]);return D=function(){return e},e}var F=t(113).a.header(D()),G=function(e){function n(){var e,t;Object(y.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(x.a)(this,(e=Object(A.a)(n)).call.apply(e,[this].concat(r)))).state={menu:!1},t.toggleMenu=function(){t.setState(Object(P.a)(function(e){e.menu=!e.menu}))},t.menuClose=function(){t.state.menu&&t.setState(Object(P.a)(function(e){e.menu=!1}))},t}return Object(I.a)(n,e),Object(L.a)(n,[{key:"render",value:function(){var e=this.props,n=e.user,t=e.userInfo,a=this.state.menu;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{className:a?"is-opened":"",onClick:this.menuClose},r.a.createElement("div",{className:"wrap"},r.a.createElement("h1",{className:"logo"},r.a.createElement(U.a,{to:"/"},r.a.createElement("i",{className:"fas fa-globe"})," World")),r.a.createElement("div",{className:"btn-wrap"},r.a.createElement("button",{type:"button",className:"btn-menu",onClick:this.toggleMenu},r.a.createElement("i",{className:"fas fa-bars"})," ",r.a.createElement("span",null,"\uba54\ub274"))),r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(U.a,{to:"/",className:"home"},"Home")),n?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(U.a,{to:"/form"},r.a.createElement("i",{className:"far fa-edit"})," \uae00\ub4f1\ub85d")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/@".concat(t.username)},r.a.createElement("i",{className:"far fa-user"})," \ud504\ub85c\ud544")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/Logout"},"\ub85c\uadf8\uc544\uc6c3"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(U.a,{to:"/login"},"\ub85c\uadf8\uc778")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"/join"},"\ud68c\uc6d0\uac00\uc785")))))),r.a.createElement("div",{className:"dim",onClick:this.menuClose}))}}]),n}(a.Component),z=Object(l.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{}})(G),M=t(35),W=t.n(M),H=t(118),B=t.n(H),J=function(){return r.a.createElement("div",{className:"page-loading"},r.a.createElement(B.a,{showLoadingAnimation:!0,type:"text",ready:!1,rows:20,color:"#E0E0E0"},r.a.createElement("div",null)))},X=W()({loader:function(){return Promise.all([t.e(1),t.e(3)]).then(t.bind(null,480))},loading:J}),V=W()({loader:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,473))},loading:J}),q=W()({loader:function(){return t.e(5).then(t.bind(null,474))},loading:J}),K=W()({loader:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,475))},loading:J}),Q=W()({loader:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,476))},loading:J}),Y=W()({loader:function(){return t.e(8).then(t.bind(null,478))},loading:J}),Z=W()({loader:function(){return Promise.all([t.e(1),t.e(9)]).then(t.bind(null,479))},loading:J}),$=W()({loader:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,477))},loading:J}),ee=function(e){function n(e){var t;Object(y.a)(this,n),t=Object(x.a)(this,Object(A.a)(n).call(this,e));var a=j.a.get("jwt");return a&&(T.a.setToken(a),e.authActions.init()),t}return Object(I.a)(n,e),Object(L.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(_.a,null,r.a.createElement(C.a,{exact:!0,path:"/",component:X}),r.a.createElement(C.a,{path:"/articles/:page?",component:X}),r.a.createElement(C.a,{path:"/feed/:page?",component:R(X)}),r.a.createElement(C.a,{exact:!0,path:"/login",component:V}),r.a.createElement(C.a,{exact:!0,path:"/logout",component:q}),r.a.createElement(C.a,{exact:!0,path:"/join",component:K}),r.a.createElement(C.a,{path:"/article/:slug",component:Y}),r.a.createElement(C.a,{exact:!0,path:"/form",component:R(Q)}),r.a.createElement(C.a,{path:"/form/:slug",component:R(Q)}),r.a.createElement(C.a,{path:"/@:username/:filter?/:page?",component:Z}),r.a.createElement(C.a,{path:"/profile",component:R($)}),r.a.createElement(C.a,{component:X})))}}]),n}(a.Component),ne=Object(w.a)(Object(l.b)(function(e){return{user:e.auth.user}},function(e){return{authActions:Object(s.b)(d,e)}})(ee)),te=Object(u.a)({basename:"/world"});Object(o.render)(r.a.createElement(c.AppContainer,null,r.a.createElement(l.a,{store:O},r.a.createElement(i.a,{history:te},r.a.createElement(ne,null)))),document.getElementById("root"))},54:function(e,n,t){"use strict";t.r(n),t.d(n,"init",function(){return c}),t.d(n,"login",function(){return i}),t.d(n,"logout",function(){return u}),t.d(n,"register",function(){return l}),t.d(n,"update",function(){return s}),t.d(n,"resetAuth",function(){return d});var a=t(23),r=t(9),o=t(48),c=function(){return{type:"LOGIN",payload:r.a.Auth.current()}},i=function(e){var n=e.email,t=e.password;return{type:"LOGIN",payload:r.a.Auth.login({email:n,password:t})}},u=function(){return{type:"LOGOUT"}},l=function(e){var n=e.username,t=e.email,a=e.password;return{type:"REGISTER",payload:r.a.Auth.register({username:n,email:t,password:a})}},s=function(e){var n=e.user;return{type:"UPDATE",payload:r.a.Auth.save({user:n})}},d=function(){return{type:"RESET_AUTH"}},f={user:t.n(o).a.get("jwt")||null,userInfo:{},loading:!1,error:[]};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;return Object(a.a)(e,function(t){switch(n.type){case"LOGIN_PENDING":case"REGISTER_PENDING":case"UPDATE_PENDING":return void(t.loading=!0);case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":var a=n.payload.data.user.token;return r.a.setToken(a),t.user=a,t.userInfo=n.payload.data.user,t.loading=!1,void(t.error=[]);case"UPDATE_SUCCESS":return t.userInfo=n.payload.data.user,t.loading=!1,void(t.error=[]);case"LOGIN_FAILURE":case"REGISTER_FAILURE":case"UPDATE_FAILURE":var o=n.payload.response.data.errors,c=Object.keys(o).map(function(e){return"".concat(e," ").concat(o[e].join(", "))});return t.loading=!1,void(t.error=c);case"LOGOUT":return r.a.setToken(null),t.user=null,void(t.userInfo={});case"RESET_AUTH":return t.loading=!1,void(t.error=[]);default:return e}})}},9:function(e,n,t){"use strict";var a=t(109),r=t.n(a),o=t(48),c=t.n(o),i=r.a.create({baseURL:"https://conduit.productionready.io/api"}),u=r.a.CancelToken,l=function(e,n){return i.delete(e,n?{cancelToken:n.token}:{})},s=function(e,n){return i.get(e,n?{cancelToken:n.token}:{})},d=function(e,n,t){return i.put(e,n,t?{cancelToken:t.token}:{})},f=function(e,n,t){return i.post(e,n,t?{cancelToken:t.token}:{})},m={current:function(){return s("/user")},login:function(e){var n=e.email,t=e.password,a=e.source;return f("/users/login",{user:{email:n,password:t}},a)},register:function(e){var n=e.username,t=e.email,a=e.password,r=e.source;return f("/users",{user:{username:n,email:t,password:a}},r)},save:function(e){var n=e.user,t=e.source;return d("/user",{user:n},t)}},p=function(e,n){return"limit=".concat(e,"&offset=").concat(n?n*e:0)},g={all:function(e){var n=e.page,t=e.source;return s("/articles?".concat(p(10,n)),t)},feed:function(e){var n=e.page,t=e.source;return s("/articles/feed?".concat(p(10,n)),t)},byAuthor:function(e){var n=e.username,t=e.page,a=e.source;return s("/articles?author=".concat(encodeURIComponent(n),"&").concat(p(5,t)),a)},favoritedBy:function(e){var n=e.username,t=e.page,a=e.source;return s("/articles?favorited=".concat(encodeURIComponent(n),"&").concat(p(5,t)),a)},favorite:function(e){var n=e.slug,t=e.source;return f("/articles/".concat(n,"/favorite"),t)},unfavorite:function(e){var n=e.slug,t=e.source;return l("/articles/".concat(n,"/favorite"),t)},create:function(e){var n=e.article,t=e.source;return f("/articles",{article:n},t)},update:function(e){var n=e.article,t=e.source;return d("/articles/".concat(n.slug),{article:n},t)},delete:function(e){var n=e.slug,t=e.source;return l("/articles/".concat(n),t)},get:function(e){var n=e.slug,t=e.source;return s("/articles/".concat(n),t)}},E={get:function(e){var n=e.slug,t=e.source;return s("/articles/".concat(n,"/comments"),t)},create:function(e){var n=e.slug,t=e.comment,a=e.source;return f("/articles/".concat(n,"/comments"),{comment:t},a)},delete:function(e){var n=e.slug,t=e.commentId,a=e.source;return l("/articles/".concat(n,"/comments/").concat(t),a)}},h={get:function(e){var n=e.username,t=e.source;return s("/profiles/".concat(n),t)},follow:function(e){var n=e.username,t=e.source;return f("/profiles/".concat(n,"/follow"),t)},unfollow:function(e){var n=e.username,t=e.source;return l("/profiles/".concat(n,"/follow"),t)}};n.a={CancelToken:u,setToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(c.a.set("jwt",e),i.defaults.headers.common.Authorization="Token ".concat(e)):(c.a.remove("jwt",e),delete i.defaults.headers.common.Authorization)},Auth:m,Articles:g,Comments:E,Profile:h}}},[[171,12,11]]]);