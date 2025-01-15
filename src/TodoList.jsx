const TodoList = ({ tasks, toggleIsFinished }) => {
  return (
    <>
      {tasks.map((task) => (
        <h1
          key={task.id}
          onClick={() => toggleIsFinished(task.id)}
          className={`cursor-pointer ${task.isFinished && "line-through"}`}
        >
          {task.title}
        </h1>
      ))}
    </>
  );
};

export default TodoList;
