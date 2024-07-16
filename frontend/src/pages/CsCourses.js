import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsDatabaseAdd } from "react-icons/bs";
import CourseList from '../components/CourseList';
import { Link } from 'react-router-dom';

function CsCourses({ setCourse }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [courses, setCourses] = useState([]);

    // RETRIEVE the entire list of courses
    const loadCourses = async () => {
        const response = await fetch('/courses');
        const courses = await response.json();
        setCourses(courses);
    } 
    

    // UPDATE a single Course
    const onEditCourse = async course => {
        setCourse(course);
        redirect("/update");
    }


    // DELETE a single course  
    const onDeleteCourse = async _id => {
        const response = await fetch(`/courses/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/courses');
            const courses = await getResponse.json();
            setCourses(courses);
        } else {
            console.error(`Failed to delete course with ID ${_id}. Status code: ${response.status}`)
        }
    }

    // LOAD all the courses
    useEffect(() => {
        loadCourses();
    }, []);

    // DISPLAY the courses
    return (
        <>
            <h2>List of CS Courses</h2>
            <p>This is a list of the current computer science courses I have completed. Use the <strong>add</strong>, <strong>edit</strong>, annd <strong>delete</strong> icons to create/modify/delete courses.</p>
            <Link to="/create"><BsDatabaseAdd /></Link>
            <CourseList 
                courses={courses} 
                onEdit={onEditCourse} 
                onDelete={onDeleteCourse} 
            />
        </>
    );
}

export default CsCourses;