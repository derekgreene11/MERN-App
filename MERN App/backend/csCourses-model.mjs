// Models for the course Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Database connection failed!' });
    } else  {
        console.log('Success: Databse connection successful.');
    }
});

// SCHEMA: Define the collection's schema.
const courseSchema = mongoose.Schema({
	title:    { type: String, required: true },
	date:     { type: Date, required: true },
	courseNum:{ type: Number, required: true }
});

// Compile the model from the schema 
// by defining the collection name "courses".
const courses = mongoose.model('Courses', courseSchema);


// CREATE model *****************************************
const createCourse = async (title, date, courseNum) => {
    const course = new courses({ 
        title: title, 
        date: date, 
        courseNum: courseNum 
    });
    return course.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveCourses = async () => {
    const query = courses.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveCourseByID = async (_id) => {
    const query = courses.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteCourseById = async (_id) => {
    const result = await courses.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateCourse = async (_id, title, date, courseNum) => {
    const result = await courses.replaceOne({_id: _id }, {
        title: title,
        date: date,
        courseNum: courseNum
    });
    return { 
        _id: _id, 
        title: title,
        date: date,
        courseNum: courseNum 
    }
}

// EXPORT the variables for use in the controller file.
export { createCourse, retrieveCourses, retrieveCourseByID, updateCourse, deleteCourseById }