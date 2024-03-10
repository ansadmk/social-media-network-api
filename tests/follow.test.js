const request = require('supertest');
const app = require('../index');

describe('Follow Endpoints', () => {
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

  it('should follow a user', async () => {
    const res = await request(app)
      .post('/api/follows/someUserId')
      .set('x-auth-token', token);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  // Add more tests for other follow endpoints
});
