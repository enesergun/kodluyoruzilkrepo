import { useState } from "react";
import React from 'react'

function List({ todos }) {
	const [isChecked, setIsChecked] = useState(false);


	let liClass = "";
	function status() {
		if (isChecked) {
			liClass= "completed";
		}
	}
	
  return (
    <div className="main">
      <ul className="todo-list">
	  {todos.map((todoItem, i) => (
		<li className={isChecked} key={i}>
			<div className="view">
				<input className="toggle" type="checkbox" onClick={() => setIsChecked(!isChecked)}/>
				<label>{todoItem.todo}</label>
				<button className="destroy"></button>
			</div>
	  	</li>
  	))}
	  </ul>
    </div>
  )
}

export default List
