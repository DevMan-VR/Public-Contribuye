const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');

const users = 

//Bodyparser Middleware
app.use(express.json());

//DB Config
const db = config.get('mongoURI');

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const service = require('./routes/api/services');
const user = require('./routes/api/users');
const auth = require('./routes/api/auth');

// Use Routes
app.use('/api/services', service);
app.use('/api/users', user);
app.use('/api/auth', auth);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });
}

const port = (process.env.PORT || 5000);

app.listen(port, () => console.log('Server started on port'));