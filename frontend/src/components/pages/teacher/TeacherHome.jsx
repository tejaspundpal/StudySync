import React, { useEffect, useState } from 'react';
import useAllStudents from '../../../utils/useAllStudents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {searchStudents} from '../../../utils/useSearchStudents'

const TeacherHome = () => {
    const [selectedYear, setSelectedYear] = useState('2');
    const [studentsLoaded, setStudentsLoaded] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [originalStudents, setOriginalStudents] = useState([]);
    const students = useAllStudents();

    useEffect(() => {
        if (students !== null) {
            const yearStudents = students.filter(student => student.year === selectedYear)
            setOriginalStudents(yearStudents);
            setFilteredStudents(yearStudents);
            setStudentsLoaded(true);
        }
    }, [students,selectedYear])

    const handleYearClick = (year) => {
        setSelectedYear(year);
        const yearStudents = students.filter(student => student.year === year)
        setOriginalStudents(yearStudents);
        setFilteredStudents(yearStudents);
    };

    const handleSearch = () => {
        const data = searchStudents(searchInput,originalStudents);
        // console.log(data);
        setFilteredStudents(data);
    }

    return (
        <div className="overflow-x-auto min-h-screen mt-12 ml-32">
            <div className='w-5/6'>
                <div className='flex justify-between'>
                    <h1 className="text-3xl font-semibold text-center text-neutral-700 ml-2">Registered Students</h1>
                    <div className="mt-1">
                        <input
                            type="text"
                            className="p-2 border-solid border border-black rounded-md w-60 h-8"
                            placeholder="Search Name"
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
                <p className='text-sm mt-3 ml-2'>Click on the button to see the Students of that particular year.</p>
                <div className="flex my-4">
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('2')}>2nd Year</button>
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('3')}>3rd Year</button>
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('4')}>4th Year</button>
                </div>
                {
                    !studentsLoaded ? (<div className='flex items-center justify-center'>
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-400 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>) :
                        filteredStudents && filteredStudents.length === 0 ? (<h1 className='mt-5 font-bold text-gray-700'>Wait for Students to Register...</h1>) : (
                            <table className="min-w-4xl bg-white shadow-lg rounded mt-10">
                                <thead className='border'>
                                    <tr className="text-left text-neutral-700">
                                        <th className="py-3 px-4">PRN</th>
                                        <th className="py-3 px-4">Name</th>
                                        <th className="py-3 px-4">Division</th>
                                        <th className="py-3 px-4">Phone Number</th>
                                        <th className="py-3 px-4">Email</th>
                                        <th className="py-3 px-4">LinkedIn</th>
                                        <th className="py-3 px-4">Github</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {filteredStudents && filteredStudents.map(student => (
                                        <tr key={student.prn}>
                                            <td className="border-b py-3 px-4">{student.prn}</td>
                                            <td className="border-b py-3 px-4">{student.firstname} {student.lastname}</td>
                                            <td className="border-b py-3 px-4">{student.division}</td>
                                            <td className="border-b py-3 px-4">{student.phonenumber}</td>
                                            <td className="border-b py-3 px-4">{student.email}</td>
                                            <td className="border-b py-3 px-4">
                                                {student.linkedinId ? (
                                                    <a href={student.linkedinId} target="_blank" rel="noopener noreferrer">
                                                        <FontAwesomeIcon icon={faLinkedin} size='2x' style={{ color: '#0077B5' }} />
                                                    </a>
                                                ) : (
                                                    <p className='text-red-500'>No Link</p>
                                                )}
                                            </td>
                                            <td className="border-b py-3 px-4">
                                                {student.githubId ? (
                                                    <a href={student.githubId} target="_blank" rel="noopener noreferrer">
                                                        <FontAwesomeIcon icon={faGithub} size='2x' style={{ color: '#181717' }} />
                                                    </a>
                                                ) : (
                                                    <p className='text-red-500'>No Link</p>
                                                )}
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

export default TeacherHome;
