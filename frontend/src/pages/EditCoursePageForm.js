import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { FaRegSave } from "react-icons/fa";
export const EditCoursePageForm = ({ courseToEdit }) => {
 
    const [title, setTitle]       = useState(courseToEdit.title);
    const [date, setDate]         = useState(courseToEdit.date.slice(0,10));
    const [courseNum, setcourseNum] = useState(courseToEdit.courseNum);
    
    const redirect = useNavigate();

    const editCourse = async () => {
        const response = await fetch(`/courses/${courseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                date: date, 
                courseNum: courseNum
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Course updated successfully!`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to update course: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/CsCourses");
    }

    return (
        <>
        <article>
            <h2>Edit a course</h2>
            <p>Make the desired changes and hit save.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which course are you editing?</legend>
                    <label for="title">Course title:</label>
                    <p></p>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    <p></p>
                    <label for="date">Date:</label>
                    <p></p>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />
                    <p></p>
                    <label for="courseNum">Course Number:</label>
                    <p></p>
                    <input
                        type="text"
                        value={courseNum}
                        onChange={e => setcourseNum(e.target.value)} 
                        id="courseNum" />
                    <p></p>
                    <label for="submit">
                    <button
                        onClick={editCourse}
                        id="submit"
                    ><FaRegSave />  Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditCoursePageForm;
