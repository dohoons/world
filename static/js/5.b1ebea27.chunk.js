(this.webpackJsonpworld=this.webpackJsonpworld||[]).push([[5,14],{149:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),c=a(634),l=a(114),i=a(0),s=a.n(i),o=a(50),u=a(61),m=a(194),b=a(644),d=a.n(b),f=a(195),p=a(197),g=a(17),v=a(635),j=a(289);t.default=Object(f.hot)((function(e){var t=e.history,a=e.match.params,n=Object(u.c)("form").t,b=Object(p.b)(),f=Object(i.useState)(!1),h=Object(l.a)(f,2),O=h[0],E=h[1],y=Object(i.useState)(!1),N=Object(l.a)(y,2),k=N[0],w=N[1],x=Object(i.useState)({}),C=Object(l.a)(x,2),S=C[0],A=C[1],B=Object(v.a)({slug:"",title:"",description:"",body:"",tag:""}),I=B.form,T=B.setField,F=B.bindInput,M=I.slug,W=I.title,D=I.description,J=I.body,L=I.tag,P=Object(o.c)((function(e){return e.auth})).userInfo,H=Object(i.useRef)(g.a.source()),R=Object(i.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(a){var c,l,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,g.b.Articles.get({slug:a,config:{cancelToken:H.current.token}});case 4:if(c=e.sent,l=c.data,(i=l.article).author.username===P.username){e.next=11;break}return b.error(n("errorModifyAuth")),t.goBack(),e.abrupt("return");case 11:E(!1),T({slug:i.slug,title:i.title,description:i.description,body:i.body,tag:i.tagList.join(", ")}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),e.t0.response&&"404"===e.t0.response.data.status&&t.goBack();case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),[P.username,T,b,n,t]),V=Object(i.useCallback)((function(){H.current.cancel()}),[]);Object(i.useEffect)((function(){return a.slug&&R(a.slug),function(){V()}}),[R,V,a.slug]);return O?s.a.createElement("div",null):s.a.createElement(j.default,{className:"container"},s.a.createElement(m.Helmet,{title:n(M?"headingModify":"headingWrite")}),s.a.createElement("div",{className:"common-form"},s.a.createElement("h2",{className:"form-title"},n(M?"headingModify":"headingWrite")),s.a.createElement("form",{onSubmit:function(e){var r=L.length?L.split(",").map((function(e){return e.trim()})):[];if(e.preventDefault(),function(){var e={};return d.a.isEmpty(W)&&(e.title=n("validate:emptyTitle")),d.a.isEmpty(D)&&(e.description=n("validate:emptyDescription")),d.a.isEmpty(J)&&(e.body=n("validate:emptyBody")),0===Object.keys(e).length||(A(e),!1)}()){w(!0),A({});var c=a.slug?"update":"create";g.b.Articles[c]({article:{slug:M,title:W,description:D,body:J,tagList:r}}).then((function(e){w(!1),t.push("/article/".concat(e.data.article.slug))})).catch((function(e){b.error(n("errorWrite")),w(!1)}))}}},s.a.createElement("fieldset",null,s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},n("title")),s.a.createElement("input",Object.assign({type:"text"},F("title"),{placeholder:n("title"),className:"txt large block",disabled:k}))),S.title&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",S.title)),s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},n("description")),s.a.createElement("input",Object.assign({type:"text"},F("description"),{placeholder:n("description"),className:"txt large block",disabled:k}))),S.description&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",S.description)),s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},n("body")),s.a.createElement("textarea",Object.assign({cols:"60",rows:"10"},F("body"),{placeholder:n("body"),className:"txt large block",disabled:k}))),S.body&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",S.body)),s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},n("tag")),s.a.createElement("input",Object.assign({type:"text"},F("tag"),{placeholder:n("tag"),className:"txt large block",disabled:k})))),k&&s.a.createElement("div",null,n("sending")),s.a.createElement("div",{className:"form-action"},s.a.createElement("button",{type:"submit",className:"btn large primary",disabled:k},n("common:write"))," ",s.a.createElement("button",{type:"button",className:"btn large",disabled:k,onClick:t.goBack},n("common:cancel")))))))}))},289:function(e,t,a){"use strict";a.r(t);var n=a(112),r=a(113);function c(){var e=Object(n.a)(["\n"]);return c=function(){return e},e}t.default=r.a.div(c())},634:function(e,t,a){"use strict";function n(e,t,a,n,r,c,l){try{var i=e[c](l),s=i.value}catch(o){return void a(o)}i.done?t(s):Promise.resolve(s).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,c){var l=e.apply(t,a);function i(e){n(l,r,c,i,s,"next",e)}function s(e){n(l,r,c,i,s,"throw",e)}i(void 0)}))}}a.d(t,"a",(function(){return r}))},635:function(e,t,a){"use strict";var n=a(196),r=a(46),c=a(114),l=a(0);t.a=function(e){var t=Object(l.useState)(e),a=Object(c.a)(t,2),i=a[0],s=a[1],o=Object(l.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if("string"!==typeof t[0])s((function(e){return Object(r.a)({},e,{},t[0])}));else{var c=t[0],l=t[1];s((function(e){return Object(r.a)({},e,Object(n.a)({},c,l))}))}}),[]),u=Object(l.useCallback)(function(e,t){var a;return function(){var n=arguments,r=this,c=function(){return e.apply(r,n)};clearTimeout(a),a=setTimeout(c,t)}}((function(e,t){s((function(a){return Object(r.a)({},a,Object(n.a)({},e,t))}))}),250),[]),m=Object(l.useCallback)((function(e){var t=e.target,a=t.name,c=t.value;s((function(e){return Object(r.a)({},e,Object(n.a)({},a,c))}))}),[]),b=Object(l.useCallback)((function(e){var t=e.target,a=t.name,n=t.value;u(a,n)}),[u]),d=Object(l.useCallback)((function(e,t){var a;return a={name:e},Object(n.a)(a,t?"defaultValue":"value",i[e]),Object(n.a)(a,"onChange",t?b:m),a}),[m,b,i]);return{form:i,setForm:s,setField:o,changeInput:m,bindInput:d}}}}]);