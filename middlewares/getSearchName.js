const HTTP_OK_STATUS = 200;
const { readContentFile } = require('../utils/readContentFile');

const getSearchName = async (req, res) => {
  const { q } = req.query;
  const talkers = await readContentFile();
  const talkersName = talkers.filter((talker) => talker
  .name.includes(q));
  if (!q || q === '') {
    return res.status(HTTP_OK_STATUS).json(talkers);
  }
  return res.status(HTTP_OK_STATUS).json(talkersName);
};

module.exports = {
  getSearchName,
};