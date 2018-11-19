(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{357:function(e,n,t){"use strict";var a=t(1),r=t.n(a),c=t(371),i=t(110);function o(){var e=Object(i.a)(["\n  display: inline-block;\n\n  .link {\n    display: flex;\n    align-items: center;\n    color: #000;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 32px;\n    height: 32px;\n    margin-right: 10px;\n    border-radius: 16px;\n    background: #ccc;\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin: 0;\n    font-size: 14px;\n  }\n\n  .date {\n    margin: 0;\n    font-size: 11px;\n  }\n"]);return o=function(){return e},e}var l=t(111).a.div(o());n.a=function(e){return r.a.createElement(l,null,r.a.createElement(c.a,{to:"/@".concat(e.username),className:"link"},r.a.createElement("img",{src:e.image,alt:"",className:"img"}),r.a.createElement("div",{className:"con"},r.a.createElement("p",{className:"name"},e.username),r.a.createElement("p",{className:"date"},new Date(e.createdAt).toDateString()))))}},358:function(e,n,t){"use strict";var a=t(110),r=t(111);function c(){var e=Object(a.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  p {\n    margin: 0;\n  }\n\n  .article-item {\n    list-style: none;\n    padding: 15px 25px;\n    border-top: 1px solid #ddd;\n\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n\n    .title {\n      font-weight: bold;\n      font-size: 24px;\n      color: #333;\n\n      a {\n        color: inherit;\n        text-decoration: none;\n\n        &:hover,\n        &:focus {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    .info {\n      text-align: right;\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]);return c=function(){return e},e}n.a=r.a.ul(c())},359:function(e,n,t){"use strict";var a=t(1),r=t.n(a),c=t(361),i=t.n(c),o=t(110);function l(){var e=Object(o.a)(["\n  .pagination {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n  }\n\n  li {\n    margin: 5px;\n    list-style: none;\n  }\n\n  .active {\n    font-weight: bold;\n    color: red;\n  }\n"]);return l=function(){return e},e}var s=t(111).a.div(l());n.a=function(e){var n=e.page,t=void 0===n?1:n,a=e.total,c=void 0===a?1:a,o=e.onChange,l=void 0===o?function(){}:o,u=e.countPerPage,p=void 0===u?10:u,m=e.pageLen,g=void 0===m?5:m;return r.a.createElement(s,null,r.a.createElement(i.a,{activePage:t,totalItemsCount:c,onChange:l,itemsCountPerPage:p,pageRangeDisplayed:g,innerClass:"pagination",activeLinkClass:"active",firstPageText:"\ucc98\uc74c",prevPageText:"\uc774\uc804",nextPageText:"\ub2e4\uc74c",lastPageText:"\ub9c8\uc9c0\ub9c9"}))}},382:function(e,n,t){"use strict";t.r(n);var a=t(353),r=t.n(a),c=t(354),i=t(48),o=t(49),l=t(51),s=t(50),u=t(52),p=t(1),m=t.n(p),g=t(371),d=t(109),f=t(36),h=t(357),v=t(358),x=function(e){var n=e.articles;return m.a.createElement(v.a,null,n.map(function(e){return m.a.createElement("li",{key:e.slug,className:"article-item"},m.a.createElement(h.a,{image:e.author.image,username:e.author.username,createdAt:e.createdAt}),m.a.createElement("p",{className:"title"},m.a.createElement(g.a,{to:"/article/".concat(e.slug)},e.title)),m.a.createElement("p",{className:"desc"},e.description),m.a.createElement("div",{className:"info"},m.a.createElement("span",{className:"tag"},"Tag: ",e.tagList.join(", "))))}))},b=t(359),E=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(o)))).state={articlesCount:0,articles:[],page:1},t.fetchArticles=Object(c.a)(r.a.mark(function e(){var n,a,c,i,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.match.params.page?t.props.match.params.page-1:0,t.setState(Object(d.a)(function(e){e.page=n+1})),e.prev=2,t.source=f.a.CancelToken.source(),e.next=6,f.a.Articles.all({page:n,source:t.source});case 6:a=e.sent,c=a.data,i=c.articlesCount,o=c.articles,t.setState(Object(d.a)(function(e){e.articlesCount=i,e.articles=o,e.page=n+1})),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(2);case 14:case"end":return e.stop()}},e,this,[[2,12]])})),t.handlePageChange=function(e){t.props.history.push("/articles/".concat(e))},t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchArticles()}},{key:"componentDidUpdate",value:function(e){e.match.params.page!==this.props.match.params.page&&this.fetchArticles()}},{key:"componentWillUnmount",value:function(){this.source.cancel()}},{key:"render",value:function(){var e=this.state,n=e.articlesCount,t=e.articles,a=e.page,r=Math.ceil(n/10);return m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",null,"Home"),m.a.createElement(g.a,{to:"/form"},"\uae00\ub4f1\ub85d"),m.a.createElement("p",null,a," / ",r),m.a.createElement(x,{articles:t}),m.a.createElement(b.a,{page:a,total:n,onChange:this.handlePageChange}))}}]),n}(p.Component);n.default=E}}]);