const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const controller = require('./controller.js')
const bodyParser = require('body-parser');
const morgan = require('morgan')


app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.get('/api', controller.get); 
app.get('/api/board', controller.getBoard);
// app.post('/api', controller.post); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
