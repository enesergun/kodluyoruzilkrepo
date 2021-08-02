import { useState, useEffect } from "react";

/* import "./styles.css"; */

import List from "./List/List";
import Form from "./Form/Form";

function Todos() {
	const [todos, setTodos] = useState([
		{
			todo: "Mehmet"
		},
		{
			todo: "Ayşe"			
		},
		{
			todo: "Nazlı"			
		},
	]);

	useEffect(() => {
		console.log(todos);
	}, [todos]);

	return (
		<div id="container">
			<h1>todos</h1>
            <Form addTodos={setTodos} todos={todos} />
			<List todos={todos} />
		</div>
	);
}

export default Todos;