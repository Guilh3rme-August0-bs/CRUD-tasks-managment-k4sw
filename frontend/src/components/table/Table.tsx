import { TableRow, type RowProps } from "./TableRow";
import { TaskCreator } from "./TaskCreator";

interface TableProps {
    data: RowProps[];
    createModal: () => void;
    onEditTask: (task: RowProps) => void;
}

export const Table = ({ data, createModal, onEditTask }: TableProps) => {
    return (
        <div className="w-full max-w-6xl overflow-hidden rounded-md border border-orange-200 shadow-sm">
            <table className="w-full table-fixed border-collapse">
                <thead className="bg-orange-600 text-white">
                    <tr>
                        <th className="p-4 text-center font-semibold w-[30%]">Tarefa</th>
                        <th className="p-4 text-center font-semibold w-[15%]">Status</th>
                        <th className="p-4 text-center font-semibold w-[15%]">Prioridade</th>
                        <th className="p-4 text-center font-semibold w-[15%]">Criação</th>
                        <th className="p-4 text-center font-semibold w-[15%]">Última Atualização</th>
                        <th className="p-4 text-center font-semibold w-[10%]">Ações</th>
                    </tr>
                </thead>

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
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};