const Task = require('../models/Task');

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
    try {
        const tarefas = await Task.find().populate('usuario', 'nome email');
        res.json(tarefas);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar tarefas', error });
    }
};

// Obter detalhes de uma tarefa
exports.obterTarefa = async (req, res) => {
    try {
        const tarefa = await Task.findById(req.params.id).populate('usuario', 'nome email');
        if (!tarefa) {
            return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
        }
        res.json(tarefa);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao obter tarefa', error });
    }
};

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
    const { titulo, descricao, status } = req.body;
    try {
        const novaTarefa = new Task({ titulo, descricao, status, usuario: req.usuario.id });
        await novaTarefa.save();
        res.status(201).json(novaTarefa);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao criar tarefa', error });
    }
};

// Atualizar uma tarefa
exports.atualizarTarefa = async (req, res) => {
    try {
        const tarefa = await Task.findById(req.params.id);
        if (!tarefa) {
            return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
        }
        if (tarefa.usuario.toString() !== req.usuario.id && req.usuario.papel !== 'ADMIN') {
            return res.status(403).json({ mensagem: 'Acesso negado' });
        }
        const { titulo, descricao, status } = req.body;
        if (titulo) tarefa.titulo = titulo;
        if (descricao) tarefa.descricao = descricao;
        if (status) tarefa.status = status;
        await tarefa.save();
        res.json(tarefa);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao atualizar tarefa', error });
    }
};

// Remover uma tarefa
exports.removerTarefa = async (req, res) => {
    try {
        const tarefa = await Task.findById(req.params.id);
        if (!tarefa) {
            return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
        }
        if (tarefa.usuario.toString() !== req.usuario.id && req.usuario.papel !== 'ADMIN') {
            return res.status(403).json({ mensagem: 'Acesso negado' });
        }
        await tarefa.remove();
        res.json({ mensagem: 'Tarefa removida com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao remover tarefa', error });
    }
};
