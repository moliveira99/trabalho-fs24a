const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    papel: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    }
});

module.exports = mongoose.model('User', userSchema);
