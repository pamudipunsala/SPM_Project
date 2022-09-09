import axios from 'axios';
import React, {Component} from 'react';

class ViewTeam extends Component{
    constructor(props){
        super(props)
        this.state = {
            teams:[]
        };
    }

    componentDidMount(){
        this.displayItem();
    }

    displayItem(){
        axios.get("http://localhost:5000/dteams").then((res) => {
            if(res.data.success){
                this.setState({
                    teams:res.data.existingteams
                });
                console.log(this.state.teams);
            }
        });
    }

    filterData(teams,searchKey){
        const result = teams.filter((teams)=>
        teams.teamcode.includes(searchKey)||
        teams.memberone.includes(searchKey)||
        teams.membertwo.includes(searchKey)||
        teams.memberthree.includes(searchKey)||
        teams.vehicleNo.includes(searchKey)
        )
        this.setState({teams:result})
      }

    handleSearchArea= (e)=>{
        const searchKey =e.currentTarget.value;
        axios.get("http://localhost:5000/teams").then(res=>{
          if(res.data.success){
            this.filterData(res.data.existingteams,searchKey)
      }
      });
    }
    
    render(){
        return(
            
                <div className="addteam" >
                <div className="ish">
                <div style={{textAlign:"center", paddingTop:"50px"}}>
                <h2>All Topic Details</h2>                        
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
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((teams,index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td><a href={`/sinviewidtl/${teams._id}`} style={{color: "white"}}>{teams.teamcode}</a></td>
                                <td><a href={`/sinviewidtl/${teams._id}`} style={{color: "white"}}>{teams.memberone}</a></td>
                                <td><a href={`/sinviewidtl/${teams._id}`} style={{color: "white"}}>{teams.membertwo}</a></td>
                                <td><a href={`/sinviewidtl/${teams._id}`} style={{color: "white"}}>{teams.memberthree}</a></td>
                                <td><a href={`/sinviewidtl/${teams._id}`} style={{color: "white"}}>{teams.vehicleNo}</a></td>
                                <td>
                                    
                                    </td>
                                    <td>
                                    
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