(this["webpackJsonpai-blocks"]=this["webpackJsonpai-blocks"]||[]).push([[0],{101:function(e,t,a){},115:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),i=(a(78),a(79),a(49),a(26),a(62)),s=a.n(i),o=(a(98),a(63)),m=function(e){var t=e.title;return r.a.createElement(o.a,null,r.a.createElement("title",null,t||"AI Blocks"))},u=a(137),d=a(1),p=a(5),h=a(3),E=a(4),g=(a(101),a(22));function f(e){var t=e.theme?e.theme:"defaultSection",a=e.noSpace?"noSpace":"defaultSection";return r.a.createElement(g.Element,{name:e.id},r.a.createElement("section",{className:"sec-theme-"+t+" "+a},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"content"},e.children))))}r.a.Component;var v=a(18),b=a(15),w=a(48),k=a(8),x=a(70),y=function(e,t,a,n){return 2*a/Math.PI*Math.atan(Math.sin(1.5*Math.PI*e*n)/t)};function N(e){var t=Object(n.useRef)(),a=Object(n.useMemo)((function(){var e=new k.Vector3,t=new k.Matrix4,a=Object(b.a)(Array(1e4)).map((function(e,t){var a=new k.Vector3;return a.x=t%200-100,a.y=Math.floor(t/200)-20,a.y+=t%2*.5,a.x+=.3*Math.random(),a.y+=.3*Math.random(),a})),n=new k.Vector3(1,0,0),r=a.map((function(e){return e.length()+.5*Math.cos(8*e.angleTo(n))}));return{vec:e,transform:t,positions:a,distances:r}}),[]),c=a.vec,l=a.transform,i=a.positions,s=a.distances;return Object(w.b)((function(e){for(var a=e.clock,n=0;n<1e4;++n){var r=s[n],o=a.elapsedTime-r/25,m=y(o,.15+.2*r/72,.4,1/3.8);c.copy(i[n]).multiplyScalar(m+1.3),l.setPosition(c),t.current.setMatrixAt(n,l)}t.current.instanceMatrix.needsUpdate=!0})),r.a.createElement("instancedMesh",{ref:t,args:[null,null,1e4]},r.a.createElement("circleBufferGeometry",{args:[.15]}),r.a.createElement("meshBasicMaterial",{color:e.dotColor}))}var P=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).props=e,n.state={isDesktop:!1},n.updatePredicate=n.updatePredicate.bind(Object(v.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatePredicate)}},{key:"updatePredicate",value:function(){this.setState({isDesktop:window.innerWidth>1500})}},{key:"render",value:function(){var e=this.state.isDesktop;return r.a.createElement(w.a,{orthographic:!0,camera:{zoom:e?25:10},colorManagement:!1,resize:{polyfill:x.a}},r.a.createElement(N,{dotColor:this.props.dotColor}),this.props.children)}}]),a}(r.a.Component),S=(a(115),a(71)),M=a(69),j=a.n(M);function C(e){var t=r.a.useRef();return r.a.createElement(j.a,{height:579.19,resize:!0,once:!0},r.a.createElement("div",{className:"boxContainer",ref:t,placeholder:r.a.createElement("div",{style:{backgroundColor:"white",minHeight:String(579.19)+"px"}})},r.a.createElement(S.a,{videoSrc:"static/vid/"+e.src+".mp4",pausedOverlay:r.a.createElement("div",{style:{backgroundImage:"url(static/vid/thumbnails/"+e.src+".jpg)",width:"100%",height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}),style:{width:"100%",height:"350px",display:"block",marginBottom:"20px"},sizingMode:"container",hoverTargetRef:t,preload:"metadata"}),r.a.createElement("div",{className:"boxDetails"},r.a.createElement("h3",null,e.name),e.desc)))}C.defaultProps={name:"Project",desc:"Project description."};a(120);var z=a(45),O=a(9),I=a(38),A=a(13),L=Object(A.a)();L.listen((function(e){I.a.set({page:e.pathname}),I.a.pageview(e.pathname)}));I.a.initialize("G-WL13LKQHXM");var D=new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\b\v\f\x0e-\x1f!#-[]-\x7f]|\\\\[\x01-\t\v\f\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\b\v\f\x0e-\x1f!-ZS-\x7f]|\\\\[\x01-\t\v\f\x0e-\x7f])+)\\])"),B={firstName:"",lastName:"",email:"",message:""};function T(e){e.preventDefault(),B.firstName?B.lastName?D.test(B.email)?B.message?s()({method:"POST",url:"https://www.getaiblocks.com/.netlify/functions/contact",data:B}).then((function(e){console.log("RESPONSE"),console.log(e),200===e.status?(alert("Message sent! Looking forward to help."),B={firstName:"",lastName:"",email:"",message:""}):alert("Message failed to send. Please try again.")})):alert("Please put a message."):alert("Please input a valid email."):alert("Please put a last name."):alert("Please put a first name.")}function W(e){B.firstName=e.target.value}function R(e){B.lastName=e.target.value}function H(e){B.email=e.target.value}function F(e){B.message=e.target.value}function G(){return r.a.createElement(z.a,{style:{overflowX:"hidden"},history:L},r.a.createElement("div",{id:"animation-wrapper"},r.a.createElement("div",{id:"animation"},r.a.createElement(P,{bgColor:"black",dotColor:"white"}))),r.a.createElement(f,{id:"nav",noSpace:!0},r.a.createElement("nav",null,r.a.createElement(z.b,{to:"/"},r.a.createElement("img",{src:"/logo.svg",alt:"Home"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.Link,{to:"projects",smooth:!0,duration:500},"Projects")),r.a.createElement("li",null,r.a.createElement(g.Link,{to:"contact",smooth:!0,duration:500},"Contact"))))),r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/about"},r.a.createElement(K,null)),r.a.createElement(O.a,{path:"/"},r.a.createElement(U,null))))}function U(){return r.a.createElement("div",null,r.a.createElement(f,{id:"head"},r.a.createElement(m,{title:"Home | AI Blocks"}),r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement("h1",{className:"bgHeader"},"WE FIND AI SOLUTIONS")),r.a.createElement(u.a,{item:!0,xs:12,sm:7}),r.a.createElement(u.a,{item:!0,xs:12,sm:5},r.a.createElement("h2",{className:"blend"},"To the most demanding applications.")),r.a.createElement(u.a,{item:!0,xs:12,sm:7}),r.a.createElement(u.a,{item:!0,xs:12,sm:5,style:{textAlign:"right"}},r.a.createElement(g.Link,{to:"projects",smooth:!0,duration:500},r.a.createElement("button",null,r.a.createElement("h2",null,"See projects \u2192")))))),r.a.createElement(f,{id:"clients",theme:"white"},r.a.createElement(u.a,{container:!0,spacing:5},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement("h2",{className:"accent"},"Selected Clients")),r.a.createElement(u.a,{className:"centerGrid",item:!0,xs:12,sm:4},r.a.createElement("img",{src:"/static/img/clients/mtr.png",alt:"MTR"})),r.a.createElement(u.a,{className:"centerGrid",item:!0,xs:12,sm:4},r.a.createElement("img",{src:"/static/img/clients/hkpc.png",alt:"HKPC"})),r.a.createElement(u.a,{className:"centerGrid",item:!0,xs:12,sm:4},r.a.createElement("img",{src:"/static/img/clients/customs.png",alt:"Customs"})))),r.a.createElement(f,{id:"projects",theme:"grey"},r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:12,sm:12},r.a.createElement("h2",{className:"accent"},"Projects")),r.a.createElement(u.a,{item:!0,xs:12,sm:6},r.a.createElement(C,{name:"Deep Learning License Plate Reader",desc:r.a.createElement("p",null,"Custom license plate reader ",r.a.createElement("p",{className:"accent"},"specifically for Hong Kong license plates.")," With support for deep learning license plate deskew, and multi-line license plates."),src:"plate"})),r.a.createElement(u.a,{item:!0,xs:12,sm:6},r.a.createElement(C,{name:"Train Station Safety Net",desc:r.a.createElement("p",null,"Detect when passengers are on wheelchairs, using blind canes or have fallen over. The AI ",r.a.createElement("p",{className:"accent"},"alerts station staff,")," so that they can provide assistance. With AI, we can help ",r.a.createElement("p",{className:"accent"},"make journeys safer for all.")),src:"train_station"})))),r.a.createElement(f,{id:"contact",theme:"dark"},r.a.createElement("form",{id:"contactForm",onSubmit:T.bind(this),method:"POST"},r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:12,sm:12},r.a.createElement("h2",{className:"accent"},"Contact Us")),r.a.createElement(u.a,{item:!0,xs:12,sm:12},r.a.createElement("p",{className:"white"},"We'd love to hear about how we can help you with AI",r.a.createElement("span",{role:"img","aria-label":"robot emoji"}," \ud83e\udd16"))),r.a.createElement(u.a,{item:!0,xs:12,sm:4},r.a.createElement("input",{id:"firstName",placeholder:"First name",onChange:W.bind(this)}),r.a.createElement("input",{id:"lastName",placeholder:"Last name",onChange:R.bind(this)}),r.a.createElement("input",{id:"email",placeholder:"Email",onChange:H.bind(this)})),r.a.createElement(u.a,{item:!0,xs:12,sm:8},r.a.createElement("textarea",{id:"message",form:"contactForm",placeholder:"Enter text here...",onChange:F.bind(this)})),r.a.createElement(u.a,{item:!0,xs:12,sm:12},r.a.createElement("input",{type:"submit"}))))),r.a.createElement(f,{id:"footer",theme:"dark"},r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:12,sm:4}),r.a.createElement(u.a,{item:!0,xs:12,sm:8,style:{textAlign:"right"}},r.a.createElement("img",{src:"/static/img/logo.png",alt:"AI Blocks, \u667a\u80fd\u5feb",style:{height:"100px"}}),r.a.createElement("p",{className:"white"},"\xa9 ",(new Date).getFullYear()," AI Blocks Limited")))))}function K(){return r.a.createElement("div",null,r.a.createElement(m,{title:"About | AI Blocks"}),r.a.createElement("h2",null,"Dynamically loaded about!"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){},49:function(e,t,a){},73:function(e,t,a){e.exports=a(124)},79:function(e,t,a){},98:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.c29b7edc.chunk.js.map