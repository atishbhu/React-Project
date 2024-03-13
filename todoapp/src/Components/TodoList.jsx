import React  from "react"
import TodoListItem from "./TodoListItem"

const TodoList = (props) => {
    const {todo, handleEdit} = props
    return (
        <ul>
            {
                todo.map((item) => (
                    <TodoListItem key={item.id} item={item} handleEdit={handleEdit}/>
                ))
            }
        </ul>
    )
}

export default TodoList