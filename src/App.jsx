import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Myworks from './components/Works'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Loading/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/myworks' element={<Myworks/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
