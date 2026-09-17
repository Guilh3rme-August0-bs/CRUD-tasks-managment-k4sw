import type { RowProps } from "../components/table/TableRow";

const URL = import.meta.env.VITE_API_URL;

export const taskService = {
    carregarTarefas: async (): Promise<RowProps[]> => {
        if (!URL) {
            throw new Error("URL não encontrada")
        }

        const response = await fetch(`${URL}/tasks`)

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`)
        }

        const data: RowProps[] = await response.json();
        return data
    }
}