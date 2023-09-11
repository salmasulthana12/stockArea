import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WareHousePage from './pages/WareHousePage';
import WareHouseDetailsPage from './pages/WareHouseDetailsPage';

function App() {
 
  return (
    <Router>
      <main>
       <Routes>
        <Route path='/' element={<WareHousePage/>}/>

       <Route path='/warehouse/:id' element={<WareHouseDetailsPage/>}/>
       </Routes>
      </main>
       </Router>
  );
}

export default App;
