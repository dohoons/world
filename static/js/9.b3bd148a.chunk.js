(this.webpackJsonpworld=this.webpackJsonpworld||[]).push([[9],{260:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(48),o=t(61),l=t(87),i=t(546);e.default=function(){var n=Object(o.c)("home").t,e=Object(c.c)((function(n){return n.tags})).tags,t=Object(c.b)();return Object(a.useEffect)((function(){t(l.c())}),[t]),r.a.createElement("div",{className:"tag-area"},r.a.createElement("h2",{className:"title"},n("hotTag")),r.a.createElement(i.a,{tags:e}))}},543:function(n,e,t){"use strict";var a=t(109),r=t(110);function c(){var n=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ",";\n\n  &:empty {\n    display: none;\n  }\n\n  a {\n    display: block;\n    height: ",";\n    line-height: ",";\n    margin: 0 4px 4px 0;\n    padding: 0 10px;\n    font-weight: 300;\n    font-size: ",";\n    color: #97a1a7;\n    text-decoration: none;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #cfd3d6;\n    border-radius: ",";\n    transition: all .2s;\n\n    &:hover,\n    &:focus {\n      color: #374047;\n      border-color: #97a1a7;\n    }\n\n    &.selected {\n      color: #07c;\n      border-color: #07c;\n    }\n  }\n"]);return c=function(){return n},n}e.a=r.a.ul(c(),(function(n){return n.small&&"4px"}),(function(n){return n.small?"16px":"22px"}),(function(n){return n.small?"14px":"20px"}),(function(n){return n.small?"11px":"12px"}),(function(n){return n.small?"8px":"10px"}))},546:function(n,e,t){"use strict";var a=t(0),r=t.n(a),c=t(39),o=t(543);e.a=r.a.memo((function(n){var e=n.tags,t=n.currentTag,a=n.small;return r.a.createElement(o.a,{small:a},e.map((function(n){return r.a.createElement("li",{key:n},r.a.createElement(c.Link,{to:"/tag/".concat(encodeURIComponent(n)),className:n===t?"selected":""},n))})))}))}}]);