import { Settings, X, Moon, Sun } from "lucide-react";
import { useState } from "react";

type SettingsPanelProps = {
    darkMode: boolean;
    onToggleDarkMode: () => void;
};

function PainelConfiguracoes({ darkMode, onToggleDarkMode }: SettingsPanelProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Gear button */}
            <button
                onClick={() => setOpen(true)}
                title="Configurações"
                className={`absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors cursor-pointer
                    ${darkMode
                        ? "text-gray-300 hover:bg-slate-700"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
            >
                <Settings size={22} />
            </button>

            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 h-full w-72 z-50 shadow-2xl flex flex-col transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}
                    ${darkMode ? "bg-slate-800 text-white" : "bg-white text-gray-800"}
                `}
            >
                {/* Sidebar header */}
                <div className={`flex items-center justify-between px-5 py-4 border-b ${darkMode ? "border-slate-700" : "border-gray-200"}`}>
                    <div className="flex items-center gap-2">
                        <Settings size={18} className={darkMode ? "text-gray-400" : "text-gray-500"} />
                        <span className="font-semibold text-base">Configurações</span>
                    </div>
                    <button
                        onClick={() => setOpen(false)}
                        className={`p-1 rounded-md cursor-pointer transition-colors ${darkMode ? "hover:bg-slate-700 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`}
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Settings content */}
                <div className="flex flex-col gap-1 p-4">
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                        Aparência
                    </p>

                    {/* Dark mode toggle */}
                    <div className={`flex items-center justify-between px-4 py-3 rounded-lg ${darkMode ? "bg-slate-700" : "bg-gray-50"}`}>
                        <div className="flex items-center gap-3">
                            {darkMode
                                ? <Moon size={17} className="text-blue-400" />
                                : <Sun size={17} className="text-yellow-500" />
                            }
                            <span className="text-sm font-medium">
                                {darkMode ? "Modo Escuro" : "Modo Claro"}
                            </span>
                        </div>

                        {/* Toggle switch */}
                        <button
                            onClick={onToggleDarkMode}
                            role="switch"
                            aria-checked={darkMode}
                            className={`relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                                ${darkMode ? "bg-blue-500" : "bg-gray-300"}
                            `}
                        >
                            <span
                                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200
                                    ${darkMode ? "translate-x-5" : "translate-x-0"}
                                `}
                            />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default PainelConfiguracoes;
