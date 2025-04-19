
import axios from "axios";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

function App() {
const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || "[]"));


useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

async function getTasks() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
    const tasksData = response.data.map((task: { id: string; title: string; completed: boolean; }) => ({
      id: task.id,
      title: task.title,
      description: task.title,
      isCompleted: task.completed,
    }));
    setTasks(tasksData);
  } catch (error) {
    console.error(error);
    console.log("Error fetching tasks from API");
  }
}

useEffect(() => {
  getTasks();
}, []);

  function onTaskClick(taskId: number) {
    const newTasks = tasks.map((task: { id: number; isCompleted: any; })=>{
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
    const newTasks = tasks.filter((task: { id: number; }) => task.id !== taskId);
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