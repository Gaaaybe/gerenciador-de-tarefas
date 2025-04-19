
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Task 1",
    description: "This is the first task",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is the second task",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is the third task",
    isCompleted: false,
  }]);

  function onTaskClick(taskId: number) {
    const newTasks = tasks.map((task)=>{
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskAdd(title: string, description: string) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl font-bold text-center text-slate-100">Task Tracker</h1>

        <AddTask onTaskAdd={onTaskAdd}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete}/>

      </div>

    </div>

  );
}

export default App;