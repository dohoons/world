(window.webpackJsonp=window.webpackJsonp||[]).push([[14,15],{216:function(n,t,e){"use strict";e.r(t),e.d(t,"Top",function(){return p}),e.d(t,"TagTitle",function(){return s});var a=e(81),i=e(82);function o(){var n=Object(a.a)(["\n  .container {\n    display: flex;\n  }\n\n  .body {\n    flex: 1;\n  }\n\n  .side {\n    flex-shrink: 0;\n    box-sizing: border-box;\n    width: 240px;\n    margin-left: 20px;\n    background: #f8f9f9;\n  }\n\n  .tag-area {\n    padding: 15px;\n    position: sticky;\n    top: 0;\n\n    .title {\n      margin-bottom: 10px;\n      font-weight: 500;\n      font-size: 16px;\n      color: #7f8a93;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .container {\n      display: block;\n    }\n\n    .side {\n      width: auto;\n      margin-top: 50px;\n      margin-left: 0;\n    }\n  }\n"]);return o=function(){return n},n}function r(){var n=Object(a.a)(["\n  margin-bottom: 25px;\n  font-weight: 500;\n  font-size: 30px;\n  color: #97a1a7;\n  letter-spacing: -.04em;\n\n  span {\n    margin-left: 5px;\n    color: #374047;\n  }\n\n  @media screen and (max-width: 768px) {\n    margin-bottom: 20px;\n    font-size: 24px;\n  }\n"]);return r=function(){return n},n}function c(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 130px;\n  color: #fff;\n  background: #07c;\n  box-shadow: inset 0 -7px 17px 0 rgba(0,0,0,.15);\n  overflow: hidden;\n\n  &.init {\n    .copy {\n      letter-spacing: -.04em;\n      opacity: 1;\n      transition: letter-spacing 4s;\n    }\n  }\n\n  .copy {\n    font-weight: 500;\n    font-size: 144px;\n    color: #4a9eda;\n    white-space: nowrap;\n    letter-spacing: .4em;\n    opacity: .3;\n    position: relative;\n    bottom: -26px;\n  }\n\n  @supports (-webkit-text-stroke: 1px) {\n    .copy {\n      color: transparent;\n      -webkit-text-stroke: 1px #7db9e5;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    height: 100px;\n\n    .copy {\n      font-size: 120px;\n    }\n\n    .hello {\n      position: absolute;\n      left: -9999px;\n    }\n  }\n"]);return c=function(){return n},n}var p=i.a.div(c()),s=i.a.h2(r());t.default=i.a.div(o())},222:function(n,t,e){"use strict";e.r(t);var a=e(46),i=e(47),o=e(50),r=e(48),c=e(51),p=e(0),s=e.n(p),l=e(49),f=e(68),u=e(216),d=function(n){function t(){var n,e;Object(a.a)(this,t);for(var i=arguments.length,c=new Array(i),p=0;p<i;p++)c[p]=arguments[p];return(e=Object(o.a)(this,(n=Object(r.a)(t)).call.apply(n,[this].concat(c)))).state={init:!1},e}return Object(c.a)(t,n),Object(i.a)(t,[{key:"componentDidMount",value:function(){var n=this;setTimeout(function(){n.setState(function(){return{init:!0}})},10)}},{key:"render",value:function(){var n=this.state.init;return s.a.createElement(u.Top,{className:"home-head ".concat(n?"init":"")},s.a.createElement("p",{className:"copy"},s.a.createElement("span",{className:"hello"},"Hello")," World"))}}]),t}(p.Component);t.default=Object(f.a)(Object(l.d)("home"))(d)}}]);