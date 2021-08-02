import React from 'react'

function List({ todos }) {
  return (
    <div>
      <ul className="list">
				{todos.map((todoItem, i) => (
					<li key={i}>
						<span>{todoItem.todo}</span>
					</li>
				))}
			</ul>
    </div>
  )
}

export default List
