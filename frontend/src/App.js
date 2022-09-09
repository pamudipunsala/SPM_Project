import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import DoPayment from './Pages/DoPayment';
import ViewCart from './Pages/viewCart';

//Item Details Pages
import Insert_Item_Dtl from './Pages/Insert_Item_Dtl';
import ViewItemDtl from './Pages/ViewItemDtl';

//Login pages
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';


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
      
      <Route path='/viewcart' element={<ViewCart/>}/>
      <Route path='/pay' element={<DoPayment/>}/>
    </Routes>
 
</Router>
          
        
)};


export default App;
