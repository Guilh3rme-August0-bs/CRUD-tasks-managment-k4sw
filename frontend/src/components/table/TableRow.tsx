import { dateFormat } from "../../utils/DateFormat";
import { LucidePencil, LucideTrash, LucideEye } from "lucide-react";
import { Button } from "../ui/Button";

export interface RowProps {
    id: number;
    titulo: string;
    status: string;
    prioridade: string;
    criacao: string;
    atualizacao: string;
    descricao?: string;
    onEditTask?: (task: RowProps) => void;
    onDeleteTask?: (id: number) => void;
    onViewTask?: (id: number) => void;
}

export const TableRow = ({
    id,
    titulo,
    status,
    prioridade,
    criacao,
    atualizacao,
    descricao,
    onEditTask,
    onDeleteTask,
    onViewTask,
}: RowProps) => {
    const handleEdit = () => {
        onEditTask?.({
            id,
            titulo,
            status,
            prioridade,
            criacao,
            atualizacao,
            descricao,
        });
    };

    const handleView = () => {
        onViewTask?.(id);
    }

    const handleDelete = () => {
        onDeleteTask?.(id);
    }

    return (
        <tr className="border-b border-orange-100 bg-orange-50 transition-colors duration-200 hover:bg-orange-100">
            <td className="p-4 text-center align-middle font-medium text-gray-700">{titulo}</td>
            <td className="p-4 text-center align-middle text-gray-700">{status}</td>
            <td className="p-4 text-center align-middle text-gray-700">{prioridade}</td>
            <td className="p-4 text-center align-middle text-gray-700">
                {dateFormat(criacao)}
            </td>
            <td className="p-4 text-center align-middle text-gray-700">
                {dateFormat(atualizacao)}
            </td>
            <td className="border-b border-orange-200 p-3">
                <div className="flex flex-col items-center justify-end gap-2">
                    <Button
                        color="primary"
                        size="small"
                        onClick={handleEdit}
                        type="button"
                    >
                        <LucidePencil />
                    </Button>

                    <Button color="primary" size="small" onClick={handleView} type="button">
                        <LucideEye />
                    </Button>

                    <Button color="danger" size="small" onClick={handleDelete} type="button">
                        <LucideTrash />
                    </Button>
                </div>
            </td>
        </tr>
    );
};
