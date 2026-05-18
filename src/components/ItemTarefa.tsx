import { useState } from "react";
import { Pencil, Trash2, Check, X } from "lucide-react";
import type { Task } from "../types/task";

type TaskItemProps = {
    task: Task;
    darkMode: boolean;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
}

function ItemTarefa({ task, darkMode, onToggle, onDelete, onEdit }: TaskItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleSave = () => {
        if (editText.trim() === "") return;
        onEdit(task.id, editText.trim());
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditText(task.text);
        setIsEditing(false);
    };

    return (
        <div
            className={`flex items-center justify-between px-4 py-3 rounded-xl shadow-sm mb-2.5 border transition-colors
                ${darkMode
                    ? "bg-slate-800 border-slate-700 text-white"
                    : "bg-white border-gray-100 text-gray-800"
                }
                ${task.completed && !isEditing ? "opacity-60" : ""}
            `}
        >
            <div className="flex items-center gap-3 flex-1 min-w-0">
                {/* Custom checkbox */}
                <button
                    onClick={() => onToggle(task.id)}
                    className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors cursor-pointer
                        ${task.completed
                            ? "bg-blue-500 border-blue-500"
                            : darkMode ? "border-slate-500 hover:border-blue-400" : "border-gray-300 hover:border-blue-400"
                        }`}
                >
                    {task.completed && <Check size={11} className="text-white" strokeWidth={3} />}
                </button>

                {isEditing ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSave();
                            if (e.key === "Escape") handleCancel();
                        }}
                        autoFocus
                        className={`flex-1 text-sm border-b outline-none bg-transparent min-w-0
                            ${darkMode ? "border-slate-500 text-white" : "border-gray-400 text-gray-800"}
                        `}
                    />
                ) : (
                    <span className={`text-sm truncate ${task.completed ? "line-through text-gray-400" : ""}`}>
                        {task.text}
                    </span>
                )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-1 ml-3 flex-shrink-0">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSave}
                            title="Salvar"
                            className={`p-1.5 rounded-lg cursor-pointer transition-colors ${darkMode ? "hover:bg-slate-700 text-green-400" : "hover:bg-gray-100 text-green-600"}`}
                        >
                            <Check size={15} />
                        </button>
                        <button
                            onClick={handleCancel}
                            title="Cancelar"
                            className={`p-1.5 rounded-lg cursor-pointer transition-colors ${darkMode ? "hover:bg-slate-700 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`}
                        >
                            <X size={15} />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => { setIsEditing(true); setEditText(task.text); }}
                            title="Editar"
                            className={`p-1.5 rounded-lg cursor-pointer transition-colors ${darkMode ? "hover:bg-slate-700 text-gray-400 hover:text-gray-200" : "hover:bg-gray-100 text-gray-400 hover:text-gray-600"}`}
                        >
                            <Pencil size={15} />
                        </button>
                        <button
                            onClick={() => onDelete(task.id)}
                            title="Excluir"
                            className={`p-1.5 rounded-lg cursor-pointer transition-colors ${darkMode ? "hover:bg-slate-700 text-gray-400 hover:text-red-400" : "hover:bg-gray-100 text-gray-400 hover:text-red-500"}`}
                        >
                            <Trash2 size={15} />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default ItemTarefa;
