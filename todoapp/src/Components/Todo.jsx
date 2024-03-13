import React,{useState} from "react";
import TodoList from "./TodoList"
import './style.css'


const Todo = () =>  {
    const [value,setValue] = useState('')
    const [todo, setTodo] = useState([])

    const handleChange = (e) => {
        const val =  e.target.value
        setValue(val)
    }

    const addTodo = () => {
        const id = (new Date().getTime())
        const newTodoData = {
            id,
            data:value
        }
        setTodo([...todo,newTodoData])
        setValue('')
    }

    const handleEdit = (id, newData) => {
        console.log('call')
        const newTodo = todo.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    data: newData
                };
            } else {
                return item;
            }
        });
        console.log('new', newTodo)
        setTodo(newTodo)
    };
    return (
        <div>
            <div className="input-btn-wrapper">
                <input type="text"  value={value} 
                onChange={handleChange}
                placeholder="Enter value to add in List"
                className="input-field"
                />
                <button onClick={addTodo} className="add-btn">Add Todo</button>
          </div>
          <TodoList todo={todo} handleEdit={handleEdit}/>
       </div>
    )
}

export default Todo