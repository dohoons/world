(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{365:function(e,n,t){"use strict";var a=t(113),r=t(114);function i(){var e=Object(a.a)(["\n  box-sizing: border-box;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n"]);return i=function(){return e},e}n.a=r.a.button(i(),function(e){return e.favorited?"\n      color: #fff;\n      background: #07c;\n      border: 1px solid #07c;\n    ":"\n      color: #000;\n      background: #fff;\n      border: 1px solid #ccc;\n    "})},366:function(e,n,t){"use strict";var a=t(1),r=t.n(a),i=t(376),o=t(113);function c(){var e=Object(o.a)(["\n  display: inline-block;\n\n  .link {\n    display: flex;\n    align-items: center;\n    color: #000;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 32px;\n    height: 32px;\n    margin-right: 10px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin: 0;\n    font-size: 14px;\n  }\n\n  .date {\n    margin: 0;\n    font-size: 11px;\n  }\n"]);return c=function(){return e},e}var l=t(114).a.div(c());n.a=function(e){var n=e.username,t=e.image,a=e.createdAt;return r.a.createElement(l,null,r.a.createElement(i.a,{to:"/@".concat(n),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("div",{className:"con"},r.a.createElement("p",{className:"name"},n),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))))}},367:function(e,n,t){"use strict";var a=t(363),r=t.n(a),i=t(364),o=t(50),c=t(51),l=t(53),s=t(52),u=t(54),p=t(1),g=t.n(p),f=t(386),d=t(34),m=t(13),v=t(35),h=t(115),b=t(365),x=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).like=Object(i.a)(r.a.mark(function e(){var n,a,i,o,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state,a=n.slug,i=n.favorited,t.props.user){e.next=4;break}return Object(h.a)(t.props),e.abrupt("return");case 4:return e.prev=4,t.req=m.a.CancelToken.source(),e.next=8,m.a.Articles[i?"unfavorite":"favorite"]({slug:a,source:t.req});case 8:o=e.sent,c=o.data,t.setState(Object(v.a)(function(e){e.favorited=c.article.favorited,e.favoritesCount=c.article.favoritesCount})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}},e,this,[[4,13]])})),t.state={slug:e.slug,favorited:e.favorited,favoritesCount:e.favoritesCount},t}return Object(u.a)(n,e),Object(c.a)(n,[{key:"componentWillUnmount",value:function(){this.req&&this.req.cancel()}},{key:"render",value:function(){var e=this.state,n=e.favorited,t=e.favoritesCount;return g.a.createElement(b.a,{type:"button",onClick:this.like,favorited:n},g.a.createElement("span",{className:"txt"},"\uc88b\uc544\uc694")," ",g.a.createElement("span",{className:"count"},t))}}]),n}(p.Component);x.defaultProps={slug:"",favorited:!1,favoritesCount:0};n.a=Object(f.a)(Object(d.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{}})(x))},370:function(e,n,t){"use strict";var a=t(50),r=t(51),i=t(53),o=t(52),c=t(54),l=t(1),s=t.n(l),u=t(376),p=t(386),g=t(21),f=t(34),d=t(116),m=t(366),v=t(367),h=t(371),b=t.n(h),x=t(113),j=t(114);function E(){var e=Object(x.a)(["\n  .pagination {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n  }\n\n  li {\n    margin: 5px;\n    list-style: none;\n  }\n\n  .active {\n    font-weight: bold;\n    color: red;\n  }\n"]);return E=function(){return e},e}var P=j.a.div(E()),C=function(e){var n=e.page,t=void 0===n?1:n,a=e.total,r=void 0===a?1:a,i=e.onChange,o=void 0===i?function(){}:i,c=e.getPageUrl,l=void 0===c?function(){}:c,u=e.countPerPage,p=void 0===u?10:u,g=e.pageLen,f=void 0===g?5:g;return s.a.createElement(P,null,s.a.createElement(b.a,{activePage:t,totalItemsCount:r,onChange:o,itemsCountPerPage:p,pageRangeDisplayed:f,getPageUrl:l,innerClass:"pagination",activeLinkClass:"active",firstPageText:"\ucc98\uc74c",prevPageText:"\uc774\uc804",nextPageText:"\ub2e4\uc74c",lastPageText:"\ub9c8\uc9c0\ub9c9"}))},O=t(365);function k(){var e=Object(x.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  p {\n    margin: 0;\n  }\n\n  .article-item {\n    list-style: none;\n    padding: 15px 25px;\n    border-top: 1px solid #ddd;\n    position: relative;\n\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n\n    .title {\n      font-weight: bold;\n      font-size: 24px;\n      color: #333;\n\n      a {\n        color: inherit;\n        text-decoration: none;\n\n        &:hover,\n        &:focus {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    .info {\n      text-align: right;\n      font-size: 12px;\n      color: #999;\n    }\n\n    ."," {\n      position: absolute;\n      top: 15px;\n      right: 25px;\n    }\n  }\n"]);return k=function(){return e},e}var y=j.a.ul(k(),O.a.styledComponentId),w=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=t.props,a=n.articleListActions,r=n.username,i=n.filter;a.fetch({filter:i,param:{username:r,page:e-1}})},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.fetch(parseInt(this.props.page))}},{key:"componentDidUpdate",value:function(e){e.page===this.props.page&&e.filter===this.props.filter||this.fetch(parseInt(this.props.page))}},{key:"componentWillUnmount",value:function(){this.props.articleListActions.reset()}},{key:"render",value:function(){var e=this.props,n=e.useTotal,t=e.page,a=e.countPerPage,r=e.handlePageChange,i=e.getPageUrl,o=e.loading,c=e.articles,l=e.articlesCount,p=Math.ceil(l/a);return o?s.a.createElement("div",null,"Loading..."):s.a.createElement(s.a.Fragment,null,n&&s.a.createElement("p",null,t," / ",p),s.a.createElement(y,null,c.map(function(e,n){return s.a.createElement("li",{key:e.slug,className:"article-item"},s.a.createElement(m.a,{image:e.author.image,username:e.author.username,createdAt:e.createdAt}),s.a.createElement("p",{className:"title"},s.a.createElement(u.a,{to:"/article/".concat(e.slug)},e.title)),s.a.createElement("p",{className:"desc"},e.description),s.a.createElement("div",{className:"info"},s.a.createElement("span",{className:"tag"},"Tag: ",e.tagList.join(", "))),s.a.createElement(v.a,{slug:e.slug,favorited:e.favorited,favoritesCount:e.favoritesCount}))})),s.a.createElement(C,{page:parseInt(t),total:l,onChange:r,countPerPage:a,getPageUrl:i}))}}]),n}(l.Component);w.defaultProps={page:1,countPerPage:10};n.a=Object(p.a)(Object(f.b)(function(e){return{loading:e.articleList.loading,articles:e.articleList.articles,articlesCount:e.articleList.articlesCount}},function(e){return{articleListActions:Object(g.b)(d,e)}})(w))},378:function(e,n,t){"use strict";t.r(n);var a=t(50),r=t(51),i=t(53),o=t(52),c=t(54),l=t(1),s=t.n(l),u=t(376),p=t(370),g=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).getPageUrl=function(e){return"/articles/".concat(e)},t.handlePageChange=function(e){t.props.history.push(t.getPageUrl(e))},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props.match;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Home"),s.a.createElement(u.a,{to:"/form"},"\uae00\ub4f1\ub85d"),s.a.createElement(p.a,{page:e.params.page,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,useTotal:!0}))}}]),n}(l.Component);n.default=g}}]);