import { dateFormat } from "../../utils/DateFormat";

export interface RowProps {
    id: number;
    titulo: string;
    status: string;
    prioridade: string;
    criacao: string;
    atualizacao: string;
}

export const TableRow = ({ titulo, status, prioridade, criacao, atualizacao }: RowProps) => {
    return (
        <tr className="border-b border-orange-100 bg-orange-50 hover:bg-orange-100 transition-colors duration-200">
            <td className="p-4 text-center text-gray-700 font-medium align-middle">{titulo}</td>
            <td className="p-4 text-center text-gray-700 align-middle">{status}</td>
            <td className="p-4 text-center text-gray-700 align-middle">{prioridade}</td>
            <td className="p-4 text-center text-gray-700 align-middle">
                {dateFormat(criacao)}
            </td>
            <td className="p-4 text-center text-gray-700 align-middle">
                {dateFormat(atualizacao)}
            </td>
        </tr>
    );
};
