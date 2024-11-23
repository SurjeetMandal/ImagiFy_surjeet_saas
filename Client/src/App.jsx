import { Routes, Route, } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home"
import BuyCredit from "./pages/BuyCredit"
import Result from "./pages/Result"
import Nav from "./component/Nav"
import Footer from "./component/Footer"
import Login from "./component/Login"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"

const App = () => {

  const {showlogin} = useContext(AppContext)

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">

    <ToastContainer position="bottom-right" />
    <Nav />
    {showlogin && <Login />}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/buy" element={<BuyCredit />}/>
      <Route path="/result" element={<Result />}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
