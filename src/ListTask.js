import React,{ useState } from 'react'
import Task from './Task';
import AddTask from './AddTask';

const ListTask = ({todos}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {/* Display the todos tasks*/}
        {todos.map(el => <Task el={el}/>)}
        {/*the add button*/}
        <span className='add w3-display-bottomright'title='Add Task' onClick={handleShow}><i class="fa-solid fa-plus" style={{ color: "#ffffff"}}/></span>
        {/* The add Task component will display as a model when you click the add button*/}
        <AddTask show={show} handleClose={handleClose}/>
    </div>
  )
}

export default ListTask