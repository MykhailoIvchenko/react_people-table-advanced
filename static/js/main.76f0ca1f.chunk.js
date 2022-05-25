(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{19:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(13),c=n.n(a),r=n(5),s=n(1),o=n(2),i=(n(19),n(0)),l=function(){return Object(i.jsx)("h2",{className:"HomePageTitle",children:"Home Page"})},u=n(6),j=n(3),d=n(14),b=n(12),m=n(10),h=n.n(m),O=function(){var e=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_people-table/api").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("/people.json");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=n(7),x=n.n(f),g=(n(24),function(e){var t=Object(o.f)(),n=new URLSearchParams(t.search);n.set("slug",e.person.slug);var a=x()({PersonLink:!0,PersonLinkMale:"m"===e.person.sex,PersonLinkFemale:"f"===e.person.sex});return Object(i.jsx)(r.b,{className:a,to:"?".concat(n.toString()),children:e.children})}),N=(n(25),function(e){var t=e.person,n=e.slug,a=e.index,c=function(e,n){return e?"mother"===n?t.mother?Object(i.jsx)(g,{person:t.mother,children:"".concat(e," | ").concat(t.mother.born," - ").concat(t.mother.died)}):"".concat(e," (Detailed info is absent)"):t.father?Object(i.jsx)(g,{person:t.father,children:"".concat(e," | ").concat(t.father.born," - ").concat(t.father.died)}):"".concat(e," (Detailed info is absent)"):"Information is absent"},r=x()({Person:!0,Selected:t.slug===n});return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("tr",{className:r,children:[Object(i.jsx)("td",{children:Object(i.jsx)(g,{person:t,children:"".concat(a+1,". ").concat(t.name)})}),Object(i.jsx)("td",{children:"m"===t.sex?"male":"female"}),Object(i.jsx)("td",{children:t.born}),Object(i.jsx)("td",{children:t.died}),Object(i.jsx)("td",{className:"ParentName",children:c(t.motherName,"mother")}),Object(i.jsx)("td",{className:"ParentName",children:c(t.fatherName,"father")})]})})}),v=(n(26),function(e){var t=e.people,n=Object(o.f)(),a=new URLSearchParams(n.search),c=a.get("slug")||"",r=Object(s.useState)(a.get("sortBy")),l=Object(j.a)(r,2),d=l[0],b=l[1],m=Object(s.useState)("asc"),h=Object(j.a)(m,2),O=h[0],p=h[1],f=Object(o.g)();return Object(s.useEffect)((function(){b(a.get("sortBy"))}),[]),Object(i.jsxs)("table",{className:"PeopleTable",children:[Object(i.jsx)("thead",{children:Object(i.jsx)("tr",{children:["Name","Sex","Born","Died","Mother","Father"].map((function(e){var t=e.toLowerCase();return Object(i.jsxs)("th",{className:"HeaderCell",onClick:function(){return function(e){"father"!==e&&"mother"!==e&&(p(d!==e?"asc":"asc"===O?"dsc":"asc"),b(e),a.set("sortBy",e),f("?".concat(a.toString())))}(t)},children:[a.get("sortBy")===t?"".concat(e,"*"):e,"Mother"!==e&&"Father"!==e&&Object(i.jsxs)("span",{className:"ImageContainer",children:[Object(i.jsx)("img",{alt:"Arrows up and down",className:x()({ArrowsUpAndDown:!0,Hidden:t===a.get("sortBy")}),src:"/react_people-table-advanced/images/sort_both.png"}),Object(i.jsx)("img",{alt:"Arrow up",className:x()({ArrowUp:!0,Hidden:!("dsc"===O&&t===a.get("sortBy"))}),src:"/react_people-table-advanced/images/sort_asc.png"}),Object(i.jsx)("img",{alt:"Arrow down",className:x()({ArrowDown:!0,Hidden:!("asc"===O&&t===a.get("sortBy"))}),src:"/react_people-table-advanced/images/sort_desc.png"})]})]},e)}))})}),Object(i.jsx)("tbody",{children:("asc"===O?function(){switch(d){case"name":return Object(u.a)(t).sort((function(e,t){return e.name.localeCompare(t.name)}));case"sex":return Object(u.a)(t).sort((function(e,t){return e.sex.localeCompare(t.sex)}));case"born":return Object(u.a)(t).sort((function(e,t){return e.born-t.born}));case"died":return Object(u.a)(t).sort((function(e,t){return e.died-t.died}));default:return t}}():function(){switch(d){case"name":return Object(u.a)(t).sort((function(e,t){return t.name.localeCompare(e.name)}));case"sex":return Object(u.a)(t).sort((function(e,t){return t.sex.localeCompare(e.sex)}));case"born":return Object(u.a)(t).sort((function(e,t){return t.born-e.born}));case"died":return Object(u.a)(t).sort((function(e,t){return t.died-e.died}));default:return t}}()).map((function(e,t){return Object(i.jsx)(N,{index:t,person:e,slug:c},e.slug)}))})]})}),w=(n(27),n(28),function(e){var t=e.people,n=e.addPersonToTheList,a=new Date,c=Object(s.useState)(""),r=Object(j.a)(c,2),l=r[0],u=r[1],d=Object(s.useState)("m"),b=Object(j.a)(d,2),m=b[0],h=b[1],O=Object(s.useState)(0),p=Object(j.a)(O,2),f=p[0],g=p[1],N=Object(s.useState)(a.getFullYear()),v=Object(j.a)(N,2),w=v[0],P=v[1],S=Object(s.useState)(""),_=Object(j.a)(S,2),y=_[0],C=_[1],k=Object(s.useState)(""),F=Object(j.a)(k,2),L=F[0],A=F[1],B=Object(s.useState)(!1),T=Object(j.a)(B,2),D=T[0],H=T[1],q=Object(s.useState)(""),E=Object(j.a)(q,2),U=E[0],M=E[1],I=Object(s.useState)(""),Y=Object(j.a)(I,2),R=Y[0],J=Y[1],V=Object(s.useState)(""),z=Object(j.a)(V,2),G=z[0],K=z[1],Q=Object(o.g)(),W="",X=x()({ErrorHint:D,Hidden:!D}),Z=function(e){if(e.preventDefault(),!function(){var e=!1;return f<1400&&(M("You entered invalid birth date. It should be 1400 or more."),e=!0),w<1400&&(J("You entered invalid death date. It should be 1400 or more."),e=!0),w-f<0&&(K("Person cannot die before being born. Please, correct years."),e=!0),w-f>150&&(K("Unfortunately, person cannot live so long. Please, correct years."),e=!0),!!e&&(H(!0),!0)}()){!function(){var e=["de","del","van","di"],t=l.toLowerCase().trim();l&&(t=t[0].toUpperCase()+t.slice(1));var n=t.indexOf(" "),a=t.indexOf(" ",n+1);if(n<0)W=t;else for(W=t.slice(0,n);n>0;){var c="";c=a>0?t.slice(n+1,a):t.slice(n+1),e.includes(c)?W+=" ".concat(c):W+=" ".concat(c[0].toUpperCase()).concat(c.slice(1)),n=a,a=t.indexOf(" ",n+1)}}();var t={name:W,sex:m,born:f,died:w,motherName:y,fatherName:L,slug:"".concat(W.toLowerCase().split(" ").join("-"),"-").concat(f)};Q("/people"),n(t)}};return Object(i.jsxs)("div",{className:"AddingNewPerson",children:[Object(i.jsxs)("form",{className:"NewPersonForm",onSubmit:function(e){Z(e)},children:[Object(i.jsxs)("label",{className:"Name",children:["Name",Object(i.jsx)("input",{className:"Name__input",value:l,type:"text",onChange:function(e){return function(e){if(e.target.value.length<l.length)u(e.target.value);else{var t=e.target.value.slice(-1);"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ".includes(t)&&(0===l.length&&" "===t||" "===l.slice(-1)&&" "===t||u((function(e){return e+t})))}}(e)},required:!0})]}),Object(i.jsxs)("label",{className:"Sex",children:["Sex",Object(i.jsxs)("label",{className:"Sex__male",children:["Male",Object(i.jsx)("input",{className:"Sex__radio",name:"sex",value:"m",type:"radio",onChange:function(e){return h(e.target.value)},required:!0,checked:"m"===m})]}),Object(i.jsxs)("label",{className:"Sex__female",children:["Female",Object(i.jsx)("input",{className:"Sex__radio",name:"sex",value:"f",type:"radio",onChange:function(e){return h(e.target.value)},required:!0})]})]}),Object(i.jsxs)("label",{className:"Born",children:["Born",Object(i.jsx)("input",{className:"Born__input",value:f,type:"number",min:"1400",max:a.getFullYear(),onChange:function(e){g(+e.target.value),C(""),A("")},required:!0})]}),Object(i.jsxs)("label",{className:"Died",children:["Died",Object(i.jsx)("input",{className:"Died__input",value:w,type:"number",min:"1400",max:a.getFullYear(),onChange:function(e){return P(+e.target.value)},disabled:0===f,required:!0})]}),Object(i.jsxs)("label",{className:"Mother",children:["Mother",Object(i.jsxs)("select",{className:"Mother__select",onChange:function(e){return C(e.target.value)},disabled:0===f,defaultValue:"",children:[Object(i.jsx)("option",{value:"",children:"Find persons mother"}),t.filter((function(e){return"f"===e.sex})).filter((function(e){return e.died>=f&&e.born+12<f})).map((function(e){return Object(i.jsx)("option",{value:e.name,children:e.name},"".concat(e.name).concat(e.born).concat(e.died))}))]})]}),Object(i.jsxs)("label",{className:"Father",children:["Father",Object(i.jsxs)("select",{className:"Father__select",onChange:function(e){return A(e.target.value)},disabled:0===f,defaultValue:"",children:[Object(i.jsx)("option",{value:"",children:"Find persons father"}),t.filter((function(e){return"m"===e.sex})).filter((function(e){return e.died>=f&&e.born+12<f})).map((function(e){return Object(i.jsx)("option",{value:e.name,children:e.name},"".concat(e.name).concat(e.born).concat(e.died))}))]})]}),Object(i.jsx)("button",{className:"AddPersonButton",type:"submit",children:"Add person"})]}),Object(i.jsxs)("div",{className:X,children:[Object(i.jsx)("p",{children:U}),Object(i.jsx)("p",{children:R}),Object(i.jsx)("p",{children:G})]})]})}),P=(n(29),function(){var e=Object(o.g)();return Object(i.jsx)("button",{className:"AddPersonEntrance",type:"button",onClick:function(){e("/people/new")},children:"Add new person"})}),S=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(o.f)(),r=new URLSearchParams(c.search),l=r.get("query")||"",b=Object(s.useState)(l),m=Object(j.a)(b,2),h=m[0],O=m[1],f=r.get("sortBy")||"",x=r.get("slug")||"",g=Object(o.g)(),N=Object(u.a)(n);n.map((function(e,t,n){return N[t].father=n.find((function(t){return e.fatherName===t.name})),N[t].mother=n.find((function(t){return e.motherName===t.name})),""}));var S=Object(s.useCallback)(Object(d.debounce)((function(e,t,n){e?r.set("query",e.toLowerCase()):r.delete("query"),t&&r.set("sortBy",t),n&&r.set("slug",n),g("?".concat(r.toString()))}),500),[]);return Object(s.useEffect)((function(){O(l)}),[l]),Object(s.useEffect)((function(){p().then((function(e){a(e)}))}),[]),Object(i.jsxs)("div",{className:"PeoplePage",children:[Object(i.jsx)("h2",{className:"PeoplePageTitle",children:"People Page"}),Object(i.jsx)("div",{className:"AddPersonEntranceContainer",children:"/people"===c.pathname&&Object(i.jsx)(P,{})}),Object(i.jsx)(o.d,{children:Object(i.jsx)(o.b,{path:"/new",element:Object(i.jsx)(w,{people:n,addPersonToTheList:function(e){a([].concat(Object(u.a)(n),[e]))}})})}),Object(i.jsx)("h3",{className:"TableTitle",children:"People table"}),Object(i.jsxs)("label",{className:"Search",children:["Search",Object(i.jsx)("input",{value:h,"data-cy":"filterInput",className:"Search__input",onChange:function(e){var t=e.target.value;" "!==t[t.length-1]&&(O(t),S(t,f,x))}})]}),Object(i.jsx)("ul",{className:"Persons",children:Object(i.jsx)(v,{people:l?N.filter((function(e){return(e.name.split(" ").join("")+(e.motherName?e.motherName.split(" ").join(""):"")+(e.fatherName?e.fatherName.split(" ").join(""):"")).toLowerCase().includes(h)})):n})})]})},_=function(){return Object(i.jsx)("h2",{className:"NotFoundPageTitle",children:"Page is not found"})},y=(n(30),function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"LinksContainer",children:[Object(i.jsx)(r.b,{className:"Link",to:"/home",children:"Home"}),Object(i.jsx)(r.b,{className:"Link",to:"/people",children:"People"})]})})}),C=(n(31),function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{className:"App__title",children:"People table application"}),Object(i.jsx)(y,{}),Object(i.jsxs)(o.d,{children:[Object(i.jsx)(o.b,{path:"/",element:Object(i.jsx)(l,{})}),Object(i.jsx)(o.b,{path:"/people/*",element:Object(i.jsx)(S,{})}),Object(i.jsx)(o.b,{path:"/home",element:Object(i.jsx)(o.a,{to:"/"})}),Object(i.jsx)(o.b,{path:"/*",element:Object(i.jsx)(_,{})})]})]})});c.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.76f0ca1f.chunk.js.map