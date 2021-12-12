(this["webpackJsonpbusiness-card-app"]=this["webpackJsonpbusiness-card-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),s=a(8),c=a.n(s),d=(a(13),a(3)),h=a(4),l=a(6),r=a(5),o=(a(14),a(1)),u=(a(15),a(16),a(0)),b=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(h.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Output",id:"fullOutputDiv",children:[Object(u.jsx)("h1",{style:{color:"white"},children:"Output"}),Object(u.jsxs)("div",{id:"personalOutput",children:[Object(u.jsxs)("h2",{id:"userName",children:[this.props.data.firstName+" "+this.props.data.lastName," "]}),Object(u.jsxs)("h4",{id:"title",children:[this.props.data.title," at ",this.props.data.brand]}),Object(u.jsx)("table",{children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[Object(u.jsx)("i",{className:"fa fa-phone-alt","aria-hidden":"true"})," ",this.props.data.phone]}),Object(u.jsxs)("td",{children:[Object(u.jsx)("i",{className:"fa fa-at","aria-hidden":"true"}),"  ",this.props.data.mail]})]}),Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[Object(u.jsx)("i",{className:"fab fa-linkedin"})," ",this.props.data.linked]}),Object(u.jsxs)("td",{children:[Object(u.jsx)("i",{className:"fab fa-github"})," ",this.props.data.github]})]})]})}),Object(u.jsx)("hr",{id:"toby"}),Object(u.jsx)("i",{className:"fa fa-map-marker","aria-hidden":"true"})," ",this.props.data.address,Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{id:"otherSide",children:[Object(u.jsx)("div",{id:"otherTop",children:Object(u.jsx)("span",{id:"fnOT",children:this.props.data.firstName})}),Object(u.jsx)("div",{id:"otherBottom",children:Object(u.jsxs)("span",{id:"lnOT",children:[this.props.data.lastName,Object(u.jsx)("div",{id:"brandLogoContainer",children:this.props.data.brandLogo&&Object(u.jsx)("img",{src:this.props.data.brandLogo,alt:"logo",id:"brandLogoOutput"})})]})})]})]})}}]),a}(n.Component),j=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={firstName:"Dwight",lastName:"Schrute",phone:"(+717)-555-0177",mail:"schrute@wuphf.com",title:"Regional Manager",address:"Chandler Valley Centre Studios, Panorama City, Cali.",brand:"Dunder Mifflin",brandLogo:"",linked:"dwightSchrute",github:"proDwight"},n.changeFirstName=n.changeFirstName.bind(Object(o.a)(n)),n.changeLastName=n.changeLastName.bind(Object(o.a)(n)),n.changePhone=n.changePhone.bind(Object(o.a)(n)),n.changeMail=n.changeMail.bind(Object(o.a)(n)),n.changeTitle=n.changeTitle.bind(Object(o.a)(n)),n.changeAddress=n.changeAddress.bind(Object(o.a)(n)),n.changeBrand=n.changeBrand.bind(Object(o.a)(n)),n.changeBrandLogo=n.changeBrandLogo.bind(Object(o.a)(n)),n.changeLinkedIn=n.changeLinkedIn.bind(Object(o.a)(n)),n.changeGithub=n.changeGithub.bind(Object(o.a)(n)),n}return Object(h.a)(a,[{key:"changeFirstName",value:function(){this.setState({firstName:document.getElementById("fnInput").value})}},{key:"changeLastName",value:function(){this.setState({lastName:document.getElementById("lnInput").value})}},{key:"changePhone",value:function(){this.setState({phone:document.getElementById("phInput").value})}},{key:"changeMail",value:function(){this.setState({mail:document.getElementById("mailInput").value})}},{key:"changeTitle",value:function(){this.setState({title:document.getElementById("titleInput").value})}},{key:"changeAddress",value:function(){this.setState({address:document.getElementById("addrInput").value})}},{key:"changeBrand",value:function(){this.setState({brand:document.getElementById("brInput").value})}},{key:"changeBrandLogo",value:function(e){e.target.files&&e.target.files[0]&&this.setState({brandLogo:URL.createObjectURL(e.target.files[0])})}},{key:"changeLinkedIn",value:function(){this.setState({linked:document.getElementById("liInput").value})}},{key:"changeGithub",value:function(){this.setState({github:document.getElementById("gitInput").value})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"test",children:[Object(u.jsxs)("div",{id:"form",children:[Object(u.jsx)("h1",{children:"Editor"}),Object(u.jsxs)("div",{id:"personal",children:[Object(u.jsx)("h2",{children:"Personal Information"}),Object(u.jsx)("input",{maxLength:10,title:"First name",className:"input",value:this.state.firstName,id:"fnInput",placeholder:"First Name",onChange:this.changeFirstName}),Object(u.jsx)("input",{maxLength:10,title:"Last name",className:"input",value:this.state.lastName,id:"lnInput",placeholder:"Last Name",onChange:this.changeLastName}),Object(u.jsx)("input",{maxLength:20,title:"Designation",className:"input",value:this.state.title,id:"titleInput",placeholder:"Work Profile",onChange:this.changeTitle}),Object(u.jsx)("input",{maxLength:15,title:"Company",className:"input",value:this.state.brand,id:"brInput",placeholder:"Brand/Company Name",onChange:this.changeBrand}),Object(u.jsx)("input",{maxLength:15,title:"Phone number",className:"input",value:this.state.phone,id:"phInput",placeholder:"Phone",onChange:this.changePhone}),Object(u.jsx)("input",{maxLength:20,type:"email",title:"Email address",className:"input",value:this.state.mail,id:"mailInput",placeholder:"Mail",onChange:this.changeMail}),Object(u.jsxs)("span",{title:"Brand Logo",className:"input",children:["Select a Brand Logo: ",Object(u.jsx)("input",{type:"file",className:"filetype",id:"brLogo",placeholder:"Brand Logo Address",onChange:this.changeBrandLogo})]}),Object(u.jsx)("input",{maxLength:13,title:"LinkedIn address",value:this.state.linked,className:"input",id:"liInput",placeholder:"LinkedIn",onChange:this.changeLinkedIn}),Object(u.jsx)("input",{maxLength:15,title:"Github",className:"input",value:this.state.github,id:"gitInput",placeholder:"Github",onChange:this.changeGithub}),Object(u.jsx)("input",{maxLength:60,title:"Physical address",value:this.state.address,className:"input",id:"addrInput",placeholder:"Physical Address",onChange:this.changeAddress})]}),Object(u.jsx)("div",{id:"backside"})]}),Object(u.jsx)(b,{data:this.state})]})}}]),a}(n.Component),p=(n.Component,function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))});c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.123de212.chunk.js.map