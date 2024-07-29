import React from 'react'
import logo from '../../../assets/images/StudySync.png';
import TeacherNavbar from './TeacherNavbar'
import Footer from '../../Footer'
import { useParams } from 'react-router-dom'
import useTeacherDetails from '../../../utils/useTeacherDetails'

const TeacherProfile = () => {
    const { id } = useParams();
    const teacher = useTeacherDetails(id);

    return (
        <>
            <TeacherNavbar id = {id}/>
            <div className='min-h-screen'>
                <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-md">
                    <div className="text-center mb-6">
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="profile-image-upload"
                        />
                        <label htmlFor="profile-image-upload">
                            <img
                                src={teacher && teacher.imgUrl ? URL.createObjectURL(teacher.imgUrl) : logo}
                                alt="Profile"
                                className="h-32 w-32 rounded-full mx-auto mb-4 cursor-pointer shadow-lg"
                            />
                        </label>
                        <h2 className="text-3xl font-bold mb-4">Profile</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={teacher && teacher.firstname}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={teacher && teacher.lastname}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Teacher Id</label>
                            <input
                                type="text"
                                name="prn"
                                value={teacher && teacher.tid}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={teacher && teacher.email}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Mobile No.</label>
                            <input
                                type="text"
                                name="phonenumber"
                                value={teacher && teacher.phonenumber}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TeacherProfile