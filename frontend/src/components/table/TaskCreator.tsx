import { Button } from "../ui/Button";
import { LucidePlus } from "lucide-react";

interface TaskCreatorProps {
    createModal: () => void;
}

export const TaskCreator = ({ createModal }: TaskCreatorProps) => {
    return (
        <tr className="border-b border-orange-100 bg-orange-300">
            <td colSpan={6} className="p-4 align-middle">
                <div className="flex items-center justify-between gap-4 w-full">
                    <span className="font-medium text-gray-800">Criar nova tarefa</span>
                    <Button color="primary" size="small" onClick={createModal}>
                        <LucidePlus />
                    </Button>
                </div>
            </td>
        </tr>
    );
}
