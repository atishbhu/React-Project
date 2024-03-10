import { useState } from "react"

const TodoListItem = ({item, handleEdit}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [edit, setEdit] = useState(item.data)
    return (
        <div>
            {
                isEdit ? <input type="text" onChange={(e) => setEdit(e.target.value)} value={edit}/> 
                : ( <li>
                    {item.data}
                  </li>)
            }
           
            <button onClick={() => setIsEdit(true)}>Edit</button>
            <button>Delete</button>
            <button onClick={() => {
                handleEdit(item.id,edit)
                setIsEdit(false)
            }}
                >Add</button>
        </div>

    )
}

export default TodoListItem