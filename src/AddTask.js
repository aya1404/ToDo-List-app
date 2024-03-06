import React,{ useState } from 'react'
import {Button,Form,Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from './Actions/todoAction';



const AddTask = ({show,handleClose}) => {
  const [task, setTask] = useState("");
  const dispatch= useDispatch();

  //ERROR MSG
  const [errorMessage, setErrorMessage] = useState('');
  const errorDisplay= ()=> {
    setErrorMessage("Has to be atleast 1 letter!")
  }

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#E95A49'}}>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Task</Form.Label>
              <Form.Control type="task" placeholder="Add task..." onChange={(e)=>setTask(e.target.value)} autoFocus/>
            </Form.Group>
            <div class="error-msg">{errorMessage}</div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" style={{backgroundColor:'#E95A49',border:'none'}} onClick={()=>{task===""? errorDisplay(): dispatch(addTodo(task)) && handleClose()}}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddTask