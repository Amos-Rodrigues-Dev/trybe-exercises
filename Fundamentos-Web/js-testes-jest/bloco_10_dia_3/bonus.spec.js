const api = require('./bonus');
const { fetchJoke } = api;
const fetch = require('node-fetch');

jest.mock('node-fetch')

describe('when calling fetchJoke function', () => {
  afterEach(fetch.mockReset());
  it("espera-se que o fetch retorne uma piada", () => {
    expect.assertions(1);

    fetch.mockImplementation( async () => {

      return {
        json: async () => {
          return {
            id: "7h3oGtrOfxc",
            joke: "Whiteboards ... are remarkable.",
            status: 200
          }
        }
      }
      
    });

    return expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
  }) 

  test("espera-se que o fetch retorne uma piada", () => {
    console.log(fetchJoke());
      return expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
  });
})
  


// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   return fetch(API_URL, { headers: { Accept: "application/json" } })
//     .then(response => response.json())
//     .then(data => data.joke);
// };

// const fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         id: "7h3oGtrOfxc",
//         joke: "Whiteboards ... are remarkable.",
//         status: 200
//       })
//   })
// );

// test("espera-se que o fetch retorne uma piada", () => {
//   return expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
// });