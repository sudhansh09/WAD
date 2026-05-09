import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import dotenv from 'dotenv';
import Student from './model/user.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

app.post('/students', async(req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (err) {
        res.status(400).send(err);
    }
})

app.get('/students', async(req, res) => {
    try {
        const student = await Student.find();
        res.send(student);
    } catch (err) {
        res.send(err);
    }
})

app.put('/students/:id', async(req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true}
        )
        res.send(student);
    } catch (err) {
        res.send(err);
    }
})

app.delete('/students/:id', async(req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        res.send("Deleted Successfully");
    } catch (err) {
        res.send(err);
    }
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
});