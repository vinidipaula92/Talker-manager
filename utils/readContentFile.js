const fs = require('fs');

const readContentFile = async () => JSON.parse(await fs.promises.readFile('./talker.json'));

module.exports = {
  readContentFile,
};