import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Login from './pages/Login'





function App() {
  return (
    <div className="App">



    <Navbar/>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      
        
      </Routes>


    </div>
  );
}

export default App;
