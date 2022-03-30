import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

//Components
import Home from './components/Home';
import RouteDecour from './components/RouteDecour';

function App() {
  const [info, font_color, bg_color] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:info" element={<RouteDecour info={info} font_color={"black"} bg_color={"black"}/>} />
          <Route path="/:info/:font_color/:bg_color" element={<RouteDecour info={info} font_color={font_color} bg_color={bg_color}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
