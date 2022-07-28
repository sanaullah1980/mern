import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Number from './component/Number';
import Display from './component/Display';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:data" element={ <Number />} />
        <Route path="/:word/:color1/:color2" element={<Display />} />
      </Routes> 
    </BrowserRouter>
    
  );
}

export default App;
