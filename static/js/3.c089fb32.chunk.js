(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{367:function(e,n,t){"use strict";var a=t(113),r=t(114);function i(){var e=Object(a.a)(["\n  box-sizing: border-box;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n"]);return i=function(){return e},e}n.a=r.a.button(i(),function(e){return e.favorited?"\n      color: #fff;\n      background: #07c;\n      border: 1px solid #07c;\n    ":"\n      color: #000;\n      background: #fff;\n      border: 1px solid #ccc;\n    "})},369:function(e,n,t){"use strict";var a=t(1),r=t.n(a),i=t(456),o=t(113);function c(){var e=Object(o.a)(["\n  display: inline-block;\n\n  .link {\n    display: flex;\n    align-items: center;\n    color: #000;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 32px;\n    height: 32px;\n    margin-right: 10px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin: 0;\n    font-size: 14px;\n  }\n\n  .date {\n    margin: 0;\n    font-size: 11px;\n  }\n"]);return c=function(){return e},e}var l=t(114).a.div(c());n.a=function(e){var n=e.username,t=e.image,a=e.createdAt;return r.a.createElement(l,null,r.a.createElement(i.a,{to:"/@".concat(n),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("div",{className:"con"},r.a.createElement("p",{className:"name"},n),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))))}},370:function(e,n,t){"use strict";var a=t(365),r=t.n(a),i=t(366),o=t(49),c=t(50),l=t(52),s=t(51),u=t(53),p=t(1),d=t.n(p),f=t(466),g=t(34),m=t(9),h=t(35),v=t(115),b=t(367),x=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).like=Object(i.a)(r.a.mark(function e(){var n,a,i,o,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state,a=n.slug,i=n.favorited,t.props.user){e.next=4;break}return Object(v.a)(t.props),e.abrupt("return");case 4:return e.prev=4,t.req=m.a.CancelToken.source(),e.next=8,m.a.Articles[i?"unfavorite":"favorite"]({slug:a,source:t.req});case 8:o=e.sent,c=o.data,t.setState(Object(h.a)(function(e){e.favorited=c.article.favorited,e.favoritesCount=c.article.favoritesCount})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}},e,this,[[4,13]])})),t.state={slug:e.slug,favorited:e.favorited,favoritesCount:e.favoritesCount},t}return Object(u.a)(n,e),Object(c.a)(n,[{key:"componentWillUnmount",value:function(){this.req&&this.req.cancel()}},{key:"render",value:function(){var e=this.state,n=e.favorited,t=e.favoritesCount;return d.a.createElement(b.a,{type:"button",onClick:this.like,favorited:n},d.a.createElement("span",{className:"txt"},"\uc88b\uc544\uc694")," ",d.a.createElement("span",{className:"count"},t))}}]),n}(p.Component);x.defaultProps={slug:"",favorited:!1,favoritesCount:0};n.a=Object(f.a)(Object(g.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{}})(x))},380:function(e,n,t){"use strict";var a=t(49),r=t(50),i=t(52),o=t(51),c=t(53),l=t(1),s=t.n(l),u=t(456),p=t(466),d=t(17),f=t(34),g=t(117),m=t(369),h=t(370),v=t(382),b=t.n(v),x=t(113),E=t(114);function j(){var e=Object(x.a)(["\n  .pagination {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n  }\n\n  li {\n    margin: 5px;\n    list-style: none;\n  }\n\n  .active {\n    font-weight: bold;\n    color: red;\n  }\n"]);return j=function(){return e},e}var y=E.a.div(j()),C=function(e){var n=e.page,t=void 0===n?1:n,a=e.total,r=void 0===a?1:a,i=e.onChange,o=void 0===i?function(){}:i,c=e.getPageUrl,l=void 0===c?function(){}:c,u=e.countPerPage,p=void 0===u?10:u,d=e.pageLen,f=void 0===d?5:d;return s.a.createElement(y,null,s.a.createElement(b.a,{activePage:t,totalItemsCount:r,onChange:o,itemsCountPerPage:p,pageRangeDisplayed:f,getPageUrl:l,innerClass:"pagination",activeLinkClass:"active",firstPageText:"\ucc98\uc74c",prevPageText:"\uc774\uc804",nextPageText:"\ub2e4\uc74c",lastPageText:"\ub9c8\uc9c0\ub9c9"}))},O=t(367);function P(){var e=Object(x.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  p {\n    margin: 0;\n  }\n\n  .article-item {\n    list-style: none;\n    padding: 15px 25px;\n    border-top: 1px solid #ddd;\n    position: relative;\n\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n\n    .title {\n      font-weight: bold;\n      font-size: 24px;\n      color: #333;\n\n      a {\n        color: inherit;\n        text-decoration: none;\n\n        &:hover,\n        &:focus {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    .info {\n      text-align: right;\n      font-size: 12px;\n      color: #999;\n    }\n\n    ."," {\n      position: absolute;\n      top: 15px;\n      right: 25px;\n    }\n  }\n"]);return P=function(){return e},e}var k=E.a.ul(P(),O.a.styledComponentId),w=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=t.props,a=n.articleListActions,r=n.username,i=n.filter;a.fetch({filter:i,param:{username:r,page:e-1}})},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.fetch(parseInt(this.props.page))}},{key:"componentDidUpdate",value:function(e){e.page===this.props.page&&e.filter===this.props.filter||this.fetch(parseInt(this.props.page))}},{key:"componentWillUnmount",value:function(){this.props.articleListActions.reset()}},{key:"render",value:function(){var e=this.props,n=e.useTotal,t=e.page,a=e.countPerPage,r=e.handlePageChange,i=e.getPageUrl,o=e.loading,c=e.articles,l=e.articlesCount,p=Math.ceil(l/a);return o?s.a.createElement("div",null,"Loading..."):s.a.createElement(s.a.Fragment,null,n&&s.a.createElement("p",null,t," / ",p),s.a.createElement(k,null,c.map(function(e,n){return s.a.createElement("li",{key:e.slug,className:"article-item"},s.a.createElement(m.a,{image:e.author.image,username:e.author.username,createdAt:e.createdAt}),s.a.createElement("p",{className:"title"},s.a.createElement(u.a,{to:"/article/".concat(e.slug)},e.title)),s.a.createElement("p",{className:"desc"},e.description),s.a.createElement("div",{className:"info"},s.a.createElement("span",{className:"tag"},"Tag: ",e.tagList.join(", "))),s.a.createElement(h.a,{slug:e.slug,favorited:e.favorited,favoritesCount:e.favoritesCount}))})),s.a.createElement(C,{page:parseInt(t),total:l,onChange:r,countPerPage:a,getPageUrl:i}))}}]),n}(l.Component);w.defaultProps={page:1,countPerPage:10};n.a=Object(p.a)(Object(f.b)(function(e){return{loading:e.articleList.loading,articles:e.articleList.articles,articlesCount:e.articleList.articlesCount}},function(e){return{articleListActions:Object(d.b)(g,e)}})(w))},381:function(e,n,t){"use strict";var a=t(1),r=t.n(a),i=t(113);function o(){var e=Object(i.a)(["\n  display: flex;\n  padding: 0;\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    height: 1px;\n    background: #222;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  li {\n    list-style: none;\n\n    &:not(:first-child) {\n      margin-left: -1px;\n    }\n\n    &.selected a {\n      font-weight: bold;\n      color: #222;\n      border: 1px solid #222;\n      border-bottom: 1px solid #fff;\n      position: relative;\n    }\n  }\n\n  a {\n    box-sizing: border-box;\n    display: block;\n    min-width: 110px;\n    padding: 10px 20px;\n    color: #999;\n    text-decoration: none;\n    border: 1px solid #ddd;\n    border-bottom: 1px solid #222;\n  }\n\n  .sub {\n    font-size: .7em;\n  }\n"]);return o=function(){return e},e}var c=t(114).a.ul(o());n.a=function(e){return r.a.createElement(c,null,e.children)}},458:function(e,n,t){"use strict";t.r(n);var a=t(49),r=t(50),i=t(52),o=t(51),c=t(53),l=t(1),s=t.n(l),u=t(456),p=t(34),d=t(380),f=t(381),g=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).isRoot=function(){return"/"===t.props.match.url},t.getListType=function(){return(t.isRoot()||"feed"===t.props.match.url.split("/")[1])&&t.props.user?"feed":"all"},t.getPageUrl=function(e){return"/".concat("feed"===t.getListType()?"feed":"articles","/").concat(e)},t.handlePageChange=function(e){t.props.history.push(t.getPageUrl(e))},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props,n=e.user,t=e.match.params,a=this.getListType(),r=this.isRoot()?t.filter:t.page;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Home"),s.a.createElement(u.a,{to:"/form"},"\uae00\ub4f1\ub85d"),s.a.createElement(f.a,null,n?s.a.createElement("li",{className:"feed"===a?"selected":""},s.a.createElement(u.a,{to:"/feed"},"\ub0b4 \ub2f4\ubcbc\ub77d")):s.a.createElement("li",null,s.a.createElement(u.a,{to:"/feed",onClick:function(e){alert("\ub0b4 \ub2f4\ubcbc\ub77d\uc740 \ub85c\uadf8\uc778 \ud6c4\uc5d0 \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),e.preventDefault()}},"\ub0b4 \ub2f4\ubcbc\ub77d",s.a.createElement("span",{className:"sub"},"(\ub85c\uadf8\uc778 \ud544\uc694)"))),s.a.createElement("li",{className:"all"===a?"selected":""},s.a.createElement(u.a,{to:"/articles"},"\uc804\uccb4 \uae00\ubaa9\ub85d"))),s.a.createElement(d.a,{filter:a,page:r,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,useTotal:!0}))}}]),n}(l.Component);n.default=Object(p.b)(function(e){return{user:e.auth.user}},function(e){return{}})(g)}}]);