import { TableRow, type RowProps } from "./TableRow";
import { TaskCreator } from "./TaskCreator";

interface TableProps {
    data: RowProps[];
    createModal: () => void;
    onEditTask: (task: RowProps) => void;
    onDeleteTask: (id: number) => void;
    onViewTask?: (id: number) => void;
}

export const Table = ({ data, createModal, onEditTask, onDeleteTask, onViewTask }: TableProps) => {
    return (
        <div className="w-full max-w-6xl rounded-md border border-orange-200 shadow-sm">
            <table className="w-full table-fixed border-collapse">
                <thead className="bg-orange-600 text-white">
                    <tr>
                        <th className="w-[30%] p-4 text-center font-semibold">Tarefa</th>
                        <th className="w-[15%] p-4 text-center font-semibold">Status</th>
                        <th className="w-[15%] p-4 text-center font-semibold">Prioridade</th>
                        <th className="w-[15%] p-4 text-center font-semibold">Criação</th>
                        <th className="w-[15%] p-4 text-center font-semibold">Última Atualização</th>
                        <th className="w-[10%] p-4 text-center font-semibold">Ações</th>
                    </tr>
                </thead>
            </table>

            <div className="flex flex-col w-full max-h-130 overflow-y-auto">
                <table className="w-full table-fixed border-collapse">
                    <tbody className="bg-white">
                        <TaskCreator createModal={createModal} />
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="bg-orange-100 p-4 text-center font-medium text-black">
                                    Sem dados
                                </td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <TableRow
                                    key={item.id}
                                    id={item.id}
                                    titulo={item.titulo}
                                    status={item.status}
                                    prioridade={item.prioridade}
                                    criacao={(item as any).criacao ?? (item as any).created_at}
                                    atualizacao={(item as any).atualizacao ?? (item as any).updated_at}
                                    descricao={(item as any).descricao ?? ""}
                                    onEditTask={onEditTask}
                                    onDeleteTask={onDeleteTask}
                                    onViewTask={onViewTask}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};