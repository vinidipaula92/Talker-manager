const express = require('express');
const bodyParser = require('body-parser');
const { readContentFile } = require('./utils/readContentFile');
const { validateToken } = require('./middlewares/validateToken');
const { validateEmail } = require('./middlewares/validateEmail');
const { validatePassword } = require('./middlewares/validatePassword');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
const HTTP_NOT_FOUND_PORT = 404;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const talkers = await readContentFile();
  res.status(HTTP_OK_STATUS).json(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readContentFile();
  const talkersID = talkers.find((talker) => talker.id === Number(id));

  if (!talkersID) {
    return res.status(HTTP_NOT_FOUND_PORT).send({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(HTTP_OK_STATUS).json(talkersID);
});

app.post('/login', 
validateEmail,
validatePassword,
validateToken);

app.listen(PORT, () => {
  console.log('Online');
});
