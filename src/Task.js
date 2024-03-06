import React,{ useState ,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {completeTodo, deleteTodo,updateTodo} from './Actions/todoAction';
import {Button,Form,Modal} from 'react-bootstrap';

//Create the task component 
const Task = ({el}) => {
    const dispatch= useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editTask,setEditTask] = useState("")
    /* Change background color of the complete button when we click */
    /*const [color, setColor] = useState("#E95A49")
    const click = color => {
        setColor(color)
    }
    useEffect(() => {
        document.button.style.backgroundColor = color
    }, [color])*/

    return (
    <div className='task'>
        {/*the discription of the task*/}
        <h2 className='taskTitle'>{el.description}</h2>
        {/* the edit button */}
        <i class="fa-solid fa-pen fa-xl " style={{color: "black",cursor: "pointer"}} onClick={handleShow}></i>
        {/*A modal display when you click the edit button*/}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{color:'#E95A49'}}>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Task</Form.Label>
                <Form.Control placeholder="edit Task..." type="task" onChange={(e)=>setEditTask(e.target.value)} autoFocus/>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" style={{backgroundColor:'#E95A49',border:'none'}} onClick={()=>{dispatch(updateTodo(editTask,el.id)); handleClose()}} >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        {/*the delete button*/}
        <i class="fa-solid fa-trash-can fa-xl" style={{color: "black",cursor: "pointer"}} onClick={()=>dispatch(deleteTodo(el.id))}></i>
        {/*the complete button*/}
        <button className='buttonTask w3-display-right' onClick={()=>{dispatch(completeTodo(el.id))/*;click("green")*/}}>{el.isDone ? "DONE":"UNDONE"}</button>
    </div>
    )
}

export default Task