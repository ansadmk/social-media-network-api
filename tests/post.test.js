const request = require('supertest');
const app = require('../index');

describe('Post Endpoints', () => {
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

  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .set('x-auth-token', token)
      .send({
        content: 'Test post content'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  // Add more tests for other post endpoints
});
