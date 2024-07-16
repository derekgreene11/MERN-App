import React from 'react';
import { BsFillTrash2Fill } from "react-icons/bs";
import { HiOutlinePencilSquare } from "react-icons/hi2";

function Course({ course, onEdit, onDelete }) {
    return (
        <tr>
            <td>{course.title}</td>
            <td>{course.courseNum}</td>
            <td>{course.date.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><HiOutlinePencilSquare onClick={() => onEdit(course)} /></td>
            <td><BsFillTrash2Fill onClick={() => onDelete(course._id)} /></td>
            
        </tr>
    );
}

export default Course;