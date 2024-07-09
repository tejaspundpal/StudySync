import React, { useEffect, useState } from 'react';
import logo from '../../../assets/images/StudySync.png';
import StudentNavbar from './StudentNavbar';
import axios from 'axios';

const StudentProfile = () => {

  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8182/api/student/profile', { withCredentials: true });
  //       setProfile(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       setError(error);
  //       console.error("Error fetching profile: ", error);
  //     }
  //   }
  //   fetchProfile();
  // }, []);

  const initialData = {
    firstName: 'Tejas',
    lastName: 'Pundpal',
    prn: '20ucs112',
    email: 'tejaspundpal55@gmail.com',
    year: '4',
    division: 'a',
    phonenumber: '7620872033',
    linkedinId: '',
    githubId: ''
  };

  const [userData, setUserData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserData(prevData => ({
      ...prevData,
      profileImage: file
    }));
  };

  const saveUserData = (e) => {
    e.preventDefault();
    console.log('User data saved:', userData);
    alert('User data saved successfully!');
  };
  
  // if (error) {
  //   return <div>Error fetching profile: {error.message}</div>;
  // }

  // if (!profile) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <StudentNavbar />
      <form onSubmit={saveUserData}>
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-md">
          <div className="text-center mb-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="profile-image-upload"
            />
            <label htmlFor="profile-image-upload">
              <img
                src={userData.profileImage ? URL.createObjectURL(userData.profileImage) : logo}
                alt="Profile"
                className="h-32 w-32 rounded-full mx-auto mb-4 cursor-pointer shadow-lg"
              />
            </label>
            <h2 className="text-3xl font-bold mb-4">Profile</h2>
            {/* <p>Email : {profile.email}</p>
            <p>firstname : {profile.firstName}</p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">PRN</label>
              <input
                type="text"
                name="prn"
                value={userData.prn}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Mobile No.</label>
              <input
                type="text"
                name="phonenumber"
                value={userData.phonenumber}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Year</label>
              <input
                type="text"
                name="year"
                value={userData.year}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Division</label>
              <input
                type="text"
                name="division"
                value={userData.division}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">LinkedIn URL</label>
              <input
                type="text"
                name="linkedinId"
                value={userData.linkedinId}
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
                value={userData.githubId}
                onChange={handleInputChange}
                placeholder='Enter Github URL'
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default StudentProfile;
