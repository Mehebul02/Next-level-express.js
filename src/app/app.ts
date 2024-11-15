import express, { NextFunction, Request, Response } from 'express';

const app = express();
app.use(express.json())
app.use(express.text())

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
}

app.get('/', (req: Request, res: Response) => {
  console.log(req.query);
  res.send('I am serving a bdCalling It Ltd as a front end developer');
});

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: 'Transfer data'
  })


})

export default app;
