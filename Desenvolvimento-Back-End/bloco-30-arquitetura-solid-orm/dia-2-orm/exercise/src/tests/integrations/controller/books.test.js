const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../app');

const { Book } = require('../../../models');

describe('Busca todos os usuários', () => {
  describe('quando não existe nenhum usuário cadastrado', () => {
    const findAllStub = stub(Book, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called Book.findAll', async () => {
      await chai.request(app).get('/books');

      expect(Book.findAll.calledOnce).to.be.equals(true);
    });

    it('o status é 200', async () => {
      const response = await chai.request(app).get('/books');

      expect(response.status).to.be.equals(200);
    });

    it('a resposta é um array', async () => {
      const response = await chai.request(app).get('/books');

      expect(response.body).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await chai.request(app).get('/books');

      expect(response.body).to.be.empty;
    });
  });
});
