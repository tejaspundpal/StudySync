import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/StudySync.png';
import { stringify } from 'flatted';
import { toast } from 'react-toastify';

const StudentRegister = () => {
  const [userReg, setUserReg] = useState({
    firstname: "",
    lastname: "",
    email: "",
    prn: "",
    phonenumber: "",
    year:"",
    division:"",
    password: "",
    cpassword: ""
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserReg({ ...userReg, [name]: value });
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    if (userReg.password !== userReg.cpassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (userReg.phonenumber.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits.");
      return;
    }

    if (userReg.password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }
    
    try {
      const formData = { ...userReg };
      // console.log('FormData : ',stringify(formData));
      const response = await axios.post('http://localhost:8182/api/student/register', formData);
      // console.log('Registration successful', response.data);
      toast.success("Registration successful !")
    } catch (error) {
      if(error.response && error.response.status === 409){
        toast.error("Student is already registered with entered PRN")
      }else{
      console.error('Registration failed', error);
      toast.error('Registration failed. Please try again.');
      }
    }
  };

  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <NavLink to="/" className="flex items-center mt-6 mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="h-20 mx-auto w-64" src={logo} alt="Logo" />
        </NavLink>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an Account
            </h1>
            {/* {errorMessage && (
              <div className="text-red-500 text-sm mb-4">
                {errorMessage}
              </div>
            )} */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                  <input type="text" id="firstname" name="firstname" value={userReg.firstname} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter your first name" required />
                </div>
                <div>
                  <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                  <input type="text" id="lastname" name="lastname" value={userReg.lastname} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter your last name" required/>
                </div>
                <div>
                  <label htmlFor="prn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PRN Number</label>
                  <input type="text" id="prn" name="prn" value={userReg.prn} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter your PRN number" required/>
                </div>
                <div>
                  <label htmlFor="phonenumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                  <input type="text" id="phonenumber" name="phonenumber" value={userReg.phonenumber} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter your mobile number" required/>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" id="email" name="email" value={userReg.email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter your email with college domain" required/>
                </div>
                <div>
                  <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                  <input type="text" id="year" name="year" value={userReg.year} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter your academic year" required/>
                </div>
                <div>
                  <label htmlFor="division" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Division</label>
                  <input type="text" id="division" name="division" value={userReg.division} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter your division" required/>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" id="password" name="password" value={userReg.password} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Enter your password" />
                </div>
                <div>
                  <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                  <input type="password" id="cpassword" name="cpassword" value={userReg.cpassword} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Confirm your password" />
                </div>
              </div>

              <button type="submit" className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Create an account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <NavLink to="/student-login" className="font-medium text-purple-600 hover:underline dark:text-purple-500">Sign In here</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentRegister;
