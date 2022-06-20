const crypto = require('crypto');

const HTTP_OK_STATUS = 200;

const generatorToken = (req, res, next) => {
    const token = crypto.randomBytes(8).toString('hex');
    res.status(HTTP_OK_STATUS).json({ token });
    next();
};

module.exports = {
  generatorToken,
};