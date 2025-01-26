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
      className="mt-[300px] mx-[300px] p-20 border border-gray-500 flex flex-col "
      onSubmit={submit}
    >
      <input
        type="text"
        placeholder="The task"
        className="border border-gray-400 p-3  text-xl "
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button className=" border border-gray-600 m-4 p-2 text-lg bg-black text-white w-[200px] ">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
