const strMock = require('./exercise4');

jest.mock('./exercise4');

test('testes do exercise 4', () => {
  expect.assertions(8)

  strMock.stringUpperCase.mockImplementationOnce((word) => word.toLowerCase());

  expect(strMock.stringUpperCase('AMOS')).toBe('amos');
  expect(strMock.stringUpperCase).toHaveBeenCalledTimes(1);
  expect(strMock.stringUpperCase).toHaveBeenCalledWith('AMOS');

  strMock.firstLetter.mockImplementationOnce((word) => word.substr(-1));
  expect(strMock.firstLetter('Amós')).toBe('s');
  expect(strMock.firstLetter).toHaveBeenCalledTimes(1);

  strMock.concateString
    .mockImplementationOnce((word1, word2, word3) => word1.concat(word2, word3));
  expect(strMock.concateString('até', 'mais', 'ver')).toBe('atémaisver');
  expect(strMock.concateString).toHaveBeenCalledTimes(1);
  expect(strMock.concateString).toHaveBeenCalledWith('até', 'mais', 'ver');

}); 