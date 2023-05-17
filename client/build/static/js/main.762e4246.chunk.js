(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(44),n=a.n(s),l=(a(58),a(59),a(60),a(61),a(11)),r=a(0),o=function(){return Object(r.jsx)("header",{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(l.b,{className:"navbar-brand",to:"/",children:"CRUD APP"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(r.jsxs)("form",{className:"d-flex",children:[Object(r.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(r.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})},i=a(9),d=a.n(i),j=a(16),b=a(8),m=a(46),u=a.n(m),x=a(32),p=a.n(x),h=a(33),O=a.n(h),f=Object(c.createContext)(""),g=Object(c.createContext)(""),v=Object(c.createContext)(""),w=function(e){var t=e.children,a=Object(c.useState)(""),s=Object(b.a)(a,2),n=s[0],l=s[1],o=Object(c.useState)(""),i=Object(b.a)(o,2),d=i[0],j=i[1],m=Object(c.useState)(""),u=Object(b.a)(m,2),x=u[0],p=u[1];return Object(r.jsx)(f.Provider,{value:{udata:n,setUdata:l},children:Object(r.jsx)(g.Provider,{value:{updata:d,setUPdata:j},children:Object(r.jsx)(v.Provider,{value:{dltdata:x,setDLTdata:p},children:t})})})},y=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],s=t[1];console.log(a);var n=Object(c.useContext)(f),o=n.udata,i=(n.setUdata,Object(c.useContext)(g)),m=i.updata,x=(i.setUPdata,Object(c.useContext)(v)),h=x.dltdata,w=x.setDLTdata,y=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8003/getdata",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),422!==t.status&&a?(s(a),console.log("get data")):console.log("error ");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){y()}),[]);var N=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8003/deleteuser/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,console.log(c),422!==a.status&&c?(console.log("user deleted"),w(c),y()):console.log("error");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[o?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{class:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(r.jsx)("strong",{children:o.name}),"  added succesfully!",Object(r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}):"",m?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{class:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(r.jsx)("strong",{children:m.name}),"  updated succesfully!",Object(r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}):"",h?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{class:"alert alert-danger alert-dismissible fade show",role:"alert",children:[Object(r.jsx)("strong",{children:h.name}),"  deleted succesfully!",Object(r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}):"",Object(r.jsx)("div",{className:"mt-5",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"add_btn mt-2 mb-2",children:Object(r.jsx)(l.b,{to:"/register",className:"btn btn-primary",children:"Add data"})}),Object(r.jsxs)("table",{class:"table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"table-dark",children:[Object(r.jsx)("th",{scope:"col",children:"id"}),Object(r.jsx)("th",{scope:"col",children:"Username"}),Object(r.jsx)("th",{scope:"col",children:"email"}),Object(r.jsx)("th",{scope:"col",children:"Job"}),Object(r.jsx)("th",{scope:"col",children:"Number"}),Object(r.jsx)("th",{scope:"col"})]})}),Object(r.jsx)("tbody",{children:a.map((function(e,t){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"row",children:t+1}),Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.email}),Object(r.jsx)("td",{children:e.work}),Object(r.jsx)("td",{children:e.mobile}),Object(r.jsxs)("td",{className:"d-flex justify-content-between",children:[Object(r.jsxs)(l.b,{to:"view/".concat(e._id),children:[" ",Object(r.jsx)("button",{className:"btn btn-success",children:Object(r.jsx)(u.a,{})})]}),Object(r.jsxs)(l.b,{to:"edit/".concat(e._id),children:["  ",Object(r.jsx)("button",{className:"btn btn-primary",children:Object(r.jsx)(p.a,{})})]}),Object(r.jsx)("button",{className:"btn btn-danger",onClick:function(){return N(e._id)},children:Object(r.jsx)(O.a,{})})]})]})})}))})]})]})})]})},N=a(7),C=a(26),P=a(6),k=function(){var e=Object(c.useContext)(f),t=(e.udata,e.setUdata),a=Object(P.f)(),s=Object(c.useState)({name:"",email:"",age:"",mobile:"",work:"",add:"",desc:""}),n=Object(b.a)(s,2),o=n[0],i=n[1],m=function(e){console.log(e.target.value);var t=e.target,a=t.name,c=t.value;i((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(N.a)({},a,c))}))},u=function(){var e=Object(j.a)(d.a.mark((function e(c){var s,n,l,r,i,j,b,m,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s=o.name,n=o.email,l=o.work,r=o.add,i=o.mobile,j=o.desc,b=o.age,e.next=4,fetch("http://localhost:8003/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:n,work:l,add:r,mobile:i,desc:j,age:b})});case 4:return m=e.sent,e.next=7,m.json();case 7:u=e.sent,console.log(u),422!==m.status&&u?(a.push("/"),t(u),console.log("data added")):(console.log("error "),alert("error"));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(l.b,{to:"/",children:"home"}),Object(r.jsx)("form",{className:"mt-4",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Name"}),Object(r.jsx)("input",{type:"text",value:o.name,onChange:m,name:"name",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"email"}),Object(r.jsx)("input",{type:"email",value:o.email,onChange:m,name:"email",class:"form-control",id:"exampleInputPassword1"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"age"}),Object(r.jsx)("input",{type:"text",value:o.age,onChange:m,name:"age",class:"form-control",id:"exampleInputPassword1"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Mobile"}),Object(r.jsx)("input",{type:"number",value:o.mobile,onChange:m,name:"mobile",class:"form-control",id:"exampleInputPassword1"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Work"}),Object(r.jsx)("input",{type:"text",value:o.work,onChange:m,name:"work",class:"form-control",id:"exampleInputPassword1"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Address"}),Object(r.jsx)("input",{type:"text",value:o.add,onChange:m,name:"add",class:"form-control",id:"exampleInputPassword1"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-12 col-md-12 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Description"}),Object(r.jsx)("textarea",{name:"desc",value:o.desc,onChange:m,className:"form-control",id:"",cols:"30",rows:"5"})]}),Object(r.jsx)("button",{type:"submit",onClick:u,class:"btn btn-primary",children:"Submit"})]})})]})},I=function(){var e=Object(c.useContext)(g),t=(e.updata,e.setUPdata),a=Object(P.f)(""),s=Object(c.useState)({name:"",email:"",age:"",mobile:"",work:"",add:"",desc:""}),n=Object(b.a)(s,2),o=n[0],i=n[1],m=function(e){console.log(e.target.value);var t=e.target,a=t.name,c=t.value;i((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(N.a)({},a,c))}))},u=Object(P.g)("").id;console.log(u);var x=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8003/getuser/".concat(u),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),422!==t.status&&a?(i(a),console.log("get data")):console.log("error ");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){x()}),[]);var p=function(){var e=Object(j.a)(d.a.mark((function e(c){var s,n,l,r,i,j,b,m,x;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s=o.name,n=o.email,l=o.work,r=o.add,i=o.mobile,j=o.desc,b=o.age,e.next=4,fetch("https://crudappreactjs.herokuapp.com/updateuser/".concat(u),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:n,work:l,add:r,mobile:i,desc:j,age:b})});case 4:return m=e.sent,e.next=7,m.json();case 7:x=e.sent,console.log(x),422!==m.status&&x?(a.push("/"),t(x)):alert("fill the data");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(l.b,{to:"/",children:"home2"}),Object(r.jsx)("form",{className:"mt-4",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Name"}),Object(r.jsx)("input",{type:"text",value:o.name,onChange:m,name:"name",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"email"}),Object(r.jsx)("input",{type:"email",value:o.email,onChange:m,name:"email",class:"form-control",id:"exampleInputPassword1"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"age"}),Object(r.jsx)("input",{type:"text",value:o.age,onChange:m,name:"age",class:"form-control",id:"exampleInputPassword1"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Mobile"}),Object(r.jsx)("input",{type:"number",value:o.mobile,onChange:m,name:"mobile",class:"form-control",id:"exampleInputPassword1"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Work"}),Object(r.jsx)("input",{type:"text",value:o.work,onChange:m,name:"work",class:"form-control",id:"exampleInputPassword1"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Address"}),Object(r.jsx)("input",{type:"text",value:o.add,onChange:m,name:"add",class:"form-control",id:"exampleInputPassword1"})]}),Object(r.jsxs)("div",{class:"mb-3 col-lg-12 col-md-12 col-12",children:[Object(r.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Description"}),Object(r.jsx)("textarea",{name:"desc",value:o.desc,onChange:m,className:"form-control",id:"",cols:"30",rows:"5"})]}),Object(r.jsx)("button",{type:"submit",onClick:p,class:"btn btn-primary",children:"Submit"})]})})]})},E=a(108),S=a(110),T=a(48),D=a.n(T),_=a(49),U=a.n(_),A=a(50),F=a.n(A),J=a(51),W=a.n(J),H=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],s=t[1];console.log(a);var n=Object(P.g)("").id;console.log(n);var o=Object(P.f)(),i=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8003/getuser/".concat(n),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),422!==t.status&&a?(s(a),console.log("get data")):console.log("error ");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){i()}),[]);var m=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://crudappreactjs.herokuapp.com/deleteuser/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,console.log(c),422!==a.status&&c?(console.log("user deleted"),o.push("/")):console.log("error");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"container mt-3",children:[Object(r.jsx)("h1",{style:{fontWeight:400},children:"Welcome"}),Object(r.jsx)(E.a,{sx:{maxWidth:600},children:Object(r.jsxs)(S.a,{children:[Object(r.jsxs)("div",{className:"add_btn",children:[Object(r.jsxs)(l.b,{to:"/edit/".concat(a._id),children:["  ",Object(r.jsx)("button",{className:"btn btn-primary mx-2",children:Object(r.jsx)(p.a,{})})]}),Object(r.jsx)("button",{className:"btn btn-danger",onClick:function(){return m(a._id)},children:Object(r.jsx)(O.a,{})})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"left_view col-lg-6 col-md-6 col-12",children:[Object(r.jsx)("img",{src:"/profile.png",style:{width:50},alt:"profile"}),Object(r.jsxs)("h3",{className:"mt-3",children:["Name: ",Object(r.jsx)("span",{children:a.name})]}),Object(r.jsxs)("h3",{className:"mt-3",children:["Age: ",Object(r.jsx)("span",{children:a.age})]}),Object(r.jsxs)("p",{className:"mt-3",children:[Object(r.jsx)(D.a,{}),"Email: ",Object(r.jsx)("span",{children:a.email})]}),Object(r.jsxs)("p",{className:"mt-3",children:[Object(r.jsx)(U.a,{}),"Occuption: ",Object(r.jsx)("span",{children:a.work})]})]}),Object(r.jsxs)("div",{className:"right_view  col-lg-6 col-md-6 col-12",children:[Object(r.jsxs)("p",{className:"mt-5",children:[Object(r.jsx)(F.a,{}),"mobile: ",Object(r.jsxs)("span",{children:["+91 ",a.mobile]})]}),Object(r.jsxs)("p",{className:"mt-3",children:[Object(r.jsx)(W.a,{}),"location: ",Object(r.jsx)("span",{children:a.add})]}),Object(r.jsxs)("p",{className:"mt-3",children:["Description: ",Object(r.jsx)("span",{children:a.desc})]})]})]})]})})]})};var L=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsxs)(P.c,{children:[Object(r.jsx)(P.a,{exact:!0,path:"/",component:y}),Object(r.jsx)(P.a,{exact:!0,path:"/register",component:k}),Object(r.jsx)(P.a,{exact:!0,path:"/edit/:id",component:I}),Object(r.jsx)(P.a,{exact:!0,path:"/view/:id",component:H})]})]})};n.a.render(Object(r.jsx)(w,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(L,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.762e4246.chunk.js.map