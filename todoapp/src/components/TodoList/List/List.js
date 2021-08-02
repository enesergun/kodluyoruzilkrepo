import React from 'react'

function List({ todos }) {
  return (
    <div>
      <ul className="todo-list">
				{todos.map((todoItem, i) => (
					<li key={i}>
						<div className="view">
							<input className="toggle" type="checkbox"  />
							<label>{todoItem.todo}</label>
							<button className="destroy">x</button>
						</div>
				</li>
				))}
			</ul>
    </div>
  )
}

export default List
