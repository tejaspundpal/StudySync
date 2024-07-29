import React, { useEffect, useState } from 'react';
import logo from '../../../assets/images/StudySync.png';
import StudentNavbar from './StudentNavbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useStudentDetails from '../../../utils/UseStudentDetails';
import Footer from '../../Footer';
import { toast } from 'react-toastify';

const StudentProfile = () => {
  const [profile, setProfile] = useState(null);
  const { id } = useParams();
  
  const student = useStudentDetails(id);

  const [editableData, setEditableData] = useState({
    phonenumber: '',
    year: '',
    division: '',
    linkedinId: '',
    githubId: ''
  });

  useEffect(() => {
    if (student) {
      setEditableData({
        phonenumber: student.phonenumber || '',
        year: student.year || '',
        division: student.division || '',
        linkedinId: student.linkedinId || '',
        githubId: student.githubId || ''
      });
    }
  }, [student]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const saveUserData = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8182/api/student/update/${id}`, editableData);
      toast.success('Student data updated successfully!');
    } catch (error) {
      toast.error('Error updating student data');
    }
  };

  return (
    <>
      <StudentNavbar id={id} />
      <form onSubmit={saveUserData}>
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
                src={student && student.imgUrl ? URL.createObjectURL(student.imgUrl) : logo}
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
                value={student && student.firstname}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={student && student.lastname}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">PRN</label>
              <input
                type="text"
                name="prn"
                value={student && student.prn}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="text"
                name="email"
                value={student && student.email}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Mobile No.</label>
              <input
                type="text"
                name="phonenumber"
                value={editableData.phonenumber}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Year</label>
              <input
                type="text"
                name="year"
                value={editableData.year}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Division</label>
              <input
                type="text"
                name="division"
                value={editableData.division}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">LinkedIn URL</label>
              <input
                type="text"
                name="linkedinId"
                value={editableData.linkedinId}
                onChange={handleInputChange}
                placeholder='Enter LinkedIn URL'
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Github URL</label>
              <input
                type="text"
                name="githubId"
                value={editableData.githubId}
                onChange={handleInputChange}
                placeholder='Enter Github URL'
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default StudentProfile;
