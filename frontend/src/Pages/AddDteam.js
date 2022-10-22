import React, {Component} from 'react';
import axios from 'axios';
import '../index.css';

const iState = {
    teamcode:"",
    memberone:"",
    membertwo:"",
    memberthree:"",
    vehicleNo:"",
    orderid:"",
    status:"",
    teamcodeError:"",
    memberoneError:"",
    membertwoError:"",
    memberthreeError:"",
    vehicleNoError:"",
    orderiderror:"",
    statuserror:""
}

export default class AddDteam extends Component{
    state = iState;

    constructor(props){
        super(props);
    
        this.state={
            team:[],
        };
    }

    validate = () => {
        let teamcodeError = "";
        let memberoneError = "";
        let membertwoError = "";
        let memberthreeError = "";
        let vehicleNoError = "";
        //let orderiderror = "";
        //let statuserror = "";

        if(!this.state.teamcode){
            teamcodeError = 'Team ID field cannot be empty!';
        }

        if(!this.state.memberone){
            memberoneError = 'Member 1 field cannot be empty!';
        }

        if(!this.state.membertwo){
            membertwoError = 'Member 2 field cannot be empty!';
        }

        if(!this.state.memberthree){
            memberthreeError = 'Member 3 field cannot be empty!';
        }

        if(!this.state.vehicleNo){
            vehicleNoError = 'Field cannot be empty!';
        }

        if(teamcodeError || memberoneError || membertwoError || memberthreeError ||vehicleNoError){
            this.setState({teamcodeError, memberoneError, membertwoError, memberthreeError, vehicleNoError});
            return false;
        }

        return true;
    }

    InputChange =(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }


    onSubmit = (e) =>{
        e.preventDefault();
        const{teamcode, memberone, membertwo, memberthree, vehicleNo, orderid, status} = this.state;

        const Team = {
            teamcode:teamcode,
            memberone:memberone,
            membertwo:membertwo,
            memberthree:memberthree,
            vehicleNo:vehicleNo,
            orderid:orderid,
            status:status
        }

     
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(iState);
    
        axios.post("http://localhost:5000/dteam/add",Team).then((res) => {               
            alert("Details added successfully!");
            if(res.data.success){
                this.setState({
                    teamcode:"",
                    memberone:"",
                    membertwo:"",
                    memberthree:"",
                    vehicleNo:"",
                    orderid:"",
                    status:"",
                })
            }
        }).catch((err)=>{
            alert(err)
        })
    };
    }

    render(){
        return (
            <div className="addteam">
                <div className="ish">
                <button className="abtn" type="button"><a href="/viewteam" style={{textDecoration:'none',color:'white'}} required><b>View Teams</b></a></button>
                <div className="new"> 
                <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", backgroundColor: "rgba(0, 0, 0, 0.560)", color:'white'}}>
                    <div >
                    <h2>Add Delivery Team Details</h2>

                    <div>
                        <label name="teamcode"><b>Team Code</b></label><br/>
                        <input type="text" 
                            name='teamcode' 
                            id='teamcode' 
                            placeholder="Eg:AB100" 
                            value={this.state.teamcode} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.teamcodeError}</b></div>
                    
                    <div>
                        <label name="memberone"><b>Member one Name</b></label><br/>
                        <input type="text" 
                            name='memberone' 
                            id='memberone' 
                            placeholder="Eg:Kusal Fernando" 
                            value={this.state.memberone} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.memberoneError}</b></div>

                    <div>
                        <label name="membertwo"><b>Member Two Name</b></label><br/>
                        <input type="text" 
                            name='membertwo' 
                            id='membertwo' 
                            placeholder="Eg:Hansaka Eranda" 
                            value={this.state.membertwo} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.membertwoError}</b></div>

                    <div>
                        <label name="memberthree"><b>Membert Three Name</b></label><br/>
                        <input type="text" 
                            name='memberthree' 
                            id='memberthree' 
                            placeholder="Eg:Pamudi Punsala" 
                            value={this.state.memberthree} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.memberthreeError}</b></div>

                    <div>
                        <label name="vehicleNo"><b>Vehicle Number</b></label><br/>
                        <input type="text" 
                            name='vehicleNo' 
                            id='vehicleNo' 
                            placeholder="Eg:GU1010" 
                            value={this.state.vehicleNo} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.vehicleNoError}</b></div>

                    <br/><br/><br/>
                    <button className="sbtn" type="submit" onClick={this.onSubmit} ><a href="/viewteam" style={{textDecoration:'none',color:'white'}}><b>Save</b></a></button><br/>
                    </div>
                </form> 
                </div>
                </div>
            </div>
        )
    }
}