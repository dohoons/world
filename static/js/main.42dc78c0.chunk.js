(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,n,t){"use strict";n.a=function(e){return e.history.push({pathname:"/login",state:{prevLocation:e.location.pathname,loginMsg:!0}}),null}},140:function(e,n,t){"use strict";t.r(n),t.d(n,"fetch",function(){return l}),t.d(n,"reset",function(){return s}),t.d(n,"createComment",function(){return u}),t.d(n,"deleteComment",function(){return d});var a=t(143),o=t(25),r=t(18),i=t(7),c=t(199),l=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:"ARTICLE_PAGE_LOAD",payload:Promise.all([i.a.Articles.get({slug:e,requestId:"ARTICLE_PAGE_LOAD",config:{cache:n}}),i.a.Comments.get({slug:e,requestId:"ARTICLE_PAGE_LOAD",config:{cache:n}})])}},s=function(){return{type:"ARTICLE_PAGE_UNLOAD"}},u=function(e){var n=e.slug,t=e.comment;return{type:"CREATE_COMMENT",payload:i.a.Comments.create({slug:n,comment:t})}},d=function(e){return{type:"DELETE_COMMENT",commentId:e}},f={article:null,comments:[]};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;return Object(r.a)(e,function(t){switch(n.type){case"ARTICLE_PAGE_LOAD_SUCCESS":return t.article=Object(o.a)({},n.payload[0].data.article,{body:c.markdown.toHTML(n.payload[0].data.article.body)}),t.comments=n.payload[1].data.comments,void(t.loading=!1);case"ARTICLE_PAGE_UNLOAD":return i.a.axios.cancel("ARTICLE_PAGE_LOAD"),t.article=null,void(t.comments=[]);case"CREATE_COMMENT_SUCCESS":return void(t.comments=[n.payload.data.comment].concat(Object(a.a)(e.comments)));case"DELETE_COMMENT":return void(t.comments=e.comments.filter(function(e){return e.id!==n.commentId}));default:return e}})}},141:function(e,n,t){"use strict";t.r(n),t.d(n,"fetch",function(){return c}),t.d(n,"reset",function(){return l});var a=t(25),o=t(18),r=t(7),i={undefined:"all",all:"all",feed:"feed",articles:"byAuthor",favorites:"favoritedBy",tag:"byTag"},c=function(e){var n=e.filter,t=e.param,o=e.useCache,c=void 0!==o&&o;return{type:"ARTICLE_LIST_LOAD",payload:r.a.Articles[i[n]](Object(a.a)({},t,{requestId:"ARTICLE_LIST_LOAD",config:{cache:c}}))}},l=function(){return{type:"ARTICLE_LIST_UNLOAD"}},s={loading:!1,articles:[],articlesCount:0};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1?arguments[1]:void 0;return Object(o.a)(e,function(t){switch(n.type){case"ARTICLE_LIST_LOAD_PENDING":return void(t.loading=!0);case"ARTICLE_LIST_LOAD_SUCCESS":var a=n.payload.data,o=a.articles,i=a.articlesCount;return t.loading=!1,t.articles=o,void(t.articlesCount=i);case"ARTICLE_LIST_LOAD_FAILURE":return t.loading=!1,t.articles=[],void(t.articlesCount=0);case"ARTICLE_LIST_UNLOAD":return r.a.axios.cancel("ARTICLE_LIST_LOAD"),t.loading=!1,t.articles=[],void(t.articlesCount=0);default:return e}})}},184:function(e,n,t){"use strict";t.r(n),t.d(n,"fetch",function(){return r}),t.d(n,"reset",function(){return i}),t.d(n,"follow",function(){return c}),t.d(n,"unfollow",function(){return l});var a=t(18),o=t(7),r=function(e){return{type:"PROFILE_LOAD",payload:o.a.Profile.get({username:e,requestId:"PROFILE_LOAD"})}},i=function(){return{type:"PROFILE_UNLOAD"}},c=function(e){return{type:"PROFILE_FOLLOW",payload:o.a.Profile.follow({username:e})}},l=function(e){return{type:"PROFILE_UNFOLLOW",payload:o.a.Profile.unfollow({username:e})}},s={loading:!1,profile:{}};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1?arguments[1]:void 0;return Object(a.a)(e,function(t){switch(n.type){case"PROFILE_LOAD_PENDING":return void(t.loading=!0);case"PROFILE_LOAD_SUCCESS":return t.loading=!1,void(t.profile=n.payload.data.profile);case"PROFILE_LOAD_FAILURE":return t.loading=!1,void(t.profile={});case"PROFILE_UNLOAD":return o.a.axios.cancel("PROFILE_LOAD"),t.loading=!1,void(t.profile={});case"PROFILE_FOLLOW_SUCCESS":case"PROFILE_UNFOLLOW_SUCCESS":return void(t.profile=n.payload.data.profile);default:return e}})}},185:function(e,n,t){"use strict";t.r(n),t.d(n,"fetch",function(){return r}),t.d(n,"reset",function(){return i});var a=t(18),o=t(7),r=function(){return{type:"TAGS_LOAD",payload:o.a.Tags.getAll()}},i=function(){return{type:"TAGS_UNLOAD"}},c={loading:!1,tags:[]};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;return Object(a.a)(e,function(t){switch(n.type){case"TAGS_LOAD_PENDING":return void(t.loading=!0);case"TAGS_LOAD_SUCCESS":return t.loading=!1,void(t.tags=n.payload.data.tags);case"TAGS_LOAD_FAILURE":case"TAGS_UNLOAD":return t.loading=!1,void(t.tags={});default:return e}})}},207:function(e,n,t){e.exports=t(34)},34:function(e,n,t){"use strict";t.r(n);t(208);var a=t(0),o=t.n(a),r=t(55),i=t(190),c=t(556),l=t(129),s=t(95),u=t(52),d=t(138),f=t(193),m=t(49),g=t(134),p={en:{common:{siteName:"World",modify:"Modify",delete:"Delete",list:"List",write:"Write",cancel:"Cancel"},validate:{emptyUsername:"Please enter your username.",lengthUsername:"Please enter a user name between 1 and 20 characters.",emptyEmail:"Please enter your email address.",notEmail:"Email format is incorrect.",emptyPassword:"Please enter a password.",lengthPassword:"Please enter at least 8 characters.",emptyTitle:"Please enter the subject.",emptyDescription:"Please enter a description.",emptyBody:"Please enter your article."},components:{like:{actionText:"Like"},comment:{heading:"Comments",loginMsg:"<1>Sign in</1> to leave a comment.",confirmDelete:"Are you sure you want to delete this comment?",errorDelete:"Deletion failed.",placeHolder:"Write a comment..",submit:"Post Comment",noItem:"No comments.",errorWrite:"Failed to send."},pagination:{first:"First",prev:"Prev",next:"Next",last:"Last"},profileInfo:{follow:"Follow",unfollow:"Follow",profile:"Edit Profile"}},header:{home:"Home",write:"Write",profile:"Profile",logout:"Sign out",login:"Sign in",join:"Sign up"},footer:{heading:"Footer"},home:{myfeed:"My Feed",globalfeed:"Global Feed",needLogin:"Sign-in required",loginMsg:"You can view it after sign-in.",hotTag:"Popular Tags"},article:{confirmDelete:"Are you sure you want to delete?",canAuthorDelete:"You can only delete author.",errorDelete:"Deletion failed."},form:{headingWrite:"New Article",headingModify:"Edit Article",title:"Subject",description:"Description",body:"Content",tag:"Tag",sending:"Sending...",errorModifyAuth:"You do not have edit rights.",errorWrite:"Failed to send."},join:{heading:"Sign up",username:"Username",email:"Email",password:"Password",sending:"Sending...",join:"Sign up",infoDesc:"Already have an account? Please <1>sign in.</1>"},login:{heading:"Sign in",email:"Email",password:"Password",sending:"Sending...",login:"Sign in",infoDesc:"Do you need an account? Please <1>Sign up.</1>",invalidLoginInfo:"Email or password is incorrect.",loginFail:"Login failed.",needLogin:"Login is required."},profile:{myArticles:"My Articles",favoritedArticles:"Favorited Articles"},profileEdit:{heading:"Edit Profile",image:"profile picture",imageURL:"URL of profile picture",username:"Username",bio:"Bio",email:"Email",newPassword:"New Password",sending:"Sending..."}},ko:{common:{siteName:"World",modify:"\uc218\uc815",delete:"\uc0ad\uc81c",list:"\ubaa9\ub85d",write:"\ub4f1\ub85d",cancel:"\ucde8\uc18c"},validate:{emptyUsername:"\uc0ac\uc6a9\uc790 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",lengthUsername:"\uc0ac\uc6a9\uc790 \uc774\ub984\uc740 1\uc790 \uc774\uc0c1 20\uc790 \uc774\ud558\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",emptyEmail:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",notEmail:"\uc774\uba54\uc77c \ud615\uc2dd\uc774 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",emptyPassword:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",lengthPassword:"\ube44\ubc00\ubc88\ud638\ub294 8\uc790 \uc774\uc0c1\uc73c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",emptyTitle:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",emptyDescription:"\uc124\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",emptyBody:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."},components:{like:{actionText:"\uc88b\uc544\uc694"},comment:{heading:"\ub313\uae00",loginMsg:"\ub313\uae00\uc744 \ub0a8\uae30\ub824\uba74 <1>\ub85c\uadf8\uc778</1>\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",confirmDelete:"\ub313\uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",errorDelete:"\uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",placeHolder:"\ub313\uae00\uc744 \uc785\ub825\ud558\uc138\uc694..",submit:"\ub4f1\ub85d",noItem:"\ub4f1\ub85d\ub41c \ub313\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",errorWrite:"\ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."},pagination:{first:"\ucc98\uc74c",prev:"\uc774\uc804",next:"\ub2e4\uc74c",last:"\ub9c8\uc9c0\ub9c9"},profileInfo:{follow:"Follow",unfollow:"Follow",profile:"\ud504\ub85c\ud544 \uc218\uc815"}},header:{menu:"\uba54\ub274",home:"Home",write:"\uae00\ub4f1\ub85d",profile:"\ud504\ub85c\ud544",logout:"\ub85c\uadf8\uc544\uc6c3",login:"\ub85c\uadf8\uc778",join:"\ud68c\uc6d0\uac00\uc785"},footer:{heading:"\ud478\ud130"},home:{myfeed:"\ub0b4 \ub2f4\ubcbc\ub77d",globalfeed:"\uc804\uccb4 \uae00\ubaa9\ub85d",needLogin:"\ub85c\uadf8\uc778 \ud544\uc694",loginMsg:"\ub0b4 \ub2f4\ubcbc\ub77d\uc740 \ub85c\uadf8\uc778 \ud6c4\uc5d0 \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",hotTag:"\uc778\uae30 \ud0dc\uadf8"},article:{confirmDelete:"\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",canAuthorDelete:"\uc791\uc131\uc790\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",errorDelete:"\uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."},form:{headingWrite:"\uae00 \ub4f1\ub85d\ud558\uae30",headingModify:"\uae00 \uc218\uc815\ud558\uae30",title:"\uc81c\ubaa9",description:"\uc124\uba85",body:"\ub0b4\uc6a9",tag:"\ud0dc\uadf8",sending:"\ub4f1\ub85d \uc911...",errorModifyAuth:"\uc218\uc815 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",errorWrite:"\ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."},join:{heading:"\ud68c\uc6d0\uac00\uc785",username:"\uc0ac\uc6a9\uc790 \uc774\ub984",email:"\uc774\uba54\uc77c",password:"\ube44\ubc00\ubc88\ud638",sending:"\ud68c\uc6d0\uac00\uc785 \uc911...",join:"\ud68c\uc6d0\uac00\uc785",infoDesc:"\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694? <1>\ub85c\uadf8\uc778</1>\uc744 \ud574\uc8fc\uc138\uc694."},login:{heading:"\ub85c\uadf8\uc778",email:"\uc774\uba54\uc77c",password:"\ube44\ubc00\ubc88\ud638",sending:"\ub85c\uadf8\uc778 \uc911...",login:"\ub85c\uadf8\uc778",infoDesc:"\ucc98\uc74c \uc624\uc168\ub098\uc694? <1>\ud68c\uc6d0\uac00\uc785</1>\uc744 \ud574\uc8fc\uc138\uc694.",invalidLoginInfo:"\uc774\uba54\uc77c \ub610\ub294 \ud328\uc2a4\uc6cc\ub4dc\uac00 \ud2c0\ub838\uc2b5\ub2c8\ub2e4.",loginFail:"\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",needLogin:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."},profile:{myArticles:"\ub4f1\ub85d \ud55c \uae00",favoritedArticles:"\uc88b\uc544\ud558\ub294 \uae00"},profileEdit:{heading:"\ud504\ub85c\ud544 \uc218\uc815",image:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0",imageURL:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0 URL",username:"\uc0ac\uc6a9\uc790 \uc774\ub984",bio:"\uc18c\uac1c",email:"\uc774\uba54\uc77c",newPassword:"\uc0c8 \ube44\ubc00\ubc88\ud638",sending:"\uc800\uc7a5\ud558\ub294 \uc911..."}}},h=t(26),E=t(70),b=t(140),v=t(141),O=t(184),y=t(185),L=Object(h.c)({auth:E.default,article:b.default,articleList:v.default,profile:O.default,tags:y.default}),A=t(200),w=t(205),x=Object(w.a)({promiseTypeSuffixes:["PENDING","SUCCESS","FAILURE"]}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,P=Object(h.e)(L,I(Object(h.a)(A.a,x))),_=t(46),j=t(47),S=t(50),C=t(48),T=t(51),D=t(555),N=t(547),R=t(557),U=t(69),k=t(136),F=t(7),G=t(67),M=t.n(G),W=t(97),z=(t(439),t(441),t(18)),H=t(546),B=t(82),q=t(83);function Y(){var e=Object(B.a)(["\n  /* justify-content: space-between; */\n  background: #fff;\n  box-shadow: 0 5px 5px 0 rgba(0,0,0,.05);\n  position: relative;\n  z-index: 300;\n\n  .wrap {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    box-sizing: border-box;\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 12px 5%;\n  }\n\n  .logo {\n    margin: 0;\n    padding: 0;\n    font-weight: 700;\n    font-size: 24px;\n    color: #07c;\n\n    a {\n      text-decoration: none;\n      color: inherit;\n    }\n  }\n\n  .nav {\n    display: flex;\n    margin: 0 0 0 auto;\n    padding: 0;\n\n    li {\n      flex-shrink: 0;\n      list-style: none;\n    }\n\n    a {\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      height: 35px;\n      padding: 0 10px;\n      text-decoration: none;\n      font-weight: 400;\n      font-size: 15px;\n      color: #7f8a93;\n      border-radius: 4px;\n      transition: all .2s;\n\n      &:hover,\n      &:focus {\n        color: #374047;\n        background: #ebedee;\n      }\n    }\n\n    i {\n      margin-right: 4px;\n    }\n\n    .home {\n      color: #374047;\n    }\n\n    .logout {\n      i {\n        font-size: 17px;\n      }\n      .txt {\n        position: absolute;\n        left: -9999px;\n      }\n    }\n  }\n\n  .btn-wrap {\n    width: 46px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n    overflow: hidden;\n  }\n  \n  .btn-menu {\n    box-sizing: border-box;\n    display: block;\n    width: 46px;\n    height: 46px;\n    padding: 0;\n    color: #374047;\n    background: transparent;\n    border: 0;\n    position: absolute;\n    top: 0;\n    right: -46px;\n    cursor: pointer;\n\n    i {\n      font-size: 18px;\n    }\n\n    span {\n      position: absolute;\n      left: -9999px;\n    }\n  }\n\n  & + .dim {\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: rgba(0,0,0,.3);\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    left: -100%;\n    z-index: 200;\n  }\n\n  @media screen and (max-width: 768px) {\n    .wrap {\n      height: 46px;\n      padding: 8px 15px;\n    }\n\n    .logo {\n      font-size: 16px;\n    }\n\n    .nav {\n      margin-right: -5px;\n\n      a {\n        height: 30px;\n        padding: 0 5px;\n        font-size: 12px;\n      }\n    }\n  }\n\n  @media screen and (max-width: 640px) {\n    .btn-menu {\n      right: 0;\n      transition: all .4s;\n    }\n\n    .nav {\n      display: none;\n      flex-direction: column;\n      background: #fff;\n      box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);\n      position: absolute;\n      top: 46px;\n      right: 0;\n      z-index: 201;\n\n      li {\n        &:not(:first-child) {\n          border-top: 1px solid #ebedee;\n        }\n      }\n\n      a {\n        min-width: 150px;\n        height: 40px;\n        padding: 0 20px;\n        color: #374047;\n        border-radius: 0;\n      }\n    }\n\n    &.is-opened {\n      .btn-menu {\n        color: #07c;\n      }\n\n      .nav {\n        display: flex;\n      }\n\n      & + .dim {\n        opacity: 1;\n        left: 0;\n        transition: opacity .6s;\n      }\n    }\n  }\n"]);return Y=function(){return e},e}var J=q.a.header(Y()),V=function(e){function n(){var e,t;Object(_.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(S.a)(this,(e=Object(C.a)(n)).call.apply(e,[this].concat(o)))).state={menu:!1},t.toggleMenu=function(){t.setState(Object(z.a)(function(e){e.menu=!e.menu}))},t.menuClose=function(){t.state.menu&&t.setState(Object(z.a)(function(e){e.menu=!1}))},t}return Object(T.a)(n,e),Object(j.a)(n,[{key:"render",value:function(){var e=this.props,n=e.user,t=e.userInfo,a=e.t,r=this.state.menu;return o.a.createElement(o.a.Fragment,null,o.a.createElement(J,{className:r?"is-opened":"",onClick:this.menuClose},o.a.createElement("div",{className:"wrap"},o.a.createElement("h1",{className:"logo"},o.a.createElement(H.a,{to:"/"},o.a.createElement("i",{className:"fas fa-globe"})," World")),o.a.createElement("div",{className:"btn-wrap"},o.a.createElement("button",{type:"button",className:"btn-menu",onClick:this.toggleMenu},o.a.createElement("i",{className:"fas fa-bars"})," ",o.a.createElement("span",null,a("menu")))),o.a.createElement("ul",{className:"nav"},o.a.createElement("li",null,o.a.createElement(H.a,{to:"/",className:"home"},a("home"))),n?o.a.createElement(o.a.Fragment,null,o.a.createElement("li",null,o.a.createElement(H.a,{to:"/form"},o.a.createElement("i",{className:"far fa-edit"})," ",a("write"))),o.a.createElement("li",null,o.a.createElement(H.a,{to:"/@".concat(t.username)},o.a.createElement("i",{className:"far fa-user"})," ",a("profile"))),o.a.createElement("li",null,o.a.createElement(H.a,{to:"/Logout"},a("logout")))):o.a.createElement(o.a.Fragment,null,o.a.createElement("li",null,o.a.createElement(H.a,{to:"/login"},a("login"))),o.a.createElement("li",null,o.a.createElement(H.a,{to:"/join"},a("join"))))))),o.a.createElement("div",{className:"dim",onClick:this.menuClose}))}}]),n}(a.Component),X=Object(U.a)(Object(u.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{}}),Object(m.d)("header"))(V);function K(){var e=Object(B.a)(["\n  padding: 40px 0;\n  text-align: center;\n  border-top: 1px solid #dee1e3;\n\n  .lang-change {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    button {\n      display: flex;\n      align-items: center;\n      height: 20px;\n      padding: 0 20px;\n      color: #7f8a93;\n      align-items: center;\n\n      i {\n        display: none;\n        color: #07c;\n      }\n      \n      &:not(:first-child) {\n        border-left: 1px solid #dee1e3;\n      }\n\n      &.is-active {\n        font-weight: 500;\n        color: #374047;\n\n        i {\n          display: block;\n          margin-right: 5px;\n        }\n      }\n    }\n  }\n"]);return K=function(){return e},e}var Q=q.a.footer(K()),Z=function(e){function n(){var e,t;Object(_.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(S.a)(this,(e=Object(C.a)(n)).call.apply(e,[this].concat(o)))).changeLanguage=function(e){t.props.i18n.changeLanguage(e),localStorage.setItem("lang",e)},t}return Object(T.a)(n,e),Object(j.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.t,a=n.lng;return o.a.createElement(Q,null,o.a.createElement("h2",{className:"hide"},t("heading")),o.a.createElement("div",{className:"lang-change"},o.a.createElement("button",{className:"ko"===a?"is-active":"",onClick:function(){return e.changeLanguage("ko")}},o.a.createElement("i",{className:"fas fa-check"})," \ud55c\uad6d\uc5b4"),o.a.createElement("button",{className:"en"===a?"is-active":"",onClick:function(){return e.changeLanguage("en")}},o.a.createElement("i",{className:"fas fa-check"})," English")))}}]),n}(a.Component),$=Object(U.a)(Object(m.d)("footer"))(Z),ee=t(45),ne=t.n(ee),te=t(139),ae=t.n(te),oe=function(){return o.a.createElement("div",{className:"page-loading"},o.a.createElement(ae.a,{showLoadingAnimation:!0,type:"text",ready:!1,rows:20,color:"#E0E0E0"},o.a.createElement("div",null)))},re=ne()({loader:function(){return Promise.all([t.e(1),t.e(3)]).then(t.bind(null,550))},loading:oe}),ie=ne()({loader:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,552))},loading:oe}),ce=ne()({loader:function(){return t.e(5).then(t.bind(null,548))},loading:oe}),le=ne()({loader:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,554))},loading:oe}),se=ne()({loader:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,553))},loading:oe}),ue=ne()({loader:function(){return t.e(8).then(t.bind(null,549))},loading:oe}),de=ne()({loader:function(){return Promise.all([t.e(1),t.e(9)]).then(t.bind(null,551))},loading:oe}),fe=ne()({loader:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,558))},loading:oe}),me=function(e){function n(e){var t;Object(_.a)(this,n),t=Object(S.a)(this,Object(C.a)(n).call(this,e));var a=M.a.get("jwt");return a&&(F.a.setToken(a),e.authActions.init()),t}return Object(T.a)(n,e),Object(j.a)(n,[{key:"render",value:function(){var e=this.props.lng;return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.Helmet,null,o.a.createElement("html",{lang:e})),o.a.createElement(X,null),o.a.createElement(D.a,null,o.a.createElement(N.a,{exact:!0,path:"/",component:re}),o.a.createElement(N.a,{exact:!0,path:"/login",component:ie}),o.a.createElement(N.a,{exact:!0,path:"/logout",component:ce}),o.a.createElement(N.a,{exact:!0,path:"/join",component:le}),o.a.createElement(N.a,{path:"/article/:slug",component:ue}),o.a.createElement(N.a,{exact:!0,path:"/form",component:Object(W.a)(se)}),o.a.createElement(N.a,{path:"/form/:slug",component:Object(W.a)(se)}),o.a.createElement(N.a,{path:"/@:username/:filter?/:page?",component:de}),o.a.createElement(N.a,{path:"/profile",component:Object(W.a)(fe)}),o.a.createElement(N.a,{component:re})),o.a.createElement($,null))}}]),n}(a.Component),ge=Object(U.a)(R.a,Object(u.b)(function(e){return{}},function(e){return{authActions:Object(h.b)(E,e)}}),Object(m.d)("common"))(me);t.d(n,"history",function(){return he}),g.a.init({interpolation:{escapeValue:!1},lng:localStorage.getItem("lang")||("ko-KR"===navigator.language?"ko":"en"),resources:{en:p.en,ko:p.ko}});var pe,he=Object(s.a)({basename:"/world"}),Ee={position:"bottom center",timeout:5e3,offset:"30px",transition:"scale"};pe=ge,Object(r.render)(o.a.createElement(i.AppContainer,null,o.a.createElement(u.a,{store:P},o.a.createElement(l.ScrollManager,{history:he},o.a.createElement(c.a,{history:he},o.a.createElement(l.WindowScroller,null,o.a.createElement(d.a,Object.assign({template:f.a},Ee),o.a.createElement(m.a,{i18n:g.a},o.a.createElement(pe,null)))))))),document.getElementById("root"))},441:function(e,n,t){},7:function(e,n,t){"use strict";var a=t(25),o=t(68),r=t.n(o),i=t(450),c=t(197),l=t.n(c),s=t(67),u=t.n(s),d=t(34);l()(r.a,{debug:!1});var f=r.a.create({baseURL:"https://conduit.productionready.io/api",adapter:Object(i.a)(r.a.defaults.adapter,{enabledByDefault:!1})}),m=r.a.CancelToken,g={current:function(){return f.get("/user")},login:function(e){var n=e.email,t=e.password,a=e.config;return f.post("/users/login",{user:{email:n,password:t}},a)},register:function(e){var n=e.username,t=e.email,a=e.password,o=e.config;return f.post("/users",{user:{username:n,email:t,password:a}},o)},save:function(e){var n=e.user,t=e.config;return f.put("/user",{user:n},t)}},p={getAll:function(){return f.get("/tags",{cache:"POP"===d.history.action})}},h=function(e,n){return"limit=".concat(e,"&offset=").concat(n?n*e:0)},E={all:function(e){var n=e.page,t=e.config;return f.get("/articles?".concat(h(10,n)),Object(a.a)({},t,{cache:"POP"===d.history.action}))},feed:function(e){var n=e.page,t=e.config;return f.get("/articles/feed?".concat(h(10,n)),Object(a.a)({},t,{cache:"POP"===d.history.action}))},byAuthor:function(e){var n=e.username,t=e.page,o=e.config;return f.get("/articles?author=".concat(encodeURIComponent(n),"&").concat(h(5,t)),Object(a.a)({},o,{cache:"POP"===d.history.action}))},favoritedBy:function(e){var n=e.username,t=(e.page,e.config);return f.get("/articles?favorited=".concat(encodeURIComponent(n),"&").concat(h(5,Object(a.a)({},t,{cache:"POP"===d.history.action}))),t)},byTag:function(e){var n=e.tag,t=e.page,o=e.config;return f.get("/articles?tag=".concat(encodeURIComponent(n),"&").concat(h(10,t)),Object(a.a)({},o,{cache:"POP"===d.history.action}))},favorite:function(e){var n=e.slug,t=e.config;return f.post("/articles/".concat(n,"/favorite"),t)},unfavorite:function(e){var n=e.slug,t=e.config;return f.delete("/articles/".concat(n,"/favorite"),t)},create:function(e){var n=e.article,t=e.config;return f.post("/articles",{article:n},t)},update:function(e){var n=e.article,t=e.config;return f.put("/articles/".concat(n.slug),{article:n},t)},delete:function(e){var n=e.slug,t=e.config;return f.delete("/articles/".concat(n),t)},get:function(e){var n=e.slug,t=e.config;return f.get("/articles/".concat(n),Object(a.a)({},t,{cache:"POP"===d.history.action}))}},b={get:function(e){var n=e.slug,t=e.config;return f.get("/articles/".concat(n,"/comments"),Object(a.a)({},t,{cache:"POP"===d.history.action}))},create:function(e){var n=e.slug,t=e.comment,a=e.config;return f.post("/articles/".concat(n,"/comments"),{comment:t},a)},delete:function(e){var n=e.slug,t=e.commentId,a=e.config;return f.delete("/articles/".concat(n,"/comments/").concat(t),a)}},v={get:function(e){var n=e.username,t=e.config;return f.get("/profiles/".concat(n),Object(a.a)({},t,{cache:"POP"===d.history.action}))},follow:function(e){var n=e.username,t=e.config;return f.post("/profiles/".concat(n,"/follow"),t)},unfollow:function(e){var n=e.username,t=e.config;return f.delete("/profiles/".concat(n,"/follow"),t)}};n.a={axios:r.a,CancelToken:m,setToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(u.a.set("jwt",e),f.defaults.headers.common.Authorization="Token ".concat(e)):(u.a.remove("jwt",e),delete f.defaults.headers.common.Authorization)},Auth:g,Tags:p,Articles:E,Comments:b,Profile:v}},70:function(e,n,t){"use strict";t.r(n),t.d(n,"init",function(){return i}),t.d(n,"login",function(){return c}),t.d(n,"logout",function(){return l}),t.d(n,"register",function(){return s}),t.d(n,"update",function(){return u}),t.d(n,"resetAuth",function(){return d});var a=t(18),o=t(7),r=t(67),i=function(){return{type:"LOGIN",payload:o.a.Auth.current()}},c=function(e){var n=e.email,t=e.password;return{type:"LOGIN",payload:o.a.Auth.login({email:n,password:t})}},l=function(){return{type:"LOGOUT"}},s=function(e){var n=e.username,t=e.email,a=e.password;return{type:"REGISTER",payload:o.a.Auth.register({username:n,email:t,password:a})}},u=function(e){var n=e.user;return{type:"UPDATE",payload:o.a.Auth.save({user:n})}},d=function(){return{type:"RESET_AUTH"}},f={user:t.n(r).a.get("jwt")||null,userInfo:{},loading:!1,error:[]};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;return Object(a.a)(e,function(t){switch(n.type){case"LOGIN_PENDING":case"REGISTER_PENDING":case"UPDATE_PENDING":return void(t.loading=!0);case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":var a=n.payload.data.user.token;return o.a.setToken(a),t.user=a,t.userInfo=n.payload.data.user,t.loading=!1,void(t.error=[]);case"UPDATE_SUCCESS":return t.userInfo=n.payload.data.user,t.loading=!1,void(t.error=[]);case"LOGIN_FAILURE":case"REGISTER_FAILURE":case"UPDATE_FAILURE":var r=n.payload.response.data.errors,i=Object.keys(r).map(function(e){return"".concat(e," ").concat(r[e].join(", "))});return t.loading=!1,void(t.error=i);case"LOGOUT":return o.a.setToken(null),t.user=null,void(t.userInfo={});case"RESET_AUTH":return t.loading=!1,void(t.error=[]);default:return e}})}},97:function(e,n,t){"use strict";var a=t(46),o=t(47),r=t(50),i=t(48),c=t(51),l=t(0),s=t.n(l),u=t(52),d=t(26),f=t(70),m=t(137);n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=function(n){function t(e){var n;return Object(a.a)(this,t),n=Object(r.a)(this,Object(i.a)(t).call(this,e)),e.user||Object(m.a)(e),n}return Object(c.a)(t,n),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(e,this.props)}}]),t}(l.Component);return Object(u.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{authActions:Object(d.b)(f,e)}})(n)}}},[[207,12,11]]]);