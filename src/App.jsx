import { useState } from "react"
import "./styles.css"

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setToDos] = useState([])
  
  function handleSubmit(e){
    e.preventDefault()
    
    setToDos((currentTodos) => {
      return [
        ...todos, 
        {id : crypto.randomUUID(), 
          title: newItem, 
          completed: false}
        ]
    })
  }

  return (
    // fragment since react can only return one component
    <>
    <form onSubmit = {handleSubmit} className = "new-item-form">
      {/* my form */}
      <div className = "form-row">
      <label htmlFor ="item"> New Item</label>
      <input value={newItem} 
        onChange={e => setNewItem(e.value)} 
        type="text" 
        id = "item"/>
      </div>
      <button className = "btn">Add</button>
    </form>
    <h1 className="header">To do List</h1>
    <ul className="list"> 
      <li>
        <label>
          <input type = "checkbox"/>
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          <input type = "checkbox"/>
          Item 2
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      
    </ul>
    </>
  )
}