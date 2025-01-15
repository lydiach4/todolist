import { useState, useEffect } from "react";
import data from "./tasks.json";

export default () => {
  const [tasks, setTasks] = useState(data);
  const [add, setAdd] = useState("");
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleIsFinished = (id) => {
    const index = tasks.findIndex((task) => task.id == id);
    const newTasks = [...tasks];
    newTasks[index].isFinished = !newTasks[index].isFinished;
    setTasks(newTasks);
  };

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
    <div className=" flex  flex-col m-[50px] p-4 border border-black rounded">
      <h1 className="text-6xl ml-[500px]">My to do list </h1>
      <div className=" m-4 p-7 flex flex-col ">
        <h2 className="text-3xl"> Add Task :</h2>
        <form className=" m-4  p-7 flex flex-col " onSubmit={submit}>
          <label htmlFor="task" className="text-xl">
            {" "}
            The task :
          </label>
          <input
            className="border border-black p-6 m-4"
            type="text"
            id="task"
            placeholder="The task"
            onChange={(e) => setAdd(e.target.value)}
            value={add}
          />
          <button className="bg-black text-white w-[400px] h-[50px] p-3 ml-[400px] rounded">
            {" "}
            Add the task{" "}
          </button>
        </form>
        <h2 className="text-3xl">Tasks List : </h2>
        <ul className="">
          {tasks.map((task, index) => (
            <li className="cursor-pointer " key={index}>
              {task.title}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
