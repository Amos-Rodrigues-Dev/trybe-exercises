const getUserName = require('./exercise2.js')

describe('User name that exist', () => {

  it('if name user with id 4', async () => {
    expect.assertions(1)
    await getUserName(4).then(name => {expect(name).toEqual('Mark')});
  });

  it('if name user with id 4', async () => {
    expect.assertions(1)
    await getUserName(5).then(name => {expect(name).toEqual('Paul')});
  });
});

describe('getUserName - async/await', () => {
  describe('when the user id exists', () => {
    it('returns the user name', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toEqual('Mark');
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(1);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 1 not found.' });
      }
    });
  });
});