import React from 'react';
import Course from './Course';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function CourseList({ courses, onDelete, onEdit }) {
    return (
        <table id="courses">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Course Number</th>
                    <th>Year</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course, i) => 
                    <Course 
                        course={course} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default CourseList;
