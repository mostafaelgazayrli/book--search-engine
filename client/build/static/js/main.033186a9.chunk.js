(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n,o,s,r,c=a(0),i=a.n(c),l=a(26),d=a.n(l),j=(a(92),a(93),a(48)),b=a(6),h=a(111),u=a(112),m=a(118),g=a(79),O=a(113),x=a(114),p=a(123),k=a(124),v=a(43),w=a(28);const I=Object(w.a)(n||(n=Object(v.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),S=Object(w.a)(o||(o=Object(v.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),y=Object(w.a)(s||(s=Object(v.a)(["\n  mutation saveBook($bookInput: BookInput!) {\n    saveBook(bookInput: $bookInput) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),f=Object(w.a)(r||(r=Object(v.a)(["\n  mutation removeBook($bookId: ID!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        image\n        link\n        title\n        description\n      }\n    }\n  }\n"])));var C=a(72),B=a.n(C);var F=new class{getProfile(){return B()(this.getToken())}loggedIn(){const e=this.getToken();return!!e&&!this.isTokenExpired(e)}isTokenExpired(e){try{return B()(e).exp<Date.now()/1e3}catch(t){return!1}}getToken(){return localStorage.getItem("id_token")}login(e){localStorage.setItem("id_token",e),window.location.assign("/")}logout(){localStorage.removeItem("id_token"),window.location.assign("/")}};var L=a(1);var T,_=()=>{const[e,t]=Object(c.useState)([]),[a,n]=Object(c.useState)(""),[o,s]=Object(c.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]);Object(c.useEffect)((()=>()=>{var e;(e=o).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}));const[r,{error:i}]=Object(k.a)(y);return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(h.a,{fluid:!0,className:"text-light bg-dark",children:Object(L.jsxs)(u.a,{children:[Object(L.jsx)("h1",{children:"Search for Books!"}),Object(L.jsx)(m.a,{onSubmit:async e=>{if(e.preventDefault(),!a)return!1;try{const e=await(o=a,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(o)));if(!e.ok)throw new Error("something went wrong!");const{items:s}=await e.json(),r=s.map((e=>{var t;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail)||"",link:e.volumeInfo.infoLink}}));t(r),n("")}catch(s){console.error(s)}var o},children:Object(L.jsxs)(m.a.Row,{children:[Object(L.jsx)(g.a,{xs:12,md:8,children:Object(L.jsx)(m.a.Control,{name:"searchInput",value:a,onChange:e=>n(e.target.value),type:"text",size:"lg",placeholder:"Search for a book"})}),Object(L.jsx)(g.a,{xs:12,md:4,children:Object(L.jsx)(O.a,{type:"submit",variant:"success",size:"lg",children:"Submit Search"})})]})})]})}),Object(L.jsxs)(u.a,{children:[Object(L.jsx)("h2",{children:e.length?"Viewing ".concat(e.length," results:"):"Search for a book to begin"}),Object(L.jsx)(x.a,{children:e.map((t=>Object(L.jsxs)(p.a,{border:"dark",children:[t.image?Object(L.jsx)(p.a.Img,{src:t.image,alt:"The cover for ".concat(t.title),variant:"top"}):null,Object(L.jsxs)(p.a.Body,{children:[Object(L.jsx)(p.a.Title,{children:t.title}),Object(L.jsxs)("p",{className:"small",children:["Authors: ",t.authors]}),Object(L.jsx)(p.a.Text,{children:t.description}),Object(L.jsxs)("p",{children:[" ",Object(L.jsxs)("a",{href:t.link,rel:"noopener",children:[" ","Go to google book"," "]})," "]}),F.loggedIn()&&Object(L.jsx)(O.a,{disabled:null===o||void 0===o?void 0:o.some((e=>e===t.bookId)),className:"btn-block btn-info",onClick:()=>(async t=>{const a=e.find((e=>e.bookId===t));if(!F.loggedIn()||!F.getToken())return!1;try{const{data:e}=await r({variables:{bookInput:a}});if(console.log(e),i)throw new Error("something went wrong!");s([...o,a.bookId])}catch(n){console.error(n)}})(t.bookId),children:null!==o&&void 0!==o&&o.some((e=>e===t.bookId))?"This book has already been saved!":"Save this Book!"})]})]},t.bookId)))})]})]})},N=a(120);const $=Object(w.a)(T||(T=Object(v.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        description\n        image\n        link\n        title\n      }\n    }\n  }\n"])));var q=()=>{const{loading:e,data:t}=Object(N.a)($),[a,{error:n}]=Object(k.a)(f),o=(null===t||void 0===t?void 0:t.me)||{};console.log(o);const s=async e=>{if(!(F.loggedIn()?F.getToken():null))return!1;try{const{data:t}=await a({variables:{bookId:e}});if(n)throw new Error("something went wrong!");(e=>{const t=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!t)return!1;const a=null===t||void 0===t?void 0:t.filter((t=>t!==e));localStorage.setItem("saved_books",JSON.stringify(a))})(e)}catch(t){console.error(t)}};return e?Object(L.jsx)("h2",{children:"LOADING..."}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(h.a,{fluid:!0,className:"text-light bg-dark",children:Object(L.jsx)(u.a,{children:Object(L.jsx)("h1",{children:"Viewing saved books!"})})}),Object(L.jsxs)(u.a,{children:[Object(L.jsx)("h2",{children:o.savedBooks.length?"Viewing ".concat(o.savedBooks.length," saved ").concat(1===o.savedBooks.length?"book":"books",":"):"You have no saved books!"}),Object(L.jsx)(x.a,{children:o.savedBooks.map((e=>Object(L.jsxs)(p.a,{border:"dark",children:[e.image?Object(L.jsx)(p.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(L.jsxs)(p.a.Body,{children:[Object(L.jsx)(p.a.Title,{children:e.title}),Object(L.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(L.jsx)(p.a.Text,{children:e.description}),Object(L.jsx)(O.a,{className:"btn-block btn-danger",onClick:()=>s(e.bookId),children:"Delete this Book!"})]})]},e.bookId)))})]})]})},E=a(121),D=a(119),P=a(117),G=a(122),U=a(38),V=a(115);var Y=()=>{const[e,t]=Object(c.useState)({username:"",email:"",password:""}),[a]=Object(c.useState)(!1),[n,{error:o}]=Object(k.a)(S),[s,r]=Object(c.useState)(!1),i=a=>{const{name:n,value:o}=a.target;t(Object(U.a)(Object(U.a)({},e),{},{[n]:o}))};return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(m.a,{noValidate:!0,validated:a,onSubmit:async a=>{a.preventDefault();if(!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),o)throw new Error("something went wrong!");try{const{data:t}=await n({variables:Object(U.a)({},e)});F.login(t.addUser.token),console.log(t)}catch(s){console.error(s),r(!0)}t({username:"",email:"",password:""})},children:[Object(L.jsx)(V.a,{dismissible:!0,onClose:()=>r(!1),show:s,variant:"danger",children:"Something went wrong with your signup!"}),Object(L.jsxs)(m.a.Group,{children:[Object(L.jsx)(m.a.Label,{htmlFor:"username",children:"Username"}),Object(L.jsx)(m.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:i,value:e.username,required:!0}),Object(L.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(L.jsxs)(m.a.Group,{children:[Object(L.jsx)(m.a.Label,{htmlFor:"email",children:"Email"}),Object(L.jsx)(m.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:i,value:e.email,required:!0}),Object(L.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(L.jsxs)(m.a.Group,{children:[Object(L.jsx)(m.a.Label,{htmlFor:"password",children:"Password"}),Object(L.jsx)(m.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:i,value:e.password,required:!0}),Object(L.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(L.jsx)(O.a,{disabled:!(e.username&&e.email&&e.password),type:"submit",variant:"success",children:"Submit"})]})})};var J=()=>{const[e,t]=Object(c.useState)({email:"",password:""}),[a]=Object(c.useState)(!1),[n,o]=Object(c.useState)(!1),[s,{error:r}]=Object(k.a)(I),i=a=>{const{name:n,value:o}=a.target;t(Object(U.a)(Object(U.a)({},e),{},{[n]:o}))};return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(m.a,{noValidate:!0,validated:a,onSubmit:async a=>{a.preventDefault();!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation());try{const{data:t}=await s({variables:Object(U.a)({},e)});F.login(t.login.token),console.log(t)}catch(n){console.error(n),o(!0)}t({username:"",email:"",password:""})},children:[Object(L.jsx)(V.a,{dismissible:!0,onClose:()=>o(!1),show:n,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(L.jsxs)(m.a.Group,{children:[Object(L.jsx)(m.a.Label,{htmlFor:"email",children:"Email"}),Object(L.jsx)(m.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:i,value:e.email,required:!0}),Object(L.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(L.jsxs)(m.a.Group,{children:[Object(L.jsx)(m.a.Label,{htmlFor:"password",children:"Password"}),Object(L.jsx)(m.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:i,value:e.password,required:!0}),Object(L.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(L.jsx)(O.a,{disabled:!(e.email&&e.password),type:"submit",variant:"success",children:"Submit"}),r&&Object(L.jsx)("div",{children:"Login failed"})]})})};var K=()=>{const[e,t]=Object(c.useState)(!1);return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(E.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(L.jsxs)(u.a,{fluid:!0,children:[Object(L.jsx)(E.a.Brand,{as:j.b,to:"/",children:"Google Books Search"}),Object(L.jsx)(E.a.Toggle,{"aria-controls":"navbar"}),Object(L.jsx)(E.a.Collapse,{id:"navbar",children:Object(L.jsxs)(D.a,{className:"ml-auto",children:[Object(L.jsx)(D.a.Link,{as:j.b,to:"/",children:"Search For Books"}),F.loggedIn()?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(D.a.Link,{as:j.b,to:"/saved",children:"See Your Books"}),Object(L.jsx)(D.a.Link,{onClick:F.logout,children:"Logout"})]}):Object(L.jsx)(D.a.Link,{onClick:()=>t(!0),children:"Login/Sign Up"})]})})]})}),Object(L.jsx)(P.a,{size:"lg",show:e,onHide:()=>t(!1),"aria-labelledby":"signup-modal",children:Object(L.jsxs)(G.a.Container,{defaultActiveKey:"login",children:[Object(L.jsx)(P.a.Header,{closeButton:!0,children:Object(L.jsx)(P.a.Title,{id:"signup-modal",children:Object(L.jsxs)(D.a,{variant:"pills",children:[Object(L.jsx)(D.a.Item,{children:Object(L.jsx)(D.a.Link,{eventKey:"login",children:"Login"})}),Object(L.jsx)(D.a.Item,{children:Object(L.jsx)(D.a.Link,{eventKey:"signup",children:"Sign Up"})})]})})}),Object(L.jsx)(P.a.Body,{children:Object(L.jsxs)(G.a.Content,{children:[Object(L.jsx)(G.a.Pane,{eventKey:"login",children:Object(L.jsx)(J,{handleModalClose:()=>t(!1)})}),Object(L.jsx)(G.a.Pane,{eventKey:"signup",children:Object(L.jsx)(Y,{handleModalClose:()=>t(!1)})})]})})]})})]})},z=a(116);const A=new(a(86).a)({request:e=>{const t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var M=function(){return Object(L.jsx)(z.a,{client:A,children:Object(L.jsx)(j.a,{children:Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(K,{}),Object(L.jsxs)(b.c,{children:[Object(L.jsx)(b.a,{path:"/",element:Object(L.jsx)(_,{})}),Object(L.jsx)(b.a,{path:"/saved",element:Object(L.jsx)(q,{})}),Object(L.jsx)(b.a,{path:"*",element:Object(L.jsx)("h1",{className:"display-2",children:"Wrong page!"})})]})]})})})};d.a.render(Object(L.jsx)(i.a.StrictMode,{children:Object(L.jsx)(M,{})}),document.getElementById("root"))},93:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.033186a9.chunk.js.map