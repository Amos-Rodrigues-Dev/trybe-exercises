numberRandom = require('./exercise1');

test('Teste da função numberRandom', () => {
  numberRandom = jest.fn().mockReturnValue(10);
  numberRandom();
  expect(numberRandom).toHaveBeenCalled();
  expect(numberRandom()).toBe(10);
  expect(numberRandom).toHaveBeenCalledTimes(2);
});