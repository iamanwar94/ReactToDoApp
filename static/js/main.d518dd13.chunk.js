(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),i=n.n(a),s=(n(13),n(8)),r=n(6),o=n(3),l=(n(14),n(0)),d=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(function(){var e=localStorage.getItem("mytodolist");return e?JSON.parse(e):[]}()),d=Object(o.a)(i,2),j=d[0],u=d[1],b=Object(c.useState)(""),f=Object(o.a)(b,2),m=f[0],O=f[1],h=Object(c.useState)(!1),x=Object(o.a)(h,2),g=x[0],p=x[1],v=function(){if(n)if(n&&g)u(j.map((function(e){return e.id===m?Object(r.a)(Object(r.a)({},e),{},{name:n}):e}))),a(""),O(null),p(!1);else{var e={id:(new Date).getTime().toString(),name:n};u([].concat(Object(s.a)(j),[e])),a("")}else alert("plz fill the data")};return Object(c.useEffect)((function(){localStorage.setItem("mytodolist",JSON.stringify(j))}),[j]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main-div",children:Object(l.jsxs)("div",{className:"child-div",children:[Object(l.jsxs)("figure",{children:[Object(l.jsx)("img",{src:"./images/todo.png",alt:"todologo"}),Object(l.jsx)("figcaption",{children:"Enter Your Todos Below"})]}),Object(l.jsxs)("div",{className:"addItems",children:[Object(l.jsx)("input",{type:"text",placeholder:"Add Items...",className:"form-control",value:n,onChange:function(e){return a(e.target.value)}}),g?Object(l.jsx)("i",{className:"far fa-edit add-btn",onClick:v}):Object(l.jsx)("i",{className:"fa fa-plus add-btn",onClick:v})]}),Object(l.jsx)("div",{className:"showItems",children:j.map((function(e){return Object(l.jsxs)("div",{className:"eachItem",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsxs)("div",{className:"todo-btn",children:[Object(l.jsx)("i",{className:"far fa-edit add-btn",onClick:function(){return function(e){var t=j.find((function(t){return t.id===e}));a(t.name),O(e),p(!0)}(e.id)}}),Object(l.jsx)("i",{className:"far fa-trash-alt add-btn",onClick:function(){return function(e){var t=j.filter((function(t){return t.id!==e}));u(t)}(e.id)}})]})]},e.id)}))}),Object(l.jsx)("div",{className:"showItems",children:Object(l.jsx)("button",{className:"btn effect04",onClick:function(){u([])},children:Object(l.jsx)("span",{children:" Remove All"})})})]})})})},j=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(d,{})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};i.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),u()}},[[16,1,2]]]);
//# sourceMappingURL=main.d518dd13.chunk.js.map