const User = require('../models/User');

// Criar um novo usuário
exports.createUser = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        throw new Error('Erro ao criar usuário: ' + error.message);
    }
};

// Obter todos os usuários
exports.getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error('Erro ao obter usuários: ' + error.message);
    }
};

// Obter detalhes de um usuário por ID
exports.getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        return user;
    } catch (error) {
        throw new Error('Erro ao obter detalhes do usuário: ' + error.message);
    }
};

// Atualizar informações de um usuário por ID
exports.updateUser = async (userId, userData) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
        if (!updatedUser) {
            throw new Error('Usuário não encontrado');
        }
        return updatedUser;
    } catch (error) {
        throw new Error('Erro ao atualizar usuário: ' + error.message);
    }
};

// Remover um usuário por ID
exports.deleteUser = async (userId) => {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error('Usuário não encontrado');
        }
        return { message: 'Usuário removido com sucesso' };
    } catch (error) {
        throw new Error('Erro ao remover usuário: ' + error.message);
    }
};
