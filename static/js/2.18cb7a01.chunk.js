(this.webpackJsonpworld=this.webpackJsonpworld||[]).push([[2,11],{155:function(n,e,t){"use strict";t.r(e);var r=t(3),a=t.n(r),o=t(645),c=t(0),i=t.n(c),l=t(48),s=t(196),u=t(49),m=t(60),p=t(195),d=t(77),f=t(18),b=t(197),x=t(198),g=t.n(x),h=t(658),v=t(659),j=t(114),w=t(40),O=t(646),E=t(112),k=t(113);function y(){var n=Object(E.a)(["\n  box-sizing: border-box;\n  margin-bottom: 30px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  overflow: hidden;\n\n  .comment-txt {\n    textarea {\n      box-sizing: border-box;\n      display: block;\n      width: 100%;\n      height: 80px;\n      padding: 15px;\n      font-size: 16px;\n      color: #5f6e78;\n      border: 0;\n      border-radius: 0;\n      resize: none;\n    }\n  }\n\n  .action {\n    padding: 10px;\n    background: #ebedee;\n  }\n\n  @media screen and (max-width: 768px) {\n    .comment-txt {\n      textarea {\n        font-size: 14px;\n      }\n    }\n  }\n"]);return y=function(){return n},n}function N(){var n=Object(E.a)(["\n  box-sizing: border-box;\n  margin-bottom: 30px;\n  padding: 20px;\n  text-align: center;\n  font-size: 16px;\n  color: #374047;\n  background: #f8f9f9;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n\n  a {\n    color: #07c;\n  }\n"]);return N=function(){return n},n}var z=k.a.div(N()),C=k.a.form(y()),D=function(){var n=Object(l.m)().slug,e=Object(m.c)("components").t,t=Object(b.b)(),r=Object(u.c)((function(n){return n.auth})).user,s=Object(u.b)(),p=Object(c.useState)(!1),f=Object(j.a)(p,2),x=f[0],g=f[1],h=Object(O.a)({comment:""}),v=h.form.comment,E=h.setField,k=h.bindInput,y=Object(c.useRef)(null),N=function(){var r=Object(o.a)(a.a.mark((function r(o){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o.preventDefault(),""!==(c=v.trim())){r.next=6;break}return t.show(e("validate:emptyBody")),y.current.focus(),r.abrupt("return");case 6:return g(!0),r.prev=7,r.next=10,s(d.c({slug:n,comment:{body:c}}));case 10:g(!1),E("comment",""),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(7),t.error(e("comment.errorWrite")),g(!1);case 18:case"end":return r.stop()}}),r,null,[[7,14]])})));return function(n){return r.apply(this,arguments)}}();return r?i.a.createElement(C,{onSubmit:N},i.a.createElement("div",{className:"comment-txt"},i.a.createElement("textarea",Object.assign({ref:y,rows:"10",cols:"40",placeholder:e("comment.placeHolder")},k("comment"),{disabled:x}))),i.a.createElement("div",{className:"action"},i.a.createElement("button",{type:"submit",className:"btn light"},e("comment.submit")))):i.a.createElement(z,{className:"login-msg"},i.a.createElement("i",{className:"fas fa-info-circle"})," ",i.a.createElement(m.b,{i18nKey:"comment.loginMsg"},"\ub313\uae00\uc744 \ub0a8\uae30\ub824\uba74 ",i.a.createElement(w.Link,{to:"/login"},"\ub85c\uadf8\uc778"),"\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."))};function A(){var n=Object(E.a)(["\n  li {\n    position: relative;\n\n    &:not(:first-child) {\n      margin-top: 20px;\n    }\n\n    &:not(.no-item) {\n      display: flex;\n    }\n  }\n\n  .no-item {\n    padding: 40px 0;\n    text-align: center;\n    font-size: 16px;\n    color: #7f8a93;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    margin-right: 15px;\n    border-radius: 16px;\n    position: relative;\n    top: 35px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n      vertical-align: top;\n    }\n  }\n\n  .wrap {\n    width: calc(100% - 39px);\n  }\n\n  .info {\n    height: 25px;\n    padding-left: 10px;\n    position: relative;\n  }\n\n  .name {\n    font-size: 13px;\n    color: #374047;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: inherit;\n    opacity: .6;\n  }\n\n  .del {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n    color: #7f8a93;\n    background: transparent;\n    border: 0;\n    position: absolute;\n    right: 6px;\n    bottom: 6px;\n    z-index: 1;\n  }\n\n  .content {\n    padding: 10px 50px 10px 10px;\n    font-size: 16px;\n    color: #5f6e78;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    position: relative;\n\n    &:before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 21px;\n      width: 0;\n      height: 0;\n      border: 8px solid transparent;\n      border-right-color: #ddd;\n      border-left: 0;\n      margin-top: -8px;\n      margin-left: -8px;\n    }\n\n    &:after {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 21px;\n      width: 0;\n      height: 0;\n      border: 8px solid transparent;\n      border-right-color: #fff;\n      border-left: 0;\n      margin-top: -8px;\n      margin-left: -7px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .del {\n      top: -5px;\n      right: 0;\n      bottom: auto;\n    }\n\n    .content {\n      padding-right: 10px;\n      font-size: 14px;\n    }\n  }\n"]);return A=function(){return n},n}var L=k.a.ul(A()),S=i.a.memo((function(n){var e=n.slug,t=n.comments,r=n.deleteComment,a=Object(m.c)("components").t;return i.a.createElement(L,null,t.length?t.map((function(n){return i.a.createElement("li",{key:n.id},i.a.createElement(w.Link,{to:"/@".concat(n.author.username),className:"img"},i.a.createElement("img",{src:n.author.image?n.author.image:"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),i.a.createElement("div",{className:"wrap"},i.a.createElement("div",{className:"info"},i.a.createElement(w.Link,{to:"/@".concat(n.author.username),className:"name"},n.author.username),i.a.createElement("span",{className:"date"},new Date(n.createdAt).toDateString())),i.a.createElement("button",{type:"button",className:"del",onClick:function(){r(e,n.id)}},i.a.createElement("i",{className:"far fa-trash-alt"})," ",i.a.createElement("span",{className:"hide"},a("common:delete"))),i.a.createElement("div",{className:"content"},n.body)))})):i.a.createElement("li",{className:"no-item"},a("comment.noItem")))})),P=t(649),T=t(650),I=t(660),B=t(290);e.default=Object(s.hot)((function(n){var e=Object(l.k)(),t=n.match.params.slug,r=Object(m.c)("article").t,s=Object(b.b)(),x=Object(I.a)(),j=Object(u.c)((function(n){return n.auth})).user,w=Object(u.c)((function(n){return n.article})),O=w.article,E=w.comments,k=w.error,y=Object(u.b)();Object(c.useEffect)((function(){return y(d.g()),y(d.f(t)),function(){y(d.g())}}),[y,t]);var N=function(){var n=Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(j){n.next=3;break}return Object(T.a)(e),n.abrupt("return");case 3:if(!window.confirm(r("confirmDelete"))){n.next=13;break}return n.prev=4,n.next=7,f.a.Articles.delete({slug:t});case 7:x(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(4),"not owned by user"===n.t0.response.data.errors.article[0]?s.error(r("canAuthorDelete")):s.error(r("errorDelete"));case 13:case"end":return n.stop()}}),n,null,[[4,10]])})));return function(){return n.apply(this,arguments)}}(),z=Object(c.useCallback)(function(){var n=Object(o.a)(a.a.mark((function n(t,o){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(j){n.next=3;break}return Object(T.a)(e),n.abrupt("return");case 3:if(!window.confirm(r("components:comment.confirmDelete"))){n.next=13;break}return n.prev=4,n.next=7,f.a.Comments.delete({slug:t,commentId:o});case 7:y(d.e(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(4),s.error(r("components:comment.errorDelete"));case 13:case"end":return n.stop()}}),n,null,[[4,10]])})));return function(e,t){return n.apply(this,arguments)}}(),[j,r,e,y,s]);return O?i.a.createElement(B.default,null,i.a.createElement(p.Helmet,{title:O.title}),i.a.createElement(B.ArticleHeader,null,i.a.createElement("div",{className:"wrap"},i.a.createElement("h2",{className:"subject"},O.title),i.a.createElement("p",{className:"desc"},O.description),i.a.createElement("div",{className:"info"},i.a.createElement(h.a,{image:O.author.image,username:O.author.username,createdAt:O.createdAt}),i.a.createElement(v.a,{slug:O.slug,favorited:O.favorited,favoritesCount:O.favoritesCount})))),i.a.createElement("div",{className:"container"},i.a.createElement(B.ArticleBody,null,i.a.createElement("div",{className:"body",dangerouslySetInnerHTML:{__html:O.bodyHTML}}),i.a.createElement(P.a,{tags:O.tagList})),i.a.createElement("div",{className:"page-foot"},i.a.createElement("button",{type:"button",className:"btn",onClick:function(){return e.push("/form/".concat(O.slug))}},r("common:modify"))," ",i.a.createElement("button",{type:"button",className:"btn",onClick:N},r("common:delete"))," ",i.a.createElement("button",{type:"button",className:"btn",onClick:e.goBack},r("common:list"))),i.a.createElement("h3",{className:"comment-title"},r("components:comment.heading")),i.a.createElement(D,{slug:O.slug}),i.a.createElement(S,{slug:O.slug,comments:E,deleteComment:z}))):k&&"404"===k.status?(e.goBack(),null):i.a.createElement("div",{className:"page-loading"},i.a.createElement(g.a,{showLoadingAnimation:!0,type:"text",ready:!1,rows:20,color:"#E0E0E0"},i.a.createElement("div",null)))}))},290:function(n,e,t){"use strict";t.r(e),t.d(e,"ArticleHeader",(function(){return s})),t.d(e,"ArticleBody",(function(){return u}));var r=t(112),a=t(113),o=t(647);function c(){var n=Object(r.a)(["\n  .comment-title {\n    margin-top: 30px;\n    margin-bottom: 10px;\n    padding: 0 5px;\n    font-weight: 500;\n    font-size: 20px;\n    color: #374047;\n  }\n"]);return c=function(){return n},n}function i(){var n=Object(r.a)(["\n  padding-bottom: 30px;\n  border-bottom: 1px solid #dee1e3;\n\n  > .body {\n    min-height: 150px;\n    line-height: 1.8;\n    font-size: 16px;\n    color: #374047;\n    word-wrap: break-word;\n\n    p, ul, dl {\n      &:not(:first-child) { margin: 20px 0 10px; }\n    }\n\n    h1, h2, h3, h4, h5, h6 {\n      font-weight: 500;\n    }\n  }\n\n  "," {\n    margin-top: 30px;\n  }\n\n  @media screen and (max-width: 768px) {\n    > .body {\n      font-size: 14px;\n\n      p, ul, dl {\n        &:not(:first-child) { margin: 12px 0 6px; }\n      }\n    }\n  }\n"]);return i=function(){return n},n}function l(){var n=Object(r.a)(["\n  color: #fff;\n  background: #97a1a7;\n\n  .wrap {\n    box-sizing: border-box;\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 20px 5% 10px;\n  }\n\n  .subject {\n    line-height: 1.3;\n    font-weight: 500;\n    font-size: 32px;\n    word-wrap: break-word;\n  }\n\n  .desc {\n    font-size: 16px;\n    word-wrap: break-word;\n  }\n\n  .info {\n    display: flex;\n    align-items: center;\n    margin-top: 20px;\n    padding-top: 10px;\n    border-top: 1px solid #bec4c8;\n\n    > div {\n      margin-right: 20px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .wrap {\n      padding: 20px 5% 20px;\n    }\n\n    .subject {\n      font-size: 24px;\n    }\n\n    .desc {\n      font-size: 14px;\n    }\n  }\n"]);return l=function(){return n},n}var s=a.a.div(l()),u=a.a.div(i(),o.a);e.default=a.a.div(c())},645:function(n,e,t){"use strict";function r(n,e,t,r,a,o,c){try{var i=n[o](c),l=i.value}catch(s){return void t(s)}i.done?e(l):Promise.resolve(l).then(r,a)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(a,o){var c=n.apply(e,t);function i(n){r(c,a,o,i,l,"next",n)}function l(n){r(c,a,o,i,l,"throw",n)}i(void 0)}))}}t.d(e,"a",(function(){return a}))},646:function(n,e,t){"use strict";var r=t(61),a=t(114),o=t(0);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(t,!0).forEach((function(e){Object(r.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.a=function(n){var e=Object(o.useState)(n),t=Object(a.a)(e,2),c=t[0],l=t[1],s=Object(o.useCallback)((function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];if("string"!==typeof e[0])l((function(n){return i({},n,{},e[0])}));else{var a=e[0],o=e[1];l((function(n){return i({},n,Object(r.a)({},a,o))}))}}),[]),u=Object(o.useCallback)(function(n,e){var t;return function(){var r=this,a=arguments,o=function(){return n.apply(r,a)};clearTimeout(t),t=setTimeout(o,e)}}((function(n,e){l((function(t){return i({},t,Object(r.a)({},n,e))}))}),250),[]),m=Object(o.useCallback)((function(n){var e=n.target,t=e.name,a=e.value;l((function(n){return i({},n,Object(r.a)({},t,a))}))}),[]),p=Object(o.useCallback)((function(n){var e=n.target,t=e.name,r=e.value;u(t,r)}),[u]),d=Object(o.useCallback)((function(n,e){var t;return t={name:n},Object(r.a)(t,e?"defaultValue":"value",c[n]),Object(r.a)(t,"onChange",e?p:m),t}),[m,p,c]);return{form:c,setForm:l,setField:s,changeInput:m,bindInput:d}}},647:function(n,e,t){"use strict";var r=t(112),a=t(113);function o(){var n=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ",";\n\n  &:empty {\n    display: none;\n  }\n\n  a {\n    display: block;\n    height: ",";\n    line-height: ",";\n    margin: 0 4px 4px 0;\n    padding: 0 10px;\n    font-weight: 300;\n    font-size: ",";\n    color: #97a1a7;\n    text-decoration: none;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #cfd3d6;\n    border-radius: ",";\n    transition: all .2s;\n\n    &:hover,\n    &:focus {\n      color: #374047;\n      border-color: #97a1a7;\n    }\n\n    &.selected {\n      color: #07c;\n      border-color: #07c;\n    }\n  }\n"]);return o=function(){return n},n}e.a=a.a.ul(o(),(function(n){return n.small&&"4px"}),(function(n){return n.small?"16px":"22px"}),(function(n){return n.small?"14px":"20px"}),(function(n){return n.small?"11px":"12px"}),(function(n){return n.small?"8px":"10px"}))},649:function(n,e,t){"use strict";var r=t(0),a=t.n(r),o=t(40),c=t(647);e.a=a.a.memo((function(n){var e=n.tags,t=n.currentTag,r=n.small;return a.a.createElement(c.a,{small:r},e.map((function(n){return a.a.createElement("li",{key:n},a.a.createElement(o.Link,{to:"/tag/".concat(encodeURIComponent(n)),className:n===t?"selected":""},n))})))}))},650:function(n,e,t){"use strict";e.a=function(n){return n.push({pathname:"/login",state:{prevLocation:n.location.pathname,loginMsg:!0}}),null}},653:function(n,e,t){"use strict";var r=t(112),a=t(113);function o(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n\n  .link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 16px;\n    overflow: hidden;\n    background: url('","/assets/profile-dummy.jpg') no-repeat 0 0 / 100%;\n\n    img {\n      width: 100%;\n      height: 100%;\n      vertical-align: top;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin-left: 10px;\n    font-size: 13px;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: inherit;\n    opacity: .6;\n  }\n"]);return o=function(){return n},n}e.a=a.a.div(o(),"/world")},654:function(n,e,t){"use strict";var r=t(112),a=t(113);function o(){var n=Object(r.a)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border: 1px solid #07c;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n\n  .txt {\n    position: absolute;\n    left: -9999px;\n  }\n\n  .count {\n    margin-left: 5px;\n  }\n\n  .loading {\n    animation: spin 1s infinite linear;\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return o=function(){return n},n}e.a=a.a.button(o(),(function(n){return n.favorited?"\n      color: #fff;\n      background: #07c;\n\n      i {\n        color: #fff;\n      }\n    ":"\n      color: #07c;\n      background: #fff;\n\n      i {\n        color: #07c;\n      }\n    "}))},658:function(n,e,t){"use strict";var r=t(0),a=t.n(r),o=t(40),c=t(653);e.a=a.a.memo((function(n){var e=n.username,t=n.image,r=n.createdAt;return a.a.createElement(c.a,null,a.a.createElement(o.Link,{to:"/@".concat(e),className:"link"},a.a.createElement("div",{className:"img"},a.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),a.a.createElement("p",{className:"name"},e)),a.a.createElement("p",{className:"date"},new Date(r).toDateString()))}))},659:function(n,e,t){"use strict";var r=t(3),a=t.n(r),o=t(645),c=t(114),i=t(0),l=t.n(i),s=t(48),u=t(49),m=t(60),p=t(18),d=t(650),f=t(654),b=function(n){var e=n.slug,t=Object(s.k)(),r=Object(m.c)("components").t,b=Object(u.c)((function(n){return n.auth})).user,x=Object(i.useState)(!1),g=Object(c.a)(x,2),h=g[0],v=g[1],j=Object(i.useState)(null),w=Object(c.a)(j,2),O=w[0],E=w[1],k=Object(i.useState)(n.favorited),y=Object(c.a)(k,2),N=y[0],z=y[1],C=Object(i.useState)(n.favoritesCount),D=Object(c.a)(C,2),A=D[0],L=D[1];Object(i.useEffect)((function(){return function(){O&&O.cancel()}}),[O]);var S=function(){var n=Object(o.a)(a.a.mark((function n(){var r,o,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(b){n.next=3;break}return Object(d.a)(t),n.abrupt("return");case 3:return n.prev=3,r=p.a.CancelToken.source(),E(r),v(!0),n.next=9,p.a.Articles[N?"unfavorite":"favorite"]({slug:e,config:{cancelToken:r.token}});case 9:o=n.sent,c=o.data,v(!1),z(c.article.favorited),L(c.article.favoritesCount),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(3),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[3,16]])})));return function(){return n.apply(this,arguments)}}();return l.a.createElement(f.a,{type:"button",onClick:S,favorited:N},h?l.a.createElement("i",{className:"fas fa-spinner loading"}):l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-heart"}),l.a.createElement("span",{className:"txt"},r("like.actionText"))," ",l.a.createElement("span",{className:"count"},A)))};b.defaultProps={slug:"",favorited:!1,favoritesCount:0},e.a=b},660:function(n,e,t){"use strict";var r=t(199),a=t(154);e.a=function(){var n=Object(r.useLastLocation)();return function(){n?a.history.push(n.pathname):a.history.goBack()}}}}]);