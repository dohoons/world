(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{382:function(e,n,t){"use strict";var a=t(112),r=t(113);function o(){var e=Object(a.a)(["\n  box-sizing: border-box;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n"]);return o=function(){return e},e}n.a=r.a.button(o(),function(e){return e.favorited?"\n      color: #fff;\n      background: #07c;\n      border: 1px solid #07c;\n    ":"\n      color: #000;\n      background: #fff;\n      border: 1px solid #ccc;\n    "})},384:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(471),i=t(112);function c(){var e=Object(i.a)(["\n  display: inline-block;\n\n  .link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 32px;\n    height: 32px;\n    margin-right: 10px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin: 0;\n    font-size: 14px;\n  }\n\n  .date {\n    margin: 0;\n    font-size: 11px;\n  }\n"]);return c=function(){return e},e}var l=t(113).a.div(c());n.a=function(e){var n=e.username,t=e.image,a=e.createdAt;return r.a.createElement(l,null,r.a.createElement(o.a,{to:"/@".concat(n),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("div",{className:"con"},r.a.createElement("p",{className:"name"},n),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))))}},385:function(e,n,t){"use strict";var a=t(380),r=t.n(a),o=t(381),i=t(49),c=t(50),l=t(52),s=t(51),u=t(53),p=t(0),d=t.n(p),f=t(482),m=t(36),g=t(9),h=t(23),b=t(115),v=t(382),x=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).like=Object(o.a)(r.a.mark(function e(){var n,a,o,i,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state,a=n.slug,o=n.favorited,t.props.user){e.next=4;break}return Object(b.a)(t.props),e.abrupt("return");case 4:return e.prev=4,t.req=g.a.CancelToken.source(),e.next=8,g.a.Articles[o?"unfavorite":"favorite"]({slug:a,source:t.req});case 8:i=e.sent,c=i.data,t.setState(Object(h.a)(function(e){e.favorited=c.article.favorited,e.favoritesCount=c.article.favoritesCount})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}},e,this,[[4,13]])})),t.state={slug:e.slug,favorited:e.favorited,favoritesCount:e.favoritesCount},t}return Object(u.a)(n,e),Object(c.a)(n,[{key:"componentWillUnmount",value:function(){this.req&&this.req.cancel()}},{key:"render",value:function(){var e=this.state,n=e.favorited,t=e.favoritesCount;return d.a.createElement(v.a,{type:"button",onClick:this.like,favorited:n},d.a.createElement("span",{className:"txt"},"\uc88b\uc544\uc694")," ",d.a.createElement("span",{className:"count"},t))}}]),n}(p.Component);x.defaultProps={slug:"",favorited:!1,favoritesCount:0};n.a=Object(f.a)(Object(m.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{}})(x))},395:function(e,n,t){"use strict";var a=t(49),r=t(50),o=t(52),i=t(51),c=t(53),l=t(0),s=t.n(l),u=t(471),p=t(482),d=t(17),f=t(36),m=t(117),g=t(118),h=t.n(g),b=t(384),v=t(385),x=t(397),E=t.n(x),y=t(112),w=t(113);function j(){var e=Object(y.a)(["\n  margin-top: 30px;\n\n  .pagination {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    flex-shrink: 0;\n    text-align: center;\n    font-size: 14px;\n    color: #7f8a93;\n    background: #ebedee;\n    list-style: none;\n    transition: all .2s;\n\n    &:not(:first-child) {\n      border-left: 1px solid #cfd3d6;\n    }\n\n    &:first-child {\n      border-radius: 5px 0 0 5px;\n    }\n\n    &:last-child {\n      border-radius: 0 5px 5px 0;\n    }\n\n    &.active {\n      font-weight: 500;\n      color: #fff;\n      background: #07c;\n    }\n    \n    &:not(.active) {\n      &:hover,\n      &:focus {\n        color: #374047;\n        background: #dee1e3;\n      }\n    }\n  }\n\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    min-width: 30px;\n    height: 30px;\n    padding: 0 5px;\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .txt {\n    display: block;\n    width: 100%;\n    height: 100%;\n    font-size: 0;\n  }\n"]);return j=function(){return e},e}var k=w.a.div(j()),O=function(e){var n=e.page,t=void 0===n?1:n,a=e.total,r=void 0===a?1:a,o=e.onChange,i=void 0===o?function(){}:o,c=e.getPageUrl,l=void 0===c?function(){}:c,u=e.countPerPage,p=void 0===u?10:u,d=e.pageLen,f=void 0===d?5:d;return s.a.createElement(k,null,s.a.createElement(E.a,{activePage:t,totalItemsCount:r,onChange:i,itemsCountPerPage:p,pageRangeDisplayed:f,getPageUrl:l,innerClass:"pagination",activeLinkClass:"active",firstPageText:s.a.createElement("span",{className:"fas fa-angle-double-left"},s.a.createElement("span",{className:"txt"},"\ucc98\uc74c")),prevPageText:s.a.createElement("span",{className:"fas fa-angle-left"},s.a.createElement("span",{className:"txt"},"\uc774\uc804")),nextPageText:s.a.createElement("span",{className:"fas fa-angle-right"},s.a.createElement("span",{className:"txt"},"\ub2e4\uc74c")),lastPageText:s.a.createElement("span",{className:"fas fa-angle-double-right"},s.a.createElement("span",{className:"txt"},"\ub9c8\uc9c0\ub9c9"))}))},C=t(382);function P(){var e=Object(y.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  p {\n    margin: 0;\n  }\n\n  .article-item {\n    list-style: none;\n    padding: 15px 25px;\n    border-top: 1px solid #ddd;\n    position: relative;\n\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n\n    .title {\n      font-weight: 500;\n      font-size: 24px;\n      color: #333;\n\n      a {\n        color: inherit;\n        text-decoration: none;\n\n        &:hover,\n        &:focus {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    .info {\n      text-align: right;\n      font-size: 12px;\n      color: #999;\n    }\n\n    ."," {\n      position: absolute;\n      top: 15px;\n      right: 25px;\n    }\n  }\n"]);return P=function(){return e},e}function N(){var e=Object(y.a)(["\n  > div {\n    padding: 15px 25px;\n    border-top: 1px solid #ddd;\n\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n  }\n"]);return N=function(){return e},e}function A(){var e=Object(y.a)(["\n  margin-bottom: 10px;\n"]);return A=function(){return e},e}var L=w.a.p(A()),U=w.a.div(N()),z=w.a.ul(P(),C.a.styledComponentId),T=function(){return s.a.createElement(U,null,s.a.createElement(h.a,{showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},s.a.createElement("div",null)),s.a.createElement(h.a,{showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},s.a.createElement("div",null)),s.a.createElement(h.a,{showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},s.a.createElement("div",null)),s.a.createElement(h.a,{showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},s.a.createElement("div",null)),s.a.createElement(h.a,{showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},s.a.createElement("div",null)))},I=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(c)))).fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=t.props,a=n.articleListActions,r=n.username,o=n.filter;a.fetch({filter:o,param:{username:r,page:e-1}})},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.fetch(parseInt(this.props.page))}},{key:"componentDidUpdate",value:function(e){e.page===this.props.page&&e.filter===this.props.filter||this.fetch(parseInt(this.props.page))}},{key:"componentWillUnmount",value:function(){this.props.articleListActions.reset()}},{key:"render",value:function(){var e=this.props,n=e.useTotal,t=e.page,a=e.countPerPage,r=e.handlePageChange,o=e.getPageUrl,i=e.loading,c=e.articles,l=e.articlesCount,p=Math.ceil(l/a);return s.a.createElement(s.a.Fragment,null,n&&s.a.createElement(L,null,t," / ",p),s.a.createElement(h.a,{ready:!i,customPlaceholder:s.a.createElement(T,null)},s.a.createElement(z,null,c.map(function(e,n){return s.a.createElement("li",{key:e.slug,className:"article-item"},s.a.createElement(b.a,{image:e.author.image,username:e.author.username,createdAt:e.createdAt}),s.a.createElement("p",{className:"title"},s.a.createElement(u.a,{to:"/article/".concat(e.slug)},e.title)),s.a.createElement("p",{className:"desc"},e.description),s.a.createElement("div",{className:"info"},s.a.createElement("span",{className:"tag"},"Tag: ",e.tagList.join(", "))),s.a.createElement(v.a,{slug:e.slug,favorited:e.favorited,favoritesCount:e.favoritesCount}))}))),s.a.createElement(O,{page:parseInt(t),total:l,onChange:r,countPerPage:a,getPageUrl:o}))}}]),n}(l.Component);I.defaultProps={page:1,countPerPage:10};n.a=Object(p.a)(Object(f.b)(function(e){return{loading:e.articleList.loading,articles:e.articleList.articles,articlesCount:e.articleList.articlesCount}},function(e){return{articleListActions:Object(d.b)(m,e)}})(I))},396:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(112);function i(){var e=Object(o.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding: 0;\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    height: 1px;\n    background: #004d84;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  li {\n    list-style: none;\n\n    &:not(:first-child) {\n      margin-left: -1px;\n    }\n\n    &.selected a {\n      font-weight: 500;\n      color: #00365d;\n      border: 1px solid #004d84;\n      border-bottom: 1px solid #fff;\n      position: relative;\n    }\n  }\n\n  a {\n    box-sizing: border-box;\n    display: block;\n    min-width: 110px;\n    padding: 10px 20px;\n    text-align: center;\n    color: #97a1a7;\n    text-decoration: none;\n    border: 1px solid #bec4c8;\n    border-bottom: 1px solid #004d84;\n  }\n\n  .sub {\n    font-size: .7em;\n  }\n"]);return i=function(){return e},e}var c=t(113).a.ul(i());n.a=function(e){return r.a.createElement(c,null,e.children)}},479:function(e,n,t){"use strict";t.r(n);var a=t(49),r=t(50),o=t(52),i=t(51),c=t(53),l=t(0),s=t.n(l),u=t(471),p=t(380),d=t.n(p),f=t(381),m=t(482),g=t(17),h=t(36),b=t(156),v=t(115),x=t(112);function E(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 20px 30px;\n  background: #ebedee;\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    width: 110px;\n    height: 110px;\n    margin-bottom: 10px;\n    border-radius: 55px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .username {\n    margin: 0;\n    font-weight: 500;\n    font-size: 26px;\n    color: #222;\n\n    a {\n      color: inherit;\n      text-decoration: none;\n\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .bio {\n    margin-top: 10px;\n    font-size: 14px;\n    color: #999;\n  }\n\n  .action {\n    width: 100%;\n    margin-top: 20px;\n    padding-top: 20px;\n    text-align: center;\n    border-top: 1px solid #ccc;\n  }\n"]);return E=function(){return e},e}var y=t(113).a.div(E()),w=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(c)))).follow=function(){var e=Object(f.a)(d.a.mark(function e(n){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.props.user){e.next=3;break}return Object(v.a)(t.props),e.abrupt("return");case 3:t.props.profileAction[n?"follow":"unfollow"](t.props.username);case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.profileAction.fetch(this.props.username)}},{key:"componentDidUpdate",value:function(e){e.username!==this.props.username&&this.props.profileAction.fetch(this.props.username)}},{key:"componentWillUnmount",value:function(){this.props.profileAction.reset()}},{key:"render",value:function(){var e=this,n=this.props,t=n.user,a=n.userInfo,r=n.loading,o=n.profile,i=n.history;if(r)return s.a.createElement("div",null,"Loading...");var c=o.username,l=o.bio,p=o.image,d=o.following,f=void 0!==c&&c===a.username,m=!f&&!1===d,g=!f&&!0===d;return s.a.createElement(y,null,s.a.createElement(u.a,{to:"/@".concat(c)},s.a.createElement("div",{className:"img"},s.a.createElement("img",{src:p||"".concat("/world","/assets/profile-dummy.jpg"),alt:""}))),s.a.createElement("h2",{className:"username"},s.a.createElement(u.a,{to:"/@".concat(c)},c)),s.a.createElement("p",{className:"bio"},l),c&&s.a.createElement("div",{className:"action"},(m||!t)&&s.a.createElement("button",{type:"button",className:"btn light",onClick:function(){e.follow(!0)}},"Follow ",c),g&&s.a.createElement("button",{type:"button",className:"btn light",onClick:function(){e.follow(!1)}},"Unfollow ",c),f&&s.a.createElement("button",{type:"button",className:"btn light",onClick:function(){i.push("/profile")}},"\ud504\ub85c\ud544 \uc218\uc815")))}}]),n}(l.Component),j=Object(m.a)(Object(h.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo,profile:e.profile.profile}},function(e){return{profileAction:Object(g.b)(b,e)}})(w)),k=t(395),O=t(396),C=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(c)))).isRoot=function(){return void 0===t.props.match.params.filter},t.getListType=function(){return t.isRoot()||"articles"===t.props.match.params.filter?"articles":"favorites"},t.getPageUrl=function(e){var n=t.props.match.params.username;return"/@".concat(n,"/").concat(t.getListType(),"/").concat(e)},t.handlePageChange=function(e){t.props.history.push(t.getPageUrl(e))},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props.match.params,n=e.username,t=this.getListType(),a=this.isRoot()?e.filter:e.page;return s.a.createElement(s.a.Fragment,null,s.a.createElement(j,{username:n}),s.a.createElement("div",{className:"container"},s.a.createElement(O.a,null,s.a.createElement("li",{className:"articles"===t?"selected":""},s.a.createElement(u.a,{to:"/@".concat(n)},"\ub4f1\ub85d\ud55c \uae00")),s.a.createElement("li",{className:"favorites"===t?"selected":""},s.a.createElement(u.a,{to:"/@".concat(n,"/favorites")},"\uc88b\uc544\ud558\ub294 \uae00"))),s.a.createElement(k.a,{username:n,filter:t,page:a,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,useTotal:!0,countPerPage:5})))}}]),n}(l.Component);n.default=C}}]);