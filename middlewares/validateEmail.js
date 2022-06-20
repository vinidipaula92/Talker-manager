const BAD_REQUEST = 400;

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
  if (!email) {
    return res.status(BAD_REQUEST).json({ message: 'O campo "email" é obrigatório' });
  } 
  if (!emailRegex.test(email)) {
    return res.status(BAD_REQUEST)
    .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
    next();
};

module.exports = {
  validateEmail,
};