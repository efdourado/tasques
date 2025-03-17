import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 rounded-md shadow" style={{ backgroundColor:'#282931' }}>
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">

          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-[#d85d3f] text-left w-full flex items-center gap-2 text-white font-medium p-2 rounded-md ${
                task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <img src="/v.png" alt="Completed" style={{ width: '25px', height: '25px' }} />}
            {task.title}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}> <ChevronRightIcon /> </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}> <TrashIcon /> </Button>

        </li>
      ))}
    </ul>
); }

export default Tasks;