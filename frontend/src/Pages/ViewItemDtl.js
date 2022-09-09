import axios from 'axios';
import React, {Component} from 'react';

class ViewItemDtl extends Component{
    constructor(props){
        super(props)
        this.state = {
            items:[]
        };
    }

    componentDidMount(){
        this.displayItem();
    }

    displayItem(){
        axios.get("http://localhost:5000/items").then((res) => {
            if(res.data.success){
                this.setState({
                    items:res.data.existingItems
                });
                console.log(this.state.items);
            }
        });
    }

    filterData(items,searchKey){
        const result = items.filter((items)=>
        items.icode.includes(searchKey)||
        items.iname.includes(searchKey)||
        items.ctg.includes(searchKey)||
        items.amt.includes(searchKey)||
        items.price.includes(searchKey)
        )
        this.setState({items:result})
      }

    handleSearchArea= (e)=>{
        const searchKey =e.currentTarget.value;
        axios.get("http://localhost:5000/items").then(res=>{
          if(res.data.success){
            this.filterData(res.data.existingItems,searchKey)
      }
      });
    }
    
    render(){
        return(
            
                <div className="additem" >
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
                            <th scope="col">Item Code</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map((items,index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td><a href={`/sinviewidtl/${items._id}`} style={{color: "white"}}>{items.icode}</a></td>
                                <td><a href={`/sinviewidtl/${items._id}`} style={{color: "white"}}>{items.iname}</a></td>
                                <td><a href={`/sinviewidtl/${items._id}`} style={{color: "white"}}>{items.ctg}</a></td>
                                <td><a href={`/sinviewidtl/${items._id}`} style={{color: "white"}}>{items.amt}</a></td>
                                <td><a href={`/sinviewidtl/${items._id}`} style={{color: "white"}}>{items.price}</a></td>
                                <td>
                                    <a className="edit" href={`/update/${items._id}`}><b>
                                        <i className="fas fa-edit"></i>Edit</b>
                                    </a>
                                    </td>
                                    <td>
                                    <a className="delete" href="#" onClick={()=>this.onDelete(items._id)}><b>
                                        <i className="fas fa-trash-alt"></i>Delete</b>
                                    </a>
                                </td>                            
                            </tr>
                        ))}
                    </tbody>
                </table><br/><br/>
                <button className="sbtn1" type="button" ><a href="/additems" style={{textDecoration:'none',color:'white'}}><b>Add new</b></a></button><br/>
                <br/><br/></div>
            </div>
            </div>
            </div>
        ); 
    }
}
export default ViewItemDtl;