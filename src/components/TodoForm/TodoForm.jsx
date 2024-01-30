import React, { useState } from "react";
import { useTodo } from "../../contexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function TodoForm() {
    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo()

    const add = (e)=>{
        e.preventDefault()
        addTodo(todo)
        setTodo('')
    }
  return (
    <>
      <form onSubmit={add} className="flex h-9 overflow-hidden border border-gray-400 rounded ">
        <input
            required
          className="w-full outline-none px-2 text-sm bg-transparent dark:text-gray-200"
          placeholder="Add TODO"
          onChange={(e)=>setTodo(e?.target?.value)}
          value={todo}
          type="text"
        />
        <button className="px-5 border-l  font-semibold text-white bg-green-500">
            <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </>
  );
}
