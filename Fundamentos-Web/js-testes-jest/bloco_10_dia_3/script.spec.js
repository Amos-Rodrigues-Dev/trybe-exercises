/* const service = require('./script');

test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe("first call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe("second call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe("default value");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
}); */

// const math = require('./script');
// jest.mock("./script");

// test("#somar", () => {
//   // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

//   math.somar.mockImplementation((a, b) => a + b);
//   math.somar(1, 2);

//   expect(math.somar).toHaveBeenCalled();
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenCalledWith(1, 2);
//   expect(math.somar(1, 3)).toBe(4);
//   expect(math.somar).toHaveBeenCalledWith(1, 3);
//   expect(math.somar).toHaveBeenCalledTimes(2);
// });

/* const math = require('./script');

test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math, "somar");

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
}); */

/* const math = require('./script');

test("#somar", () => {
  // testando a implementação original, o mock e o mock resetado

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  // resetando o mock
  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
}); */

/* const math = require('./script');

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
}); */

/* const api = require("./script");

describe("testando a requisição", () => {
  const apiURL = jest.spyOn( api, "fetchURL");
  afterEach(apiURL.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('a requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
}); */

/* const api = require("./script");

const requestReturn = [
  {
    id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    name: "Spirit",
    classification: "Spirit",
    eye_colors: "Red",
    hair_colors: "Light Orange",
    url:
      "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    people: [
      "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
    ],
    films: [
      "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    ]
  }
];

describe("testando a requisição", () => {
  // const apiURL = jest.spyOn( api, "fetchURL");
  // afterEach(apiURL.mockReset());

  test("testando requisição caso a promise resolva", async () => {
    apiURL = jest.fn().mockResolvedValue(requestReturn);

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe(requestReturn);
    expect(apiURL).toHaveBeenCalledTimes(2);
  });
  
  test("testando requisição caso a promise seja rejeitada", async () => {

    apiURL.mockReset();
    apiURL.mockRejectedValue(requestReturn);

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch(requestReturn);
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});  */


// Para fixar 

const math = require('./script')

// (1)
/* describe('Teste das funções com mock', () => {

  test("#Subtrair", () => {
    // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
    math.subtrair = jest.fn();
  
    math.subtrair(4, 2);
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair).toHaveBeenCalledWith(4, 2);
    expect(math.subtrair(4, 2)).toBe(undefined);
  }); 

});

 */

// (2)
/* test("multiplicar com retorno padrão de valor '10'", () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar()).toBe(10);
});
 */

// (3)
/* test("Testa chamada, retorno e parâmetros passados para soma com entrada de dois valores", () => {
  const mockSomar = jest.spyOn(math, "somar");
  mockSomar.mockResolvedValue(5);

  mockSomar(2, 3);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(2, 3);
  expect(mockSomar(2, 3)).resolves.toBe(5);
}); */

// (4)
/* test('Testa chamada, retorno e parâmetros da função dividir', () => {
  const mockDividir = jest.spyOn(math, "dividir");
  mockDividir.mockReturnValue(15);
  mockDividir.mockReturnValueOnce(2);
  mockDividir.mockReturnValueOnce(5);

  expect(mockDividir(4, 2)).toBe(2);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(1);
  expect(mockDividir).toHaveBeenCalledWith(4, 2);

  expect(mockDividir(10, 2)).toBe(5);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(2);
  expect(mockDividir).toHaveBeenCalledWith(10, 2);

  expect(mockDividir(30, 2)).toBe(15);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(3);
  expect(mockDividir).toHaveBeenCalledWith(30, 2);
}); */

/* test('Mock da função subtrair de modo que possa restaurar sua implementação original', () => {
  const mockSubtrair = jest.spyOn(math, "subtrair");
  mockSubtrair.mockImplementation((a, b) => a * b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(10, 2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(8);

  expect(mockSubtrair(10, 2)).toBe(8);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
}); */