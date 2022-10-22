import axios from 'axios';
import React, {Component} from 'react';

class Home extends Component{
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
                <input className="search" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}></input><br/><br/>                     
                <div>
                    <button type="button"><a href="/additems">
                        {this.state.items.map((items,index) => (
                            <div key={index}>
                                <li>Item Code : {items.icode}</li>
                                <li>Item Name : {items.iname}</li>
                                <li>Price :{items.price}</li>                          
                            </div>
                        ))}
                        </a>
                    </button>
                </div>
                </div>
                </div>
                </div>
        ); 
    }
}
export default Home;