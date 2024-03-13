import React, {useState} from "react";
import TodoList from "./TodoList";

const Todo = () => {

    const [todo, setTodo] = useState('');
    const [todoItems, setTodoItems] = useState([])

    const handleChange = (e) => {
        const val = e.target.value
        setTodo(val)
    }

    const hadleAddTodo = () => {
        const tempTodo = [...todoItems, todo]
        setTodoItems(tempTodo)
        setTodo('')
    }
    console.log('todoIte,', todoItems)
    return (
        <div>
            <h1>Hello from todo</h1>
            <input type="text" placeholder="add todo items"            
               onChange={handleChange} value={todo}
            />
            <button onClick={hadleAddTodo}>Add todo</button>
            <TodoList todos={todoItems}/>
        </div>
    )
}

export default Todo