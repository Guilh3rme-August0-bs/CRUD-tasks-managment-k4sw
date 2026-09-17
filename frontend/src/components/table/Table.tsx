import { TableRow, type RowProps } from "./TableRow"

interface TableProps {
    data: RowProps[]
}

export const Table = ({ data }: TableProps) => {
    return (
        <div className="w-full max-w-5xl border border-orange-200 overflow-hidden shadow-sm">
            <table className="w-full table-fixed border-collapse">
                <thead className="bg-orange-600 text-white">
                    <tr>
                        <th className="p-4 text-center font-semibold w-[30%]">Tarefa</th>
                        <th className="p-4 text-center font-semibold w-[20%]">Status</th>
                        <th className="p-4 text-center font-semibold w-[20%]">Prioridade</th>
                        <th className="p-4 text-center font-semibold w-[30%]">Criação</th>
                        <th className="p-4 text-center font-semibold w-[30%]">Última Atualização</th>
                    </tr>
                </thead>

                <tbody className="bg-white">
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="bg-orange-100 text-black text-center p-4 font-medium">
                                Sem dados
                            </td>
                        </tr>
                    ) : (
                        data.map(item => (
                            <TableRow
                                key={item.id}
                                id={item.id}
                                titulo={item.titulo}
                                status={item.status}
                                prioridade={item.prioridade}
                                criacao={(item as any).created_at}
                                atualizacao={(item as any).updated_at}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}