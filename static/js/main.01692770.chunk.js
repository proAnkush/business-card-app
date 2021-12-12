(this["webpackJsonpbusiness-card-app"]=this["webpackJsonpbusiness-card-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),s=a(8),c=a.n(s),d=(a(13),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))}),h=a(3),l=a(4),r=a(1),o=a(6),u=a(5),b=(a(14),a(15),a(0)),j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Output",id:"fullOutputDiv",children:[Object(b.jsx)("h1",{style:{color:"white"},children:"Output"}),Object(b.jsxs)("div",{id:"personalOutput",children:[Object(b.jsxs)("h2",{id:"userName",children:[this.props.data.firstName+" "+this.props.data.lastName," "]}),Object(b.jsxs)("h4",{id:"title",children:[this.props.data.title," at ",this.props.data.brand]}),Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[Object(b.jsx)("i",{className:"fa fa-phone-alt","aria-hidden":"true"})," ",this.props.data.phone]}),Object(b.jsxs)("td",{children:[Object(b.jsx)("i",{className:"fa fa-at","aria-hidden":"true"}),"  ",this.props.data.mail]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[Object(b.jsx)("i",{className:"fab fa-linkedin"})," ",this.props.data.linked]}),Object(b.jsxs)("td",{children:[Object(b.jsx)("i",{className:"fab fa-github"})," ",this.props.data.github]})]})]})}),Object(b.jsx)("hr",{id:"toby"}),Object(b.jsx)("i",{className:"fa fa-map-marker","aria-hidden":"true"})," ",this.props.data.address,Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{id:"otherSide",children:[Object(b.jsx)("div",{id:"otherTop",children:Object(b.jsx)("span",{id:"fnOT",children:this.props.data.firstName})}),Object(b.jsx)("div",{id:"otherBottom",children:Object(b.jsxs)("span",{id:"lnOT",children:[this.props.data.lastName,Object(b.jsx)("div",{id:"brandLogoContainer",children:this.props.data.brandLogo&&Object(b.jsx)("img",{src:this.props.data.brandLogo,alt:"logo",id:"brandLogoOutput"})})]})})]})]})}}]),a}(n.Component),p=j,g=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={firstName:"Dwight",lastName:"Schrute",phone:"(+717)-555-0177",mail:"schrute@wuphf.com",title:"Regional Manager",address:"Chandler Valley Centre Studios, Panorama City, Cali.",brand:"Dunder Mifflin",brandLogo:"",linked:"dwightSchrute",github:"proDwight"},n.changeFirstName=n.changeFirstName.bind(Object(r.a)(n)),n.changeLastName=n.changeLastName.bind(Object(r.a)(n)),n.changePhone=n.changePhone.bind(Object(r.a)(n)),n.changeMail=n.changeMail.bind(Object(r.a)(n)),n.changeTitle=n.changeTitle.bind(Object(r.a)(n)),n.changeAddress=n.changeAddress.bind(Object(r.a)(n)),n.changeBrand=n.changeBrand.bind(Object(r.a)(n)),n.changeBrandLogo=n.changeBrandLogo.bind(Object(r.a)(n)),n.changeLinkedIn=n.changeLinkedIn.bind(Object(r.a)(n)),n.changeGithub=n.changeGithub.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"changeFirstName",value:function(){this.setState({firstName:document.getElementById("fnInput").value})}},{key:"changeLastName",value:function(){this.setState({lastName:document.getElementById("lnInput").value})}},{key:"changePhone",value:function(){this.setState({phone:document.getElementById("phInput").value})}},{key:"changeMail",value:function(){this.setState({mail:document.getElementById("mailInput").value})}},{key:"changeTitle",value:function(){this.setState({title:document.getElementById("titleInput").value})}},{key:"changeAddress",value:function(){this.setState({address:document.getElementById("addrInput").value})}},{key:"changeBrand",value:function(){this.setState({brand:document.getElementById("brInput").value})}},{key:"changeBrandLogo",value:function(e){e.target.files&&e.target.files[0]&&this.setState({brandLogo:URL.createObjectURL(e.target.files[0])})}},{key:"changeLinkedIn",value:function(){this.setState({linked:document.getElementById("liInput").value})}},{key:"changeGithub",value:function(){this.setState({github:document.getElementById("gitInput").value})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"test",children:[Object(b.jsxs)("div",{id:"form",children:[Object(b.jsx)("h1",{children:"Editor"}),Object(b.jsxs)("div",{id:"personal",children:[Object(b.jsx)("h2",{children:"Personal Information"}),Object(b.jsx)("input",{maxLength:10,title:"First name",className:"input",value:this.state.firstName,id:"fnInput",placeholder:"First Name",onChange:this.changeFirstName}),Object(b.jsx)("input",{maxLength:10,title:"Last name",className:"input",value:this.state.lastName,id:"lnInput",placeholder:"Last Name",onChange:this.changeLastName}),Object(b.jsx)("input",{maxLength:20,title:"Designation",className:"input",value:this.state.title,id:"titleInput",placeholder:"Work Profile",onChange:this.changeTitle}),Object(b.jsx)("input",{maxLength:15,title:"Company",className:"input",value:this.state.brand,id:"brInput",placeholder:"Brand/Company Name",onChange:this.changeBrand}),Object(b.jsx)("input",{maxLength:15,title:"Phone number",className:"input",value:this.state.phone,id:"phInput",placeholder:"Phone",onChange:this.changePhone}),Object(b.jsx)("input",{maxLength:20,type:"email",title:"Email address",className:"input",value:this.state.mail,id:"mailInput",placeholder:"Mail",onChange:this.changeMail}),Object(b.jsxs)("span",{title:"Brand Logo",className:"input",children:["Select a Brand Logo: ",Object(b.jsx)("input",{type:"file",className:"filetype",id:"brLogo",placeholder:"Brand Logo Address",onChange:this.changeBrandLogo})]}),Object(b.jsx)("input",{maxLength:13,title:"LinkedIn address",value:this.state.linked,className:"input",id:"liInput",placeholder:"LinkedIn",onChange:this.changeLinkedIn}),Object(b.jsx)("input",{maxLength:15,title:"Github",className:"input",value:this.state.github,id:"gitInput",placeholder:"Github",onChange:this.changeGithub}),Object(b.jsx)("input",{maxLength:60,title:"Physical address",value:this.state.address,className:"input",id:"addrInput",placeholder:"Physical Address",onChange:this.changeAddress})]}),Object(b.jsx)("div",{id:"backside"})]}),Object(b.jsx)(p,{data:this.state})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),d()}},[[17,1,2]]]);
//# sourceMappingURL=main.01692770.chunk.js.map