export type FilterType = "ALL" | "ACTIVE" | "COMPLETED";

const FILTER_LABELS: Record<FilterType, string> = {
    ALL: "Todas",
    ACTIVE: "Ativas",
    COMPLETED: "Concluídas",
};

type TaskFilterProps = {
    current: FilterType;
    onFilter: (filter: FilterType) => void;
    taskLeft: number;
    darkMode: boolean;
}

function FiltroDeTarefas({ current, onFilter, taskLeft, darkMode }: TaskFilterProps) {
    return (
        <div className={`flex justify-between items-center py-2 mb-1 border-b ${darkMode ? "border-slate-700" : "border-gray-200"}`}>
            {/* Filter tabs */}
            <div className={`flex items-center gap-1 p-0.5 rounded-lg ${darkMode ? "bg-slate-800" : "bg-gray-100"}`}>
                {(["ALL", "ACTIVE", "COMPLETED"] as FilterType[]).map((filter) => (
                    <button
                        key={filter}
                        onClick={() => onFilter(filter)}
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer
                            ${current === filter
                                ? darkMode
                                    ? "bg-slate-600 text-white shadow-sm"
                                    : "bg-white text-gray-800 shadow-sm"
                                : darkMode
                                    ? "text-gray-400 hover:text-gray-200"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        {FILTER_LABELS[filter]}
                    </button>
                ))}
            </div>

            {/* Tasks left badge */}
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium
                ${darkMode ? "bg-slate-700 text-blue-400" : "bg-blue-50 text-blue-600"}
            `}>
                {taskLeft} {taskLeft === 1 ? "restante" : "restantes"}
            </span>
        </div>
    );
}

export default FiltroDeTarefas;
