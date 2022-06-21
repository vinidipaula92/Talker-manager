const AUTHORIZATION = 204;
const HTTP_NOT_FOUND = 404;
const { readContentFile } = require('../utils/readContentFile');
const { writeContentFile } = require('../utils/writeContentFile');

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const talkers = await readContentFile();
  const indexTalker = talkers.findIndex((talker) => talker.id === Number(id));

  if (indexTalker === -1) {
    return res.status(HTTP_NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
  }
  talkers.splice(indexTalker, 1);
  await writeContentFile(talkers);
  return res.status(AUTHORIZATION).end();
};

module.exports = {
  deleteTalker,
};