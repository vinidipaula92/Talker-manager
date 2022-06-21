const express = require('express');
const bodyParser = require('body-parser');
const { readContentFile } = require('./utils/readContentFile');
const { generatorToken } = require('./middlewares/generatorToken');
const { validateToken } = require('./middlewares/validateToken');
const { validateEmail } = require('./middlewares/validateEmail');
const { validatePassword } = require('./middlewares/validatePassword');
const { validateRate } = require('./middlewares/validateRate');
const { validateTalk } = require('./middlewares/validateTalk');
const { validateWatchedAt } = require('./middlewares/validateWatchedAt');
const { validateAge } = require('./middlewares/validateAge');
const { validateName } = require('./middlewares/validateName');
const { newTalker } = require('./middlewares/newTalker');
const { putTalker } = require('./middlewares/putTalker');
const { deleteTalker } = require('./middlewares/deleteTalker');
const { getSearchName } = require('./middlewares/getSearchName');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
const HTTP_NOT_FOUND = 404;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const talkers = await readContentFile();
  res.status(HTTP_OK_STATUS).json(talkers);
});

app.get('/talker/search',
validateToken,
getSearchName);

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readContentFile();
  const talkersID = talkers.find((talker) => talker.id === Number(id));

  if (!talkersID) {
    return res.status(HTTP_NOT_FOUND).send({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(HTTP_OK_STATUS).json(talkersID);
});

app.post('/login', 
validateEmail,
validatePassword,
generatorToken);

app.post('/talker', 
validateToken,
validateName,
validateAge,
validateTalk,
validateWatchedAt,
validateRate,
newTalker);

app.put('/talker/:id',
validateToken,
validateName,
validateAge,
validateTalk,
validateWatchedAt,
validateRate,
putTalker);

app.delete('/talker/:id',
validateToken,
deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
