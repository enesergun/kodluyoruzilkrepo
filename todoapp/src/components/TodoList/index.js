import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";

import List from "./List/List";
import Form from "./Form/Form";

function Todos() {
	const [todos, setTodos] = useState([]);

	// Add a new todo item
	const addTodo = (title) => {
	  let newTodo = {
		id: uuidv4(),
		title, // new in ES6: same as title: title
		completed: false,
	  };
  
	  // [...] = spread operator (copy items)
	  // Used because we can't (and shouldn't) change state values directly
	  setTodos([...todos, newTodo]);
	};
  
	// Delete a todo item
	const delTodo = (id) => {
	  setTodos(todos.filter((todo) => todo.id !== id));
	};
  
	// Toggle completed state of todo item
	const markComplete = (id) => {
	  setTodos(
		todos.map((todo) =>
		  todo.id === id ? { ...todo, completed: !todo.completed } : todo
		)
	  );
	};

	useEffect(() => {
		console.log(todos);
	}, [todos]);

	return (
		<div id="container">
			<header className="header">
                <h1>todos</h1>
            </header>
            <Form addTodo={addTodo} />
			<div className="main">
				{todos.length > 0 ? (
				// If there are todo items, show them in a list
				<ul className="todo-list" data-testid="todos-list">
					{todos.map((todo) => (
					<List
						key={todo.id}
						todo={todo}
						markComplete={markComplete}
						delTodo={delTodo}
					/>
					))}
				</ul>
				) : (
				// No todo items, all caught up
				<p
					className="my-16 text-lg text-center text-gray-500"
					data-testid="empty-todos-message"
				>
					bir şeyler yap
				</p>
				)}
			</div>
		</div>
	);
}

export default Todos;