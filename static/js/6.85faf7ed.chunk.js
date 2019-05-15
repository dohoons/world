(window.webpackJsonp=window.webpackJsonp||[]).push([[6,18],{121:function(e,a,t){"use strict";t.r(a);var n=t(45),l=t(96),r=t(0),s=t.n(r),c=t(528),m=t(35),i=t(52),o=t(163),u=t(541),b=t.n(u),d=t(81),f=t(546),p=t(529),E=t(248);a.default=Object(c.hot)(function(e){var a=e.history,t=Object(i.c)("profileEdit").t,c=Object(f.a)(),u=Object(m.c)(function(e){return e.auth},[]),g=u.userInfo,v=u.loading,N=u.error,h=Object(m.b)(),w=Object(r.useState)({}),j=Object(l.a)(w,2),O=j[0],y=j[1],k=Object(p.a)({image:g.image,username:g.username,bio:g.bio,email:g.email,password:""}),x=k.form,L=k.bindInput,C=x.image,I=x.username,P=x.bio,S=x.email,U=x.password;Object(r.useEffect)(function(){return function(){h(d.f())}},[h,g]);return s.a.createElement(E.default,{className:"container"},s.a.createElement(o.Helmet,{title:t("heading")}),s.a.createElement("div",{className:"common-form"},s.a.createElement("h2",{className:"form-title"},t("heading")),s.a.createElement("form",{onSubmit:function(e){if(y({}),function(){var e={};return b.a.isEmpty(I)?e.username=t("validate:emptyUsername"):b.a.isLength(I,{min:1,max:20})||(e.username=t("validate:lengthUsername")),b.a.isEmpty(S)?e.email=t("validate:emptyEmail"):b.a.isEmail(S)||(e.email=t("validate:notEmail")),b.a.isEmpty(U)||b.a.isLength(U,{min:8})||(e.password=t("validate:lengthPassword")),0===Object.keys(e).length||(y(e),!1)}()){var l=Object(n.a)({image:C,bio:P,email:S},I!==g.username&&{username:I},""!==U&&{password:U});h(d.g({user:l})).then(function(){void 0===l.username?c():a.push("/@".concat(l.username))}).catch(console.log)}e.preventDefault()}},s.a.createElement("fieldset",null,s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},t("image")),s.a.createElement("input",Object.assign({type:"text"},L("image"),{placeholder:t("imageURL"),className:"txt large block",disabled:v,value:C}))),O.image&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",O.image)),s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},t("username")),s.a.createElement("input",Object.assign({type:"text"},L("username"),{placeholder:t("username"),className:"txt large block",disabled:v,value:I}))),O.username&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",O.username)),s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},t("bio")),s.a.createElement("textarea",Object.assign({cols:"60",rows:"10"},L("bio"),{placeholder:t("bio"),className:"txt large block",disabled:v,value:P}))),O.bio&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",O.bio)),s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},t("email")),s.a.createElement("input",Object.assign({type:"text"},L("email"),{placeholder:t("email"),className:"txt large block",disabled:v,value:S}))),O.email&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",O.email)),s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},t("newPassword")),s.a.createElement("input",Object.assign({type:"password"},L("password"),{placeholder:t("newPassword"),className:"txt large block",disabled:v,value:U}))),O.password&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",O.password)),v&&s.a.createElement("div",null,t("sending")),N.length>0&&N.map(function(e){return s.a.createElement("p",{className:"input-error",key:e},s.a.createElement("i",{className:"fas fa-times-circle"})," ",e)}),s.a.createElement("div",{className:"form-action"},s.a.createElement("button",{type:"submit",className:"btn large primary",disabled:v},t("common:modify"))," ",s.a.createElement("button",{type:"button",className:"btn large",disabled:v,onClick:a.goBack},t("common:cancel")))))))})},248:function(e,a,t){"use strict";t.r(a);var n=t(94),l=t(95);function r(){var e=Object(n.a)(["\n"]);return r=function(){return e},e}a.default=l.a.div(r())},529:function(e,a,t){"use strict";var n=t(164),l=t(45),r=t(96),s=t(0);a.a=function(e){var a=Object(s.useState)(e),t=Object(r.a)(a,2),c=t[0],m=t[1],i=Object(s.useCallback)(function(e){var a=e.target,t=a.name,r=a.value;m(function(e){return Object(l.a)({},e,Object(n.a)({},t,r))})},[]),o=Object(s.useCallback)(function(e){return{name:e,value:c[e],onChange:i}},[i,c]);return{form:c,setForm:m,changeInput:i,bindInput:o}}},546:function(e,a,t){"use strict";var n=t(169),l=t(122);a.a=function(){var e=Object(n.useLastLocation)();return function(){e?l.history.push(e.pathname):l.history.goBack()}}}}]);