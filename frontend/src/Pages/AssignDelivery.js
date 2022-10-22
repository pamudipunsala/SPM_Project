import React, {Component} from "react";
import axios from "axios";
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

export default class Assigndel extends Component{

    state = iState;

    constructor(props){
        super(props);
    
        this.state={
            teams:[],
        };
    }

    validate = () => {
        let teamcodeError = "";
        let memberoneError = "";
        let membertwoError = "";
        let memberthreeError = "";
        let vehicleNoError = "";
        let orderiderror = "";
        let statuserror = "";

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
        if(!this.state.orderid){
            orderiderror = 'Order ID cannot be empty!';
        }
        if(!this.state.status){
            statuserror = 'Status cannot be empty!';
        }
        if(teamcodeError || memberoneError || membertwoError || memberthreeError ||vehicleNoError||orderiderror || statuserror){
            this.setState({teamcodeError, memberoneError, membertwoError, memberthreeError, vehicleNoError, orderiderror, statuserror});
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
    
    onSubmit = (e)=>{
       e.prevenrDefault();
       const id = this.props.match.params.id;
       const{teamcode, memberone, membertwo, memberthree, vehicleNo, orderid, status} = this.state;
        const data = {
            teamcode:teamcode,
            memberone:memberone,
            membertwo:membertwo,
            memberthree:memberthree,
            vehicleNo:vehicleNo,
            orderid:orderid,
            status:status
        }
        const isValid = this.validate();
        if(isValid){
            this.setState(iState);
        axios.put(`http://localhost:5000/dteam/update/${id}`,data).then((res)=>{
            alert("Delivery assigned")
            if(res.data.success){
                
                this.setState({
                    teamcode:"",
                    memberone:"",
                    membertwo:"",
                    memberthree:"",
                    vehicleNo:"",
                    orderid:"",
                    status:""
                }
                    
                );
            }
        }).catch((err)=>{
            alert(err)
        })
    };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/dteam/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    teamcode:res.data.teams.teamcode,
                    memberone:res.data.teams.memberone,
                    membertwo:res.data.teams.membertwo,
                    memberthree:res.data.teams.memberthree,
                    vehicleNo:res.data.teams.vehicleNo,
                    orderid:res.data.teams.orderid,
                    status:res.data.teams.status

                });
                
            }
        });
    }
  
  render(){
    return(
        <div className="addteam">
        <div className="ish">
        <button className="abtn" type="button"><a href="/viewteam" style={{textDecoration:'none',color:'white'}} required><b>View Teams</b></a></button>
        <div className="new"> 
        <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", backgroundColor: "rgba(0, 0, 0, 0.560)", color:'white'}}>
            <div >
            <h2>Assign delivery to teams</h2>

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

            <div>
                <label name="orderid"><b>Order ID</b></label><br/>
                <input type="text" 
                    name='orderid' 
                    id='orderid' 
                    placeholder="Eg:XZ000" 
                    value={this.state.orderid} 
                    onChange={this.InputChange}/>
            </div>
            <div style={{color: "red"}}><b>{this.state.orderiderror}</b></div>

            <div>
                <label name="status"><b>Delivery status</b></label><br/>
                <input type="text" 
                    name='status' 
                    id='status' 
                    placeholder="Eg:Pending/Complete/Not Assigned" 
                    value={this.state.status} 
                    onChange={this.InputChange}/>
            </div>
            <div style={{color: "red"}}><b>{this.state.statuserror}</b></div>

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











  /*<div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Assign delivery</h1>
         <form className="needs-validation" noValidate>
          <div>

              <label style={{marginBottom:'5px'}}>Team ID</label>
              <input type="text"  name="teamcode" placeholder="Enter team id"
              value={this.state.teamcode} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.teamcodeError}</div>

    

        
              
          <div>

              <label style={{marginBottom:'5px'}}>member 1</label>
              <input type="text"  name="memberone" placeholder="Enter Member 1 name"
              value={this.state.memberone} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.memberoneError}</div>

          

          <div>

              <label style={{marginBottom:'5px'}}>member 2</label>
              <input type="text"  name="memebertwo" placeholder="Enter Member 2 name"
              value={this.state.membertwo} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.membertwoError}</div>

          <div>

          <label style={{marginBottom:'5px'}}>member 3</label>
          <input type="text"  name="memberthree" placeholder="Enter Member 3 name"
          value={this.state.memberthree} 
          onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.memberthreeError}</div>


          <div>

              <label style={{marginBottom:'5px'}}>VehicleNo</label>
              <input type="text"  name="vehicleno" placeholder="Enter vehicle number"
              value={this.state.vehicleNo} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.vehicleNoError}</div>

          <div>

              <label style={{marginBottom:'5px'}}>Order ID</label>
              <input type="text"  name="orderid" placeholder="Enter Order ID"
              value={this.state.orderid} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.orderiderror}</div>

          <div>

              <label style={{marginBottom:'5px'}}>Status</label>
              <input type="text"  name="status" placeholder="Enter status of delivery"
              value={this.state.status} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.statuserror}</div>

          

          <button className="btn btn-warning" type="submit" style={{textDecoration:'none',colour:'#FFF'}} onClick={this.onSubmit}><a href="#">Update</a></button>
</form>

      </div> */