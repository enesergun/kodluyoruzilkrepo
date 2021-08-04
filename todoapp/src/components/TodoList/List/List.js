import { useState } from "react";
import React from 'react'

function List(props) {
	let textDecorationClass = props.todo.completed
    ? "line-through"
    : "no-underline";
  let textColorClass = props.todo.completed
    ? "text-pink-600"
    : "text-gray-800";
	
  return (
    <li
      className={`flex items-center space-x-1 py-2.5 px-2.5 border-b border-gray-300 transition duration-300 ease-in ${textDecorationClass} ${textColorClass}`}
      data-testid="todo-item"
    >
      <div className="view">
		<input
			name="completed-checkbox"
			type="checkbox"
			className="toggle"
			checked={props.todo.completed}
			value={props.todo.completed}
			onChange={() => props.markComplete(props.todo.id)}
			/* data-testid="task-completed-checkbox" */
		/>
		<label>
			{props.todo.title}
		</label>
		<button
			onClick={() => props.delTodo(props.todo.id)}
			className="destroy"
			/* data-testid="delete-task-btn" */
		>
		</button>
	  </div>
    </li>
  );
}

export default List
