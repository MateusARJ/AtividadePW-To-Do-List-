import { ExternalLink } from "lucide-react";

type FooterProps = {
    darkMode: boolean;
}

function Rodape({ darkMode }: FooterProps) {
    return (
        <footer className={`flex justify-center items-center gap-1.5 py-5 text-xs border-t ${darkMode ? "border-slate-800 text-slate-500" : "border-gray-200 text-gray-400"}`}>
            <ExternalLink size={13} />
            <a
                href="https://github.com/MateusARJ/AtividadePW-To-Do-List-.git"
                target="_blank"
                rel="noreferrer"
                className="hover:underline transition-opacity hover:opacity-70"
            >
                Mateus de Araujo
            </a>
        </footer>
    );
}

export default Rodape;
