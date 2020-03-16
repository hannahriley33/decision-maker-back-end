const client = require('../lib/client');

run();

async function run() {

    try {
        // run a query to create tables
        await client.query(`
            DROP TABLE IF EXISTS favorites;
            DROP TABLE IF EXISTS users;
            DROP TABLE IF EXISTS boardgames;
            DROP TABLE IF EXISTS mealpreps;
            DROP TABLE IF EXISTS tvshows;
        `);

        console.log('drop tables complete');
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