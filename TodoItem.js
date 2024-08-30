import React from 'react'
function TodoItem({todo,onRemoveTodo}){
    return(
        <li>
            {todo.text}
            <button onClick={()=> onRemoveTodo(todo.id)}>Remove</button>
        </li>
    );
}
export default TodoItem;