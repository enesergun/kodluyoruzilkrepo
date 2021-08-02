import { useState, useEffect } from "react";

const initialFormValues = { todo: ""};

function Form({ addTodos, todos }) {
	const [form, setForm] = useState(initialFormValues);

	useEffect(() => {
		setForm(initialFormValues);
	}, [todos]);

	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (form.todo === "") {
			return false;
		}

		addTodos([...todos, form]);
	};

	return (
		<form onSubmit={onSubmit}>
				<input
					name="todo"
					placeholder="what do you want"
					/* value={form.todo} */
					onChange={onChangeInput}
				/>
				<button>Add</button>
		</form>
	);
}

export default Form;