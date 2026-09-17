import { useEffect, useState } from "react";
import { taskService } from "../../services/taskService";
import type { RowProps } from "../table/TableRow";
import { Button } from "./Button";

interface TaskModalProps {
    mode: "create" | "edit" | "view";
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
        if (mode === "edit" || mode === "view") {
            setTitulo(task?.titulo || "");
            setStatus(task?.status || "PENDENTE");
            setPrioridade(task?.prioridade || "BAIXA");
            setDescricao(task?.descricao || "");
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
                    {mode === "create" ? "Criar Tarefa" : mode === "edit" ? "Editar Tarefa" : "Visualizar Tarefa"}
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-col">
                            {!titulo && <label className="text-red-500">Preenchimento Obrigatório</label>}
                            <div className="flex flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Título da tarefa"
                                    value={titulo}
                                    maxLength={150}
                                    disabled={mode === "view"}
                                    onChange={(e) => setTitulo(e.target.value)}
                                    className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                                />

                                <select
                                    value={status}
                                    disabled={mode === "view"}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                                >
                                    <option value="PENDENTE">Pendente</option>
                                    <option value="EM_ANDAMENTO">Em Andamento</option>
                                    <option value="CONCLUIDA">Concluída</option>
                                </select>

                                <select
                                    value={prioridade}
                                    disabled={mode === "view"}
                                    onChange={(e) => setPrioridade(e.target.value)}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                                >
                                    <option value="BAIXA">Baixa</option>
                                    <option value="MEDIA">Média</option>
                                    <option value="ALTA">Alta</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <textarea
                        value={descricao}
                        disabled={mode === "view"}
                        onChange={(e) => setDescricao(e.target.value)}
                        className="min-h-30 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                        placeholder="Descrição da tarefa"
                    />
                    {mode !== "view" && (
                        <div className="flex justify-end gap-2">
                            <Button color="primary" disabled={titulo.length < 1} type="submit">
                                Salvar
                            </Button>
                            <Button color="danger" onClick={closeModal}>
                                Cancelar
                            </Button>
                        </div>)}
                </form>
            </div>
        </div>
    );
};