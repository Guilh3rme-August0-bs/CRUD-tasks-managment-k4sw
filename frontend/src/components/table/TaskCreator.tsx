import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { LucidePlus, LucideFilter } from "lucide-react";

interface TaskCreatorProps {
    createModal: () => void;
    customFilter: (filterValue: string) => void;
}

export const TaskCreator = ({ createModal, customFilter }: TaskCreatorProps) => {
    const [filter, setFilter] = useState("atualizacao");

    useEffect(() => {
        customFilter(filter);
    }, [filter]);

    return (
        <tr className="border-b border-orange-100 bg-orange-300">
            <td colSpan={6} className="p-0 align-middle">
                <div className="flex h-14 w-full items-center gap-3 px-4">
                    <div className="flex ml-auto gap-2 mr-4">
                        <div className="flex flex-row items-center p-1 rounded-md font-semibold cursor-pointer bg-blue-500 hover:bg-blue-600">
                            <LucideFilter />
                            Filtrar
                            <select
                                className="bg-transparent text-black border-none focus:ring-0"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                <option value="atualizacao">por data de atualização</option>
                                <option value="criacao">por data de criação</option>
                                <option value="status">por status</option>
                                <option value="prioridade">por prioridade</option>
                            </select>
                        </div>
                        <Button color="primary" size="small" onClick={createModal} type="button"> 
                            
                            <LucidePlus />
                        </Button>
                    </div>
                </div>
            </td>
        </tr>
    );
};
