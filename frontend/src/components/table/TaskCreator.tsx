import { Button } from "../ui/Button";
import { LucidePlus } from "lucide-react";

interface TaskCreatorProps {
    createModal: () => void;
}

export const TaskCreator = ({ createModal }: TaskCreatorProps) => {
    return (
        <tr className="border-b border-orange-100 bg-orange-300">
            <td colSpan={6} className="p-0 align-middle">
                <div className="flex h-14 w-full items-center gap-3 px-4">
                    <span className="text-base font-medium text-gray-800">Criar nova tarefa</span>

                    <div className="ml-auto mr-4">
                        <Button
                            color="primary"
                            size="small"
                            onClick={createModal}
                            type="button"
                        >
                            <LucidePlus />
                        </Button>
                    </div>
                </div>
            </td>
        </tr>
    );
};
