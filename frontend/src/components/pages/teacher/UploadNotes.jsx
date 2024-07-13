import React, { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import TeacherNavbar from './TeacherNavbar';
import Footer from '../../Footer';

const UploadNotes = () => {

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
    e.preventDefault();
        const data = new FormData();
        data.append('notes', formData.notes);
        data.append('teacherName', formData.teacherName);
        data.append('subject', formData.subject);
        data.append('year', formData.year);
        data.append('description', formData.description);

        try {
            const response = await axios.post('http://localhost:8182/api/notes/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully');
            setFormData(initialFormData);
            fileInputRef.current.value = null;
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                console.error('Error uploading file:', error.response.data);
                alert(`Error uploading file: ${error.response.data}`);
            } else {
                console.error('Error uploading file:', error.message);
                alert(`Error uploading file: ${error.message}`);
            }
        }
};

  return (
    <>
    <TeacherNavbar/>
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-semibold text-center mb-8 text-neutral-700">Upload Notes</h1>
      <form className="max-w-4xl mx-auto" onSubmit={handleFormSubmit}>
        <div className="mb-4 flex flex-wrap">
          <div className="w-full md:w-1/2 md:pl-2 mb-3">
            <label htmlFor="teacherName" className="block text-gray-700">Teacher Name</label>
            <input
              type="text"
              id="teacherName"
              name="teacherName"
              value={formData.teacherName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              required
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
