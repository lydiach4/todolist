import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      isFinished: false,
    };
    addTask(task);
    setTitle("");
  };

  return (
    <form
      className="p-5 border border-black flex flex-col gap-1 w-1/5"
      onSubmit={submit}
    >
      <input
        type="text"
        placeholder="Title"
        className="py-1 px-3 border border-black"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button className="border border-black bg-transparent px-5 py-1.5 ">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
