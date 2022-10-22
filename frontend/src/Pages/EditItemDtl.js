import React, {Component} from 'react'
import axios from 'axios'

class EditItemDtl extends Component{
    constructor(props){
        super(props)
        this.state =  {
            icode:"",
            iname:"",
            ctg:"",
            amt:"",
            price:"",
            icodeError:"",
            inameError:"",
            ctgError:"",
            amtError:"",
            priceError:""
        }
    }

    InputChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const id = this.props.match.params.id;
        const{icode, iname, ctg, amt, price} = this.state;
        
        const itDtl = {
            icode:icode,
            iname:iname,
            ctg:ctg,
            amt:amt,
            price:price
        }
        
        axios.put(`http://localhost:5000/items/update/${id}`, itDtl).then((res)=>{
            alert("Details updated");
            if(res.data.success){
                this.setState({
                    icode:"",
                    iname:"",
                    ctg:"",
                    amt:"",
                    price:"",
                })
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/items/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    icode:res.data.items.icode,
                    iname:res.data.items.iname,
                    ctg:res.data.items.ctg,
                    amt:res.data.items.amt,
                    price:res.data.items.price
                });
                
            }
        })
    }   

    render(){
        return(
            <div className="additem">
                <div className="ish">
                <button className="abtn" type="button"><a href="/viewIDtl" style={{textDecoration:'none',color:'white'}} required><b>View Details</b></a></button>
                <div className="new"> 
                <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", backgroundColor: "rgba(0, 0, 0, 0.560)", color:'white'}}>
                    <div >
                    <h2>Edit Item Details</h2>

                    <div>
                        <label name="icode"><b>Item Code</b></label><br/>
                        <input type="text" 
                            name='icode' 
                            id='icode' 
                            placeholder="Eg:I001" 
                            value={this.state.icode} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.icodeError}</b></div>
                    
                    <div>
                        <label name="iname"><b>Item Name</b></label><br/>
                        <input type="text" 
                            name='iname' 
                            id='iname' 
                            placeholder="Eg:Kumarika" 
                            value={this.state.iname} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.inameError}</b></div>

                    <div>
                        <label name="ctg"><b>Category</b></label><br/>
                        <input type="text" 
                            name='ctg' 
                            id='ctg' 
                            placeholder="Eg:Shampoo" 
                            value={this.state.ctg} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.ctgError}</b></div>

                    <div>
                        <label name="amt"><b>Amount</b></label><br/>
                        <input type="number" 
                            name='amt' 
                            id='amt' 
                            placeholder="Eg:2" 
                            value={this.state.amt} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.amtError}</b></div>

                    <div>
                        <label name="price"><b>Price</b></label><br/>
                        <input type="number" 
                            name='price' 
                            id='price' 
                            placeholder="Eg:200.00" 
                            value={this.state.price} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.priceError}</b></div>

                    <br/><br/>
                    <button className="sbtn" type="submit" onClick={this.onSubmit} ><a href="/viewIDtl" style={{textDecoration:'none',color:'white'}}><b>Save</b></a></button><br/>
                    </div>
                </form> 
                </div>
                </div>
            </div>
            );   
    }
}

export default EditItemDtl;