(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{372:function(n,e,t){"use strict";var a=t(112),r=t(113);function i(){var n=Object(a.a)(["\n  box-sizing: border-box;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n"]);return i=function(){return n},n}e.a=r.a.button(i(),function(n){return n.favorited?"\n      color: #fff;\n      background: #07c;\n      border: 1px solid #07c;\n    ":"\n      color: #000;\n      background: #fff;\n      border: 1px solid #ccc;\n    "})},374:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(461),o=t(112);function c(){var n=Object(o.a)(["\n  display: inline-block;\n\n  .link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 32px;\n    height: 32px;\n    margin-right: 10px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin: 0;\n    font-size: 14px;\n  }\n\n  .date {\n    margin: 0;\n    font-size: 11px;\n  }\n"]);return c=function(){return n},n}var s=t(113).a.div(c());e.a=function(n){var e=n.username,t=n.image,a=n.createdAt;return r.a.createElement(s,null,r.a.createElement(i.a,{to:"/@".concat(e),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("div",{className:"con"},r.a.createElement("p",{className:"name"},e),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))))}},375:function(n,e,t){"use strict";var a=t(370),r=t.n(a),i=t(371),o=t(49),c=t(50),s=t(52),l=t(51),u=t(53),p=t(0),f=t.n(p),d=t(472),g=t(36),m=t(9),h=t(23),b=t(115),v=t(372),x=function(n){function e(n){var t;return Object(o.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).like=Object(i.a)(r.a.mark(function n(){var e,a,i,o,c;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.state,a=e.slug,i=e.favorited,t.props.user){n.next=4;break}return Object(b.a)(t.props),n.abrupt("return");case 4:return n.prev=4,t.req=m.a.CancelToken.source(),n.next=8,m.a.Articles[i?"unfavorite":"favorite"]({slug:a,source:t.req});case 8:o=n.sent,c=o.data,t.setState(Object(h.a)(function(n){n.favorited=c.article.favorited,n.favoritesCount=c.article.favoritesCount})),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(4),console.log(n.t0);case 16:case"end":return n.stop()}},n,this,[[4,13]])})),t.state={slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount},t}return Object(u.a)(e,n),Object(c.a)(e,[{key:"componentWillUnmount",value:function(){this.req&&this.req.cancel()}},{key:"render",value:function(){var n=this.state,e=n.favorited,t=n.favoritesCount;return f.a.createElement(v.a,{type:"button",onClick:this.like,favorited:e},f.a.createElement("span",{className:"txt"},"\uc88b\uc544\uc694")," ",f.a.createElement("span",{className:"count"},t))}}]),e}(p.Component);x.defaultProps={slug:"",favorited:!1,favoritesCount:0};e.a=Object(d.a)(Object(g.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo}},function(n){return{}})(x))},385:function(n,e,t){"use strict";var a=t(49),r=t(50),i=t(52),o=t(51),c=t(53),s=t(0),l=t.n(s),u=t(461),p=t(472),f=t(17),d=t(36),g=t(117),m=t(374),h=t(375),b=t(387),v=t.n(b),x=t(112),E=t(113);function y(){var n=Object(x.a)(["\n  margin-top: 30px;\n\n  .pagination {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    flex-shrink: 0;\n    text-align: center;\n    font-size: 14px;\n    color: #7f8a93;\n    background: #ebedee;\n    list-style: none;\n    transition: all .2s;\n\n    &:not(:first-child) {\n      border-left: 1px solid #cfd3d6;\n    }\n\n    &:first-child {\n      border-radius: 5px 0 0 5px;\n    }\n\n    &:last-child {\n      border-radius: 0 5px 5px 0;\n    }\n\n    &.active {\n      font-weight: 500;\n      color: #fff;\n      background: #07c;\n    }\n    \n    &:not(.active) {\n      &:hover,\n      &:focus {\n        color: #374047;\n        background: #dee1e3;\n      }\n    }\n  }\n\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    min-width: 30px;\n    height: 30px;\n    padding: 0 5px;\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .txt {\n    display: block;\n    width: 100%;\n    height: 100%;\n    font-size: 0;\n  }\n"]);return y=function(){return n},n}var j=E.a.div(y()),k=function(n){var e=n.page,t=void 0===e?1:e,a=n.total,r=void 0===a?1:a,i=n.onChange,o=void 0===i?function(){}:i,c=n.getPageUrl,s=void 0===c?function(){}:c,u=n.countPerPage,p=void 0===u?10:u,f=n.pageLen,d=void 0===f?5:f;return l.a.createElement(j,null,l.a.createElement(v.a,{activePage:t,totalItemsCount:r,onChange:o,itemsCountPerPage:p,pageRangeDisplayed:d,getPageUrl:s,innerClass:"pagination",activeLinkClass:"active",firstPageText:l.a.createElement("span",{className:"fas fa-angle-double-left"},l.a.createElement("span",{className:"txt"},"\ucc98\uc74c")),prevPageText:l.a.createElement("span",{className:"fas fa-angle-left"},l.a.createElement("span",{className:"txt"},"\uc774\uc804")),nextPageText:l.a.createElement("span",{className:"fas fa-angle-right"},l.a.createElement("span",{className:"txt"},"\ub2e4\uc74c")),lastPageText:l.a.createElement("span",{className:"fas fa-angle-double-right"},l.a.createElement("span",{className:"txt"},"\ub9c8\uc9c0\ub9c9"))}))},O=t(372);function C(){var n=Object(x.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  p {\n    margin: 0;\n  }\n\n  .article-item {\n    list-style: none;\n    padding: 15px 25px;\n    border-top: 1px solid #ddd;\n    position: relative;\n\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n\n    .title {\n      font-weight: 500;\n      font-size: 24px;\n      color: #333;\n\n      a {\n        color: inherit;\n        text-decoration: none;\n\n        &:hover,\n        &:focus {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    .info {\n      text-align: right;\n      font-size: 12px;\n      color: #999;\n    }\n\n    ."," {\n      position: absolute;\n      top: 15px;\n      right: 25px;\n    }\n  }\n"]);return C=function(){return n},n}function P(){var n=Object(x.a)(["\n  margin-bottom: 10px;\n"]);return P=function(){return n},n}var w=E.a.p(P()),N=E.a.ul(C(),O.a.styledComponentId),z=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).fetch=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=t.props,a=e.articleListActions,r=e.username,i=e.filter;a.fetch({filter:i,param:{username:r,page:n-1}})},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.fetch(parseInt(this.props.page))}},{key:"componentDidUpdate",value:function(n){n.page===this.props.page&&n.filter===this.props.filter||this.fetch(parseInt(this.props.page))}},{key:"componentWillUnmount",value:function(){this.props.articleListActions.reset()}},{key:"render",value:function(){var n=this.props,e=n.useTotal,t=n.page,a=n.countPerPage,r=n.handlePageChange,i=n.getPageUrl,o=n.loading,c=n.articles,s=n.articlesCount,p=Math.ceil(s/a);return o?l.a.createElement("div",null,"Loading..."):l.a.createElement(l.a.Fragment,null,e&&l.a.createElement(w,null,t," / ",p),l.a.createElement(N,null,c.map(function(n,e){return l.a.createElement("li",{key:n.slug,className:"article-item"},l.a.createElement(m.a,{image:n.author.image,username:n.author.username,createdAt:n.createdAt}),l.a.createElement("p",{className:"title"},l.a.createElement(u.a,{to:"/article/".concat(n.slug)},n.title)),l.a.createElement("p",{className:"desc"},n.description),l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"tag"},"Tag: ",n.tagList.join(", "))),l.a.createElement(h.a,{slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount}))})),l.a.createElement(k,{page:parseInt(t),total:s,onChange:r,countPerPage:a,getPageUrl:i}))}}]),e}(s.Component);z.defaultProps={page:1,countPerPage:10};e.a=Object(p.a)(Object(d.b)(function(n){return{loading:n.articleList.loading,articles:n.articleList.articles,articlesCount:n.articleList.articlesCount}},function(n){return{articleListActions:Object(f.b)(g,n)}})(z))},386:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(112);function o(){var n=Object(i.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding: 0;\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    height: 1px;\n    background: #004d84;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  li {\n    list-style: none;\n\n    &:not(:first-child) {\n      margin-left: -1px;\n    }\n\n    &.selected a {\n      font-weight: 500;\n      color: #00365d;\n      border: 1px solid #004d84;\n      border-bottom: 1px solid #fff;\n      position: relative;\n    }\n  }\n\n  a {\n    box-sizing: border-box;\n    display: block;\n    min-width: 110px;\n    padding: 10px 20px;\n    text-align: center;\n    color: #97a1a7;\n    text-decoration: none;\n    border: 1px solid #bec4c8;\n    border-bottom: 1px solid #004d84;\n  }\n\n  .sub {\n    font-size: .7em;\n  }\n"]);return o=function(){return n},n}var c=t(113).a.ul(o());e.a=function(n){return r.a.createElement(c,null,n.children)}},470:function(n,e,t){"use strict";t.r(e);var a=t(49),r=t(50),i=t(52),o=t(51),c=t(53),s=t(0),l=t.n(s),u=t(461),p=t(36),f=t(385),d=t(386),g=t(112),m=t(113);function h(){var n=Object(g.a)(["\n  \n"]);return h=function(){return n},n}function b(){var n=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 130px;\n  color: #fff;\n  background: #07c;\n  box-shadow: inset 0 -7px 17px 0 rgba(0,0,0,.15);\n  overflow: hidden;\n\n  &.init {\n    .copy {\n      letter-spacing: -.04em;\n      opacity: 1;\n      transition: letter-spacing 4s;\n    }\n  }\n\n  .copy {\n    font-weight: 500;\n    font-size: 144px;\n    color: transparent;\n    -webkit-text-stroke: 1px #7db9e5;\n    white-space: nowrap;\n    letter-spacing: .4em;\n    opacity: .3;\n    position: relative;\n    bottom: -26px;\n  }\n\n  @media screen and (max-width: 768px) {\n    height: 100px;\n\n    .copy {\n      font-size: 120px;\n    }\n\n    .hello {\n      position: absolute;\n      left: -9999px;\n    }\n  }\n"]);return b=function(){return n},n}var v=m.a.div(b()),x=m.a.div(h()),E=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).state={init:!1},t.isRoot=function(){return"/"===t.props.match.url},t.getListType=function(){return(t.isRoot()||"feed"===t.props.match.url.split("/")[1])&&t.props.user?"feed":"all"},t.getPageUrl=function(n){return"/".concat("feed"===t.getListType()?"feed":"articles","/").concat(n)},t.handlePageChange=function(n){t.props.history.push(t.getPageUrl(n))},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){var n=this;setTimeout(function(){n.setState(function(){return{init:!0}})},10)}},{key:"render",value:function(){var n=this.props,e=n.user,t=n.match.params,a=this.state.init,r=this.getListType(),i=this.isRoot()?t.filter:t.page;return l.a.createElement(x,null,l.a.createElement(v,{className:"home-head ".concat(a?"init":"")},l.a.createElement("p",{className:"copy"},l.a.createElement("span",{className:"hello"},"Hello")," World")),l.a.createElement("div",{className:"container"},l.a.createElement(d.a,null,e?l.a.createElement("li",{className:"feed"===r?"selected":""},l.a.createElement(u.a,{to:"/feed"},"\ub0b4 \ub2f4\ubcbc\ub77d")):l.a.createElement("li",null,l.a.createElement(u.a,{to:"/feed",onClick:function(n){alert("\ub0b4 \ub2f4\ubcbc\ub77d\uc740 \ub85c\uadf8\uc778 \ud6c4\uc5d0 \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),n.preventDefault()}},"\ub0b4 \ub2f4\ubcbc\ub77d",l.a.createElement("span",{className:"sub"},"(\ub85c\uadf8\uc778 \ud544\uc694)"))),l.a.createElement("li",{className:"all"===r?"selected":""},l.a.createElement(u.a,{to:"/articles"},"\uc804\uccb4 \uae00\ubaa9\ub85d"))),l.a.createElement(f.a,{filter:r,page:i,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,useTotal:!0})))}}]),e}(s.Component);e.default=Object(p.b)(function(n){return{user:n.auth.user}},function(n){return{}})(E)}}]);