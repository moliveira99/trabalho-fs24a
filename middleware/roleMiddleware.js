
exports.requerPapel = (papel) => {
    return (req, res, next) => {
        if (req.usuario.papel !== papel) {
            return res.status(403).json({ mensagem: 'Acesso negado' });
        }
        next();
    };
};
