numberRandom = require('./exercise1');

test('Testa duas novas implementações para numberRandom', () => {
expect.assertions(6);

  numberRandom = jest.fn()
    .mockImplementationOnce((num1, num2, num3) => num1 * num2 * num3);
  
  expect(numberRandom(2, 2, 2)).toBe(8)
  expect(numberRandom).toHaveBeenCalledTimes(1);
  expect(numberRandom).toHaveBeenCalledWith(2, 2, 2);

  numberRandom.mockReset()
    .mockImplementationOnce((number) => number * 2);
  expect(numberRandom(3)).toBe(6);
  expect(numberRandom).toHaveBeenCalledTimes(1);
  expect(numberRandom).toHaveBeenCalledWith(3);
});


