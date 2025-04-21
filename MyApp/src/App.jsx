import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Display from "./Pages/Display";
import Insert from "./Pages/Insert";
import Search from "./Pages/Search";
import Update from "./Pages/Update";
import Search2 from "./Pages/Search2";
const App=()=>{
  return(
    <>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="home" element={<Home/>}/>
         <Route path="insert" element={<Insert/>}/>
         <Route path="display" element={<Display/>}/>
         <Route path="search" element={<Search/>}/>
         <Route path="update" element={<Update/>}/>
         <Route path="search2" element={<Search2/>}/>
         

         </Route>
       </Routes>
    </BrowserRouter>
  
    </>
  )
}
export default App;