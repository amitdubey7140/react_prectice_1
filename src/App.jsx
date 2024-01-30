import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'
function App() {
  const [todos, setTodos] = useState([])
  const deleteTodo = (id)=>{
    setTodos(todos.filter((prevTodo)=>prevTodo.id !== id))
  }
  const addTodo = (todo)=>{
    setTodos([...todos,{id:Date.now(),todo:todo,completed:false}])
  }
  const updateTodo = (id,todo)=>{
    setTodos(todos.map(prevTodo=>prevTodo.id === id ? {...prevTodo,todo:todo}:prevTodo))
  }
  const toggleComplete = (id)=>{
    setTodos(todos.map(prevTodo=>prevTodo.id === id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
  useEffect(()=>{
    console.log(todos)
  },[todos])
  return (
    <TodoProvider value={{addTodo,deleteTodo,todos,toggleComplete,updateTodo}}>
      <div className='max-w-[50rem] mx-auto flex flex-col gap-10 my-10'>

        <div className="p-4  shadow-md">
          <TodoForm />
        </div>

        <div className='flex flex-col gap-5'> 
         {todos.map(todo=>(
          <div key={todo.id}>
          <TodoItem todo={todo}/>
          </div>
         ))}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
