// Import your Express app
const app = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);

describe('GET /country/:name', () => {
    it('responds with json containing a list of country details', async () => {
      const response = await request.get('/country/usa');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      console.log(response.body);
      expect(response.body[0].name).toContain('United States');
    });
  });


  describe('GET /exact_country/:name', () => {
    it('responds with json containing a list of country details', async () => {
      const response = await request.get('/exact_country/United States');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body.name.common).toContain('United States');
    });
  });


  describe('GET/all_countries', () => {
    it('responds with json containing a list of country details', async () => {
      const response = await request.get('/all_countries');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      // examin the length of the array to contain 250 countries
      expect(response.body.length).toBe(250);

    });
  });
