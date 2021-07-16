numberRandom = require('./exercise1');

test('Teste de implementaço da função numberRandom', () => {
  expect.assertions(4);

  numberRandom = jest.fn().mockImplementation((num1, num2) => num1 / num2);

  numberRandom(8, 2);
  expect(numberRandom).toHaveBeenCalled();
  expect(numberRandom(8, 2)).toBe(4);
  expect(numberRandom).toHaveBeenCalledTimes(2);
  expect(numberRandom).toHaveBeenLastCalledWith(8, 2);
});