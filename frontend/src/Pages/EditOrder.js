import axios from "axios";
import React,{Component , useState} from "react";



function EditOrder({_id, closeHandler, updateHandler}){
    const [order,setOrder] = useState({
        oname:'', 
        odate:'', 
        address:'', 
        zipcode:'', 
        mobileNo:'',});

        const handleChange = (e) =>{
            setOrder((data)=>({...data, [e.target.name]:e.target.value}));
        };

        const submitHandler =(e) =>{
            e.preventDefault();

            axios.put(`http://localhost:5000/order/update/${_id}`, order)
            .then((res) => {
                setOrder({
                    oname:'', 
                    odate:'', 
                    address:'', 
                    zipcode:'', 
                    mobileNo:'',
                })
                
                })
                .catch((err)=>{
                    console.error(err);
            })
            };

            return(
                <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Order Details</h1>
                <form className="needs-validation" onSubmit={(e) => {submitHandler(e); updateHandler(); closeHandler()}} noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Customer Name</label>
                        <input type="text"
                        className="form-control"
                        name="oname"
                        value={order.oname}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Date</label>
                        <input type="date"
                        className="form-control"
                        name="odate"
                        value={order.odate}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text"
                        className="form-control"
                        name="address"
                        value={order.address}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Postal Code</label>
                        <input type="text"
                        className="form-control"
                        name="zipcode"
                        value={order.zipcode}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Mobile Number</label>
                        <input type="text"
                        className="form-control"
                        name="mobileNo"
                        value={order.mobileNo}
                        onChange={handleChange}/>
                    </div>

                    

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                </form>
            </div>
            )
} 

export default EditOrder;

/*class EditOrder extends Component{

    constructor(props){
        super(props);
        order={
            oname:'', 
            odate:'', 
            address:'', 
            zipcode:'', 
            mobileNo:'',
        }
    }

    componentDidMount = () => {
        getOrderById();
        }

    getOrderById(){
        axios.get('http://localhost:5000/order/'+props.match.params.id)
        .then((res)=>{
            setState({
                oname:res.data.order.oname, 
                    odate:res.data.order.odate, 
                    address:res.data.order.address, 
                    zipcode:res.data.order.zipcode, 
                    mobileNo:res.data.order.mobileNo
            });
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    handleChange = (event)=>{
        setState({[event.target.name]:event.target.value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const{oname,odate,address,zipcode,mobileNo} = order;
        axios.put('http://localhost:5000/order/update/'+props.match.params.id,{
            oname:oname, 
            odate:odate, 
            address:address, 
            zipcode:zipcode, 
            mobileNo:mobileNo
        }).then((res)=>{
            console.log(res);
            props.history.push('/')
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Order Details</h1>
                <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Customer Name</label>
                        <input type="text"
                        className="form-control"
                        name="oname"
                        value={order.oname}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Date</label>
                        <input type="date"
                        className="form-control"
                        name="odate"
                        value={order.odate}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text"
                        className="form-control"
                        name="address"
                        value={order.address}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Postal Code</label>
                        <input type="text"
                        className="form-control"
                        name="zipcode"
                        value={order.zipcode}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Mobile Number</label>
                        <input type="text"
                        className="form-control"
                        name="mobileNo"
                        value={order.mobileNo}
                        onChange={handleChange}/>
                    </div>

                    

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                </form>
            </div>
        )
    }


}

export default EditOrder;*/
/*export default class EditOrder extends Component {

    constructor(props){
        super(props);
        order={
            oname:'', 
            odate:'', 
            address:'', 
            zipcode:'', 
            mobileNo:'',
        }
    }

    handleinputChange = (e) => {
        const {name,value} = e.target;

        setState({
            ...order,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const id = props.match.params.id;

        const {oname, odate, address, zipcode, mobileNo} = order;

        const data={
            oname:oname, 
            odate:odate, 
            address:address, 
            zipcode:zipcode, 
            mobileNo:mobileNo
        }

        console.log(data)

        axios.put(`http://localhost:5000/order/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Details Updated Successfully")
                setState(
                    {
                        oname:"", 
                        odate:"", 
                        address:"", 
                        zipcode:"", 
                        mobileNo:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        const id = props.match.params.id;

        axios.get(`http://localhost:5000/order/${id}`).then((res =>{
            if(res.data.success){
                setState({
                    oname:res.data.order.oname, 
                    odate:res.data.order.odate, 
                    address:res.data.order.address, 
                    zipcode:res.data.order.zipcode, 
                    mobileNo:res.data.order.mobileNo
                });

                console.log(order.order);
            }
        }))
    }

    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Order Details</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Customer Name</label>
                        <input type="text"
                        className="form-control"
                        name="oname"
                        value={order.oname}
                        onChange={handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Date</label>
                        <input type="date"
                        className="form-control"
                        name="odate"
                        value={order.odate}
                        onChange={handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text"
                        className="form-control"
                        name="address"
                        value={order.address}
                        onChange={handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Postal Code</label>
                        <input type="text"
                        className="form-control"
                        name="zipcode"
                        value={order.zipcode}
                        onChange={handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Mobile Number</label>
                        <input type="text"
                        className="form-control"
                        name="mobileNo"
                        value={order.mobileNo}
                        onChange={handleinputChange}/>
                    </div>

                    

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                </form>
            </div>
        )
        
    }

}*/
