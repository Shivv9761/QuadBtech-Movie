import { Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar'
// import Cart from './pages/Cart'
import Home from './pages/Home'
import Movie from "./components/Movie";
import Booking from "./components/Booking";
const App = () => {
  return (
    <div>
      <div className="bg-slate-900  ">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie" element={<Movie/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
    </div>
  )
};

export default App;
