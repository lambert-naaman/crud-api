import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/users.js'

const app = express();

const Port = 5000;

app.use(bodyParser.json())

app.use('/users', usersRoute)

app.get('/', (req, res) => {
 res.send('server is active')
})



app.listen(Port, () =>{
  console.log(`servr running on port: http://localhost:${Port}`)
});