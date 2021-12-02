// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
const { expect } = require("chai");
const { verificaNumeros, escreveArquivo } = require('../Funcoes/codigo')
const fs = require('fs/promises');
const sinon = require('sinon');

describe('Verifica valores maiores que 0', () => {
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = verificaNumeros(10);

      expect(resposta).to.be.a('string');
    });

    it('é igual a "positivo"', () => {
      const resposta = verificaNumeros(10);

      expect(resposta).to.be.equals('positivo');
    });
  });
});

describe('Verifica valores menores que 0', () => {
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = verificaNumeros(-10);

      expect(resposta).to.be.a('string');
    });

    it('é igual a "positivo"', () => {
      const resposta = verificaNumeros(-10);

      expect(resposta).to.be.equals('negativo');
    });
  });
});

describe('Verifica valor igual 0', () => {
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = verificaNumeros(0);

      expect(resposta).to.be.a('string');
    });

    it('é igual a "neutro"', () => {
      const resposta = verificaNumeros(0);

      expect(resposta).to.be.equals('neutro');
    });
  });
});

// Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .
describe('Verifica retorno caso não seja número', () => {
  it('valor repassado: "xablau"', () => {
    const resposta = verificaNumeros("xablau");
    expect(resposta).to.be.equal("o valor deve ser um número")
  });
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = verificaNumeros("xablau");

      expect(resposta).to.be.a('string');
    });

    it('é igual a "o parâmetro deve ser um número"', () => {
      const resposta = verificaNumeros("xablau");

      expect(resposta).to.be.equals("o valor deve ser um número");
    });
  });
});

// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
describe('Escrever conteúdo em arquivo', () => {
  // Crie as asserções validando se o retorno da função possui o valor e tipo esperado.
  describe('validando escrita em arquivo', () => {
      before(() => {
        sinon.stub(fs, 'writeFile').resolves("xablau")
      });
    
      after(() => {
        fs.writeFile.restore();
      });

      it('é uma string?', async () => {
        const resposta = await escreveArquivo("./arquivo.txt", "xablau");

        expect(resposta).to.be.a("string")
      })

      it('confirma retorno com ok', async () => {
        const resposta = await escreveArquivo("./arquivo.txt", "xablau");

        expect(resposta).to.be.equals("ok")
      })
    })

    describe('teste de falha', () => {
      before(() => {
        sinon.stub(fs, 'writeFile').rejects(new Error('Arquivo não encontrado'))
      });
    
      after(() => {
        fs.writeFile.restore();
      });

      it('confirma retorno com null', async () => {
        const resposta = await escreveArquivo("./arquivo.txt", "xablau");

        expect(resposta).to.be.null;
      })
    })
});
