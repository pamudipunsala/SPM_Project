import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import DoPayment from './pages/DoPayment';
//Item Details Pages
import Insert_Item_Dtl from './Pages/Insert_Item_Dtl';
import ViewItemDtl from './Pages/ViewItemDtl';

<<<<<<< Updated upstream
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

=======
const App = () => (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route element={<NotFound/>}/>
          <Route path='/additems' element={<Insert_Item_Dtl/>}/>
          <Route path='/viewIDtl' element={<ViewItemDtl/>}/>
        </Routes>
      </div>
    </Router>
);
>>>>>>> Stashed changes

export default App;
