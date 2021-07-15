const getUserName = require('./exercise2.js')

describe('User name that exist', () => {

  it('if name user with id 4', () => {
    expect.assertions(1)
    return getUserName(4).then(name => {expect(name).toEqual('Mark')});
  });

  it('if name user with id 4', () => {
    expect.assertions(1)
    return getUserName(5).then(name => {expect(name).toEqual('Paul')});
  });
});

describe('User name does not exist', () => {

  it('error name not found', () => {
    return getUserName(7).catch((error) => expect(error).toEqual({ error: 'User with 7 not found.' }))
  })
});