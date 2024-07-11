import React from 'react';
import { NavLink } from 'react-router-dom';
import cpImg from '../../../assets/images/cp.png';
import dsImg from '../../../assets/images/ds.jpg';
import wdImg from '../../../assets/images/wd.png';

const StudentDomains = () => {
  return (
    <section className="bg-gray-100 p-6" id="section-three">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Explore Domains</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full" src={cpImg} alt="Competitive Programming" />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-neutral-700">Competitive Programming</h2>
            <p className="text-gray-700 mb-4 text-justify">It helps identify and recruit top talent in software engineering, and enables
              programmers to develop problem-solving and critical thinking abilities, leading to better software
              development and innovation.</p>
            <NavLink to="/student/domain/competitive">
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Learn More</button>
            </NavLink>
          </div>
        </div>
        
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full" src={wdImg} alt="Web Development" />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-neutral-700">Web Development</h2>
            <p className="text-gray-700 mb-4 text-justify">It is in high demand and offers a wide range of job opportunities. Web development
              skills allow individuals to create and maintain websites and applications, which are essential tools
              for modern businesses and organizations.</p>
            <NavLink to="/webd">
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Learn More</button>
            </NavLink>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
          <img className="w-full" src={dsImg} alt="Data Science" />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-neutral-700">Data Science</h2>
            <p className="text-gray-700 mb-4 text-justify">It allows individuals and organizations to make data-driven decisions. With the
              exponential growth of data, the demand for skilled data scientists, it is a promising field with
              significant potential for career growth and innovation.</p>
            <NavLink to="/student/domain/datascience">
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Learn More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDomains;
