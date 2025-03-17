import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  function onBackClick() {
    navigate(-1);
  }
  return (
    <div className="h-screen w-screen p-6" style={{ backgroundColor: '#0e0e0e' }}>
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={onBackClick}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Task's Details</Title>
        </div>

        <div className="bg-[#d85d3f] p-4 rounded-md">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
); }

export default TaskPage;