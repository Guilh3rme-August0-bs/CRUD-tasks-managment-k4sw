import type { RowProps } from "../components/table/TableRow";

const URL = import.meta.env.VITE_API_URL;

type NovaTarefa = {
    titulo: string;
    status: string;
    prioridade: string;
    descricao?: string;
};

export const taskService = {
    carregarTarefas: async (): Promise<RowProps[]> => {
        if (!URL) {
            throw new Error("URL não encontrada");
        }

        const response = await fetch(`${URL}/tasks`);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data: RowProps[] = await response.json();
        return data;
    },

    criarTarefa: async (tarefa: NovaTarefa): Promise<RowProps> => {
        if (!URL) {
            throw new Error("URL não encontrada");
        }

        const response = await fetch(`${URL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tarefa),
        });

        if (!response.ok) {
            throw new Error(`Erro ao criar tarefa: ${response.status}`);
        }

        const data: RowProps = await response.json();
        return data;
    },

    editarTarefa: async (id: string | number, tarefa: Partial<NovaTarefa>): Promise<RowProps> => {
        if (!URL) {
            throw new Error("URL não encontrada");
        }

        const response = await fetch(`${URL}/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tarefa),
        });

        if (!response.ok) {
            throw new Error(`Erro ao editar tarefa: ${response.status}`);
        }

        const data: RowProps = await response.json();
        return data;
    }
};