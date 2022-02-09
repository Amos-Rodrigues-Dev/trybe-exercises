const Joke = require('../model/joke');

const getJoke = async (req, res) => {
  try {
    const joke = await Joke.getJoke();
    return res.render('jokeView', { joke });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getJoke,
};
