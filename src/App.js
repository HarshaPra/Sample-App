

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Gallary from './pages/Gallary';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Gallary' element={<Gallary/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Signup' element={<Signup/>}/>
</Routes>
    
    
  );
}

export default App;
