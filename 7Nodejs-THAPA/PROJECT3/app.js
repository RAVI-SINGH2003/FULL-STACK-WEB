const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config()

app.use('/api/v1/tasks',tasks);
const port = 8000;

//middleware
app.use(express.json());

//routes 
app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening at port ${port}`));
        
    } catch (error) {
        console.log(error)
    }
}
start()