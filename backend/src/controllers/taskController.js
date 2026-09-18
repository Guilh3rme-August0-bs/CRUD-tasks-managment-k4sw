import {
  criarTarefaModel,
  atualizarTarefaModel,
  listarTarefasModel,
  excluirTarefaModel
} from '../models/taskModel.js';

export const criarTarefa = async (req, res) => {
  try {
    const { titulo, descricao, status, prioridade } = req.body;

    if (!titulo || titulo.trim() === '') {
      return res.status(400).json({ erro: 'O título é obrigatório.' });
    }

    if (titulo.length > 150) {
      return res.status(400).json({ erro: 'O título deve ter no máximo 150 caracteres.' });
    }

    await criarTarefaModel(titulo, descricao, status, prioridade);

    return res.status(201).json({ mensagem: 'Nova tarefa criada!' });
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    return res.status(500).json({ erro: 'Erro interno do servidor ao salvar a tarefa.' });
  }
};

const ordenacoesValidas = ['atualizacao', 'criacao', 'status', 'prioridade', 'titulo'];

export const verTarefas = async (req, res) => {
  try {
    const { ordenacao } = req.query;
    const filtro = ordenacoesValidas.includes(ordenacao)
      ? ordenacao
      : 'atualizacao';

    const tarefasLista = await listarTarefasModel(filtro);
    return res.status(200).json(tarefasLista);
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    return res.status(500).json({ erro: 'Falha ao carregar as tarefas' });
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

    return res.status(200).json({ mensagem: 'Tarefa atualizada!' });
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    return res.status(500).json({ erro: 'Erro interno do servidor ao atualizar a tarefa.' });
  }
};

export const excluirTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefaExcluida = await excluirTarefaModel(id);

    if (tarefaExcluida.length === 0) {
      return res.status(404).json({ erro: 'Tarefa não encontrada.' });
    }

    return res.status(200).json({ mensagem: 'Tarefa excluída!' });
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
    return res.status(500).json({ erro: 'Erro interno do servidor ao excluir a tarefa.' });
  }
};
