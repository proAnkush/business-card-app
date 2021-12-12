import React, { Component } from 'react';
import "./Output.css";
class Output extends Component{
    constructor(props){
        super(props);
    }
    
    
    render(){
        return(
            <div className='Output' id="fullOutputDiv">
                    <h1 style={{color: "white"}}>Output</h1>
                <div id="personalOutput">
                    <h2 id="userName">{this.props.data.firstName + " " + this.props.data.lastName} </h2>
                    <h4 id="title">{this.props.data.title} at {this.props.data.brand}</h4>
                    <table>
                        <tbody>

                        <tr>
                            <td>
                                <i className="fa fa-phone-alt" aria-hidden="true"></i> {this.props.data.phone}
                            </td>
                            <td>
                                <i className="fa fa-at" aria-hidden="true"></i>  {this.props.data.mail} 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fab fa-linkedin"></i> {this.props.data.linked}
                            </td>
                            <td>
                            <i className="fab fa-github"></i> {this.props.data.github}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <hr id="toby"/>

                    <i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.data.address}<br/>
                    

                </div>
                <div id="otherSide">
                    <div id="otherTop">
                        <span id="fnOT">
                            {this.props.data.firstName}

                        </span>
                    </div>
                    <div id="otherBottom">
                        <span id="lnOT">
                            {this.props.data.lastName}
                            <div id="brandLogoContainer">
                                {this.props.data.brandLogo && <img src={this.props.data.brandLogo} alt="logo" id="brandLogoOutput"/>}

                            </div>

                        </span>
                    </div>
                </div>

            </div>
        )
    }
}
export default Output;