import axios from 'axios';
import React, {Component} from 'react';
import '../index.css';

class ViewTeam extends Component{
    constructor(props){
        super(props)
        this.state = {
            teams:[]
        };
    }

    componentDidMount(){
        this.displayTeam();
    }

    displayTeam(){
        axios.get("http://localhost:5000/dteams").then((res) => {
            if(res.data.success){
                this.setState({
                    teams:res.data.existingDteams
                });
                console.log(this.state.teams);
            }
        });
    }


    OnDelete = (id) => {
        axios.delete(`http://localhost:5000/dteam/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.displayTeam();
        })
    }
    filterData(teams,searchKey){
        const result = teams.filter((teams)=>
        teams.teamcode.includes(searchKey)||
        teams.memberone.includes(searchKey)||
        teams.membertwo.includes(searchKey)||
        teams.memberthree.includes(searchKey)||
        teams.vehicleNo.includes(searchKey)||
        teams.orderid.includes(searchKey)||
        teams.status.includes(searchKey)
        )
        this.setState({teams:result})
      }
    
      

    handleSearchArea= (e)=>{
        const searchKey =e.currentTarget.value;
        axios.get("http://localhost:5000/dteams").then(res=>{
          if(res.data.success){
            this.filterData(res.data.existingDteams,searchKey)
      }
      });
    }
    
    render(){
        return(
            
                <div className="addteam" >
                <div className="ish">
                <div style={{textAlign:"center", paddingTop:"50px"}}>
                <h2>Delivery Teams</h2>                        
                <div>
                <input className="search" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}>
            </input><br/><br/>
                <table className="table" style={{margin: "auto", padding: "15px", maxWidth: "1000px", alignContent: "center", color: "white"}}>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Team Code</th>
                            <th scope="col">Member 1 Name</th>
                            <th scope="col">Member 2 Name</th>
                            <th scope="col">Member 3 Name</th>
                            <th scope="col">Vehicle Number</th>
                            <th scope="col">Order ID</th>
                            <th scope="col">Delivery status</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((teams,index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{teams.teamcode}</td>
                                <td>{teams.memberone}</td>
                                <td>{teams.membertwo}</td>
                                <td>{teams.memberthree}</td>
                                <td>{teams.vehicleNo}</td>
                                <td>{teams.orderid}</td>
                               <td>{teams.status}</td>
                                {/* <td>
                                    
                                <a className="edit" href={`/${teams._id}`}><b>
                                        <i className="fas fa-edit"></i>Edit</b>
                                        </a>
                                    </td> */}
                                    <td>
                                <a className="edit" href={`assigndel/${teams._id}`}><b>
                                        <i className="fas fa-edit"></i>Assign</b>
                                        </a>
                                    </td>
                                    <td>
                                    <a className="delete" href="#" onClick={()=>this.OnDelete(teams._id)}><b>
                                        <i className="fas fa-trash-alt"></i>Delete</b>
                                    </a>
                                </td>                            
                            </tr>
                        ))}
                    </tbody>
                </table><br/><br/>
                <button className="sbtn1" type="button" ><a href="/addteam" style={{textDecoration:'none',color:'white'}}><b>Add new</b></a></button><br/>
                <br/><br/></div>
            </div>
            </div>
            </div>
        ); 
    }
}
export default ViewTeam;