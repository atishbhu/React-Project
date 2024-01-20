import React,{useState} from "react";
import './style.css'


const Todo = () =>  {
    const [value,setValue] = useState()
    const [todo, setTodo] = useState([])

    const handleChange = (e) => {
        const val =  e.target.value
        setValue(val)
    }

    const addTodo = () => {
        setTodo([...todo,value])
        setValue('')
    }


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
          <ul>
            {
                todo.map((val,index) => {
                    return (
                        <li key={index}>{val}</li>
                    )
                })
            }
          </ul>
       </div>
    )
}

export default Todo