import React from "react";

import './TodoList.css';

interface Todolistprops {
     items : {id: string, text : string}[];
     onDelete : (id : string)=>void
}

const TodosList: React.FC<Todolistprops> = (props) => {
     
     return (
          <ul>
               {props.items.map(todo => (
                    <li key = {todo.id}>
                         <span>{todo.text}</span>
                         <button onClick = {props.onDelete.bind(null, todo.id)}>DELETE</button>
                    </li>
               ))}
          </ul>
     );
};

export default TodosList;