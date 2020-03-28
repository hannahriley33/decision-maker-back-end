const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/happyhours', require('./routes/happyhours'));
app.use('/api/v1/meals', require('./routes/meals'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
