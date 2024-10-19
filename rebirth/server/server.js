const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', logger, (req, res) => {
    console.log('Here')
    //res.download("server.js") // download a file
    // res.render('index', { text: 'World' }) // render a view
    //res.status(500).json({ message: 'Error' })
    //res.send('Hi') // send mainly used for testing purposes
})

const userRouter = require('./routes/users')
const employerRouter = require('./routes/employers')
const jobRouter = require('./routes/jobs')
const courseRouter = require('./routes/courses')
const authRouter = require('./routes/auth');

app.use('/users', userRouter)
app.use('/employers', employerRouter)
app.use('/jobs', jobRouter)
app.use('/courses', courseRouter)
// Use the auth router for login routes
app.use('/auth', authRouter);


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3001)