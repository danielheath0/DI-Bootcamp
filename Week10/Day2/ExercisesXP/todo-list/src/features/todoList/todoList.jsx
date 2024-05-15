/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux"
import { addItem, toggleCompleted, deleteItem } from "../todoListSlice.js"
import { useState } from "react"

const TodoList = () => {

  const list = useSelector((state => state.todoList))
  const dispatch = useDispatch()

  const [details, setDetails] = useState("")

  const handleAdd = (e) => {
    e.preventDefault()
    dispatch(addItem({ details }))
    setDetails("")

  }

  return (
    <>
      <h2>To Do List</h2>
      <form onSubmit={handleAdd}>
        <input type="text" value={details} onChange={e => setDetails(e.target.value)} />
      </form>
      {list.map(item => {
        return (<div key={item.id} ><span style={{ color: item.complete ? '#6d77b3' : '#03edf9' }}> {item.details}</span>
        <button onClick={()=>dispatch(toggleCompleted({id:item.id}))}>Toggle</button>
        <button onClick={()=>dispatch(deleteItem({id:item.id}))}>Delete</button>
        </div>
        )
      })}
    </>
  )
}
export default TodoList