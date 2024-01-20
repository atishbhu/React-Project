import React,{useState} from "react";


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
          <input type="text"  value={value} 
           onChange={handleChange}
           placeholder="Enter value to add in List"
          />
          <button onClick={addTodo}>Add Todo</button>
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