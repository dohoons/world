(this.webpackJsonpworld=this.webpackJsonpworld||[]).push([[1],{645:function(e,n,t){"use strict";function a(e,n,t,a,r,i,s){try{var o=e[i](s),l=o.value}catch(c){return void t(c)}o.done?n(l):Promise.resolve(l).then(a,r)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function o(e){a(s,r,i,o,l,"next",e)}function l(e){a(s,r,i,o,l,"throw",e)}o(void 0)}))}}t.d(n,"a",(function(){return r}))},647:function(e,n,t){"use strict";var a=t(112),r=t(113);function i(){var e=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ",";\n\n  &:empty {\n    display: none;\n  }\n\n  a {\n    display: block;\n    height: ",";\n    line-height: ",";\n    margin: 0 4px 4px 0;\n    padding: 0 10px;\n    font-weight: 300;\n    font-size: ",";\n    color: #97a1a7;\n    text-decoration: none;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #cfd3d6;\n    border-radius: ",";\n    transition: all .2s;\n\n    &:hover,\n    &:focus {\n      color: #374047;\n      border-color: #97a1a7;\n    }\n\n    &.selected {\n      color: #07c;\n      border-color: #07c;\n    }\n  }\n"]);return i=function(){return e},e}n.a=r.a.ul(i(),(function(e){return e.small&&"4px"}),(function(e){return e.small?"16px":"22px"}),(function(e){return e.small?"14px":"20px"}),(function(e){return e.small?"11px":"12px"}),(function(e){return e.small?"8px":"10px"}))},649:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(40),s=t(647);n.a=r.a.memo((function(e){var n=e.tags,t=e.currentTag,a=e.small;return r.a.createElement(s.a,{small:a},n.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(i.Link,{to:"/tag/".concat(encodeURIComponent(e)),className:e===t?"selected":""},e))})))}))},650:function(e,n,t){"use strict";n.a=function(e){return e.push({pathname:"/login",state:{prevLocation:e.location.pathname,loginMsg:!0}}),null}},651:function(e,n,t){"use strict";var a=t(268),r=t(0),i=t.n(r),s=t(40),o=t(49),l=t(109),c=t(198),u=t.n(c),p=t(658),f=t(659),d=t(60),g=t(736),m=t.n(g),h=t(112),v=t(113);function b(){var e=Object(h.a)(["\n  margin-top: 30px;\n\n  .pagination {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    flex-shrink: 0;\n    text-align: center;\n    font-size: 14px;\n    color: #7f8a93;\n    background: #ebedee;\n    list-style: none;\n    transition: all .2s;\n\n    &:not(:first-child) {\n      border-left: 1px solid #cfd3d6;\n    }\n\n    &:first-child {\n      border-radius: 5px 0 0 5px;\n    }\n\n    &:last-child {\n      border-radius: 0 5px 5px 0;\n    }\n\n    &.active {\n      font-weight: 500;\n      color: #fff;\n      background: #07c;\n    }\n    \n    &:not(.active) {\n      &:hover,\n      &:focus {\n        color: #374047;\n        background: #dee1e3;\n      }\n    }\n  }\n\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    min-width: 36px;\n    height: 36px;\n    padding: 0 5px;\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .txt {\n    display: block;\n    width: 100%;\n    height: 100%;\n    font-size: 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    a {\n      min-width: 30px;\n      height: 30px;\n    }\n  }\n"]);return b=function(){return e},e}var x=v.a.div(b()),y=i.a.memo((function(e){var n=e.page,t=void 0===n?1:n,a=e.total,r=void 0===a?1:a,s=e.onChange,o=void 0===s?function(){}:s,l=e.getPageUrl,c=void 0===l?function(){}:l,u=e.countPerPage,p=void 0===u?10:u,f=e.pageLen,g=void 0===f?5:f,h=Object(d.c)("components").t;return i.a.createElement(x,null,i.a.createElement(m.a,{activePage:t,totalItemsCount:r,onChange:o,itemsCountPerPage:p,pageRangeDisplayed:g,getPageUrl:c,innerClass:"pagination",activeLinkClass:"active",firstPageText:i.a.createElement("span",{className:"fas fa-angle-double-left"},i.a.createElement("span",{className:"txt"},h("pagination.first"))),prevPageText:i.a.createElement("span",{className:"fas fa-angle-left"},i.a.createElement("span",{className:"txt"},h("pagination.prev"))),nextPageText:i.a.createElement("span",{className:"fas fa-angle-right"},i.a.createElement("span",{className:"txt"},h("pagination.next"))),lastPageText:i.a.createElement("span",{className:"fas fa-angle-double-right"},i.a.createElement("span",{className:"txt"},h("pagination.last")))}))})),k=t(649),C=t(653),P=t(647),_=t(654);function E(){var e=Object(h.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  .article-item {\n    list-style: none;\n    padding: 22px 0 17px 20px;\n    border-top: 1px solid #ddd;\n    position: relative;\n  }\n\n  .title {\n    padding-right: 60px;\n    line-height: 1.3;\n    font-weight: 500;\n    font-size: 22px;\n    color: #07c;\n    word-wrap: break-word;\n\n    a {\n      color: inherit;\n      text-decoration: none;\n\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .desc {\n    margin-top: 4px;\n    word-wrap: break-word;\n    font-size: 14px;\n    color: #374047;\n  }\n\n  .info {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 15px;\n  }\n\n  "," {\n    justify-content: flex-end;\n    margin-left: 10px;\n    margin-right: -4px;\n  }\n\n  "," {\n    flex-shrink: 0;\n  }\n\n  "," {\n    position: absolute;\n    top: 23px;\n    right: 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    .article-item {\n      padding: 15px 0 12px 0;\n    }\n\n    .title {\n      font-size: 18px;\n    }\n\n    .desc {\n      font-size: 13px;\n    }\n\n    .info {\n      display: block;\n      margin-top: 15px;\n    }\n\n    "," {\n      justify-content: flex-start;\n      margin-top: 10px;\n      margin-left: 0;\n      margin-right: 0;\n    }\n\n    "," {\n      top: 17px;\n    }\n  }\n"]);return E=function(){return e},e}function w(){var e=Object(h.a)(["\n  > div {\n    padding: 22px 20px 17px;\n    border-top: 1px solid #ddd;\n  }\n"]);return w=function(){return e},e}function j(){var e=Object(h.a)(["\n  margin-bottom: 10px;\n"]);return j=function(){return e},e}var O=v.a.p(j()),N=v.a.div(w()),T=v.a.ul(E(),P.a,C.a,_.a,P.a,_.a),L=function(){return i.a.createElement(N,null,Object(a.a)(Array(5).keys()).map((function(e){return i.a.createElement(u.a,{key:e,showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},i.a.createElement("div",null))})))},D=function(e){var n=e.username,t=e.filter,a=e.tag,c=e.useTotal,d=e.page,g=void 0===d?1:d,m=e.countPerPage,h=e.handlePageChange,v=e.getPageUrl,b=Object(o.c)((function(e){return e.articleList})),x=b.loading,C=b.articles,P=b.articlesCount,_=Object(o.b)(),E=Object(r.useCallback)((function(){_(l.c({filter:t,param:{username:n,page:parseInt(g)-1,tag:a}}))}),[_,t,g,a,n]);Object(r.useEffect)((function(){return E(),function(){_(l.d())}}),[_,E]);var w=Math.ceil(P/m);return i.a.createElement(i.a.Fragment,null,c&&i.a.createElement(O,null,g," / ",w),i.a.createElement(u.a,{ready:!x,customPlaceholder:i.a.createElement(L,null)},i.a.createElement(T,null,C.map((function(e,n){return i.a.createElement("li",{key:e.slug,className:"article-item"},i.a.createElement("p",{className:"title"},i.a.createElement(s.Link,{to:"/article/".concat(e.slug)},e.title)),i.a.createElement("p",{className:"desc"},e.description),i.a.createElement("div",{className:"info"},i.a.createElement(p.a,{image:e.author.image,username:e.author.username,createdAt:e.createdAt}),i.a.createElement(k.a,{tags:e.tagList,currentTag:a,small:!0})),i.a.createElement(f.a,{slug:e.slug,favorited:e.favorited,favoritesCount:e.favoritesCount}))})))),i.a.createElement(y,{page:parseInt(g),total:P,onChange:h,countPerPage:m,getPageUrl:v}))};D.defaultProps={page:1,countPerPage:10};n.a=D},653:function(e,n,t){"use strict";var a=t(112),r=t(113);function i(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n\n  .link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 16px;\n    overflow: hidden;\n    background: url('","/assets/profile-dummy.jpg') no-repeat 0 0 / 100%;\n\n    img {\n      width: 100%;\n      height: 100%;\n      vertical-align: top;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin-left: 10px;\n    font-size: 13px;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: inherit;\n    opacity: .6;\n  }\n"]);return i=function(){return e},e}n.a=r.a.div(i(),"/world")},654:function(e,n,t){"use strict";var a=t(112),r=t(113);function i(){var e=Object(a.a)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border: 1px solid #07c;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n\n  .txt {\n    position: absolute;\n    left: -9999px;\n  }\n\n  .count {\n    margin-left: 5px;\n  }\n\n  .loading {\n    animation: spin 1s infinite linear;\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return i=function(){return e},e}n.a=r.a.button(i(),(function(e){return e.favorited?"\n      color: #fff;\n      background: #07c;\n\n      i {\n        color: #fff;\n      }\n    ":"\n      color: #07c;\n      background: #fff;\n\n      i {\n        color: #07c;\n      }\n    "}))},658:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(40),s=t(653);n.a=r.a.memo((function(e){var n=e.username,t=e.image,a=e.createdAt;return r.a.createElement(s.a,null,r.a.createElement(i.Link,{to:"/@".concat(n),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("p",{className:"name"},n)),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))}))},659:function(e,n,t){"use strict";var a=t(3),r=t.n(a),i=t(645),s=t(114),o=t(0),l=t.n(o),c=t(48),u=t(49),p=t(60),f=t(18),d=t(650),g=t(654),m=function(e){var n=Object(c.m)().slug,t=Object(c.k)(),a=Object(p.c)("components").t,m=Object(u.c)((function(e){return e.auth})).user,h=Object(o.useState)(!1),v=Object(s.a)(h,2),b=v[0],x=v[1],y=Object(o.useState)(null),k=Object(s.a)(y,2),C=k[0],P=k[1],_=Object(o.useState)(e.favorited),E=Object(s.a)(_,2),w=E[0],j=E[1],O=Object(o.useState)(e.favoritesCount),N=Object(s.a)(O,2),T=N[0],L=N[1];Object(o.useEffect)((function(){return function(){C&&C.cancel()}}),[C]);var D=function(){var e=Object(i.a)(r.a.mark((function e(){var a,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=3;break}return Object(d.a)(t),e.abrupt("return");case 3:return e.prev=3,a=f.a.CancelToken.source(),P(a),x(!0),e.next=9,f.a.Articles[w?"unfavorite":"favorite"]({slug:n,config:{cancelToken:a.token}});case 9:i=e.sent,s=i.data,x(!1),j(s.article.favorited),L(s.article.favoritesCount),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(g.a,{type:"button",onClick:D,favorited:w},b?l.a.createElement("i",{className:"fas fa-spinner loading"}):l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-heart"}),l.a.createElement("span",{className:"txt"},a("like.actionText"))," ",l.a.createElement("span",{className:"count"},T)))};m.defaultProps={slug:"",favorited:!1,favoritesCount:0},n.a=m},674:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var s=r.apply(null,a);s&&e.push(s)}else if("object"===i)for(var o in a)t.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},736:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),r=l(t(0)),i=(l(t(8)),l(t(737))),s=l(t(738)),o=l(t(674));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.default.Component),a(n,[{key:"isFirstPageVisible",value:function(e){var n=this.props,t=n.hideDisabled;return n.hideNavigation,!(n.hideFirstLastPages||t&&!e)}},{key:"isPrevPageVisible",value:function(e){var n=this.props,t=n.hideDisabled;return!(n.hideNavigation||t&&!e)}},{key:"isNextPageVisible",value:function(e){var n=this.props,t=n.hideDisabled;return!(n.hideNavigation||t&&!e)}},{key:"isLastPageVisible",value:function(e){var n=this.props,t=n.hideDisabled;return n.hideNavigation,!(n.hideFirstLastPages||t&&!e)}},{key:"buildPages",value:function(){for(var e=[],n=this.props,t=n.itemsCountPerPage,a=n.pageRangeDisplayed,l=n.activePage,c=n.prevPageText,u=n.nextPageText,p=n.firstPageText,f=n.lastPageText,d=n.totalItemsCount,g=n.onChange,m=n.activeClass,h=n.itemClass,v=n.itemClassFirst,b=n.itemClassPrev,x=n.itemClassNext,y=n.itemClassLast,k=n.activeLinkClass,C=n.disabledClass,P=(n.hideDisabled,n.hideNavigation,n.linkClass),_=n.linkClassFirst,E=n.linkClassPrev,w=n.linkClassNext,j=n.linkClassLast,O=(n.hideFirstLastPages,n.getPageUrl),N=new i.default(t,a).build(d,l),T=N.first_page;T<=N.last_page;T++)e.push(r.default.createElement(s.default,{isActive:T===l,key:T,href:O(T),pageNumber:T,pageText:T+"",onClick:g,itemClass:h,linkClass:P,activeClass:m,activeLinkClass:k}));return this.isPrevPageVisible(N.has_previous_page)&&e.unshift(r.default.createElement(s.default,{key:"prev"+N.previous_page,pageNumber:N.previous_page,onClick:g,pageText:c,isDisabled:!N.has_previous_page,itemClass:(0,o.default)(h,b),linkClass:(0,o.default)(P,E),disabledClass:C})),this.isFirstPageVisible(N.has_previous_page)&&e.unshift(r.default.createElement(s.default,{key:"first",pageNumber:1,onClick:g,pageText:p,isDisabled:!N.has_previous_page,itemClass:(0,o.default)(h,v),linkClass:(0,o.default)(P,_),disabledClass:C})),this.isNextPageVisible(N.has_next_page)&&e.push(r.default.createElement(s.default,{key:"next"+N.next_page,pageNumber:N.next_page,onClick:g,pageText:u,isDisabled:!N.has_next_page,itemClass:(0,o.default)(h,x),linkClass:(0,o.default)(P,w),disabledClass:C})),this.isLastPageVisible(N.has_next_page)&&e.push(r.default.createElement(s.default,{key:"last",pageNumber:N.total_pages,onClick:g,pageText:f,isDisabled:N.current_page===N.total_pages,itemClass:(0,o.default)(h,y),linkClass:(0,o.default)(P,j),disabledClass:C})),e}},{key:"render",value:function(){var e=this.buildPages();return r.default.createElement("ul",{className:this.props.innerClass},e)}}]),n}();c.defaultProps={itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}},n.default=c},737:function(e,n){function t(e,n){if(!(this instanceof t))return new t(e,n);this.per_page=e||25,this.length=n||10}e.exports=t,t.prototype.build=function(e,n){var t=Math.ceil(e/this.per_page);e=parseInt(e,10),(n=parseInt(n,10)||1)<1&&(n=1),n>t&&(n=t);var a=Math.max(1,n-Math.floor(this.length/2)),r=Math.min(t,n+Math.floor(this.length/2));r-a+1<this.length&&(n<t/2?r=Math.min(t,r+(this.length-(r-a))):a=Math.max(1,a-(this.length-(r-a)))),r-a+1>this.length&&(n>t/2?a++:r--);var i=this.per_page*(n-1);i<0&&(i=0);var s=this.per_page*n-1;return s<0&&(s=0),s>Math.max(e-1,0)&&(s=Math.max(e-1,0)),{total_pages:t,pages:Math.min(r-a+1,t),current_page:n,first_page:a,last_page:r,previous_page:n-1,next_page:n+1,has_previous_page:n>1,has_next_page:n<t,total_results:e,results:Math.min(s-i+1,e),first_result:i,last_result:s}}},738:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),r=t(0),i=o(r),s=(o(t(8)),o(t(674)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.Component),a(n,[{key:"handleClick",value:function(e){var n=this.props,t=n.isDisabled,a=n.pageNumber;e.preventDefault(),t||this.props.onClick(a)}},{key:"render",value:function(){var e,n=this.props,t=n.pageText,a=(n.pageNumber,n.activeClass),r=n.itemClass,o=n.linkClass,c=n.activeLinkClass,u=n.disabledClass,p=n.isActive,f=n.isDisabled,d=n.href,g=(0,s.default)(r,(l(e={},a,p),l(e,u,f),e)),m=(0,s.default)(o,l({},c,p));return i.default.createElement("li",{className:g,onClick:this.handleClick.bind(this)},i.default.createElement("a",{className:m,href:d},t))}}]),n}();c.defaultProps={activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"},n.default=c}}]);