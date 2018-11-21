(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{358:function(e,n,t){"use strict";var a=t(1),r=t.n(a),i=t(373),o=t(111);function c(){var e=Object(o.a)(["\n  display: inline-block;\n\n  .link {\n    display: flex;\n    align-items: center;\n    color: #000;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 32px;\n    height: 32px;\n    margin-right: 10px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin: 0;\n    font-size: 14px;\n  }\n\n  .date {\n    margin: 0;\n    font-size: 11px;\n  }\n"]);return c=function(){return e},e}var l=t(112).a.div(c());n.a=function(e){var n=e.username,t=e.image,a=e.createdAt;return r.a.createElement(l,null,r.a.createElement(i.a,{to:"/@".concat(n),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("div",{className:"con"},r.a.createElement("p",{className:"name"},n),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))))}},359:function(e,n,t){"use strict";var a=t(354),r=t.n(a),i=t(360),o=t(355),c=t(50),l=t(51),s=t(53),u=t(49),p=t(52),g=t(1),d=t(34),f=t(110),m=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={done:!1,data:null},t}return Object(p.a)(n,e),Object(l.a)(n,[{key:"componentWillUnmount",value:function(){this.source.cancel()}},{key:"initialize",value:function(){var e=Object(o.a)(r.a.mark(function e(n){var t,a,o,c,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.api,a=void 0===t?function(){}:t,o=n.param,e.prev=1,this.source=d.a.CancelToken.source(),e.next=5,a(Object(i.a)({},o,{source:this.source}));case 5:c=e.sent,l=c.data,this.setState(Object(f.a)(function(e){e.done=!0,e.data=l})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null}}]),n}(g.Component);n.a=m},361:function(e,n,t){"use strict";var a=t(354),r=t.n(a),i=t(355),o=t(50),c=t(51),l=t(114),s=t(53),u=t(52),p=t(49),g=t(364),d=t(1),f=t.n(d),m=t(373),h=t(33),v=t(110),b=t(34),x=t(359),k=t(358),j=t(362),y=t.n(j),O=t(111),E=t(112);function P(){var e=Object(O.a)(["\n  .pagination {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n  }\n\n  li {\n    margin: 5px;\n    list-style: none;\n  }\n\n  .active {\n    font-weight: bold;\n    color: red;\n  }\n"]);return P=function(){return e},e}var w=E.a.div(P()),C=function(e){var n=e.page,t=void 0===n?1:n,a=e.total,r=void 0===a?1:a,i=e.onChange,o=void 0===i?function(){}:i,c=e.getPageUrl,l=void 0===c?function(){}:c,s=e.countPerPage,u=void 0===s?10:s,p=e.pageLen,g=void 0===p?5:p;return f.a.createElement(w,null,f.a.createElement(y.a,{activePage:t,totalItemsCount:r,onChange:o,itemsCountPerPage:u,pageRangeDisplayed:g,getPageUrl:l,innerClass:"pagination",activeLinkClass:"active",firstPageText:"\ucc98\uc74c",prevPageText:"\uc774\uc804",nextPageText:"\ub2e4\uc74c",lastPageText:"\ub9c8\uc9c0\ub9c9"}))};function N(){var e=Object(O.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  p {\n    margin: 0;\n  }\n\n  .article-item {\n    list-style: none;\n    padding: 15px 25px;\n    border-top: 1px solid #ddd;\n    position: relative;\n\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n\n    .title {\n      font-weight: bold;\n      font-size: 24px;\n      color: #333;\n\n      a {\n        color: inherit;\n        text-decoration: none;\n\n        &:hover,\n        &:focus {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    .info {\n      text-align: right;\n      font-size: 12px;\n      color: #999;\n    }\n\n    .btn-like {\n      box-sizing: border-box;\n      height: 25px;\n      line-height: 25px;\n      padding: 0 5px;\n      font-size: 12px;\n      color: #000;\n      background: #fff;\n      border: 1px solid #ccc;\n      border-radius: 5px;\n      position: absolute;\n      top: 15px;\n      right: 25px;\n\n      &.favorited {\n        color: #fff;\n        background: #07c;\n        border-color: #07c;\n      }\n    }\n  }\n"]);return N=function(){return e},e}var z=E.a.ul(N()),U=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(c)))).state={page:1},t.initialize=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t.setState(Object(v.a)(function(n){n.page=e}));var a=t.props,r=a.username,i=a.filter;Object(g.a)(Object(p.a)(n.prototype),"initialize",Object(l.a)(t)).call(Object(l.a)(t),{api:b.a.Articles[i?{articles:"byAuthor",favorites:"favoritedBy"}[i]:"all"],param:{username:r,page:e-1}})},t.like=function(e){return Object(i.a)(r.a.mark(function n(){var a,i,o,c,l;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.state.data.articles[e],i=a.slug,o=a.favorited,n.prev=1,t.likeReq=b.a.CancelToken.source(),n.next=5,b.a.Articles[o?"unfavorite":"favorite"]({slug:i,source:t.likeReq});case 5:c=n.sent,l=c.data,t.setState(Object(v.a)(function(n){n.data.articles[e].favorited=l.article.favorited,n.data.articles[e].favoritesCount=l.article.favoritesCount})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}},n,this,[[1,10]])}))},t}return Object(u.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){this.initialize(parseInt(this.props.page))}},{key:"componentDidUpdate",value:function(e){e.page===this.props.page&&e.filter===this.props.filter||this.initialize(parseInt(this.props.page))}},{key:"componentWillUnmount",value:function(){this.likeReq&&this.likeReq.cancel()}},{key:"render",value:function(){var e=this,n=this.props,t=n.useTotal,a=n.countPerPage,r=n.handlePageChange,i=n.getPageUrl,o=this.state,c=o.done,l=o.page,s=o.data;if(!c)return f.a.createElement("div",null,"Loading...");var u=s.articlesCount,p=s.articles,g=Math.ceil(u/a);return f.a.createElement(f.a.Fragment,null,t&&f.a.createElement("p",null,l," / ",g),f.a.createElement(z,null,p.map(function(n,t){return f.a.createElement("li",{key:n.slug,className:"article-item"},f.a.createElement(k.a,{image:n.author.image,username:n.author.username,createdAt:n.createdAt}),f.a.createElement("p",{className:"title"},f.a.createElement(m.a,{to:"/article/".concat(n.slug)},n.title)),f.a.createElement("p",{className:"desc"},n.description),f.a.createElement("div",{className:"info"},f.a.createElement("span",{className:"tag"},"Tag: ",n.tagList.join(", "))),f.a.createElement("button",{type:"button",onClick:e.like(t),className:n.favorited?"btn-like favorited":"btn-like"},f.a.createElement("span",{className:"txt"},"\uc88b\uc544\uc694")," ",f.a.createElement("span",{className:"count"},n.favoritesCount)))})),f.a.createElement(C,{page:l,total:u,onChange:r,countPerPage:a,getPageUrl:i}))}}]),n}(x.a);U.defaultProps={page:1,countPerPage:10};n.a=Object(h.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{}})(U)},375:function(e,n,t){"use strict";t.r(n);var a=t(50),r=t(51),i=t(53),o=t(49),c=t(52),l=t(1),s=t.n(l),u=t(373),p=t(361),g=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).getPageUrl=function(e){return"/articles/".concat(e)},t.handlePageChange=function(e){t.props.history.push(t.getPageUrl(e))},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props,n=e.history,t=e.match;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Home"),s.a.createElement(u.a,{to:"/form"},"\uae00\ub4f1\ub85d"),s.a.createElement(p.a,{page:t.params.page,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,history:n,useTotal:!0}))}}]),n}(l.Component);n.default=g}}]);