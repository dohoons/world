(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{114:function(e,t,n){"use strict";t.a=function(e){return e.history.push({pathname:"/login",state:{prevLocation:e.location.pathname,loginMsg:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4"}}),null}},115:function(e,t,n){"use strict";n.r(t),n.d(t,"fetch",function(){return c}),n.d(t,"reset",function(){return l});var r=n(80),a=n(35),o=n(13),u={undefined:"all",articles:"byAuthor",favorites:"favoritedBy"},c=function(e){var t=e.filter,n=e.param;return{type:"ARTICLE_LIST_LOAD",payload:o.a.Articles[u[t]](Object(r.a)({},n))}},l=function(){return{type:"ARTICLE_LIST_UNLOAD"}},i={loading:!1,articles:[],articlesCount:0};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;return Object(a.a)(e,function(n){switch(t.type){case"ARTICLE_LIST_LOAD_PENDING":return void(n.loading=!0);case"ARTICLE_LIST_LOAD_SUCCESS":var r=t.payload.data,a=r.articles,o=r.articlesCount;return n.loading=!1,n.articles=a,void(n.articlesCount=o);case"ARTICLE_LIST_LOAD_FAILURE":case"ARTICLE_LIST_UNLOAD":return n.loading=!1,n.articles=[],void(n.articlesCount=0);default:return e}})}},13:function(e,t,n){"use strict";var r=n(157),a=n.n(r),o=n(48),u=n.n(o),c=a.a.create({baseURL:"https://conduit.productionready.io/api"}),l=c.CancelToken,i=function(e,t){return c.delete(e,t?{cancelToken:t.token}:{})},s=function(e,t){return c.get(e,t?{cancelToken:t.token}:{})},d=function(e,t,n){return c.put(e,t,n?{cancelToken:n.token}:{})},f=function(e,t,n){return c.post(e,t,n?{cancelToken:n.token}:{})},m={current:function(){return s("/user")},login:function(e){var t=e.email,n=e.password,r=e.source;return f("/users/login",{user:{email:t,password:n}},r)},register:function(e){var t=e.username,n=e.email,r=e.password,a=e.source;return f("/users",{user:{username:t,email:n,password:r}},a)},save:function(e){var t=e.user,n=e.source;return d("/user",{user:t},n)}},p=function(e,t){return"limit=".concat(e,"&offset=").concat(t?t*e:0)},E={all:function(e){var t=e.page,n=e.source;return s("/articles?".concat(p(10,t)),n)},byAuthor:function(e){var t=e.username,n=e.page,r=e.source;return s("/articles?author=".concat(encodeURIComponent(t),"&").concat(p(5,n)),r)},favoritedBy:function(e){var t=e.username,n=e.page,r=e.source;return s("/articles?favorited=".concat(encodeURIComponent(t),"&").concat(p(5,n)),r)},favorite:function(e){var t=e.slug,n=e.source;return f("/articles/".concat(t,"/favorite"),n)},unfavorite:function(e){var t=e.slug,n=e.source;return i("/articles/".concat(t,"/favorite"),n)},create:function(e){var t=e.article,n=e.source;return f("/articles",{article:t},n)},update:function(e){var t=e.article,n=e.source;return d("/articles/".concat(t.slug),{article:t},n)},delete:function(e){var t=e.slug,n=e.source;return i("/articles/".concat(t),n)},get:function(e){var t=e.slug,n=e.source;return s("/articles/".concat(t),n)}},O={get:function(e){var t=e.slug,n=e.source;return s("/articles/".concat(t,"/comments"),n)},create:function(e){var t=e.slug,n=e.comment,r=e.source;return f("/articles/".concat(t,"/comments"),{comment:n},r)},delete:function(e){var t=e.slug,n=e.commentId,r=e.source;return i("/articles/".concat(t,"/comments/").concat(n),r)}},v={get:function(e){var t=e.username,n=e.source;return s("/profiles/".concat(t),n)},follow:function(e){var t=e.username,n=e.source;return f("/profiles/".concat(t,"/follow"),n)},unfollow:function(e){var t=e.username,n=e.source;return i("/profiles/".concat(t,"/follow"),n)}};t.a={CancelToken:l,setToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(u.a.set("jwt",e),c.defaults.headers.common.Authorization="Token ".concat(e)):(u.a.remove("jwt",e),delete c.defaults.headers.common.Authorization)},Auth:m,Articles:E,Comments:O,Profile:v}},153:function(e,t,n){"use strict";n.r(t),n.d(t,"fetch",function(){return c}),n.d(t,"reset",function(){return l}),n.d(t,"del",function(){return i});var r=n(80),a=n(35),o=n(13),u=n(158),c=function(e){return{type:"ARTICLE_PAGE_LOAD",payload:Promise.all([o.a.Articles.get({slug:e}),o.a.Comments.get({slug:e})])}},l=function(){return{type:"ARTICLE_PAGE_UNLOAD"}},i=function(e){return{type:"DELETE_COMMENT",commentId:e}},s={article:null,comments:[]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return Object(a.a)(e,function(n){switch(t.type){case"ARTICLE_PAGE_LOAD_SUCCESS":return n.article=Object(r.a)({},t.payload[0].data.article,{body:u.markdown.toHTML(t.payload[0].data.article.body)}),n.comments=t.payload[1].data.comments,void(n.loading=!1);case"ARTICLE_PAGE_UNLOAD":return n.article=null,void(n.comments=[]);case"DELETE_COMMENT":return void(n.comments=e.comments.filter(function(e){return e.id!==t.commentId}));default:return e}})}},154:function(e,t,n){"use strict";n.r(t),n.d(t,"fetch",function(){return o}),n.d(t,"reset",function(){return u}),n.d(t,"follow",function(){return c}),n.d(t,"unfollow",function(){return l});var r=n(35),a=n(13),o=function(e){return{type:"PROFILE_LOAD",payload:a.a.Profile.get({username:e})}},u=function(){return{type:"PROFILE_UNLOAD"}},c=function(e){return{type:"PROFILE_FOLLOW",payload:a.a.Profile.follow({username:e})}},l=function(e){return{type:"PROFILE_UNFOLLOW",payload:a.a.Profile.unfollow({username:e})}},i={loading:!1,profile:{}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;return Object(r.a)(e,function(n){switch(t.type){case"PROFILE_LOAD_PENDING":return void(n.loading=!0);case"PROFILE_LOAD_SUCCESS":return n.loading=!1,void(n.profile=t.payload.data.profile);case"PROFILE_LOAD_FAILURE":case"PROFILE_UNLOAD":return n.loading=!1,void(n.profile={});case"PROFILE_FOLLOW_SUCCESS":case"PROFILE_UNFOLLOW_SUCCESS":return void(n.profile=t.payload.data.profile);default:return e}})}},165:function(e,t,n){e.exports=n(362)},362:function(e,t,n){"use strict";n.r(t);n(166);var r=n(1),a=n.n(r),o=n(77),u=n.n(o),c=n(387),l=n(76),i=n(34),s=n(21),d=n(61),f=n(153),m=n(115),p=n(154),E=Object(s.c)({auth:d.default,article:f.default,articleList:m.default,profile:p.default}),O=n(159),v=n(163),g=Object(v.a)({promiseTypeSuffixes:["PENDING","SUCCESS","FAILURE"]}),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,L=Object(s.e)(E,h(Object(s.a)(O.a,g))),I=n(49),_=n(50),b=n(52),y=n(51),A=n(53),T=n(385),j=n(377),C=n(386),S=n(13),R=n(48),w=n.n(R),U=n(114),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=function(t){function n(e){var t;return Object(I.a)(this,n),t=Object(b.a)(this,Object(y.a)(n).call(this,e)),e.user||Object(U.a)(e),t}return Object(A.a)(n,t),Object(_.a)(n,[{key:"render",value:function(){return a.a.createElement(e,this.props)}}]),n}(r.Component);return Object(i.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{authActions:Object(s.b)(d,e)}})(t)},P=n(376),D=n(112);function k(){var e=Object(D.a)(["\n  ul {\n    display: flex;\n    padding: 0;\n  }\n\n  li {\n    list-style: none;\n    margin-right: 30px;\n  }\n"]);return k=function(){return e},e}var F=n(113).a.header(k()),G=function(e){function t(){return Object(I.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props.user;return a.a.createElement(F,null,a.a.createElement("h1",null,"World"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(P.a,{to:"/"},"Home")),e?a.a.createElement(a.a.Fragment,null,a.a.createElement("li",null,a.a.createElement(P.a,{to:"/form"},"\uae00\ub4f1\ub85d")),a.a.createElement("li",null,a.a.createElement(P.a,{to:"/Logout"},"\ub85c\uadf8\uc544\uc6c3"))):a.a.createElement(a.a.Fragment,null,a.a.createElement("li",null,a.a.createElement(P.a,{to:"/login"},"\ub85c\uadf8\uc778")),a.a.createElement("li",null,a.a.createElement(P.a,{to:"/join"},"\ud68c\uc6d0\uac00\uc785")))))}}]),t}(r.Component),x=Object(i.b)(function(e){return{user:e.auth.user}},function(e){return{}})(G),M=n(38),W=n.n(M),H=function(){return a.a.createElement("div",null,"Loading...")},B=W()({loader:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,378))},loading:H}),z=W()({loader:function(){return n.e(3).then(n.bind(null,379))},loading:H}),J=W()({loader:function(){return n.e(4).then(n.bind(null,380))},loading:H}),X=W()({loader:function(){return n.e(5).then(n.bind(null,381))},loading:H}),V=W()({loader:function(){return n.e(6).then(n.bind(null,382))},loading:H}),q=W()({loader:function(){return n.e(7).then(n.bind(null,383))},loading:H}),K=W()({loader:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,384))},loading:H}),Q=function(e){function t(e){var n;Object(I.a)(this,t),n=Object(b.a)(this,Object(y.a)(t).call(this,e));var r=w.a.get("jwt");return r&&(S.a.setToken(r),e.authActions.init()),n}return Object(A.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,null),a.a.createElement("hr",null),a.a.createElement(T.a,null,a.a.createElement(j.a,{exact:!0,path:"/",component:B}),a.a.createElement(j.a,{path:"/articles/:page",component:B}),a.a.createElement(j.a,{exact:!0,path:"/login",component:z}),a.a.createElement(j.a,{exact:!0,path:"/logout",component:J}),a.a.createElement(j.a,{exact:!0,path:"/join",component:X}),a.a.createElement(j.a,{path:"/article/:slug",component:q}),a.a.createElement(j.a,{exact:!0,path:"/form",component:N(V)}),a.a.createElement(j.a,{path:"/form/:slug",component:N(V)}),a.a.createElement(j.a,{path:"/@:username/:filter?/:page?",component:K}),a.a.createElement(j.a,{component:B})))}}]),t}(r.Component),Y=Object(C.a)(Object(i.b)(function(e){return{user:e.auth.user}},function(e){return{authActions:Object(s.b)(d,e)}})(Q)),Z=Object(l.a)({basename:"/world"});u.a.render(a.a.createElement(i.a,{store:L},a.a.createElement(c.a,{history:Z},a.a.createElement(Y,null))),document.getElementById("root"))},61:function(e,t,n){"use strict";n.r(t),n.d(t,"init",function(){return u}),n.d(t,"login",function(){return c}),n.d(t,"logout",function(){return l}),n.d(t,"register",function(){return i}),n.d(t,"resetAuth",function(){return s});var r=n(35),a=n(13),o=n(48),u=function(){return{type:"LOGIN",payload:a.a.Auth.current()}},c=function(e){var t=e.email,n=e.password;return{type:"LOGIN",payload:a.a.Auth.login({email:t,password:n})}},l=function(){return{type:"LOGOUT"}},i=function(e){var t=e.username,n=e.email,r=e.password;return{type:"REGISTER",payload:a.a.Auth.register({username:t,email:n,password:r})}},s=function(){return{type:"RESET_AUTH"}},d={user:n.n(o).a.get("jwt")||null,userInfo:{},loading:!1,error:[]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return Object(r.a)(e,function(n){switch(t.type){case"LOGIN_PENDING":case"REGISTER_PENDING":return void(n.loading=!0);case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":var r=t.payload.data.user.token;return a.a.setToken(r),n.user=r,n.userInfo=t.payload.data.user,n.loading=!1,void(n.error=[]);case"LOGIN_FAILURE":case"REGISTER_FAILURE":var o=t.payload.response.data.errors,u=Object.keys(o).map(function(e){return"".concat(e," ").concat(o[e].join(", "))});return n.loading=!1,void(n.error=u);case"LOGOUT":return a.a.setToken(null),n.user=null,void(n.userInfo={});case"RESET_AUTH":return n.loading=!1,void(n.error=[]);default:return e}})}}},[[165,10,9]]]);