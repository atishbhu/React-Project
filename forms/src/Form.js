import { useState } from "react"

const Forms = () => {
    const [user, setUser] = useState({
        fname: '',
        lname: ''
    })
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser(prevData => ({
            ...prevData,
            [name] : value
        }))
    }
    console.log('user', user)

    return(
        <form>
            <input type = 'text' name = 'fname' value={user.fname} placeholder="first name" onChange={handleChange}/>
            <input type = 'text' name = 'lname' value={user.lname} placeholder="last name" onChange={handleChange}/>
        </form>
    )
}

export default Forms
