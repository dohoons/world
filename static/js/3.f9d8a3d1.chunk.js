(this.webpackJsonpworld=this.webpackJsonpworld||[]).push([[3,10,12,13,15],{152:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(199),o=t(51),l=t(198),i=t(144),s=t(304),u=t(302),d=t(301),p=t(303),f=t(298);n.default=Object(r.hot)((function(){return c.a.createElement(f.default,null,c.a.createElement(l.Helmet,{title:"Home"}),c.a.createElement(s.default,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"body"},c.a.createElement(o.g,null,c.a.createElement(o.d,{path:"/articles/:page?",component:d.default}),c.a.createElement(o.d,{path:"/feed/:page?",component:Object(i.a)(d.default)}),c.a.createElement(o.d,{path:"/tag/:tag/:page?",component:p.default}),c.a.createElement(o.d,{component:d.default}))),c.a.createElement("div",{className:"side"},c.a.createElement(u.default,null))))}))},298:function(e,n,t){"use strict";t.r(n),t.d(n,"Top",(function(){return i})),t.d(n,"TagTitle",(function(){return s}));var a=t(113),c=t(114);function r(){var e=Object(a.a)(["\n  .container {\n    display: flex;\n  }\n\n  .body {\n    flex: 1;\n  }\n\n  .side {\n    flex-shrink: 0;\n    box-sizing: border-box;\n    width: 240px;\n    margin-left: 20px;\n    background: #f8f9f9;\n  }\n\n  .tag-area {\n    padding: 15px;\n    position: sticky;\n    top: 0;\n\n    .title {\n      margin-bottom: 10px;\n      font-weight: 500;\n      font-size: 16px;\n      color: #7f8a93;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .container {\n      display: block;\n    }\n\n    .side {\n      width: auto;\n      margin-top: 50px;\n      margin-left: 0;\n    }\n  }\n"]);return r=function(){return e},e}function o(){var e=Object(a.a)(["\n  margin-bottom: 25px;\n  font-weight: 500;\n  font-size: 30px;\n  color: #97a1a7;\n  letter-spacing: -.04em;\n\n  span {\n    margin-left: 5px;\n    color: #374047;\n  }\n\n  @media screen and (max-width: 768px) {\n    margin-bottom: 20px;\n    font-size: 24px;\n  }\n"]);return o=function(){return e},e}function l(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 130px;\n  color: #fff;\n  background: #07c;\n  box-shadow: inset 0 -7px 17px 0 rgba(0,0,0,.15);\n  overflow: hidden;\n\n  &.init {\n    .copy {\n      letter-spacing: -.04em;\n      opacity: 1;\n      transition: letter-spacing 4s;\n    }\n  }\n\n  .copy {\n    font-weight: 500;\n    font-size: 144px;\n    color: #4a9eda;\n    white-space: nowrap;\n    letter-spacing: .4em;\n    opacity: .3;\n    position: relative;\n    bottom: -26px;\n  }\n\n  @supports (-webkit-text-stroke: 1px) {\n    .copy {\n      color: transparent;\n      -webkit-text-stroke: 1px #7db9e5;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    height: 100px;\n\n    .copy {\n      font-size: 120px;\n    }\n\n    .hello {\n      position: absolute;\n      left: -9999px;\n    }\n  }\n"]);return l=function(){return e},e}var i=c.a.div(l()),s=c.a.h2(o());n.default=c.a.div(r())},301:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(51),o=t(42),l=t(201),i=t(53),s=t(64),u=t(650),d=t(651);n.default=function(){var e=Object(r.n)(),n=e.params,t=e.url,p=Object(r.k)(),f=Object(s.c)("home").t,m=Object(l.b)(),b=Object(i.c)((function(e){return e.auth})).user,g="/"===t,x=Object(a.useCallback)((function(){return(g||"feed"===t.split("/")[1])&&b?"feed":"all"}),[g,t,b]),h=Object(a.useCallback)((function(e){return"/".concat("feed"===x()?"feed":"articles","/").concat(e)}),[x]),E=Object(a.useCallback)((function(e){p.push(h(e))}),[h,p]),v=x(),j=g?n.filter:n.page;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null,b?c.a.createElement("li",{className:"feed"===v?"selected":""},c.a.createElement(o.Link,{to:"/feed"},f("myfeed"))):c.a.createElement("li",null,c.a.createElement(o.Link,{to:"/feed",onClick:function(e){e.preventDefault(),m.show(f("loginMsg"))}},f("myfeed"),c.a.createElement("span",{className:"sub"},"(",f("needLogin"),")"))),c.a.createElement("li",{className:"all"===v?"selected":""},c.a.createElement(o.Link,{to:"/articles"},f("globalfeed")))),c.a.createElement(u.a,{filter:v,page:j,handlePageChange:E,getPageUrl:h,useTotal:!0}))}},302:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(53),o=t(64),l=t(140),i=t(648);n.default=function(){var e=Object(o.c)("home").t,n=Object(r.c)((function(e){return e.tags})).tags,t=Object(r.b)();return Object(a.useEffect)((function(){t(l.c()).catch(console.log)}),[t]),c.a.createElement("div",{className:"tag-area"},c.a.createElement("h2",{className:"title"},e("hotTag")),c.a.createElement(i.a,{tags:n}))}},303:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(51),o=t(650),l=t(298);n.default=function(e){var n=e.history,t=(e.match.params,Object(r.m)()),i=t.tag,s=t.page,u=decodeURIComponent(i),d=Object(a.useCallback)((function(e){return"/tag/".concat(i,"/").concat(e)}),[i]),p=Object(a.useCallback)((function(e){n.push(d(e))}),[d,n]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.TagTitle,null,"Tag ",c.a.createElement("span",null,"#",u)),c.a.createElement(o.a,{filter:"tag",tag:u,page:s,handlePageChange:p,getPageUrl:d,useTotal:!0}))}},304:function(e,n,t){"use strict";t.r(n);var a=t(115),c=t(0),r=t.n(c),o=t(298);n.default=function(){var e=Object(c.useState)(!1),n=Object(a.a)(e,2),t=n[0],l=n[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){l(!0)}),10);return function(){clearTimeout(e)}}),[]),r.a.createElement(o.Top,{className:"home-head ".concat(t?"init":"")},r.a.createElement("p",{className:"copy"},r.a.createElement("span",{className:"hello"},"Hello")," World"))}},651:function(e,n,t){"use strict";var a=t(0),c=t.n(a),r=t(113);function o(){var e=Object(r.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding: 0;\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    height: 1px;\n    background: #004d84;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  li {\n    list-style: none;\n\n    &:not(:first-child) {\n      margin-left: -1px;\n    }\n\n    &.selected a {\n      font-weight: 500;\n      color: #00365d;\n      border: 1px solid #004d84;\n      border-bottom: 1px solid #fff;\n      position: relative;\n    }\n  }\n\n  a {\n    box-sizing: border-box;\n    display: block;\n    min-width: 110px;\n    padding: 10px 20px;\n    text-align: center;\n    color: #97a1a7;\n    text-decoration: none;\n    border: 1px solid #bec4c8;\n    border-bottom: 1px solid #004d84;\n  }\n\n  .sub {\n    font-size: .7em;\n  }\n\n  @media screen and (max-width: 768px) {\n    a {\n      padding: 8px 15px;\n    }\n  }\n"]);return o=function(){return e},e}var l=t(114).a.ul(o());n.a=c.a.memo((function(e){return c.a.createElement(l,null,e.children)}))}}]);