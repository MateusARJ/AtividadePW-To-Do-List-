import PainelConfiguracoes from "./PainelConfiguracoes";

type HeaderProps = {
    darkmode: boolean;
    onToggleDarkMode: () => void;
}

function Cabecalho({ darkmode, onToggleDarkMode }: HeaderProps) {
    return (
        <header className={`relative flex justify-center items-center px-6 py-4 border-b ${darkmode ? "border-slate-700" : "border-gray-200"}`}>
            <div className="flex items-center gap-2">
                <img src="/list-favcon.png" alt="Logo" className="w-7 h-7 object-contain" />
                <h1 className="text-2xl font-bold tracking-tight">Minhas Tarefas</h1>
            </div>
            <PainelConfiguracoes darkMode={darkmode} onToggleDarkMode={onToggleDarkMode} />
        </header>
    );
}

export default Cabecalho;
