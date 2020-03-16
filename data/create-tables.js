const client = require('../lib/client');

run();

async function run() {

    try {
        // run a query to create tables
        await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(256) NOT NULL,
                hash VARCHAR(512) NOT NULL,
                display_name VARCHAR(256) NOT NULL
            );
        
            CREATE TABLE boardgames (
                id VARCHAR(64) SERIAL PRIMARY KEY,
                name VARCHAR(256) NOT NULL,
                minplayers INT NOT NULL,
                maxplayers INT NOT NULL,
                portable BOOL NOT NULL,
                lengthofplay VARCHAR(256) NOT NULL
            );

            CREATE TABLE mealpreps (
                id VARCHAR(64) SERIAL PRIMARY KEY,
                name VARCHAR(256) NOT NULL,
                recipe VARCHAR(MAX) NOT NULL
            );

            CREATE TABLE tvshows (
                id VARCHAR(64) SERIAL PRIMARY KEY,
                name VARCHAR(256) NOT NULL,
                episodelength INT NOT NULL,
                host VARCHAR(256) NOT NULL
            )

            CREATE TABLE happyhours (
                id VARCHAR(64) SERIAL PRIMARY KEY,
                name VARCHAR(256) NOT NULL,
                pdxquadrant VARCHAR(256) NOT NULL,

            )

            CREATE TABLE favorites (
                id SERIAL PRIMARY KEY,
                user_id REFERENCES users.id,
                boardgame_id REFERENCES boardgames.id,
                mealpreps_id REFERENCES mealpreps.id
            );
        `);

        console.log('create tables complete');
    }
    catch (err) {
        // problem? let's see the error...
        console.log(err);
    }
    finally {
        // success or failure, need to close the db connection
        client.end();
    }
    
}