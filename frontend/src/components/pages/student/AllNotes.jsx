import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAllNotes from '../../../utils/useAllNotes';

const AllNotes = () => {
    const [notesYear, setNotesYear] = useState('2');
    const {notes, loading} = useAllNotes();

    const handleYearClick = (year) => {
        setNotesYear(year);
    };

    const filteredNotes = notes && notes.filter(notes => notes.year === notesYear);

    return (
        <div className="overflow-x-auto min-h-screen mt-12 ml-32">
            <div className='w-5/6'>
                <div className='flex justify-between'>
                    <h1 className="text-3xl font-semibold text-center text-neutral-700 ml-2">Available Notes</h1>
                </div>
                <p className='text-sm mt-3 ml-2'>Click on the button to see the Notes of that particular year.</p>
                <div className="flex my-4">
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('2')}>2nd Year</button>
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('3')}>3rd Year</button>
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('4')}>4th Year</button>
                </div>
                {
                    loading ? (<p>Loading...</p>) :
                        filteredNotes && filteredNotes.length === 0 ? (<h1 className='mt-5 font-bold text-gray-700 ml-2'>No Notes to Show ! Wait for Notes to upload...</h1>) : (
                            <table className="min-w-4xl bg-white shadow-lg rounded mt-10">
                                <thead className='border'>
                                    <tr className="text-left text-neutral-700">
                                        <th className="py-3 px-4">Title</th>
                                        <th className="py-3 px-4">Subject</th>
                                        <th className="py-3 px-4">Description</th>
                                        <th className="py-3 px-4">Uploaded By</th>
                                        <th className="py-3 px-4">Uploaded Date</th>
                                        <th className="py-3 px-4">Download Here</th>
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
                                            <td className="border-b py-3 px-4"><a href={`http://localhost:8182/api/notes/download/${notes.notesid}`} download>Download</a></td>
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

export default AllNotes;
