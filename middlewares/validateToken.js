const NOT_AUTHORIZATION = 401;

const validateToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(NOT_AUTHORIZATION).json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16) {
        return res.status(NOT_AUTHORIZATION).json({ message: 'Token inválido' });
    }
    next();
};

module.exports = {
  validateToken,
};