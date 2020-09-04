(this.webpackJsonpworld=this.webpackJsonpworld||[]).push([[7,18],{158:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(199),i=t(33),c=t(64),l=t(198),s=t(4),u=t.n(s),p=t(644),d=t(63),f=t(52),m=t(82),b=t(649),g=t(113);function x(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 20px 30px;\n  background: #ebedee;\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    width: 110px;\n    height: 110px;\n    margin-bottom: 10px;\n    border-radius: 55px;\n    background: url('","/assets/profile-dummy.jpg') no-repeat 0 0 / 100%;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n      vertical-align: top;\n    }\n  }\n\n  .username {\n    margin: 0;\n    font-weight: 500;\n    font-size: 26px;\n    color: #222;\n\n    a {\n      color: inherit;\n      text-decoration: none;\n\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .bio {\n    margin-top: 10px;\n    font-size: 14px;\n    color: #999;\n  }\n\n  .action {\n    width: 100%;\n    margin-top: 20px;\n    padding-top: 20px;\n    text-align: center;\n    border-top: 1px solid #ccc;\n  }\n\n  @media screen and (max-width: 768px) {\n    padding: 40px 15px 20px;\n\n    .img {\n      width: 90px;\n      height: 90px;\n      border-radius: 45px;\n    }\n\n    .username {\n      font-size: 20px;\n    }\n\n    .bio {\n      font-size: 13px;\n    }\n  }\n"]);return x=function(){return n},n}var h=t(114).a.div(x(),"/world"),v=function(n){var e=Object(d.k)(),t=Object(c.c)("components").t,o=Object(f.c)((function(n){return n.auth})),l=o.user,s=o.userInfo,g=Object(f.c)((function(n){return n.profile})).profile,x=Object(f.b)();Object(a.useEffect)((function(){return x(m.fetch(n.username)).catch(console.log),function(){x(m.reset())}}),[x,n.username]);var v=function(){var t=Object(p.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l){t.next=3;break}return Object(b.a)(e),t.abrupt("return");case 3:x(m[a?"follow":"unfollow"](n.username));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();if(g.loading)return r.a.createElement("div",null,"Loading...");var E=g.username,w=g.bio,k=g.image,j=g.following,O=void 0!==E&&E===s.username,y=!O&&!1===j,N=!O&&!0===j;return r.a.createElement(h,null,r.a.createElement(i.Link,{to:"/@".concat(E)},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:k||"".concat("/world","/assets/profile-dummy.jpg"),alt:""}))),r.a.createElement("h2",{className:"username"},r.a.createElement(i.Link,{to:"/@".concat(E)},E)),r.a.createElement("p",{className:"bio"},w),E&&r.a.createElement("div",{className:"action"},(y||!l)&&r.a.createElement("button",{type:"button",className:"btn light",onClick:function(){v(!0)}},t("profileInfo.follow")," ",E),N&&r.a.createElement("button",{type:"button",className:"btn light",onClick:function(){v(!1)}},t("profileInfo.unfollow")," ",E),O&&r.a.createElement("button",{type:"button",className:"btn light",onClick:function(){e.push("/profile")}},t("profileInfo.profile"))))},E=t(650),w=t(651),k=t(307);e.default=Object(o.hot)((function(n){var e=n.match.params,t=n.history,o=Object(c.c)("profile").t,s=e.username,u=void 0===e.filter,p=Object(a.useCallback)((function(){return u||"articles"===e.filter?"articles":"favorites"}),[u,e.filter]),d=Object(a.useCallback)((function(n){return"/@".concat(s,"/").concat(p(),"/").concat(n)}),[p,s]),f=Object(a.useCallback)((function(n){t.push(d(n))}),[d,t]),m=p(),b=u?e.filter:e.page;return r.a.createElement(k.default,null,r.a.createElement(l.Helmet,{title:"@".concat(s)}),r.a.createElement(v,{username:s}),r.a.createElement("div",{className:"container"},r.a.createElement(w.a,null,r.a.createElement("li",{className:"articles"===m?"selected":""},r.a.createElement(i.Link,{to:"/@".concat(s)},o("myArticles"))),r.a.createElement("li",{className:"favorites"===m?"selected":""},r.a.createElement(i.Link,{to:"/@".concat(s,"/favorites")},o("favoritedArticles")))),r.a.createElement(E.a,{username:s,filter:m,page:b,handlePageChange:f,getPageUrl:d,useTotal:!0,countPerPage:5})))}))},307:function(n,e,t){"use strict";t.r(e);var a=t(113),r=t(114);function o(){var n=Object(a.a)(["\n"]);return o=function(){return n},n}e.default=r.a.div(o())},651:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(113);function i(){var n=Object(o.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding: 0;\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    height: 1px;\n    background: #004d84;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  li {\n    list-style: none;\n\n    &:not(:first-child) {\n      margin-left: -1px;\n    }\n\n    &.selected a {\n      font-weight: 500;\n      color: #00365d;\n      border: 1px solid #004d84;\n      border-bottom: 1px solid #fff;\n      position: relative;\n    }\n  }\n\n  a {\n    box-sizing: border-box;\n    display: block;\n    min-width: 110px;\n    padding: 10px 20px;\n    text-align: center;\n    color: #97a1a7;\n    text-decoration: none;\n    border: 1px solid #bec4c8;\n    border-bottom: 1px solid #004d84;\n  }\n\n  .sub {\n    font-size: .7em;\n  }\n\n  @media screen and (max-width: 768px) {\n    a {\n      padding: 8px 15px;\n    }\n  }\n"]);return i=function(){return n},n}var c=t(114).a.ul(i());e.a=r.a.memo((function(n){return r.a.createElement(c,null,n.children)}))}}]);