import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import DoPayment from './pages/DoPayment';
//Item Details Pages
import Insert_Item_Dtl from './Pages/Insert_Item_Dtl';
import ViewItemDtl from './Pages/ViewItemDtl';

function App(){
  return(
  <Router>
  
    <Header />
    <Switch>
    <Route path='/additems' element={<Insert_Item_Dtl/>}/>
      <Route path='/viewIDtl' element={<ViewItemDtl/>}/>
      <Route path='/pay' component={DoPayment}/>
    </Switch>
 
</Router>
          
        
)};


export default App;
