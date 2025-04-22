import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Insert=()=>{
  const [input,setInput]=useState({});
  
    return(
        <>
                    
        
        <h1 style={{display:"flex",justifyContent:"center",backgroundColor:"bisque",padding:"20px"}}>Insert Page!</h1>

        <Form style={{width:"350px",border:"2px solid black", height:"450px",borderRadius:"5px",padding:"20px",display:"flex",flexDirection:"column",margin:"auto",backgroundColor:"grey"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee No.</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
     
      <Button type="submit" style={{border:"2px solid black"}}>
        Submit
      </Button>
    </Form>


   
        </>
    )
}
export default Insert;