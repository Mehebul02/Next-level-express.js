import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('I am serving a bdCalling It Ltd as a front end developer');
});

export default app;
