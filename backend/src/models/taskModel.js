import { query } from '../config/db.js';

export const criarTarefaModel = async (titulo, descricao, status, prioridade) => {
    const sql = `
    INSERT INTO tarefas (titulo, descricao, status, prioridade) 
    VALUES ($1, $2, $3, $4) 
    RETURNING *;
  `;
    const values = [titulo, descricao, status || 'PENDENTE', prioridade || 'MEDIA'];

    const result = await query(sql, values);
    return result.rows[0];
};

export const listarTarefasModel = async (ordenacao = 'atualizacao') => {
    let ordem;

    switch (ordenacao) {
        case 'criacao':
            ordem = 'created_at DESC NULLS LAST, id DESC';
            break;

        case 'status':
            ordem = `
        CASE status
          WHEN 'PENDENTE' THEN 1
          WHEN 'EM_ANDAMENTO' THEN 2
          WHEN 'CONCLUIDA' THEN 3
          ELSE 4
        END ASC,
        created_at DESC
      `;
            break;

        case 'prioridade':
            ordem = `
        CASE prioridade
          WHEN 'ALTA' THEN 1
          WHEN 'MEDIA' THEN 2
          WHEN 'BAIXA' THEN 3
          ELSE 4
        END ASC,
        created_at DESC
      `;
            break;

        case 'atualizacao':
        default:
            ordem = 'updated_at DESC NULLS LAST, created_at DESC';
            break;
    }

    const sql = `
    SELECT *
    FROM tarefas
    ORDER BY ${ordem}
  `;

    const resultado = await query(sql);
    return resultado.rows;
};

export const atualizarTarefaModel = async (titulo, descricao, status, prioridade, id) => {
    const sql = `
    UPDATE tarefas 
    SET titulo = $1, descricao = $2, status = $3, prioridade = $4
    WHERE id = $5
    RETURNING *;
    `;
    const values = [titulo, descricao, status, prioridade, id];

    const resultado = await query(sql, values);
    return resultado.rows;
};

export const excluirTarefaModel = async (id) => {
    const sql = `
    DELETE FROM tarefas 
    WHERE id = $1
    RETURNING *;
    `;

    const resultado = await query(sql, [id]);
    return resultado.rows;
};