const TodoList = ({ tasks, toggleIsFinished }) => {
  return (
    <div className="mx-[300px] mt-4 border p-5">
      <h1 className="text-center font-bold text-2xl ">The List</h1>
      {tasks.map((task) => (
        <h1
          key={task.id}
          onClick={() => toggleIsFinished(task.id)}
          className={`cursor-pointer ${
            task.isFinished && "line-through"
          } text-xl `}
        >
          {task.title}
        </h1>
      ))}
    </div>
  );
};

export default TodoList;
