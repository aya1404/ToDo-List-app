import './App.css';
import { useSelector} from 'react-redux';
import ListTask from './ListTask';
import {useState} from 'react'
import {Navbar, Dropdown, DropdownButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const todos = useSelector((state)=>state.todoReducer);
  const [filter, setFilter] = useState("all")
  return (
    <div className="App">
      {/*create the head of the app containing a title and a dropdown button to filter the tasks*/}
      <Navbar className="bg-body-tertiary mb-3">
            <Navbar.Brand style={{marginLeft:20, color:'#E95A49', fontSize:30, fontWeight:'bolder'}} href="#">Your To Do List</Navbar.Brand>
            <DropdownButton title="Filter" drop='start' variant="dark" style={{marginLeft:900, backgroundColor:"wheat"}}>
              <Dropdown.Item onClick={()=>setFilter("all")}>All Tasks</Dropdown.Item>
              <Dropdown.Item onClick={()=>setFilter("DONE")}>Done</Dropdown.Item>
              <Dropdown.Item onClick={()=>setFilter("UNDONE")}>Undone</Dropdown.Item>
            </DropdownButton>
        </Navbar>
      {/* filtring the tasks by done or not*/}
      {filter==="all"?<ListTask todos={todos}/>:
      filter==="DONE"?<ListTask todos={todos.filter(el=>el.isDone===true)}/>:
      <ListTask todos={todos.filter(el=>el.isDone===false)}/>
      }
    </div>
  );
}

export default App;
