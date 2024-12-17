import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";

const TaskCreation = () => {
  // ✅ Initializing input state properly
  const [input, setInput] = useState({
    tittle: '',
    description: '',
    duedate: '',
    priority: ''
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    let api="http://localhost:5000/task/tasksave";
    axios.post(api, input).then((res) => {
      alert("Data saved successfully!");
      console.log(res);
    }).catch((err) => {
      alert(err?.response?.data || 'An unexpected error occurred');
    });
  };

  return (
    <> 
      <h1>Insert Employee Record</h1>
      <Form className='formSize' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmployeeNumber">
          <Form.Label>Enter Employee Number:</Form.Label>
          <Form.Control 
            type="text" 
            name="tittle" 
            value={input.tittle} 
            onChange={handleInput} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmployeeName">
          <Form.Label>Enter Employee Name:</Form.Label>
          <Form.Control 
            type="text" 
            name="description" 
            value={input.description} 
            onChange={handleInput} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmployeeDesignation">
          <Form.Label>Enter Employee Designation:</Form.Label>
          <Form.Control 
            type="text" 
            name="duedate" 
            value={input.duedate} 
            onChange={handleInput} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmployeeSalary">
          <Form.Label>Enter Employee Salary:</Form.Label>
          <Form.Control 
            type="text" 
            name="priority" 
            value={input.priority} 
            onChange={handleInput} 
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={()=>{navigate(`/display`)}}>
          Submit
        </Button>
      </Form>          
    </>
  );
}

export default TaskCreation;
