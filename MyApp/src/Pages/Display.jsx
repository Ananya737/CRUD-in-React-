import axios from "axios";
import { useEffect, useState } from "react";



const Display=()=>{
    const [myData,setMyData]=useState([]);

    let display=async()=>{
        let api='http://localhost:3000/Students';
        let res=await axios.get(api);
        console.log(res.data);


    }
    useEffect(()=>{
        display();
    },[])

    return(
        <>
        <h1 style={{display:"flex",justifyContent:"center",backgroundColor:"bisque",padding:"20px"}}>Display Page!</h1>





        
        </>
    )
}
export default Display;