const { getHappyHours, getHappyHour } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('happyhour routes', () => {
  it('creates a happyhour', async() => {
    const happyhour = await getHappyHours();
    
    return request(app)
      .post('/api/v1/happyhours')
      .send({
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
        highlights: 'Great moscow mule and $5 apps!'
        
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

  it('updates a happyhour by id', async() => {
    const happyhour = await getHappyHour();
    return request(app)
      .patch(`/api/v1/happyhours/${happyhour._id}`)
      .send({ highlights: 'new food specials!' })
      .then(res => {
        expect(res.body).toEqual({
          ...happyhour,
          highlights: 'new food specials!'
        });
      });
  });

  it('deletes a happyhour by id', async() => {
    const happyhour = await getHappyHour();

    return request(app)
      .delete(`/api/v1/happyhours/${happyhour._id}`)
      .then(res => {
        expect(res.body).toEqual(happyhour);
      });
  });


});
