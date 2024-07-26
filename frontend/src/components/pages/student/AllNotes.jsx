import React, { useEffect, useState } from 'react';
import useAllNotes from '../../../utils/useAllNotes';
import { searchNotes } from '../../../utils/useSearchNotes';
import { RiFileDownloadFill } from "react-icons/ri";
import { ShimmerTable } from '../../../utils/Shimmer';

const AllNotes = () => {
    const [notesYear, setNotesYear] = useState('2');
    const { notes, loading } = useAllNotes();
    const [searchInput, setSearchInput] = useState("");
    const [filteredNotes, setFilteredNotes] = useState([]);
    const [originalNotes, setOriginalNotes] = useState([]);

    useEffect(() => {
        if (notes) {
            const yearNotes = notes.filter(note => note.year === notesYear);
            setOriginalNotes(yearNotes);
            setFilteredNotes(yearNotes);
        }
    }, [notes, notesYear]);

    const handleYearClick = (year) => {
        setNotesYear(year);
        const yearNotes = notes.filter(note => note.year === year);
        setOriginalNotes(yearNotes);
        setFilteredNotes(yearNotes);
    };

    const handleSearch = () => {
        const data = searchNotes(searchInput, originalNotes);
        setFilteredNotes(data);
    };

    return (
        <div className="overflow-x-auto min-h-screen mt-12 ml-32">
            <div className='w-5/6'>
                <div className='flex justify-between'>
                    <h1 className="text-3xl font-semibold text-center text-neutral-700 ml-2">Available Notes</h1>
                    <div className="mt-1">
                        <input
                            type="text"
                            className="p-2 border-solid border border-black rounded-md w-60 h-8"
                            placeholder="Search Subject"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button
                            className="mx-3 border border-solid rounded-md px-2 py-1 bg-purple-600 text-white hover:bg-purple-700"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <p className='text-sm mt-3 ml-2'>Click on the button to see the Notes of that particular year.</p>
                <div className="flex my-4">
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('2')}>2nd Year</button>
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('3')}>3rd Year</button>
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('4')}>4th Year</button>
                </div>
                {loading ? (
                    <ShimmerTable/>
                ) : (
                    filteredNotes && filteredNotes.length === 0 ? (
                        <h1 className='mt-5 font-bold text-gray-700 ml-2'>No Notes to Show! Wait for Notes to upload...</h1>
                    ) : (
                        <table className="min-w-4xl bg-white shadow-lg rounded mt-10">
                            <thead className='border'>
                                <tr className="text-left text-neutral-700">
                                    <th className="py-3 px-4">Title</th>
                                    <th className="py-3 px-4">Subject</th>
                                    <th className="py-3 px-4">Description</th>
                                    <th className="py-3 px-4">Uploaded By</th>
                                    <th className="py-3 px-4">Uploaded Date</th>
                                    <th className="py-3 px-4">Download</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {filteredNotes && filteredNotes.map(note => (
                                    <tr key={note.notesid}>
                                        <td className="border-b py-3 px-4">{note.title}</td>
                                        <td className="border-b py-3 px-4">{note.subject}</td>
                                        <td className="border-b py-3 px-4">{note.description}</td>
                                        <td className="border-b py-3 px-4">{note.teacherName}</td>
                                        <td className="border-b py-3 px-4">{note.uploadDate}</td>
                                        <td className="border-b py-3 px-4 flex justify-center items-center">
                                            <a href={`http://localhost:8182/api/notes/download/${note.notesid}`} download>
                                                <RiFileDownloadFill size={24} />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                )}
            </div>
        </div>
    );
}

export default AllNotes;
