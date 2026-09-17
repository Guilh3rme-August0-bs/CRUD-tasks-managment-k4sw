import type { RowProps } from "../components/table/TableRow";

const URL = import.meta.env.VITE_API_URL;

type NovaTarefa = {
    titulo: string;
    status: string;
    prioridade: string;
    descricao?: string;
};

const buildQueryString = (params: Record<string, string | undefined>) => {
    const entries = Object.entries(params).filter(
        ([, value]) => value !== undefined && value !== ""
    );

    if (entries.length === 0) return "";

    const query = entries
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
        .join("&");

    return `?${query}`;
};

export const taskService = {
    carregarTarefas: async (ordenacao?: string): Promise<RowProps[]> => {
        if (!URL) {
            throw new Error("URL não encontrada");
        }

        const response = await fetch(
            `${URL}/tasks${buildQueryString({ ordenacao })}`
        );

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
    },

    excluirTarefa: async (id: string | number): Promise<void> => {
        if (!URL) {
            throw new Error("URL não encontrada");
        }

        const response = await fetch(`${URL}/tasks/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`Erro ao excluir tarefa: ${response.status}`);
        }
    }
};