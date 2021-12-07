const posts = [{ id: 1, postName: 'card1' }, { id: 2, postName: 'card2' }, { id: 3, postName: 'card3' }]

// Atividade 3:
// 4 - Crie uma rota GET /posts/:id que receba uma requisição com um id como param route , verifique existência do post com aquele id, onde:
// 1. O id deve existir;
// 2. Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 404 e { "message": "post not found" } ;
// 3. Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com as informações do respectivo post; 
const findPost = (req, res, _next) => {
  const { id } = req.params;

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) return res.status(404).json({ message: "post not found" });

  res.status(200).json(post);
};

module.exports = findPost;

// http GET :3000/posts/4 