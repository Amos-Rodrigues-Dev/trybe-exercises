beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('testa before e after', () => console.log('1 - test'), expect('teste').toBe('teste'));  

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('testa before e after', () => console.log('2 - test'), expect('teste').toBe('teste'));
});