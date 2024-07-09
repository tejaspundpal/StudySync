import React, { useEffect, useState } from 'react';
import useAllStudents from '../../../utils/useAllStudents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TeacherHome = () => {
    const [selectedYear, setSelectedYear] = useState('2');
    const [studentsLoaded, setStudentsLoaded] = useState(false);
    const students = useAllStudents();

    useEffect(() => {
        if (students !== null) {
            setStudentsLoaded(true);
        }
    }, [students])

    const handleYearClick = (year) => {
        setSelectedYear(year);
    };

    const filteredStudents = students && students.filter(student => student.year === selectedYear);

    return (
        <div className="overflow-x-auto min-h-screen mt-12 ml-32">
            <div className='w-5/6'>
                <div className='flex justify-between'>
                    <h1 className="text-3xl font-semibold text-center text-neutral-700 ml-2">Registered Students</h1>
                </div>
                <p className='text-sm mt-3 ml-2'>Click on the button to see the Students of that particular year.</p>
                <div className="flex my-4">
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('2')}>2nd Year</button>
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('3')}>3rd Year</button>
                    <button className="mx-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded" onClick={() => handleYearClick('4')}>4th Year</button>
                </div>
                {
                    !studentsLoaded ? (<p>Loading...</p>) :
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
                                    {filteredStudents.map(student => (
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
