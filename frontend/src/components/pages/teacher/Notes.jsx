import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAllNotes from '../../../utils/useAllNotes';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ShimmerTable } from '../../../utils/Shimmer';
import useTeacherDetails from '../../../utils/useTeacherDetails';
import { RiFileDownloadFill } from "react-icons/ri";

const Notes = (props) => {

    const [notesYear, setNotesYear] = useState('2');
    const { notes, loading, setNotes } = useAllNotes();
    const teacher = useTeacherDetails(props.id);


    const handleYearClick = (year) => {
        setNotesYear(year);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8182/api/notes/delete/${id}`);
            const response = await axios.get('http://localhost:8182/api/notes/all');
            setNotes(response.data);
            toast.success("File Deleted Successfully !")
        } catch (error) {
            console.error("There was an error deleting the note!", error);
            toast.error("Something went wrong")
        }
    };

    const notesOfLoggedTeacher = notes && notes.filter(note => note.teacherName === `${teacher && teacher.firstname} ${teacher && teacher.lastname}`);
    console.log(notesOfLoggedTeacher);
    const filteredNotes = notesOfLoggedTeacher && notesOfLoggedTeacher.filter(note => note.year === notesYear);

    return (
        <div className="overflow-x-auto min-h-screen mt-12 ml-32">
            <div className='w-5/6'>
                <div className='flex justify-between'>
                    <h1 className="text-3xl font-semibold text-center text-neutral-700 ml-2">Uploaded Notes</h1>
                    <NavLink to={`/teacher/notes/upload/${props.id}`}>
                        <button
                            type="submit"
                            className="bg-white hover:bg-purple-700 hover:text-white text-purple-700 font-semibold px-4 py-2 rounded focus:outline-none focus:bg-purple-600 border-2 border-purple-600"
                        >
                            Upload Notes
                        </button></NavLink>
                </div>
                <p className='text-sm mt-3 ml-2'>Click on the button to see the Notes of that particular year.</p>
                <div className="flex my-4">
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('2')}>2nd Year</button>
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('3')}>3rd Year</button>
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('4')}>4th Year</button>
                </div>
                {
                    loading ? (<ShimmerTable />) :
                        filteredNotes && filteredNotes.length === 0 ? (<h1 className='mt-5 font-bold text-gray-700 ml-2'>No Notes to Show ! Upload the Notes first.</h1>) : (
                            <table className="min-w-4xl bg-white shadow-lg rounded mt-10">
                                <thead className='border'>
                                    <tr className="text-left text-neutral-700">
                                        <th className="py-3 px-4">Title</th>
                                        <th className="py-3 px-4">Subject</th>
                                        <th className="py-3 px-4">Description</th>
                                        <th className="py-3 px-4">Uploaded By</th>
                                        <th className="py-3 px-4">Uploaded Date</th>
                                        <th className="py-3 px-4">Download</th>
                                        <th className="py-3 px-4">Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {filteredNotes && filteredNotes.map(notes => (
                                        <tr key={notes.notesid}>
                                            <td className="border-b py-3 px-4">{notes.title}</td>
                                            <td className="border-b py-3 px-4">{notes.subject}</td>
                                            <td className="border-b py-3 px-4">{notes.description}</td>
                                            <td className="border-b py-3 px-4">{notes.teacherName}</td>
                                            <td className="border-b py-3 px-4">{notes.uploadDate}</td>
                                            <td className="border-b py-3 px-4"><a href={`http://localhost:8182/api/notes/download/${notes.notesid}`} download><RiFileDownloadFill className='ml-6' size={24} /></a></td>
                                            <td className="border-b py-3 px-4">
                                                <button onClick={() => handleDelete(notes.notesid)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                }
            </div>
        </div>
    );
}

export default Notes;
