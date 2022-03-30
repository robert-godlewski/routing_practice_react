import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <h1>Welcome</h1>
  );
}

const RouteDecour = (props) => {
  const {info, font_color, bg_color} = useParams();

  return (
    <h1 style={{
      color: font_color,
      backgroundColor: bg_color
    }}>{isNaN(info) ? "The word is:" : "The number is:"} {info}</h1>
  );
}

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
