import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <div className="space-y-4 p-6 rounded-md shadow flex flex-col" style={{ backgroundColor:'#282931' }}>
            <Input
                type="text"
                placeholder="Type task's title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <Input
                type="text"
                placeholder="Type task's description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <button onClick={() => {
                if (!title.trim() || !description.trim()) return alert("fill the task's title and description.");

                onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }}
            
            className="text-white px-4 py-2 rounded-md font-medium" style={{ backgroundColor:'#4db8b1' }}>Add</button>
        </div>
); }

export default AddTask;