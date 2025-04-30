const request = require('supertest');
const app = require('./src/server');  // Only the app, no server listening!

describe('GET /', () => {
  it('responds with Hello CI/CD World!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello CI/CD World!');
  });
});
describe('GET /nonexistent', () => {
  it('responds with 404 Not Found', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.statusCode).toBe(404);
  });
});