import { useEffect, useState } from "react";
import { taskService } from "../../services/taskService";
import type { RowProps } from "../table/TableRow";

interface TaskModalProps {
    mode: "create" | "edit";
    task?: RowProps | null;
    closeModal: () => void;
    tableUpdate?: () => void;
}

export const TaskModal = ({ mode, task, closeModal, tableUpdate }: TaskModalProps) => {
    const [titulo, setTitulo] = useState("");
    const [status, setStatus] = useState("PENDENTE");
    const [descricao, setDescricao] = useState("");
    const [prioridade, setPrioridade] = useState("BAIXA");

    useEffect(() => {
        if (mode === "edit" && task) {
            setTitulo(task.titulo || "");
            setStatus(task.status || "PENDENTE");
            setPrioridade(task.prioridade || "BAIXA");
            setDescricao(task.descricao || "");
            return;
        }

        setTitulo("");
        setStatus("PENDENTE");
        setDescricao("");
        setPrioridade("BAIXA");
    }, [mode, task]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (mode === "create") {
                await taskService.criarTarefa({
                    titulo,
                    status,
                    prioridade,
                    descricao,
                });
            }

            if (mode === "edit" && task?.id) {
                await taskService.editarTarefa(task.id, {
                    titulo,
                    status,
                    prioridade,
                    descricao,
                });
            }

            closeModal();
            tableUpdate?.();
        } catch (error) {
            console.error("Erro ao salvar tarefa:", error);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={closeModal}
        >
            <div
                className="w-full max-w-2xl rounded-xl bg-orange-100 p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-4 bg-orange-500 p-3 text-center text-lg font-semibold text-white">
                    {mode === "create" ? "Criar Tarefa" : "Editar Tarefa"}
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <input
                            type="text"
                            placeholder="Título da tarefa"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="PENDENTE">Pendente</option>
                            <option value="EM_ANDAMENTO">Em Andamento</option>
                            <option value="CONCLUIDA">Concluída</option>
                        </select>

                        <select
                            value={prioridade}
                            onChange={(e) => setPrioridade(e.target.value)}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="BAIXA">Baixa</option>
                            <option value="MEDIA">Média</option>
                            <option value="ALTA">Alta</option>
                        </select>
                    </div>

                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        className="min-h-30 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Descrição da tarefa"
                    />

                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                            onClick={closeModal}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};