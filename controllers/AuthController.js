
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.registrar = async (req, res) => {
    const { nome, email, senha, papel } = req.body;
    try {
        const novoUsuario = new User({ nome, email, senha, papel });
        await novoUsuario.save();
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao registrar usuário', error });
    }
};

exports.login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const usuario = await User.findOne({ email });
        if (!usuario || !(await usuario.compararSenhas(senha))) {
            return res.status(401).json({ mensagem: 'Credenciais inválidas' });
        }
        const token = jwt.sign({ id: usuario._id, papel: usuario.papel }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao fazer login', error });
    }
};
