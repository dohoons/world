(this.webpackJsonpworld=this.webpackJsonpworld||[]).push([[4,18],{155:function(e,a,t){"use strict";t.r(a);var n=t(4),r=t.n(n),c=t(46),s=t(644),l=t(115),i=t(0),m=t.n(i),o=t(199),u=t(53),f=t(64),b=t(198),d=t(654),p=t.n(d),E=t(50),v=t(659),g=t(645),h=t(308);a.default=Object(o.hot)((function(e){var a=e.history,t=Object(f.c)("profileEdit").t,n=Object(v.a)(),o=Object(u.c)((function(e){return e.auth})),d=o.userInfo,j=o.loading,O=o.error,N=Object(u.b)(),w=Object(i.useState)({}),y=Object(l.a)(w,2),k=y[0],x=y[1],C=Object(g.a)({image:d.image||"",username:d.username||"",bio:d.bio||"",email:d.email||"",password:""}),L=C.form,P=C.bindInput,I=L.image,U=L.username,S=L.bio,B=L.email,F=L.password;Object(i.useEffect)((function(){return function(){N(E.j())}}),[N,d]);var J=function(){var e={};return p.a.isEmpty(U)?e.username=t("validate:emptyUsername"):p.a.isLength(U,{min:1,max:20})||(e.username=t("validate:lengthUsername")),p.a.isEmpty(B)?e.email=t("validate:emptyEmail"):p.a.isEmail(B)||(e.email=t("validate:notEmail")),p.a.isEmpty(F)||p.a.isLength(F,{min:8})||(e.password=t("validate:lengthPassword")),0===Object.keys(e).length||(x(e),!1)},T=function(){var e=Object(s.a)(r.a.mark((function e(t){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x({}),!J()){e.next=12;break}return s=Object(c.a)({image:I,bio:S,email:B},U!==d.username&&{username:U},{},""!==F&&{password:F}),e.prev=3,e.next=6,N(E.k({user:s}));case 6:void 0===s.username?n():a.push("/@".concat(s.username)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:t.preventDefault();case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(a){return e.apply(this,arguments)}}(),A=j||"test@naver.com"===B;return m.a.createElement(h.default,{className:"container"},m.a.createElement(b.Helmet,{title:t("heading")}),m.a.createElement("div",{className:"common-form"},m.a.createElement("h2",{className:"form-title"},t("heading")),m.a.createElement("form",{onSubmit:T},m.a.createElement("fieldset",null,m.a.createElement("div",{className:"form-row"},m.a.createElement("label",null,m.a.createElement("span",{className:"form-head"},t("image")),m.a.createElement("input",Object.assign({type:"text"},P("image"),{placeholder:t("imageURL"),className:"txt large block",disabled:A}))),k.image&&m.a.createElement("p",{className:"input-error"},m.a.createElement("i",{className:"fas fa-times-circle"})," ",k.image)),m.a.createElement("div",{className:"form-row"},m.a.createElement("label",null,m.a.createElement("span",{className:"form-head"},t("username")),m.a.createElement("input",Object.assign({type:"text"},P("username"),{placeholder:t("username"),className:"txt large block",disabled:A}))),k.username&&m.a.createElement("p",{className:"input-error"},m.a.createElement("i",{className:"fas fa-times-circle"})," ",k.username)),m.a.createElement("div",{className:"form-row"},m.a.createElement("label",null,m.a.createElement("span",{className:"form-head"},t("bio")),m.a.createElement("textarea",Object.assign({cols:"60",rows:"10"},P("bio"),{placeholder:t("bio"),className:"txt large block",disabled:A}))),k.bio&&m.a.createElement("p",{className:"input-error"},m.a.createElement("i",{className:"fas fa-times-circle"})," ",k.bio)),m.a.createElement("div",{className:"form-row"},m.a.createElement("label",null,m.a.createElement("span",{className:"form-head"},t("email")),m.a.createElement("input",Object.assign({type:"text"},P("email"),{placeholder:t("email"),className:"txt large block",disabled:A}))),k.email&&m.a.createElement("p",{className:"input-error"},m.a.createElement("i",{className:"fas fa-times-circle"})," ",k.email)),m.a.createElement("div",{className:"form-row"},m.a.createElement("label",null,m.a.createElement("span",{className:"form-head"},t("newPassword")),m.a.createElement("input",Object.assign({type:"password"},P("password"),{placeholder:t("newPassword"),className:"txt large block",disabled:A}))),k.password&&m.a.createElement("p",{className:"input-error"},m.a.createElement("i",{className:"fas fa-times-circle"})," ",k.password)),A&&m.a.createElement("div",null,t("demoUserMsg")),j&&m.a.createElement("div",null,t("sending")),O.length>0&&O.map((function(e){return m.a.createElement("p",{className:"input-error",key:e},m.a.createElement("i",{className:"fas fa-times-circle"})," ",e)})),m.a.createElement("div",{className:"form-action"},m.a.createElement("button",{type:"submit",className:"btn large primary",disabled:A},t("common:modify"))," ",m.a.createElement("button",{type:"button",className:"btn large",disabled:j,onClick:a.goBack},t("common:cancel")))))))}))},308:function(e,a,t){"use strict";t.r(a);var n=t(113),r=t(114);function c(){var e=Object(n.a)(["\n"]);return c=function(){return e},e}a.default=r.a.div(c())},644:function(e,a,t){"use strict";function n(e,a,t,n,r,c,s){try{var l=e[c](s),i=l.value}catch(m){return void t(m)}l.done?a(i):Promise.resolve(i).then(n,r)}function r(e){return function(){var a=this,t=arguments;return new Promise((function(r,c){var s=e.apply(a,t);function l(e){n(s,r,c,l,i,"next",e)}function i(e){n(s,r,c,l,i,"throw",e)}l(void 0)}))}}t.d(a,"a",(function(){return r}))},645:function(e,a,t){"use strict";var n=t(200),r=t(46),c=t(115),s=t(0);a.a=function(e){var a=Object(s.useState)(e),t=Object(c.a)(a,2),l=t[0],i=t[1],m=Object(s.useCallback)((function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];if("string"!==typeof a[0])i((function(e){return Object(r.a)({},e,{},a[0])}));else{var c=a[0],s=a[1];i((function(e){return Object(r.a)({},e,Object(n.a)({},c,s))}))}}),[]),o=Object(s.useCallback)(function(e,a){var t;return function(){var n=arguments,r=this,c=function(){return e.apply(r,n)};clearTimeout(t),t=setTimeout(c,a)}}((function(e,a){i((function(t){return Object(r.a)({},t,Object(n.a)({},e,a))}))}),250),[]),u=Object(s.useCallback)((function(e){var a=e.target,t=a.name,c=a.value;i((function(e){return Object(r.a)({},e,Object(n.a)({},t,c))}))}),[]),f=Object(s.useCallback)((function(e){var a=e.target,t=a.name,n=a.value;o(t,n)}),[o]),b=Object(s.useCallback)((function(e,a){var t;return t={name:e},Object(n.a)(t,a?"defaultValue":"value",l[e]),Object(n.a)(t,"onChange",a?f:u),t}),[u,f,l]);return{form:l,setForm:i,setField:m,changeInput:u,bindInput:b}}},659:function(e,a,t){"use strict";var n=t(203),r=t(156);a.a=function(){var e=Object(n.useLastLocation)();return function(){e?r.history.push(e.pathname):r.history.goBack()}}}}]);