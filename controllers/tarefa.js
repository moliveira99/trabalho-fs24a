// controladores/tarefaControlador.js
const Tarefa = require('../models/tarefa');

const criarTarefa = async (req, res) => {
  const { titulo, descricao, status } = req.body;

  const tarefa = new Tarefa({
    titulo,
    descricao,
    status,
    usuario: req.usuario._id
  });

  const tarefaCriada = await tarefa.save();
  res.status(201).json(tarefaCriada);
};

const listarTarefas = async (req, res) => {
  const tarefas = await Tarefa.find({ usuario: req.usuario._id });
  res.json(tarefas);
};

const obterTarefa = async (req, res) => {
  const tarefa = await Tarefa.findById(req.params.id);

  if (tarefa && tarefa.usuario.toString() === req.usuario._id.toString()) {
    res.json(tarefa);
  } else {
    res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }
};

const atualizarTarefa = async (req, res) => {
  const { titulo, descricao, status } = req.body;
  const tarefa = await Tarefa.findById(req.params.id);

  if (tarefa && (tarefa.usuario.toString() === req.usuario._id.toString() || req.usuario.funcao === 'ADMIN')) {
    tarefa.titulo = titulo || tarefa.titulo;
    tarefa.descricao = descricao || tarefa.descricao;
    tarefa.status = status || tarefa.status;

    const tarefaAtualizada = await tarefa.save();
    res.json(tarefaAtualizada);
  } else {
    res.status(404).json({ mensagem: 'Tarefa não encontrada ou acesso negado' });
  }
};

const deletarTarefa = async (req, res) => {
  const tarefa = await Tarefa.findById(req.params.id);

  if (tarefa && (tarefa.usuario.toString() === req.usuario._id.toString() || req.usuario.funcao === 'ADMIN')) {
    await tarefa.remove();
    res.json({ mensagem: 'Tarefa removida' });
  } else {
    res.status(404).json({ mensagem: 'Tarefa não encontrada ou acesso negado' });
  }
};

module.exports = { criarTarefa, listarTarefas, obterTarefa, atualizarTarefa, deletarTarefa };
