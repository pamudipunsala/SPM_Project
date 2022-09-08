import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'

//Item Details Pages
import Insert_Item_Dtl from './Pages/Insert_Item_Dtl';
import ViewItemDtl from './Pages/ViewItemDtl';

const App = () => (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/additems' element={<Insert_Item_Dtl/>}/>
          <Route path='/viewIDtl' element={<ViewItemDtl/>}/>
        </Routes>
      </div>
    </Router>
);

export default App;