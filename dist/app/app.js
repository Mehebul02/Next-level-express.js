"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
// router 
const userRouter = express_1.default.Router();
const createCourse = express_1.default.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', createCourse);
userRouter.get('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'Successfully data pass',
        data: user
    });
});
createCourse.post('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'successfully create the course',
        data: course
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// app.get('/', logger, (req: Request, res: Response) => {
//   res.send('I am serving a bdCalling It Ltd as a front end developer');
// });
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Transfer data'
    });
});
app.get('/', (req, res) => {
    try {
        res.send(something);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: 'failed to get data'
        });
    }
});
exports.default = app;
