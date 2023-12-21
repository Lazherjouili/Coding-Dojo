import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Froms = () => {
    const [firstName,setFirstName]= useState("")
    const [lastName,setLastName]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [cpassword,setCpassword]= useState("")
    const [error1, setError1] = useState("");
    const [error2, setError2] = useState("");
    const [error3, setError3] = useState("");
    const [error4, setError4] = useState("");
    const [error5, setError5] = useState("");
//  const User= {
//             firstName:firstName,
//             lastName:lastName,
//             email:email,
//             password:password,
//             cpassword:cpassword
//         }
    const userHandler = (e) => {
        e.preventDefault();
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setCpassword("")
    }
    
    const checkLength1 = (value) => {
      setFirstName(value);
      
      if (value.length < 2) {
        setError1("First Name must be at least 2 characters");
      } else {
        setError1("");
      }
    };
    const checkLength2 = (value) => {
      setLastName(value);
      if (value.length < 2) {
        setError2("Last Name must be at least 2 characters");
      } else {
        setError2("");
      }
    };
    const checkLength3 = (value) => {
      setEmail(value);
      if (value.length < 2) {
        setError3("Email must be at least 2 characters");
      } else {
        setError3("");
      }
    };
    const checkLength4 = (value) => {
      setPassword(value);
      if (value.length < 8) {
        setError4("Password must be at least 8 characters");
      } else {
        setError4("");
      }
    };
    const checkLength5 = (value) => {
      setCpassword(value);
      if (value!==password) {
        setError5("Passwords must match");
      } else {
        setError5("");
      }
    };
  return (
    <>
    <Form className='container col-4 mt-5 'onSubmit={userHandler} >
      <Form.Group className="mb-3  " >
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" onChange={ (e) =>  checkLength1(e.target.value)}  value={firstName}/>
      </Form.Group>
      <p>{error1}</p>
    <Form.Group className="mb-3  " >
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" onChange={ (e) => checkLength2(e.target.value)} value={lastName} />
    </Form.Group>
    <p>{error2}</p>
    <Form.Group className="mb-3  " >
      <Form.Label>Email address</Form.Label>
      <Form.Control  type="email" onChange={ (e) =>checkLength3(e.target.value) } value={email} />
    </Form.Group>
    <p>{error3}</p>
    <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" onChange={ (e) => checkLength4(e.target.value)} value={password} />
    </Form.Group>
    <p>{error4}</p>
    <Form.Group className="mb-3" >
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" onChange={ (e) =>  checkLength5(e.target.value)} value={cpassword} />
    </Form.Group>
    <p>{error5}</p>
    <Button variant="success" type="submit">
      Submit
    </Button>
  </Form>
  
  </>
  )
}

export default Froms