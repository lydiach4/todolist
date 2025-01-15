import { useState } from "react";
import TaskList from "./taskList";
import TaskForm from "./taskForm";
function App() {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
