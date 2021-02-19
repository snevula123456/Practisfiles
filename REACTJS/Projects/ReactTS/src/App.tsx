import React, {useState} from 'react';

import Todos from './Components/Todos';
import NewTodos from './Components/NewTods';
import {Todo} from './tods.modal';

import './App.css';

// const EventHandler = () => {
//   console.log("Event Handlers are working");
// }

const App: React.FC = () => {
  // const todos = [{id : "t1", text : "Finish the course"}]
  const [todos, setTodos] = useState<Todo[]> ([])

  const onAddTodoHandler = (text : string) => {
    setTodos(previousTodos => [...previousTodos , {id: Math.random().toString(), text : text}])
  }

  const delteTodoHandler = (todoid : string) =>{
    setTodos(previousTods => {
      return previousTods.filter(todo => todo.id !== todoid)
    })
  }
  return (
    <div>
      <NewTodos onAddTodo = {onAddTodoHandler}
      />
      <Todos items = {todos}  onDelete = {delteTodoHandler}
      />
    </div>
    
  );
}

export default App;
