const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('responds with Hello CI/CD World!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello CI/CD World!');
    expect(response.statusCode).toBe(200);
  });
});
