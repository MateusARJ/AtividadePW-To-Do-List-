import { useState, useEffect } from "react";
import type { Task } from "../types/task";
import FiltroDeTarefas from "../components/FiltroDeTarefas";
import type { FilterType } from "../components/FiltroDeTarefas";
import EntradaTarefa from "../components/EntradaTarefa";
import ItemTarefa from "../components/ItemTarefa";
import Rodape from "../components/Rodape";
import Cabecalho from "../components/Cabecalho";
import { ClipboardList } from "lucide-react";

function Home() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState<FilterType>("ALL");
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem("darkMode", String(darkMode));
    }, [darkMode]);

    const handleAddTask = () => {
        if (input.trim() === "") return;
        const newTask: Task = {
            id: crypto.randomUUID(),
            text: input.trim(),
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setInput("");
    };

    const handleToggle = (id: string) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const handleDelete = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleEdit = (id: string, newText: string) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === "ACTIVE") return !task.completed;
        if (filter === "COMPLETED") return task.completed;
        return true;
    });

    const tasksLeft = tasks.filter(task => !task.completed).length;

    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-200 ${darkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"}`}>
            <Cabecalho darkmode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

            <main className="flex-1 w-full max-w-xl mx-auto px-4 py-2 flex flex-col">
                <EntradaTarefa value={input} darkMode={darkMode} onChange={setInput} onAdd={handleAddTask} />
                <FiltroDeTarefas current={filter} onFilter={setFilter} taskLeft={tasksLeft} darkMode={darkMode} />

                <div className="overflow-y-auto flex-1 mt-3">
                    {filteredTasks.length === 0 ? (
                        <div className={`flex flex-col items-center justify-center py-16 gap-3 ${darkMode ? "text-slate-600" : "text-gray-300"}`}>
                            <ClipboardList size={48} strokeWidth={1.2} />
                            <p className="text-sm font-medium">
                                {filter === "ALL"
                                    ? "Nenhuma tarefa ainda"
                                    : filter === "ACTIVE"
                                        ? "Nenhuma tarefa ativa"
                                        : "Nenhuma tarefa concluída"
                                }
                            </p>
                        </div>
                    ) : (
                        filteredTasks.map(task => (
                            <ItemTarefa
                                key={task.id}
                                task={task}
                                darkMode={darkMode}
                                onToggle={handleToggle}
                                onDelete={handleDelete}
                                onEdit={handleEdit}
                            />
                        ))
                    )}
                </div>
            </main>

            <Rodape darkMode={darkMode} />
        </div>
    );
}

export default Home;
