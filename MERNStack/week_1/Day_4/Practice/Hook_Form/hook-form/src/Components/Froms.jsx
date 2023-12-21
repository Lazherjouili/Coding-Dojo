import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Display from './Display';
const Froms = () => {
    const [firstName,setFirstName]= useState("")
    const [lastName,setLastName]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [cpassword,setCpassword]= useState("")
 const User= {
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            cpassword:cpassword
        }
    // const userHandler = (e) => {
    //     e.preventDefault();
       

    //     setFirstName("")
    //     setLastName("")
    //     setEmail("")
    //     setPassword("")
    //     setCpassword("")
    // }
  return (
    <>
    <Form className='container col-4 mt-5 ' >
      <Form.Group className="mb-3  " >
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" onChange={ (e) => setFirstName(e.target.value)}  value={firstName}/>
      </Form.Group>

    <Form.Group className="mb-3  " >
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" onChange={ (e) => setLastName(e.target.value)} value={lastName} />
    </Form.Group>

    <Form.Group className="mb-3  " >
      <Form.Label>Email address</Form.Label>
      <Form.Control  type="email" onChange={ (e) => setEmail(e.target.value) } value={email} />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" onChange={ (e) => setPassword(e.target.value)} value={password} />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" onChange={ (e) => setCpassword(e.target.value)} value={cpassword} />
    </Form.Group>
    {/* <Button variant="success" type="submit">
      Submit
    </Button> */}
  </Form>
  <Display user={User}/>
  </>
  )
}

export default Froms