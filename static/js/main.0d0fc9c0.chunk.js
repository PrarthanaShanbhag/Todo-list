(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(8),s=n.n(a),l=(n(13),n(7)),d=n(4),r=n(3),o=n.p+"static/media/todo.975e4dd4.svg",j=(n(14),n(0)),u=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(localStorage.getItem("lists")?JSON.parse(localStorage.getItem("lists")):[]),s=Object(r.a)(a,2),u=s[0],b=s[1],f=Object(c.useState)(!0),m=Object(r.a)(f,2),O=m[0],h=m[1],x=Object(c.useState)(null),v=Object(r.a)(x,2),g=v[0],p=v[1],I=function(){if(n)if(n&&!O)b(u.map((function(e){return e.id===g?Object(d.a)(Object(d.a)({},e),{},{name:n}):e}))),h(!0),i(""),p(null);else{var e={id:(new Date).getTime().toString(),name:n};b([].concat(Object(l.a)(u),[e])),i("")}else alert("Please input the value")};return Object(c.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(u))}),[u]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main-div",children:Object(j.jsxs)("div",{className:"child-div",children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{src:o,alt:"todo"}),Object(j.jsx)("figcaption",{children:"Add Your Items Here \u270d : "})]}),Object(j.jsxs)("div",{className:"addItems",children:[Object(j.jsx)("input",{type:"text",id:"input",class:" is-invalid",autocomplete:"off",placeholder:"Add Items...",value:n,onChange:function(e){i(e.target.value)},onKeyPress:function(e){if("Enter"===e.key)if(n)if(n&&!O)b(u.map((function(e){return e.id===g?Object(d.a)(Object(d.a)({},e),{},{name:n}):e}))),h(!0),i(""),p(null);else{var t={id:(new Date).getTime().toString(),name:n};b([].concat(Object(l.a)(u),[t])),i("")}else alert("Please input the value")}}),O?Object(j.jsx)("i",{className:"fa fa-plus add-btn",title:"Add Item",onClick:I}):Object(j.jsx)("i",{className:"far fa-edit add-btn",title:"Update Item",onClick:I})]}),Object(j.jsx)("div",{className:"showItems",children:u.map((function(e){return Object(j.jsxs)("div",{className:"eachItem",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsxs)("div",{className:"todo-btn",children:[Object(j.jsx)("i",{className:"far fa-edit add-btn",title:"Edit Item",onClick:function(){return function(e){var t=u.find((function(t){return t.id===e}));h(!1),i(t.name),p(e)}(e.id)}}),Object(j.jsx)("i",{className:"far fa-trash-alt add-btn",title:"Delete Item",onClick:function(){return function(e){var t=u.filter((function(t){return e!==t.id}));b(t)}(e.id)}})]})]},e.id)}))}),Object(j.jsx)("div",{className:"showItems",children:Object(j.jsxs)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){b([])},children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("strong",{children:"CHECK LIST"}),"  "]})," "]})})]})})})};var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(u,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.0d0fc9c0.chunk.js.map