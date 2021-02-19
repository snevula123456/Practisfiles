import React, {useRef} from  'react';

import './NewTodo.css';

interface NewTodosprops {
     onAddTodo : (todoText:string) => void;
};

const NewTodos : React.FC<NewTodosprops> = (props) => {
     const textInputRef = useRef<HTMLInputElement>(null);

     const todoSubmitHandler = (event:React.FormEvent) =>{
          event.preventDefault()
          const enteredText = textInputRef.current!.value
          // console.log(enteredText);
          props.onAddTodo(enteredText)
     }
     return (
          <form onSubmit = {todoSubmitHandler}>
               <div className='form-control'>
               <label htmlFor="todo-text">Todo Text</label>
               <input type="text" id = "todo-text" ref = {textInputRef} />
               <button type = "submit">ADD TODO</button>
               </div>
          
          </form>
     )
}

export default NewTodos;