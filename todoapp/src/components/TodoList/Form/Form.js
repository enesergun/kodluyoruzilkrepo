import { useState, useEffect } from "react";


function Form(props) {
	const [title, setTitle] = useState("");

  const onSubmit = (evt) => {
    // Stop form being submmited to same file and reloading the page
    evt.preventDefault();

    // Validate todo text
    if (!title) {
      alert("Please add a task description.");
      return;
    }

    props.addTodo(title);

    // Clear task text in component state
    setTitle("");
  };

  return (
    <div className="mx-4 mt-6">
      <form onSubmit={onSubmit}>
        <input
          name="task-title"
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
          className="new-todo"
          data-testid="task-input-field"
        />
      </form>
    </div>
  );
}

export default Form;