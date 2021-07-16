const strMock = require('./exercise4');

test('testes do exercise 5', () => {
  // expect.assertions(8)
  const mockStr = jest.spyOn(strMock, 'stringUpperCase')
    .mockImplementation((word) => word.toLowerCase());

  strMock.stringUpperCase('AMOS');
  expect(mockStr).toHaveBeenCalled();
  expect(mockStr('AMOS')).toBe('amos');
  expect(mockStr).toHaveBeenCalledTimes(2);
  expect(mockStr).toHaveBeenCalledWith('AMOS');

  strMock.stringUpperCase.mockRestore();
  expect(strMock.stringUpperCase('amos')).toBe('AMOS');
}); 