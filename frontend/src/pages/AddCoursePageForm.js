import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsDatabaseAdd } from "react-icons/bs";

export const AddCoursePageForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [courseNum, setcourseNum] = useState('');
    const navigate = useNavigate();

    const addCourse = async () => {
        const newCourse = { title, date, courseNum };
        try {
            const response = await fetch('/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCourse),
            });
            if (response.status === 201) {
                alert('Course added successfully!');
                navigate('/CsCourses');
            } else {
                alert(`Failed to add course. Error: ${response.status}`);
            }
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    return (
        <>
            <article>
                <h2>Add a course</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend>Which course are you adding?</legend>
                        <label htmlFor="title">Course title</label>
                        <input
                            type="text"
                            placeholder="Title of the course"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            id="title"
                        />

                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            placeholder="Date of the course"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            id="date"
                        />

                        <label htmlFor="courseNum">courseNum</label>
                        <input
                            type="text"
                            placeholder="Primary courseNum of the course"
                            value={courseNum}
                            onChange={(e) => setcourseNum(e.target.value)}
                            id="courseNum"
                        />

                        <label htmlFor="submit">
                            
                            <button type="submit" onClick={addCourse} id="submit">
                            <BsDatabaseAdd />  Add Course  
                            </button>
                        </label>
                    </fieldset>
                </form>
            </article>
        </>
    );
};

export default AddCoursePageForm;
