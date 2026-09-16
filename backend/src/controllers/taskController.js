import { criarTarefaModel, atualizarTarefaModel } from '../models/taskModel.js';

export const criarTarefa = async (req, res) => {
  try {
    const { titulo, descricao, status, prioridade } = req.body;

    if (!titulo || titulo.trim() === '') {
      return res.status(400).json({ erro: 'O título é obrigatório.' });
    }

    if (titulo.length > 150) {
      return res.status(400).json({ erro: 'O título deve ter no máximo 150 caracteres.' });
    }

    const novaTarefa = await criarTarefaModel(titulo, descricao, status, prioridade);

    return res.status(201).json(novaTarefa);
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    return res.status(500).json({ erro: 'Erro interno do servidor ao salvar a tarefa.' });
  }
};


export const atualizarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao, status, prioridade } = req.body;

    if (!titulo || titulo.trim() === '') {
      return res.status(400).json({ erro: 'O título é obrigatório.' });
    }

    const tarefaAtualizada = await atualizarTarefaModel(titulo, descricao, status, prioridade, id);

    if (tarefaAtualizada.length === 0) {
      return res.status(404).json({ erro: 'Tarefa não encontrada.' });
    }

    return res.status(200).json(tarefaAtualizada[0]);
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    return res.status(500).json({ erro: 'Erro interno do servidor ao atualizar a tarefa.' });
  }
};

