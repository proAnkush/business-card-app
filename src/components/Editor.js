import "./Editor.css";
import React, { Component } from 'react';
import Output from "./Output";

class Editor extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: "Dwight",
            lastName: "Schrute",
            phone: "(+717)-555-0177",
            mail: "schrute@wuphf.com",
            title: "Regional Manager",
            address: "Chandler Valley Centre Studios, Panorama City, Cali.",
            brand: "Dunder Mifflin",
            brandLogo: "",
            linked: "dwightSchrute",
            github: "proDwight"
        }
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeMail = this.changeMail.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeBrand = this.changeBrand.bind(this);
        this.changeBrandLogo = this.changeBrandLogo.bind(this);
        this.changeLinkedIn = this.changeLinkedIn.bind(this);
        this.changeGithub = this.changeGithub.bind(this);
    }
    changeFirstName(){
        this.setState({
            firstName: document.getElementById("fnInput").value,
        })
    }
    changeLastName(){
        this.setState({
            lastName: document.getElementById("lnInput").value,
        })
    }
    changePhone(){
        this.setState({
            phone: document.getElementById("phInput").value,
        })
    }
    changeMail(){
        this.setState({
            mail: document.getElementById("mailInput").value,
        })
    }
    changeTitle(){
        this.setState({
            title: document.getElementById("titleInput").value,
        })
    }
    changeAddress(){
        this.setState({
            address: document.getElementById("addrInput").value,
        })
    }
    changeBrand(){
        this.setState({
            brand: document.getElementById("brInput").value,
        })
    }
    changeBrandLogo(event){
        if (event.target.files && event.target.files[0]) {
            this.setState({
                brandLogo: URL.createObjectURL(event.target.files[0])
            });
        }
    }
    changeLinkedIn(){
        this.setState({
            linked: document.getElementById("liInput").value,
        });
    }
    changeGithub(){
        this.setState({
            github: document.getElementById("gitInput").value,
        })
    }
    render(){
        return (
            <div className="test">
                <div id="form">
                    <h1>Editor</h1>
                    <div id="personal">
                        <h2>Personal Information</h2>
                        
                        <input maxLength={10} title="First name" className="input" value={this.state.firstName} id="fnInput" placeholder="First Name" onChange={this.changeFirstName}/>
                        <input maxLength={10} title="Last name" className="input" value={this.state.lastName} id="lnInput" placeholder="Last Name" onChange={this.changeLastName}/>
                        <input maxLength={20} title="Designation" className="input" value={this.state.title} id="titleInput" placeholder="Work Profile" onChange={this.changeTitle} />
                        <input maxLength={15} title="Company" className="input" value={this.state.brand} id="brInput" placeholder="Brand/Company Name" onChange={this.changeBrand} />
                        <input maxLength={15} title="Phone number" className="input" value={this.state.phone} id="phInput" placeholder="Phone" onChange={this.changePhone} />
                        <input maxLength={20} type="email" title="Email address" className="input" value={this.state.mail} id="mailInput" placeholder="Mail" onChange={this.changeMail} />
                        <span title="Brand Logo" className="input">Select a Brand Logo: <input type="file" className="filetype" id="brLogo" placeholder="Brand Logo Address" onChange={this.changeBrandLogo} /></span>
                        <input maxLength={13} title="LinkedIn address" value={this.state.linked} className="input" id="liInput" placeholder="LinkedIn" onChange={this.changeLinkedIn} />
                        <input maxLength={15} title="Github" className="input" value={this.state.github} id="gitInput" placeholder="Github" onChange={this.changeGithub} />
                        

                        <input maxLength={60} title="Physical address" value={this.state.address} className="input" id="addrInput" placeholder="Physical Address" onChange={this.changeAddress} />
                    </div>
                    <div id="backside">


                    </div>

                </div>
                <Output data={this.state}/>
            </div>
        )
    }
}

export default Editor;