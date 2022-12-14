import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';


//Cart & Payment Pages
import DoPayment from './Pages/DoPayment';
import ViewCart from './Pages/viewCart';
import ViewPayments from './Pages/ViewPayments';
import ViewOrder from './Pages/ViewOrders';
import EditOrder from './Pages/EditOrder';
import Thanks from './Pages/thanks';
import CreateOrder from './Pages/CreateOrder1';
import Admin from './components/Admin'



//Item Details Pages
import Insert_Item_Dtl from './Pages/Insert_Item_Dtl';
import ViewItemDtl from './Pages/ViewItemDtl';
import EditItemDtl from './Pages/EditItemDtl';
import ViewSingleItem from './Pages/ViewSingleItem';

//Login pages
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';

//Delivery pages
import AddDteam from './Pages/AddDteam';
import ViewTeam from './Pages/ViewTeam';
import Assigndel from './Pages/AssignDelivery';
import AddDreq from './Pages/AddDelReq';
import ViewReq from './Pages/ViewDReq';

function App(){
  return(
  <Router>
  
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>

      <Route path='/additems' element={<Insert_Item_Dtl/>}/>
      <Route path='/viewIDtl' element={<ViewItemDtl/>}/>
      <Route path='/update/:id' element={<EditItemDtl/>}/>
      <Route path='/viewsitem/:id' element={<ViewSingleItem/>}/>
      
      <Route path='/viewcart' element={<ViewCart/>}/>
      <Route path='/pay' element={<DoPayment/>}/>

      <Route path='/addteam' element={<AddDteam/>}/>
      <Route path='/viewteam' element={<ViewTeam/>}/>
      <Route path='/assigndel' element={<Assigndel/>}/>
      <Route path='/addreq' element={<AddDreq/>}/>
      <Route path='/viewreq' element={<ViewReq/>}/>

      <Route path='/paylist' element={<ViewPayments/>}/>
      <Route path='/thanks' element={<Thanks/>}/>
      <Route path='/vieworders' element={<ViewOrder/>}/>
      <Route path='/editorders/:id' element={<EditOrder/>}/>
      <Route path='/createorder' element={<CreateOrder/>}/>
      <Route path='/adminpage' element={<Admin/>}/>

    </Routes>
 
</Router>
          
        
)};


export default App;
