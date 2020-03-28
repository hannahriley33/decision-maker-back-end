const { getHappyHours } = require('../db/data-helpers');

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

  // it('gets a film by id', async() => {
  //   const film = await getFilm();


  //   return request(app)
  //     .get(`/api/v1/films/${film._id}`)
  //     .then(res => {
  //       expect(res.body).toEqual(film);
  //     });
  // });
  // // studio id and name also
  // it('gets all films', async() => {
  //   const films = await getFilms();

  //   return request(app)
  //     .get('/api/v1/films')
  //     .then(res => {
  //       expect(res.body).toEqual(films);
      
  //     });
  // });

});
