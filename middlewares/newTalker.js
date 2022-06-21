const HTTP_OK_STATUS = 201;
const { readContentFile } = require('../utils/readContentFile');
const { writeContentFile } = require('../utils/writeContentFile');

const newTalker = async (req, res) => {
  const talkers = await readContentFile();
  const { name, age, talk } = req.body;
  const { watchedAt, rate } = talk;
  const addNewTalker = {
    id: (talkers.length + 1),
    name,
    age,
    talk: {
      watchedAt,
      rate,
    },
  };
  talkers.push(addNewTalker);
  writeContentFile(talkers);
  return res.status(HTTP_OK_STATUS).json(addNewTalker);
  };

  module.exports = {
    newTalker,
  };