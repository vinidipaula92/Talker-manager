const HTTP_OK_STATUS = 200;
const { readContentFile } = require('../utils/readContentFile');
const { writeContentFile } = require('../utils/writeContentFile');

const putTalker = async (req, res) => {
  const { id } = req.params;
  const talkers = await readContentFile();
  const { name, age, talk } = req.body;
  const { watchedAt, rate } = talk;
  const indexTalker = talkers.findIndex((talker) => talker.id === Number(id));
  talkers[indexTalker] = { ...talkers[indexTalker], name, age, talk: { watchedAt, rate } };
  await writeContentFile(talkers);
  return res.status(HTTP_OK_STATUS).send(talkers[indexTalker]);
};

  module.exports = {
    putTalker,
  };