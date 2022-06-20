const fs = require('fs/promises');

const writeContentFile = (content) => fs
.writeFile('./talker.json', JSON.stringify(content));

module.exports = {
  writeContentFile,
};