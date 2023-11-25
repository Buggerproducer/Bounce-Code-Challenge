// Import your Express app
const app = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);

describe('GET /country/search_country/:name', () => {
    it('responds with json containing a list of country details', async () => {
      const response = await request.get('/country/search_country/usa');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      console.log(response.body);
      expect(response.body[0].name).toContain('United States');
    });
  });


  describe('GET /country/exact_country/:name', () => {
    it('responds with json containing a list of country details', async () => {
      const response = await request.get('/country/exact_country/United States');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body.name.common).toContain('United States');
    });
  });


  describe('GET /country/all_countries', () => {
    it('responds with json containing a list of country details', async () => {
      const response = await request.get('/country/all_countries');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      // examin the length of the array to contain 250 countries
      expect(response.body.length).toBe(250);

    });
  });
