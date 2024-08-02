import React from 'react';
import first from '../../../assets/images/webd/1.svg';
import second from '../../../assets/images/webd/2.svg';
import bg from '../../../assets/images/webd/bg.svg';
import bgbg from '../../../assets/images/webd/bgbg.svg';
import DAS from '../../../assets/images/webd/Down arrow small.svg';
import folder from '../../../assets/images/webd/folder.svg';
import group141 from '../../../assets/images/webd/Group 141.svg';
import group1042 from '../../../assets/images/webd/Group 1042.svg';
import group1412 from '../../../assets/images/webd/Group 1412.svg';
import group2088 from '../../../assets/images/webd/Group 2088.svg';
import group2456 from '../../../assets/images/webd/Group 2456.svg';
import group3479 from '../../../assets/images/webd/Group 3479.svg';
import group5920 from '../../../assets/images/webd/Group 5920.svg';
import group5921 from '../../../assets/images/webd/Group 5921.svg';
import group5941 from '../../../assets/images/webd/Group 5941.svg';
import group5945 from '../../../assets/images/webd/Group 5945.svg';
import homewave from '../../../assets/images/webd/home-wave.svg';
import livebg from '../../../assets/images/webd/live_bg.svg';
import logo from '../../../assets/images/webd/logo.png';
import menu from '../../../assets/images/webd/menu.svg';
import mainimg from '../../../assets/images/webd/main-img.jpg';
import mean from '../../../assets/images/webd/mean.png';
import mern from '../../../assets/images/webd/mern.png';
import notesbg from '../../../assets/images/webd/notes_bg.svg';
import nlogo from '../../../assets/images/webd/N-Logo.svg';
import scopeimg from '../../../assets/images/webd/scope-img.jpg';
import send from '../../../assets/images/webd/send-24px.svg';
import talk from '../../../assets/images/webd/talk.svg';
import uparrow from '../../../assets/images/webd/Up arrow small.svg';
import wavelala from '../../../assets/images/webd/wavelala.svg';
import Footer from '../../Footer';
import StudentNavbar from './StudentNavbar';
import { useParams } from 'react-router-dom';

const Webd = () => {
    const {id} = useParams();
  return (
    <>
    <StudentNavbar id = {id}/>
    <div className="container mx-auto px-4">
      
      <div className="bg-cover h-80 bg-no-repeat items-center mt-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <p className="text-4xl text-blue-600 font-satisfy font-medium ml-5">Web development</p>
            <p className="italic font-bold text-xl mt-4 text-justify p-5">
              Web development is the creation and maintenance of websites and web applications. It involves programming, designing, and content creation. Key technologies used in web development include HTML, CSS, JavaScript, and various programming languages. Web development has become essential in today's digital world.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <img src={group141} className="h-auto max-w-full" alt="Web Development Illustration" />
          </div>
        </div>
      </div>

      <div className="bg-cover h-80 bg-no-repeat flex items-center mt-28">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={scopeimg} className="h-80 max-w-full" alt="Scope of Web Development" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-4xl text-blue-600 font-medium ml-5">Scope of Web development</p>
            <p className="mt-4 p-5 text-justify">
              The scope of web development in the future is promising, with continued growth in demand for web developers across various industries. New technologies such as AI, blockchain, and VR present new opportunities for developers to create innovative web experiences. Web developers must focus on creating responsive and optimized designs that function seamlessly across a variety of devices and platforms. Overall, the future of web development looks bright with ample opportunities for skilled professionals to thrive.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cover h-80 bg-no-repeat flex items-center mt-28">
        <div className="flex flex-wrap flex-row-reverse">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={mean} className="h-80 max-w-full" alt="MEAN Stack" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-4xl text-blue-600 font-medium">MEAN stack</p>
            <p className="font-normal mt-4">
              MEAN is an abbreviation that stands for MongoDB, ExpressJS, AngularJS, Node.js. This framework provides quick and easy development of web and mobile applications. The main components of MEAN are as follows:
              <br /><br />
              <strong>MongoDB:</strong> It is used to store the data of back-end applications as JSON files.
              <br /><strong>ExpressJS:</strong> It is a back-end application that runs on top of Node.js.
              <br /><strong>AngularJS:</strong> It is the front-end framework that runs the code in the browser.
              <br /><strong>NodeJS:</strong> It provides runtime system for JavaScript on the back-end web application.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cover h-80 bg-no-repeat flex items-center mt-28">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={mern} className="h-80 max-w-full" alt="MERN Stack" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-4xl text-blue-600 font-medium">MERN stack</p>
            <p className="text-left font-normal mt-4">
              MERN is an abbreviation which stands for MongoDB, ExpressJS, ReactJS, Node.js. This framework also provides quick and easy development of web and mobile applications using JavaScript as its main component. Main components of MERN are as follows:
              <br /><br />
              <strong>MongoDB:</strong> It is a document-oriented No-SQL data store used to store back-end applications.
              <br /><strong>ExpressJS:</strong> It is a layered framework built on top of NodeJS that takes care of the website’s back-end functionality and structure.
              <br /><strong>ReactJS:</strong> It is a library that facilitates creating the user interface components of single-page web applications.
              <br /><strong>NodeJS:</strong> It is a runtime environment capable of running JavaScript on a machine.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cover h-[70vh] bg-no-repeat flex items-center mt-20">
        <div className="flex flex-wrap m-8">
          <div className="w-full md:w-1/2">
            <p className="text-4xl text-blue-600 font-bold">Resources Links</p>
            <p className="font-bold mt-4">
              <a href="https://www.geeksforgeeks.org/web-development/" className="text-black">Complete Guide of Web Development by GFG</a>
              <br />
              <a href="https://www.codingninjas.com/codestudio/library/complete-introduction-to-web-technology" className="text-black">Complete Introduction to Web Technology by Coding Ninjas</a>
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <img src={group1412} className="h-auto max-w-full" alt="Resources Illustration" />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Webd;
