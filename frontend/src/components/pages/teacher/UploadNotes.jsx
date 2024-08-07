import React, { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import TeacherNavbar from './TeacherNavbar';
import Footer from '../../Footer';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import useTeacherDetails from '../../../utils/useTeacherDetails';

const UploadNotes = () => {
  const {id} = useParams();
  const teacher = useTeacherDetails(id);

  const initialFormData = {
    teacherName: '',
    subject: '',
    year: '',
    description: '',
    notes: null,
  }

  const [formData, setFormData] = useState(initialFormData);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    // console.log(formData);
        const data = new FormData();
        data.append('notes', formData.notes);
        data.append('teacherName', `${ teacher && teacher.firstname} ${teacher && teacher.lastname}`);
        data.append('subject', formData.subject);
        data.append('year', formData.year);
        data.append('description', formData.description);

        try {
            const response = await axios.post('http://localhost:8182/api/notes/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('File uploaded successfully !');
            setFormData(initialFormData);
            fileInputRef.current.value = null;
            // console.log(response.data);
        } catch (error) {
            if (error.response) {
                console.error('Error uploading file:', error.response.data);
                toast.error('Error uploading file');
            } else {
                console.error('Error uploading file:', error.message);
                toast.error('Error uploading file');
            }
        }
};

  return (
    <>
    <TeacherNavbar id = {id}/>
    <div className="container mx-auto mt-5 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-8 text-neutral-700">Upload Notes</h1>
      <form className="max-w-4xl mx-auto" onSubmit={handleFormSubmit}>
        <div className="mb-4 flex flex-wrap">
          <div className="w-full md:w-1/2 md:pl-2 mb-3">
            <label htmlFor="teacherName" className="block text-gray-700">Teacher Name</label>
            <input
              type="text"
              id="teacherName"
              name="teacherName"
              value={`${ teacher && teacher.firstname} ${teacher && teacher.lastname}`}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              disabled
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2 mb-3">
            <label htmlFor="subject" className="block text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder='Enter Subject'
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2 mb-3">
            <label htmlFor="year" className="block text-gray-700">Year</label>
            <input
              type="text"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder='Enter Class Year'
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2 mb-3">
            <label htmlFor="notes" className="block text-gray-700">Upload File</label>
            <input
              type="file"
              id="notes"
              name="notes"
              ref={fileInputRef}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2 mb-3">
            <label htmlFor="description" className="block text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder='Enter Description'
              rows="4"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              required
            ></textarea>
          </div>
        </div>
        <div className="mb-4 ml-2">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:bg-purple-600"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default UploadNotes;
