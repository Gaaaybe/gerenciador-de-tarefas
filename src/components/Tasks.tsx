import { ChevronRight, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TaskProps {
  tasks:{
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  }[];
  onTaskClick: (taskId: number) => void;
  onTaskDelete: (taskId: number) => void;
}

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}


function Tasks({ tasks, onTaskClick, onTaskDelete }: TaskProps) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task: Task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow">
      {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
             onClick={() => onTaskClick(task.id)}
              className={`flex-1 p-2 rounded-md ${task.isCompleted ? "line-through" : ""} bg-slate-500 text-white`}>
              {task.title}
            </button>
            <button onClick={()=>{onSeeDetailsClick(task)}} className="bg-slate-400 p-2 rounded-md text-white">
              <ChevronRight  />
            </button>
            <button onClick={() => onTaskDelete(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white">
              <Trash  />
            </button>
          </li>
      ))}
    </ul>
  );
}

export default Tasks;