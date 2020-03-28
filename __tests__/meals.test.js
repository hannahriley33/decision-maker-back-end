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
          name: 'Burnside Bar',
          location: {
            streetAddress: '1823 SE Burnside',
            quadrant: 'SE'
          },
          when: {
            monday: {
              start: 2,
              end: 8
            }, 
            tuesday: {
              start: 2,
              end: 8
            }, 
            wednesday: {
              start: 2,
              end: 8
            }, 
            thursday: {
              start: 2,
              end: 8
            }, 
            friday: {
              start: 2,
              end: 8
            }, 
            saturday: {
              start: 2,
              end: 8
            }, 
            sunday: {
              start: 2,
              end: 8
            }
          },
          foodDiscounts: true,
          drinkDiscounts: true,
          outdoorPatio: false,
          highlights: 'Great moscow mule and $5 apps!',
          __v: 0
        });
      });
  });

  it('gets a happyhour by id', async() => {
    const happyhour = await getHappyHour();


    return request(app)
      .get(`/api/v1/happyhours/${happyhour._id}`)
      .then(res => {
        expect(res.body).toEqual(happyhour);
      });
  });
  
  it('gets all happyhours', async() => {
    const happyhours = await getHappyHours();

    return request(app)
      .get('/api/v1/happyhours')
      .then(res => {
        expect(res.body).toEqual(happyhours);
      });
  });
});
