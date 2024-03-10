const request = require('supertest');
const app = require('../index');

describe('Authentication Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should authenticate the user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should not register a user with duplicate username', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('msg', 'Username already exists');
  });

  it('should not authenticate with incorrect credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'wrongpassword'
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('msg', 'Invalid credentials');
  });
});
