const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/v1/happyhours', require('./routes/happyhours'));
app.use('/api/v1/meals', require('./routes/meals'));
app.use('/api/v1/boardgames', require('./Routes/boardgames'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
