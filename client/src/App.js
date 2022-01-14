import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';



function App() {
  return (
    <div className="App">



    <Navbar/>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/api/events' element={<EventCard />} />
        
      </Routes>


    </div>
  );
}

export default App;
