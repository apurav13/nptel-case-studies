const express = require('express');
const app = express();
const eventsRouter = require('./routes/events');
const classesRouter = require('./routes/classes');
const contactRouter = require('./routes/contact');

app.use(express.json());
app.use(express.static('public'));
app.use('/events', eventsRouter);
app.use('/classes', classesRouter);
app.use('/contact', contactRouter);
app.get('/', (req, res) => {
  res.send('Welcome to Greenfield Community Center!');
});
app.use((req, res) => {
  res.status(404).send('Page not found. Please check the URL.');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});