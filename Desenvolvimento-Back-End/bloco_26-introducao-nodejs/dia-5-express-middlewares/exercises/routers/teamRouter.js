// routers/teamRouter.js
// Atividade 4:
// 7 - Crie uma rota POST /teams que receba uma requisição que envie name , initials , country e league no body da requisção, onde:
  // 1. name deve ter mais de 5 caracteres;
  // 2. initials deve conter no máximo 3 caracteres em caixa alta;
  // 3. country deve ter mais de 3 caracteres;
  // 4. league este campo é opcional;
  // 5. Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" } ;
  // 6. Caso tenha sucesso deve ser gravado em um arquivo o dado recebido e retornado uma resposta com o código de status e um JSON com as informações do time criado;

// 8 - Na rota GET /teams deve trazer todos os times cadastrados, onde:
  // 1. Se não existir times cadastrados retorne um array vazio e um status code, ex: status 200 e { "teams": [] } ;
  // 2. Se existir times cadastrados retorne um array com os times e um status code;
  // Dicas: separe suas rotas em arquivos e para gravar/ler dados do arquivo, utilize o módulo FS do Node.js (Não esqueça de criar o arquivo teams.json na raiz do projeto)

const router = require('express').Router();
const {
    readContentFile,
  writeContentFile,
} = require('../helpers/readWriteFile');
const validations = require('../middlewares/validations');
const PATH_FILE = '../teams.json';

router.get('/', async(_req, res) => {
    const teams = await readContentFile(PATH_FILE) || [];

    res.status(200).json({ teams });
});

router.post('/', validations.isValid, async(req, res,) => {
    const newTeam = {
        ...req.body,
        initials: req.body.initials.toUpperCase(),
    };
    const team = await writeContentFile(PATH_FILE, newTeam);

    res.status(200).json(team);
});

module.exports = router;

// http GET :3000/teams/

// http POST :3000/teams/ name=Santos initials=sto country=Brasil league=brasileirao 

// http POST :3000/teams/ name=S initials=stos country=Brasil league=brasileirao 