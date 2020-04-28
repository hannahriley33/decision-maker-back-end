const { getBoardgame, getBoardgames } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('boardgame routes', () => {
  it('creates a boardgame', async() => {
    const boardgame = await getBoardgame();
    
    return request(app)
      .post('/api/v1/boardgames')
      .send({
        name: 'Go Fish',
        duration: '30 min',
        minPlayers: 2,
        maxPlayers: 8,
        notes: 'this game is best for kids'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Go Fish',
          duration: '30 min',
          minPlayers: 2,
          maxPlayers: 8,
          notes: 'this game is best for kids',
          __v: 0
        });
      });
  });

  it('gets a boardgame by id', async() => {
    const boardgame = await getBoardgame();


    return request(app)
      .get(`/api/v1/boardgames/${boardgame._id}`)
      .then(res => {
        expect(res.body).toEqual(boardgame);
      });
  });
  
  it('gets all boardgames', async() => {
    const boardgames = await getBoardgames();

    return request(app)
      .get('/api/v1/boardgames')
      .then(res => {
        expect(res.body).toEqual(boardgames);
      });
  });
});
