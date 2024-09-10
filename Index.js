const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const internRoutes = require('./Router/Routes');
const projectRoutes = require('./Router/StudentRouter');
const fileRouter=require('./Router/FileRouter');
const contactRouter=require('./Router/ContactRouter');
const { json } = require('sequelize');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/AryuTechno', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('MongoDB connection error:', error));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/upload', express.static('upload'));
app.use('/StudentID', express.static('StudentID'));
app.use('/contact',express.static('contact'));

app.use('/', internRoutes);
app.use('/', projectRoutes);
app.use('/api', fileRouter);
app.use('/',contactRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}/`);
});
