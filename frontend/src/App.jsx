import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import Contact from "./Contact";
import DashBoard from "./Dashboard";
import TaskCreation from "./TaskCreation";
import Display from "./Display";

const App=()=>{
  return(
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="home" element={<Home/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="registration" element={<Registration/>}/>
         <Route path="contact" element={<Contact/>} />
         <Route path="dashboard" element={<DashBoard/>} />
         <Route path="task" element={<TaskCreation/>} />
         <Route path="display" element={<Display/>} />
         
        </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;