import { Route, Router, Routes } from "react-router-dom"
import Login from "./pages/login"
import Setup from "./pages/setup"


 const App = () =>{
  return(
    <div>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/setup" element={ <Setup/>}/>
     
     

      </Routes>
    </div>
  )
}

export default App