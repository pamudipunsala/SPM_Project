import React, {Component} from "react";
import axios from "axios";

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
            team:[],
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
        if(isValid){
            this.setState(iState);
        axios.put(`http://localhost:5000/dteam/update/${id}`,Team).then((res)=>{
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
      
      <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Update booking</h1>
         <form className="needs-validation" noValidate>
          <div class="form-group">

              <label style={{marginBottom:'5px'}}>BookingID</label>
              <input type="text" class="form-control" name="BookingID" placeholder="Enter Booking ID"
              value={this.state.BookingID} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.biderr}</div>

    

        
              
          <div class="form-group">

              <label style={{marginBottom:'5px'}}>PassengerName</label>
              <input type="text" class="form-control" name="PassengerName" placeholder="Enter passenger name"
              value={this.state.PassengerName} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.nameerr}</div>

          

          <div class="form-group">

              <label style={{marginBottom:'5px'}}>Telephone</label>
              <input type="text" class="form-control" name="Telephone" placeholder="Enter passenger Mobile number"
              value={this.state.Telephone} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.telerr}</div>

          <div class="form-group">

          <label style={{marginBottom:'5px'}}>Email</label>
          <input type="email" class="form-control" name="Email" placeholder="Enter passenger email"
          value={this.state.Email} 
          onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.emailError}</div>


          <div class="form-group">

              <label style={{marginBottom:'5px'}}>SeatNo</label>
              <input type="text" class="form-control" name="SeatNo" placeholder="Enter seat number"
              value={this.state.SeatNo} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.seaterr}</div>

          <div class="form-group">

              <label style={{marginBottom:'5px'}}>Departure</label>
              <input type="text" class="form-control" name="Departure" placeholder="Enter Departure location"
              value={this.state.Departure} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.deperr}</div>

          <div class="form-group">

              <label style={{marginBottom:'5px'}}>Arrival</label>
              <input type="text" class="form-control" name="Arrival" placeholder="Enter Arrival location"
              value={this.state.Arrival} 
              onChange={this.handleInputChange}/>

          </div><div style={{color: "red"}}>{this.state.arriverr}</div>

          <div class="form-group">

              <label style={{marginBottom:'5px'}}>depTime</label>
              <input type="text" class="form-control" name="depTime" placeholder="Enter depurture time"
              value={this.state.depTime} 
              onChange={this.handleInputChange}/><div style={{color: "red"}}>{this.state.timeerr}</div>

          </div>

          <div class="form-group">

              <label style={{marginBottom:'5px'}}>Date</label>
              <input type="text" class="form-control" name="Date" placeholder="Enter date"
              value={this.state.Date} 
              onChange={this.handleInputChange}/><div style={{color: "red"}}>{this.state.deperr}</div>

          </div>





          <button className="btn btn-warning" type="submit" style={{textDecoration:'none',colour:'#FFF'}} onClick={this.onSubmit}><a href="#">Update</a></button>
</form>

      </div>
     
    )
  }
  }