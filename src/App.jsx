import { useEffect, useState } from 'react'
import { ThemeProvider, TodoProvider } from './contexts'
import { Header, TodoForm, TodoItem } from './components'
function App() {
  const [todos, setTodos] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const deleteTodo = (id)=>{
    setTodos(todos.filter((prevTodo)=>prevTodo.id !== id))
  }
  const addTodo = (todo)=>{
    setTodos([...todos,{id:Date.now(),todo:todo,completed:false}])
  }
  const updateTodo = (id,todo)=>{
    console.log(todo);
    setTodos(prevTodos=>prevTodos.map(prevTodo=>prevTodo.id === id ? {...prevTodo,todo:todo}:prevTodo))
  }
  const toggleComplete = (id)=>{
    setTodos(todos.map(prevTodo=>prevTodo.id === id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  const modeChange=()=>{
    setDarkMode(!darkMode)
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(darkMode?'dark':'light')
  },[darkMode])

  useEffect(()=>{
    let todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    console.log(todos);
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  return (
    <ThemeProvider value={{darkMode,modeChange}}>
    <TodoProvider value={{addTodo,deleteTodo,todos,toggleComplete,updateTodo}}>
      <Header/>
      <div className='max-w-[50rem] mx-auto flex flex-col gap-10 my-10'>

        <div className="p-4 shadow-lg dark:bg-gray-800 bg-gray-100">
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
    </ThemeProvider>
  )
}

export default App
