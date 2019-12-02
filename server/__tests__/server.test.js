const supertest = require('supertest')

const app = require('../index')
const request = supertest(app)



describe('prime Endpoint', () => {
  it('should create a median response body', async (done) => {
    const res = await request
      .post('/prime')
      .send({maxInt: 3})
    expect(res.body).toHaveProperty('median')
    expect(res.body).toHaveProperty('errorMessage')
    expect(res.body).toHaveProperty('primes')
    done()
  })
})

describe('sieve function', () => {
  it('should return an error when passed an empty string or number less than 3', async (done) => {
    const res = await request
      .post('/prime')
      .send({maxInt: 2})
    expect(res.body.errorMessage).toContain('No Prime Numbers: Select a Max Number Larger than 2')
    done();
  })
})
