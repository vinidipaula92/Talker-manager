const BAD_REQUEST = 400;

const validateWatchedAt = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  if (!watchedAt) {
    return res.status(BAD_REQUEST).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!watchedAt.match(dateRegex)) {
    return res.status(BAD_REQUEST)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

module.exports = {
  validateWatchedAt,
};