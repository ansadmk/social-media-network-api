const request = require('supertest');
const app = require('../index');

describe('User Endpoints', () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });
    token = res.body.token;
  });

  it('should create a new user profile', async () => {
    const res = await request(app)
      .post('/api/users')
      .set('x-auth-token', token)
      .send({
        username: 'newuser',
        password: 'newpassword'
      });
    expect(res.statusCode)
    expect(res.body).toHaveProperty('_id');
  });

  // Add more tests for other user endpoints
});
