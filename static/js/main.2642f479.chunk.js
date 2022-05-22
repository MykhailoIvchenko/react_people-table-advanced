(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{19:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(13),c=n.n(a),r=n(5),s=n(1),o=n(2),l=(n(19),n(0)),i=function(){return Object(l.jsx)("h2",{className:"HomePageTitle",children:"Home Page"})},u=n(6),d=n(3),j=n(14),b=n(12),m=n(10),h=n.n(m),p=function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_people-table/api").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/people.json");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=n(7),x=n.n(f),g=(n(24),function(e){var t=Object(o.f)(),n=new URLSearchParams(t.search);n.set("slug",e.person.slug);var a=x()({PersonLink:!0,PersonLinkMale:"m"===e.person.sex,PersonLinkFemale:"f"===e.person.sex});return Object(l.jsx)(r.b,{className:a,to:"?".concat(n.toString()),children:e.children})}),v=(n(25),function(e){var t=e.person,n=e.slug,a=e.index,c=function(e,n){return e?"mother"===n?t.mother?Object(l.jsx)(g,{person:t.mother,children:"".concat(e," | ").concat(t.mother.born," - ").concat(t.mother.died)}):"".concat(e," (Detailed info is absent)"):t.father?Object(l.jsx)(g,{person:t.father,children:"".concat(e," | ").concat(t.father.born," - ").concat(t.father.died)}):"".concat(e," (Detailed info is absent)"):"Information is absent"},r=x()({Person:!0,Selected:t.slug===n});return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("tr",{className:r,children:[Object(l.jsx)("td",{children:Object(l.jsx)(g,{person:t,children:"".concat(a+1,". ").concat(t.name)})}),Object(l.jsx)("td",{children:"m"===t.sex?"male":"female"}),Object(l.jsx)("td",{children:t.born}),Object(l.jsx)("td",{children:t.died}),Object(l.jsx)("td",{className:"ParentName",children:c(t.motherName,"mother")}),Object(l.jsx)("td",{className:"ParentName",children:c(t.fatherName,"father")})]})})}),N=(n(26),function(e){var t=e.people,n=Object(o.f)(),a=new URLSearchParams(n.search),c=a.get("slug")||"",r=Object(s.useState)(a.get("sortBy")),i=Object(d.a)(r,2),j=i[0],b=i[1],m=Object(s.useState)("asc"),h=Object(d.a)(m,2),p=h[0],O=h[1],f=Object(o.g)();return Object(s.useEffect)((function(){b(a.get("sortBy"))}),[]),Object(l.jsxs)("table",{className:"PeopleTable",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:["Name","Sex","Born","Died","Mother","Father"].map((function(e){var t=e.toLowerCase();return Object(l.jsxs)("th",{className:"HeaderCell",onClick:function(){return function(e){"father"!==e&&"mother"!==e&&(O(j!==e?"asc":"asc"===p?"dsc":"asc"),b(e),a.set("sortBy",e),f("?".concat(a.toString())))}(t)},children:[a.get("sortBy")===t?"".concat(e,"*"):e,"Mother"!==e&&"Father"!==e&&Object(l.jsxs)("span",{className:"ImageContainer",children:[Object(l.jsx)("img",{alt:"Arrows up and down",className:x()({ArrowsUpAndDown:!0,Hidden:t===a.get("sortBy")}),src:"/react_people-table-advanced/images/sort_both.png"}),Object(l.jsx)("img",{alt:"Arrow up",className:x()({ArrowUp:!0,Hidden:!("dsc"===p&&t===a.get("sortBy"))}),src:"/react_people-table-advanced/images/sort_asc.png"}),Object(l.jsx)("img",{alt:"Arrow down",className:x()({ArrowDown:!0,Hidden:!("asc"===p&&t===a.get("sortBy"))}),src:"/react_people-table-advanced/images/sort_desc.png"})]})]},e)}))})}),Object(l.jsx)("tbody",{children:("asc"===p?function(){switch(j){case"name":return Object(u.a)(t).sort((function(e,t){return e.name.localeCompare(t.name)}));case"sex":return Object(u.a)(t).sort((function(e,t){return e.sex.localeCompare(t.sex)}));case"born":return Object(u.a)(t).sort((function(e,t){return e.born-t.born}));case"died":return Object(u.a)(t).sort((function(e,t){return e.died-t.died}));default:return t}}():function(){switch(j){case"name":return Object(u.a)(t).sort((function(e,t){return t.name.localeCompare(e.name)}));case"sex":return Object(u.a)(t).sort((function(e,t){return t.sex.localeCompare(e.sex)}));case"born":return Object(u.a)(t).sort((function(e,t){return t.born-e.born}));case"died":return Object(u.a)(t).sort((function(e,t){return t.died-e.died}));default:return t}}()).map((function(e,t){return Object(l.jsx)(v,{index:t,person:e,slug:c},e.slug)}))})]})}),_=(n(27),n(28),function(e){var t=e.people,n=e.addPersonToTheList,a=new Date,c=Object(s.useState)(""),r=Object(d.a)(c,2),i=r[0],u=r[1],j=Object(s.useState)("m"),b=Object(d.a)(j,2),m=b[0],h=b[1],p=Object(s.useState)(0),O=Object(d.a)(p,2),f=O[0],g=O[1],v=Object(s.useState)(a.getFullYear()),N=Object(d.a)(v,2),_=N[0],w=N[1],P=Object(s.useState)(""),S=Object(d.a)(P,2),y=S[0],C=S[1],k=Object(s.useState)(""),F=Object(d.a)(k,2),L=F[0],A=F[1],B=Object(s.useState)(!1),T=Object(d.a)(B,2),D=T[0],H=T[1],q=Object(s.useState)(""),E=Object(d.a)(q,2),U=E[0],M=E[1],I=Object(s.useState)(""),Y=Object(d.a)(I,2),R=Y[0],J=Y[1],V=Object(s.useState)(""),z=Object(d.a)(V,2),G=z[0],K=z[1],Q=Object(o.g)(),W="",X=x()({ErrorHint:D,Hidden:!D}),Z=function(e){if(e.preventDefault(),!function(){var e=!1;return f<1400&&(M("You entered invalid birth date. It should be 1400 or more."),e=!0),_<1400&&(J("You entered invalid death date. It should be 1400 or more."),e=!0),_-f<0&&(K("Person cannot die before being born. Please, correct years."),e=!0),_-f>150&&(K("Unfortunately, person cannot live so long. Please, correct years."),e=!0),!!e&&(H(!0),!0)}()){!function(){var e=["de","del","van","di"],t=i.toLowerCase().trim();i&&(t=t[0].toUpperCase()+t.slice(1));var n=t.indexOf(" "),a=t.indexOf(" ",n+1);if(n<0)W=t;else for(W=t.slice(0,n);n>0;){var c="";c=a>0?t.slice(n+1,a):t.slice(n+1),e.includes(c)?W+=" ".concat(c):W+=" ".concat(c[0].toUpperCase()).concat(c.slice(1)),n=a,a=t.indexOf(" ",n+1)}}();var t={name:W,sex:m,born:f,died:_,motherName:y,fatherName:L,slug:"".concat(W.toLowerCase().split(" ").join("-"),"-").concat(f)};Q("/react_people-table-advanced/people"),n(t)}};return Object(l.jsxs)("div",{className:"AddingNewPerson",children:[Object(l.jsxs)("form",{className:"NewPersonForm",onSubmit:function(e){Z(e)},children:[Object(l.jsxs)("label",{className:"Name",children:["Name",Object(l.jsx)("input",{className:"Name__input",value:i,type:"text",onChange:function(e){return function(e){if(e.target.value.length<i.length)u(e.target.value);else{var t=e.target.value.slice(-1);"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ".includes(t)&&(0===i.length&&" "===t||" "===i.slice(-1)&&" "===t||u((function(e){return e+t})))}}(e)},required:!0})]}),Object(l.jsxs)("label",{className:"Sex",children:["Sex",Object(l.jsxs)("label",{className:"Sex__male",children:["Male",Object(l.jsx)("input",{className:"Sex__radio",name:"sex",value:"m",type:"radio",onChange:function(e){return h(e.target.value)},required:!0,checked:"m"===m})]}),Object(l.jsxs)("label",{className:"Sex__female",children:["Female",Object(l.jsx)("input",{className:"Sex__radio",name:"sex",value:"f",type:"radio",onChange:function(e){return h(e.target.value)},required:!0})]})]}),Object(l.jsxs)("label",{className:"Born",children:["Born",Object(l.jsx)("input",{className:"Born__input",value:f,type:"number",min:"1400",max:a.getFullYear(),onChange:function(e){return g(+e.target.value)},required:!0})]}),Object(l.jsxs)("label",{className:"Died",children:["Died",Object(l.jsx)("input",{className:"Died__input",value:_,type:"number",min:"1400",max:a.getFullYear(),onChange:function(e){return w(+e.target.value)},disabled:0===f,required:!0})]}),Object(l.jsxs)("label",{className:"Mother",children:["Mother",Object(l.jsxs)("select",{className:"Mother__select",onChange:function(e){return C(e.target.value)},disabled:0===f,defaultValue:"",children:[Object(l.jsx)("option",{value:"",children:"Find persons mother"}),t.filter((function(e){return"f"===e.sex})).filter((function(e){return e.died>=f&&e.born+12<f})).map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},"".concat(e.name).concat(e.born).concat(e.died))}))]})]}),Object(l.jsxs)("label",{className:"Father",children:["Father",Object(l.jsxs)("select",{className:"Father__select",onChange:function(e){return A(e.target.value)},disabled:0===f,defaultValue:"",children:[Object(l.jsx)("option",{value:"",children:"Find persons father"}),t.filter((function(e){return"m"===e.sex})).filter((function(e){return e.died>=f&&e.born+12<f})).map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},"".concat(e.name).concat(e.born).concat(e.died))}))]})]}),Object(l.jsx)("button",{className:"AddPersonButton",type:"submit",children:"Add person"})]}),Object(l.jsxs)("div",{className:X,children:[Object(l.jsx)("p",{children:U}),Object(l.jsx)("p",{children:R}),Object(l.jsx)("p",{children:G})]})]})}),w=(n(29),function(){var e=Object(o.g)();return Object(l.jsx)("button",{className:"AddPersonEntrance",type:"button",onClick:function(){e("/react_people-table-advanced/people/new")},children:"Add new person"})}),P=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(o.f)(),r=new URLSearchParams(c.search),i=r.get("query")||"",b=Object(s.useState)(i),m=Object(d.a)(b,2),h=m[0],p=m[1],f=r.get("sortBy")||"",x=Object(o.g)(),g=Object(u.a)(n);n.map((function(e,t,n){return g[t].father=n.find((function(t){return e.fatherName===t.name})),g[t].mother=n.find((function(t){return e.motherName===t.name})),""}));var v=Object(s.useCallback)(Object(j.debounce)((function(e,t){e?r.set("query",e.toLowerCase()):r.delete("query"),t&&r.set("sortBy",t),x("?".concat(r.toString()))}),500),[]);return Object(s.useEffect)((function(){p(i)}),[i]),Object(s.useEffect)((function(){O().then((function(e){a(e)}))}),[]),Object(l.jsxs)("div",{className:"PeoplePage",children:[Object(l.jsx)("h2",{className:"PeoplePageTitle",children:"People Page"}),Object(l.jsx)("div",{className:"AddPersonEntranceContainer",children:"/people"===c.pathname&&Object(l.jsx)(w,{})}),Object(l.jsx)(o.d,{children:Object(l.jsx)(o.b,{path:"/new",element:Object(l.jsx)(_,{people:n,addPersonToTheList:function(e){a([].concat(Object(u.a)(n),[e]))}})})}),Object(l.jsx)("h3",{className:"TableTitle",children:"People table"}),Object(l.jsxs)("label",{className:"Search",children:["Search",Object(l.jsx)("input",{value:h,"data-cy":"filterInput",className:"Search__input",onChange:function(e){var t=e.target.value;" "!==t[t.length-1]&&(p(t),v(t,f))}})]}),Object(l.jsx)("ul",{className:"Persons",children:Object(l.jsx)(N,{people:i?g.filter((function(e){return(e.name.split(" ").join("")+(e.motherName?e.motherName.split(" ").join(""):"")+(e.fatherName?e.fatherName.split(" ").join(""):"")).toLowerCase().includes(h)})):n})})]})},S=function(){return Object(l.jsx)("h2",{className:"NotFoundPageTitle",children:"Page is not found"})},y=(n(30),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"LinksContainer",children:[Object(l.jsx)(r.b,{className:"Link",to:"/react_people-table-advanced/home",children:"Home"}),Object(l.jsx)(r.b,{className:"Link",to:"/react_people-table-advanced/people",children:"People"})]})})}),C=(n(31),function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"App__title",children:"People table application"}),Object(l.jsx)(y,{}),Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"/react_people-table-advanced/",element:Object(l.jsx)(i,{})}),Object(l.jsx)(o.b,{path:"/react_people-table-advanced/people/*",element:Object(l.jsx)(P,{})}),Object(l.jsx)(o.b,{path:"/react_people-table-advanced/home",element:Object(l.jsx)(o.a,{to:"/react_people-table-advanced/"})}),Object(l.jsx)(o.b,{path:"*",element:Object(l.jsx)(S,{})})]})]})});c.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2642f479.chunk.js.map