import React, { useState } from 'react'
import { useTodo } from '../../contexts'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function TodoItem({todo}) {
    const [newTodo, setNewTodo] = useState(todo.todo)
    const [isEditable, setIsEditable] = useState(false)
    const {updateTodo} = useTodo()
    const update = (e)=>{
        e.preventDefault()
        updateTodo(todo)
    }

  return (
    <div className='shadow-md py-2 px-5 flex' >
        <input type="checkbox" checked={isEditable} onChange={e=>setIsEditable(!isEditable)}/>
        <input type="text"  value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
        <button onClick={update}><FontAwesomeIcon icon={faPencil} /></button>
    </div>
  )         
}
