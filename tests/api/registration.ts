import supertest from 'supertest';
import app from '../../src/app';

describe('Registration', () => {
  test('Register new user', async () => {
    const response = await supertest(app)
      .post('/api/v1/users/register')
      .send({ firstName: 'Klaus', lastName: 'Dieter' })
      .expect('Content-Type', /application\/json/)
      .expect(200);
    expect(response.body._id).toBeDefined();
    expect(response.body.firstName).toEqual('Klaus');
    expect(response.body.lastName).toEqual('Dieter');
  });

  test('Get user', async () => {
    await supertest(app)
      .post('/api/v1/users/register')
      .send({ firstName: 'Klaus', lastName: 'Dieter' });
    const response = await supertest(app)
      .get('/api/v1/users/get/me')
      .expect('Content-Type', /application\/json/)
      .expect(200);
    expect(response.body._id).toBeDefined();
    expect(response.body.firstName).toEqual('Klaus');
    expect(response.body.lastName).toEqual('Dieter');
  });
});
