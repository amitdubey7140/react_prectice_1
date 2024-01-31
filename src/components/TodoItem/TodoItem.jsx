import React, { useState } from "react";
import { useTodo } from "../../contexts";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function TodoItem({ todo }) {
  const [newTodo, setNewTodo] = useState(todo.todo);
  const [isEditable, setIsEditable] = useState(false);
  const { updateTodo, toggleComplete,deleteTodo } = useTodo();
  const update = (e) => {
    if (isEditable && !todo.completed) {
      updateTodo(todo.id,newTodo);
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };

  const deleteTodoMsg = () =>{
    deleteTodo(todo.id)
  }
  const toggleCompleted = () => {
    setIsEditable(false);
    toggleComplete(todo.id);
  };
  return (
    <div className={`shadow-lg  py-2 gap-2 px-5 flex items-center  ${todo.completed?'bg-green-200 dark:bg-green-500':'dark:bg-gray-800 bg-gray-100'}`}>
      <input
        type="checkbox"
        className="h-5 w-5 accent-gray-300 "
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        className={`w-full h-9 read-only:border-none ${todo.completed&&'line-through dark:text-gray-800'} dark:text-gray-300 border border-gray-400 outline-none rounded px-2 bg-transparent`}
        type="text"
        readOnly={!isEditable}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className={`px-3 py-2  disabled:opacity-70 disabled:cursor-not-allowed ${todo.completed&&'dark:text-gray-800'} dark:text-gray-300`} disabled={todo.completed} onClick={update}>
        {isEditable ? (
          <FontAwesomeIcon icon={faFloppyDisk} />
        ) : (
          <FontAwesomeIcon icon={faPencil} />
        )}
      </button>
      <button className={`px-3 py-2   ${todo.completed&&'dark:text-gray-800'} dark:text-gray-300`} onClick={deleteTodoMsg}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
}
