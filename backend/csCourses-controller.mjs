// Controllers for the course Collection

import 'dotenv/config';
import express from 'express';
import * as courses from './csCourses-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/courses', (req,res) => { 
    courses.createCourse(
        req.body.title, 
        req.body.date, 
        req.body.courseNum
        )
        .then(course => {
            console.log(`"${course.title}" was added to the collection.`);
            res.status(201).json(course);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to add course to the collection. Please ensure all required fields are provided and try again.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/courses', (req, res) => {
    courses.retrieveCourses()
        .then(courses => { 
            if (courses !== null) {
                console.log(`All courses were retrieved from the collection.`);
                res.json(courses);
            } else {
                res.status(404).json({ Error: 'No courses found in the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve courses from the collection.' });
        });
});


// RETRIEVE by ID controller
app.get('/courses/:_id', (req, res) => {
    courses.retrieveCourseByID(req.params._id)
    .then(course => { 
        if (course !== null) {
            console.log(`"${course.title}" was retrieved, based on its ID.`);
            res.json(course);
        } else {
            res.status(404).json({ Error: 'No course found with the provided ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to retrieve course by ID.' });
    });

});


// UPDATE controller ************************************
app.put('/courses/:_id', (req, res) => {
    courses.updateCourse(
        req.params._id, 
        req.body.title, 
        req.body.date, 
        req.body.courseNum
    )
    .then(course => {
        console.log(`"${course.title}" was updated.`);
        res.json(course);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to update course.' });
    });
});


// DELETE Controller ******************************
app.delete('/courses/:_id', (req, res) => {
    courses.deleteCourseById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} course was deleted.`);
                res.status(200).send({ Success: 'Course deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'Course not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Failed to delete course.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});