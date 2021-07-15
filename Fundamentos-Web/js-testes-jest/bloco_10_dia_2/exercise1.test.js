const uppercase = require('./exercise1')

describe('Testa se retona uma string em maiúsculo',() => {
  it('retorna a string Amós como AMOS', () => {
    uppercase('amos', (result) => {
      expect(result).toBe('AMOS');
    })
  })
})
