import * as supertest from 'supertest-as-promised';

const server = supertest.agent('http://localhost:8000');

describe('GET /health', () => {
  it('is available', done => {
    server
      .get('/health')
      .expect(200)
      .end( (err, res) => {

        done();
      })
  })
});


