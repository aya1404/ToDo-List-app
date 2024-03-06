
import { v4 as uuidv4 } from 'uuid';
import { ADD, COMPLETE, DELETE,UPDATE } from '../Actions/types';
const todo=[
    {
        id: uuidv4,
        description:"Task",
        isDone:false,
    }
]
const todoReducer= (state=todo,action)=>{
    switch (action.type) {
        case ADD: return [...state,{description:action.payload,id: uuidv4(),isDone:false}];
        case DELETE: return state.filter(el=>el.id !== action.payload);
        case COMPLETE: return state.map(el=>el.id === action.payload ? {...el,isDone:!el.isDone}:el);
        case UPDATE: return state.map(el=>el.id === action.payload.id ? {...el,description:action.payload.editTask}:el);
        default: return state
    }
    
}
export default todoReducer