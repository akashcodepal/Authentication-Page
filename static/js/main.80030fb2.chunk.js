(this.webpackJsonplandingpage=this.webpackJsonplandingpage||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(4),s=a.n(c),i=a(8),r=a.n(i),o=(a(15),a(5)),l=a(9),u=(a(16),l.a.initializeApp({apiKey:"AIzaSyBxDH5eu7Js37GYxOs8fwGLdi9Om01JFqo",authDomain:"user-management-a8b8a.firebaseapp.com",databaseURL:"https://user-management-a8b8a.firebaseio.com",projectId:"user-management-a8b8a",storageBucket:"user-management-a8b8a.appspot.com",messagingSenderId:"834141311491",appId:"1:834141311491:web:229568e102c6c7eb85f436",measurementId:"G-4ZM02RPQ9R"}));a(18),a(19);var d=function(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],i=a[1],r=Object(c.useState)(""),l=Object(o.a)(r,2),d=l[0],b=l[1],j=Object(c.useState)(!1),m=Object(o.a)(j,2),h=m[0],p=m[1];return Object(n.jsx)("div",{className:"container-fluid card",children:Object(n.jsx)("div",{className:"row justify-content-center p-5 ",children:Object(n.jsx)("div",{className:"col-3  border border-dark rounded p-4 bg-dark align-self-center ",children:Object(n.jsxs)("div",{className:"form-container",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-white",children:"Email address :"}),Object(n.jsx)("input",{type:"email",className:"form-control",required:!0,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}}),"              "]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-white",children:"Password :"}),Object(n.jsx)("input",{type:"password",className:"form-control",required:!0,placeholder:"enter password",onChange:function(e){return b(e.target.value)}})]}),h?Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{type:"submit",className:"btn btn-primary ",onClick:function(e){e.preventDefault(),u.auth().signInWithEmailAndPassword(s,d).catch((function(e){alert(e)}))},children:"Login"}),Object(n.jsxs)("p",{className:"text-white text-right mt-5",children:["Don't have an account!",Object(n.jsx)("span",{className:"text-success font-weight-bold",onClick:function(e){p(!h)},children:" Signup "})]})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(e){e.preventDefault(),u.auth().createUserWithEmailAndPassword(s,d).catch((function(e){alert(e)}))},children:"Signup"}),Object(n.jsxs)("p",{className:" text-white text-right mt-5",children:["Already have an account!",Object(n.jsx)("span",{className:"text-primary font-weight-bold",onClick:function(e){p(!h)},children:" SignIn "})]})]})]})})})})};function b(){return Object(n.jsxs)("div",{className:"row a bg-info d-flex justify-content-around",children:[Object(n.jsx)("h2",{className:"col-6 m-2",children:"Welcome"}),Object(n.jsx)("button",{className:"btn bg-dark text-white m-2 ",onClick:function(){u.auth().signOut()},children:"Logout"})]})}var j=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){u.auth().onAuthStateChanged((function(e){s(e||null)}))}),[]),Object(n.jsx)("div",{children:a?Object(n.jsx)(b,{}):Object(n.jsx)(d,{user:a})})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.80030fb2.chunk.js.map