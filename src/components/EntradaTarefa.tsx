import { Plus } from "lucide-react";

type TaskInputProps = {
    value: string;
    darkMode: boolean;
    onChange: (text: string) => void;
    onAdd: () => void;
}

function EntradaTarefa({ value, darkMode, onChange, onAdd }: TaskInputProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") onAdd();
    };

    return (
        <div className="flex gap-2 py-5">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Adicionar nova tarefa..."
                className={`flex-1 border rounded-xl px-4 py-2.5 text-sm outline-none transition-colors shadow-sm
                    ${darkMode
                        ? "bg-slate-800 text-white border-slate-600 placeholder-slate-500 focus:border-blue-500"
                        : "bg-white text-gray-800 border-gray-300 placeholder-gray-400 focus:border-blue-400"
                    }`}
            />
            <button
                onClick={onAdd}
                title="Adicionar tarefa"
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-opacity hover:opacity-80 shadow-sm
                    ${darkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white"
                    }`}
            >
                <Plus size={16} />
                Adicionar
            </button>
        </div>
    );
}

export default EntradaTarefa;
