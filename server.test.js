const request = require('supertest');
const app = require('./src/server');  // Importing the app, not the server!

// Test for root route
describe('GET /', () => {
  it('responds with Hello CI/CD World!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello CI/CD World!');
  });
});

// Test for the new /home route
describe('GET /home', () => {
  it('responds with Welcome to the CI/CD Home!', async () => {
    const res = await request(app).get('/home');
    expect(res.text).toBe('Welcome to the CI/CD Home!');
  });
});

// Test for /data route
describe('GET /data', () => {
  it('responds with dummy message and data', async () => {
    const res = await request(app).get('/data');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('dummy message');
    expect(res.body.data).toEqual(['dummy data']);
  });
});

// Test for a non-existent route
describe('GET /nonexistent', () => {
  it('responds with 404 Not Found', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.statusCode).toBe(404);
  });
});
