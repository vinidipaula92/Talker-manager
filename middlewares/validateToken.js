const crypto = require('crypto');

const HTTP_OK_STATUS = 200;

const validateToken = (_req, res) => {
    const token = crypto.randomBytes(8).toString('hex');

  res.status(HTTP_OK_STATUS).json({ token });
};

module.exports = {
  validateToken,
};