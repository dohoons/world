(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{396:function(n,e,t){"use strict";var a=t(116),r=t(117);function o(){var n=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  &:empty {\n    display: none;\n  }\n\n  a {\n    display: block;\n    height: 22px;\n    line-height: 20px;\n    margin: 0 4px 4px 0;\n    padding: 0 10px;\n    font-weight: 300;\n    font-size: 12px;\n    color: #97a1a7;\n    text-decoration: none;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #cfd3d6;\n    border-radius: 10px;\n    transition: all .2s;\n\n    &:hover,\n    &:focus {\n      color: #374047;\n      border-color: #97a1a7;\n    }\n\n    &.selected {\n      color: #07c;\n      border-color: #07c;\n    }\n  }\n"]);return o=function(){return n},n}e.a=r.a.ul(o())},397:function(n,e,t){"use strict";var a=t(116),r=t(117);function o(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n\n  .link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin-left: 10px;\n    font-size: 13px;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: inherit;\n    opacity: .6;\n  }\n"]);return o=function(){return n},n}e.a=r.a.div(o())},398:function(n,e,t){"use strict";var a=t(116),r=t(117);function o(){var n=Object(a.a)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border: 1px solid #07c;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n\n  .txt {\n    position: absolute;\n    left: -9999px;\n  }\n\n  .count {\n    margin-left: 5px;\n  }\n\n  .loading {\n    animation: spin 1s infinite linear;\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return o=function(){return n},n}e.a=r.a.button(o(),function(n){return n.favorited?"\n      color: #fff;\n      background: #07c;\n\n      i {\n        color: #fff;\n      }\n    ":"\n      color: #07c;\n      background: #fff;\n\n      i {\n        color: #07c;\n      }\n    "})},400:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(488),i=t(397);e.a=function(n){var e=n.username,t=n.image,a=n.createdAt;return r.a.createElement(i.a,null,r.a.createElement(o.a,{to:"/@".concat(e),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("p",{className:"name"},e)),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))}},401:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(488),i=t(396);e.a=function(n){var e=n.tags,t=n.currentTag;return r.a.createElement(i.a,null,e.map(function(n){return r.a.createElement("li",{key:n},r.a.createElement(o.a,{to:"/tag/".concat(n),className:n===t?"selected":""},n))}))}},402:function(n,e,t){"use strict";var a=t(394),r=t.n(a),o=t(395),i=t(50),c=t(51),l=t(53),s=t(52),u=t(54),p=t(0),d=t.n(p),f=t(498),m=t(36),g=t(8),h=t(15),b=t(118),x=t(398),v=function(n){function e(n){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this,n))).like=Object(o.a)(r.a.mark(function n(){var e,a,o,i,c;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.state,a=e.slug,o=e.favorited,t.props.user){n.next=4;break}return Object(b.a)(t.props),n.abrupt("return");case 4:return n.prev=4,t.setState(Object(h.a)(function(n){n.loading=!0})),t.req=g.a.CancelToken.source(),n.next=9,g.a.Articles[o?"unfavorite":"favorite"]({slug:a,source:t.req});case 9:i=n.sent,c=i.data,t.setState(Object(h.a)(function(n){n.loading=!1,n.favorited=c.article.favorited,n.favoritesCount=c.article.favoritesCount})),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),console.log(n.t0);case 17:case"end":return n.stop()}},n,this,[[4,14]])})),t.state={slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount},t}return Object(u.a)(e,n),Object(c.a)(e,[{key:"componentWillUnmount",value:function(){this.req&&this.req.cancel()}},{key:"render",value:function(){var n=this.state,e=n.loading,t=n.favorited,a=n.favoritesCount;return d.a.createElement(x.a,{type:"button",onClick:this.like,favorited:t},e?d.a.createElement("i",{className:"fas fa-spinner loading"}):d.a.createElement(d.a.Fragment,null,d.a.createElement("i",{className:"fas fa-heart"}),d.a.createElement("span",{className:"txt"},"\uc88b\uc544\uc694")," ",d.a.createElement("span",{className:"count"},a)))}}]),e}(p.Component);v.defaultProps={loading:!1,slug:"",favorited:!1,favoritesCount:0};e.a=Object(f.a)(Object(m.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo}},function(n){return{}})(v))},412:function(n,e,t){"use strict";var a=t(50),r=t(51),o=t(53),i=t(52),c=t(54),l=t(0),s=t.n(l),u=t(488),p=t(498),d=t(18),f=t(36),m=t(122),g=t(119),h=t.n(g),b=t(400),x=t(402),v=t(414),E=t.n(v),y=t(116),w=t(117);function j(){var n=Object(y.a)(["\n  margin-top: 30px;\n\n  .pagination {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    flex-shrink: 0;\n    text-align: center;\n    font-size: 14px;\n    color: #7f8a93;\n    background: #ebedee;\n    list-style: none;\n    transition: all .2s;\n\n    &:not(:first-child) {\n      border-left: 1px solid #cfd3d6;\n    }\n\n    &:first-child {\n      border-radius: 5px 0 0 5px;\n    }\n\n    &:last-child {\n      border-radius: 0 5px 5px 0;\n    }\n\n    &.active {\n      font-weight: 500;\n      color: #fff;\n      background: #07c;\n    }\n    \n    &:not(.active) {\n      &:hover,\n      &:focus {\n        color: #374047;\n        background: #dee1e3;\n      }\n    }\n  }\n\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    min-width: 30px;\n    height: 30px;\n    padding: 0 5px;\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .txt {\n    display: block;\n    width: 100%;\n    height: 100%;\n    font-size: 0;\n  }\n"]);return j=function(){return n},n}var O=w.a.div(j()),k=function(n){var e=n.page,t=void 0===e?1:e,a=n.total,r=void 0===a?1:a,o=n.onChange,i=void 0===o?function(){}:o,c=n.getPageUrl,l=void 0===c?function(){}:c,u=n.countPerPage,p=void 0===u?10:u,d=n.pageLen,f=void 0===d?5:d;return s.a.createElement(O,null,s.a.createElement(E.a,{activePage:t,totalItemsCount:r,onChange:i,itemsCountPerPage:p,pageRangeDisplayed:f,getPageUrl:l,innerClass:"pagination",activeLinkClass:"active",firstPageText:s.a.createElement("span",{className:"fas fa-angle-double-left"},s.a.createElement("span",{className:"txt"},"\ucc98\uc74c")),prevPageText:s.a.createElement("span",{className:"fas fa-angle-left"},s.a.createElement("span",{className:"txt"},"\uc774\uc804")),nextPageText:s.a.createElement("span",{className:"fas fa-angle-right"},s.a.createElement("span",{className:"txt"},"\ub2e4\uc74c")),lastPageText:s.a.createElement("span",{className:"fas fa-angle-double-right"},s.a.createElement("span",{className:"txt"},"\ub9c8\uc9c0\ub9c9"))}))},P=t(401),C=t(397),N=t(396),A=t(398);function z(){var n=Object(y.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  .article-item {\n    list-style: none;\n    padding: 22px 0 17px 25px;\n    border-top: 1px solid #ddd;\n    position: relative;\n  }\n\n  .title {\n    padding-right: 60px;\n    line-height: 1.3;\n    font-weight: 500;\n    font-size: 22px;\n    color: #07c;\n    word-wrap: break-word;\n\n    a {\n      color: inherit;\n      text-decoration: none;\n\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .desc {\n    margin-top: 4px;\n    word-wrap: break-word;\n    font-size: 14px;\n    color: #374047;\n  }\n\n  .info {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 15px;\n  }\n\n  "," {\n    justify-content: flex-end;\n    margin-right: -4px;\n  }\n\n  "," {\n    flex-shrink: 0;\n  }\n\n  "," {\n    position: absolute;\n    top: 23px;\n    right: 0;\n  }\n"]);return z=function(){return n},n}function L(){var n=Object(y.a)(["\n  > div {\n    padding: 22px 25px 17px;\n    border-top: 1px solid #ddd;\n  }\n"]);return L=function(){return n},n}function T(){var n=Object(y.a)(["\n  margin-bottom: 10px;\n"]);return T=function(){return n},n}var U=w.a.p(T()),D=w.a.div(L()),I=w.a.ul(z(),N.a,C.a,A.a),q=function(){return s.a.createElement(D,null,s.a.createElement(h.a,{showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},s.a.createElement("div",null)),s.a.createElement(h.a,{showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},s.a.createElement("div",null)),s.a.createElement(h.a,{showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},s.a.createElement("div",null)),s.a.createElement(h.a,{showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},s.a.createElement("div",null)),s.a.createElement(h.a,{showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},s.a.createElement("div",null)))},F=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(c)))).fetch=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=t.props,a=e.articleListActions,r=e.username,o=e.filter,i=e.tag;a.fetch({filter:o,param:{username:r,page:n-1,tag:i}})},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.fetch(parseInt(this.props.page))}},{key:"componentDidUpdate",value:function(n){n.page===this.props.page&&n.filter===this.props.filter||this.fetch(parseInt(this.props.page))}},{key:"componentWillUnmount",value:function(){this.props.articleListActions.reset()}},{key:"render",value:function(){var n=this.props,e=n.useTotal,t=n.page,a=n.countPerPage,r=n.handlePageChange,o=n.getPageUrl,i=n.loading,c=n.articles,l=n.articlesCount,p=n.tag,d=Math.ceil(l/a);return s.a.createElement(s.a.Fragment,null,e&&s.a.createElement(U,null,t," / ",d),s.a.createElement(h.a,{ready:!i,customPlaceholder:s.a.createElement(q,null)},s.a.createElement(I,null,c.map(function(n,e){return s.a.createElement("li",{key:n.slug,className:"article-item"},s.a.createElement("p",{className:"title"},s.a.createElement(u.a,{to:"/article/".concat(n.slug)},n.title)),s.a.createElement("p",{className:"desc"},n.description),s.a.createElement("div",{className:"info"},s.a.createElement(b.a,{image:n.author.image,username:n.author.username,createdAt:n.createdAt}),s.a.createElement(P.a,{tags:n.tagList,currentTag:p})),s.a.createElement(x.a,{slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount}))}))),s.a.createElement(k,{page:parseInt(t),total:l,onChange:r,countPerPage:a,getPageUrl:o}))}}]),e}(l.Component);F.defaultProps={page:1,countPerPage:10};e.a=Object(p.a)(Object(f.b)(function(n){return{loading:n.articleList.loading,articles:n.articleList.articles,articlesCount:n.articleList.articlesCount}},function(n){return{articleListActions:Object(d.b)(m,n)}})(F))},413:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(116);function i(){var n=Object(o.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding: 0;\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    height: 1px;\n    background: #004d84;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  li {\n    list-style: none;\n\n    &:not(:first-child) {\n      margin-left: -1px;\n    }\n\n    &.selected a {\n      font-weight: 500;\n      color: #00365d;\n      border: 1px solid #004d84;\n      border-bottom: 1px solid #fff;\n      position: relative;\n    }\n  }\n\n  a {\n    box-sizing: border-box;\n    display: block;\n    min-width: 110px;\n    padding: 10px 20px;\n    text-align: center;\n    color: #97a1a7;\n    text-decoration: none;\n    border: 1px solid #bec4c8;\n    border-bottom: 1px solid #004d84;\n  }\n\n  .sub {\n    font-size: .7em;\n  }\n"]);return i=function(){return n},n}var c=t(117).a.ul(i());e.a=function(n){return r.a.createElement(c,null,n.children)}},497:function(n,e,t){"use strict";t.r(e);var a=t(50),r=t(51),o=t(53),i=t(52),c=t(54),l=t(0),s=t.n(l),u=t(488),p=t(498),d=t(500),f=t(489),m=t(36),g=t(18),h=t(161),b=t(81),x=t(412),v=t(413),E=t(401),y=t(116),w=t(117);function j(){var n=Object(y.a)(["\n  .container {\n    display: flex;\n  }\n\n  .body {\n    flex: 1;\n  }\n\n  .side {\n    flex-shrink: 0;\n    box-sizing: border-box;\n    width: 240px;\n    margin-left: 20px;\n    background: #f8f9f9;\n  }\n\n  .tag-area {\n    padding: 15px;\n    position: sticky;\n    top: 0;\n\n    .title {\n      margin-bottom: 10px;\n      font-weight: 500;\n      font-size: 16px;\n      color: #7f8a93;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .container {\n      display: block;\n    }\n\n    .side {\n      width: auto;\n      margin-top: 50px;\n      margin-left: 0;\n    }\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(y.a)(["\n  margin-bottom: 25px;\n  font-weight: 500;\n  font-size: 30px;\n  color: #97a1a7;\n  letter-spacing: -.04em;\n\n  span {\n    color: #374047;\n  }\n"]);return O=function(){return n},n}function k(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 130px;\n  color: #fff;\n  background: #07c;\n  box-shadow: inset 0 -7px 17px 0 rgba(0,0,0,.15);\n  overflow: hidden;\n\n  &.init {\n    .copy {\n      letter-spacing: -.04em;\n      opacity: 1;\n      transition: letter-spacing 4s;\n    }\n  }\n\n  .copy {\n    font-weight: 500;\n    font-size: 144px;\n    color: transparent;\n    -webkit-text-stroke: 1px #7db9e5;\n    white-space: nowrap;\n    letter-spacing: .4em;\n    opacity: .3;\n    position: relative;\n    bottom: -26px;\n  }\n\n  @media screen and (max-width: 768px) {\n    height: 100px;\n\n    .copy {\n      font-size: 120px;\n    }\n\n    .hello {\n      position: absolute;\n      left: -9999px;\n    }\n  }\n"]);return k=function(){return n},n}var P=w.a.div(k()),C=w.a.h2(O()),N=w.a.div(j()),A=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(c)))).isRoot=function(){return"/"===t.props.match.url},t.getListType=function(){return(t.isRoot()||"feed"===t.props.match.url.split("/")[1])&&t.props.user?"feed":"all"},t.getPageUrl=function(n){return"/".concat("feed"===t.getListType()?"feed":"articles","/").concat(n)},t.handlePageChange=function(n){t.props.history.push(t.getPageUrl(n))},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){var n=this.props,e=n.user,t=n.match.params,a=this.getListType(),r=this.isRoot()?t.filter:t.page;return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,null,e?s.a.createElement("li",{className:"feed"===a?"selected":""},s.a.createElement(u.a,{to:"/feed"},"\ub0b4 \ub2f4\ubcbc\ub77d")):s.a.createElement("li",null,s.a.createElement(u.a,{to:"/feed",onClick:function(n){alert("\ub0b4 \ub2f4\ubcbc\ub77d\uc740 \ub85c\uadf8\uc778 \ud6c4\uc5d0 \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),n.preventDefault()}},"\ub0b4 \ub2f4\ubcbc\ub77d",s.a.createElement("span",{className:"sub"},"(\ub85c\uadf8\uc778 \ud544\uc694)"))),s.a.createElement("li",{className:"all"===a?"selected":""},s.a.createElement(u.a,{to:"/articles"},"\uc804\uccb4 \uae00\ubaa9\ub85d"))),s.a.createElement(x.a,{filter:a,page:r,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,useTotal:!0}))}}]),e}(l.Component),z=Object(p.a)(A),L=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(c)))).handlePageChange=function(n){t.props.history.push("/tag/".concat(t.props.match.params.tag,"/").concat(n))},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){var n=this.props.match.params,e=n.tag,t=n.page;return s.a.createElement(s.a.Fragment,null,s.a.createElement(C,null,"Tag ",s.a.createElement("span",null,"#",e)),s.a.createElement(x.a,{filter:"tag",tag:e,page:t,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,useTotal:!0}))}}]),e}(l.Component),T=Object(p.a)(L),U=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(c)))).state={init:!1},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){var n=this;setTimeout(function(){n.setState(function(){return{init:!0}})},10),this.props.tagsActions.fetch()}},{key:"render",value:function(){var n=this,e=this.props.tags,t=this.state.init;return s.a.createElement(N,null,s.a.createElement(P,{className:"home-head ".concat(t?"init":"")},s.a.createElement("p",{className:"copy"},s.a.createElement("span",{className:"hello"},"Hello")," World")),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"body"},s.a.createElement(d.a,null,s.a.createElement(f.a,{path:"/articles/:page?",component:function(){return s.a.createElement(z,{user:n.props.user})}}),s.a.createElement(f.a,{path:"/feed/:page?",component:Object(b.a)(function(){return s.a.createElement(z,{user:n.props.user})})}),s.a.createElement(f.a,{path:"/tag/:tag/:page?",component:Object(b.a)(function(){return s.a.createElement(T,{user:n.props.user})})}),s.a.createElement(f.a,{component:function(){return s.a.createElement(z,{user:n.props.user})}}))),s.a.createElement("div",{className:"side"},s.a.createElement("div",{className:"tag-area"},s.a.createElement("h2",{className:"title"},"\uc778\uae30 \ud0dc\uadf8"),s.a.createElement(E.a,{tags:e})))))}}]),e}(l.Component);e.default=Object(m.b)(function(n){return{user:n.auth.user,tags:n.tags.tags}},function(n){return{tagsActions:Object(g.b)(h,n)}})(U)}}]);