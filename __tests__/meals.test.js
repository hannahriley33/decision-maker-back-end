const { getMeals, getMeal } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('meal routes', () => {
  it('creates a meal', async() => {
    const meal = await getMeal();
    
    return request(app)
      .post('/api/v1/meals')
      .send({
        name: 'Spaghetti and Meatballs',
        type: 'dinner entree',
        cookingMethod: 'stovetop',
        recipe: 'www.spaghetti.com',
        season: 'fall, winter, spring',
        proteinType: 'beef'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Spaghetti and Meatballs',
          type: 'dinner entree',
          cookingMethod: 'stovetop',
          recipe: 'www.spaghetti.com',
          season: 'fall, winter, spring',
          proteinType: 'beef',
          __v: 0
        });
      });
  });

  it('gets a meal by id', async() => {
    const meal = await getMeal();

    return request(app)
      .get(`/api/v1/meals/${meal._id}`)
      .then(res => {
        expect(res.body).toEqual(meal);
      });
  });
  
  it('gets all meals', async() => {
    const meals = await getMeals();

    return request(app)
      .get('/api/v1/meals')
      .then(res => {
        expect(res.body).toEqual(meals);
      });
  });
});
