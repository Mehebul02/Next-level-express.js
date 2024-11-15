import express, { NextFunction, Request, Response } from 'express';

const app = express();
app.use(express.json())
app.use(express.text())

// router 

const userRouter = express.Router()

const createCourse = express.Router()

app.use('/api/v1/users', userRouter)
app.use('/api/v1/courses', createCourse)

userRouter.get('/create-user', (req: Request, res: Response) => {
  const user = req.body
  console.log(user);
  res.json({
    success: true,
    message: 'Successfully data pass',
    data: user
  })
})


createCourse.post('/create-course', (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: 'successfully create the course',
    data: course
  })
})

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next()
}

// error handle
app.get('/', (req: Request, res: Response) => {
  try {
    res.send(something)
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: 'failed to get data'
    })
  }
})

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: 'Transfer data'
  })


})




export default app;
