import React from 'react';
import apnaclg from '../../../assets/images/competitive/apnacollege.jpg';
import cphome from '../../../assets/images/competitive/competitvehome.jpg';
import kunal from '../../../assets/images/competitive/kunal.jpg';
import lvl0 from '../../../assets/images/competitive/level0.svg';
import lvl1 from '../../../assets/images/competitive/level1.jpeg';
import lvl2 from '../../../assets/images/competitive/level2.png';
import lvl3 from '../../../assets/images/competitive/level3.jpg';
import lvl4 from '../../../assets/images/competitive/level4.png';
import lovebabbar from '../../../assets/images/competitive/lovebabbar.jpg';
import striver from '../../../assets/images/competitive/striver.jpg';
import Footer from '../../Footer';
import StudentNavbar from './StudentNavbar';

const Competitive = () => {
  return (
    <>
    <StudentNavbar/>
    <div className="overflow-x-hidden">
      <h1 className="text-center text-3xl font-bold mt-12">Competitive Programming - A Complete Guide</h1>
      
      <section className="bg-[#fffcf4] p-8">
        <div>
          <h1 className="text-xl pt-4 font-semibold">What is Competitive Programming?</h1>
          <p className="px-10 py-4 text-justify leading-7">
            Competitive Programming is a mental sport which enables you to code a given problem under provided
            constraints. The purpose of this article is to guide every individual possessing a desire to excel in
            this sport. This article provides a detailed syllabus for Competitive Programming designed by industry
            experts to boost the preparation of the readers. Competitive programming can help develop skills such as
            problem-solving, critical thinking, and efficient coding. These can be valuable in a variety of careers
            such as software development, data science, and research. Many companies also use these programming
            problems as a way to assess job applicants.
          </p>
          <h1 className="text-xl font-semibold">Why need of Competitive Programming?</h1>
          <p className="px-10 pb-4 text-justify leading-7">
            Many startups and firms have also started having <b>interview rounds</b> based after shortlisting
            candidates from these competitive coding contests. Organizations search for candidates who have excellent
            problem-solving capabilities as languages, frameworks, technologies can be learnt at any point of time
            but the concept or logic behind complex solutions depends upon the thinking capabilities for solving a
            problem.
          </p>
        </div>
      </section>
      
      <section className="bg-[#f6f8fb] p-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-xl font-semibold mb-4">Level 0 - A start to the journey</h1>
            <p className="px-16 mb-4">
              Start learning C++, Java, or Python today. These three are highly used programming languages for CP.
            </p>
            <p className="px-16"><b>You need to know:</b></p>
            <ul className="px-16 list-disc">
              <li>Intermediate hold on any one programming language</li>
              <li>English! Convert English to code!</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img src={lvl0} alt="Level 0" className="w-full h-auto" />
          </div>
        </div>
      </section>
      
      <section className="bg-white p-8">
        <div className="flex flex-wrap-reverse justify-between items-center">
        <div className="w-full md:w-1/2">
            <img src={lvl1} alt="Level 1" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-xl font-semibold mb-4">Level 1 - Welcome to the Jungle</h1>
            <p className="px-16 mb-4">
              Now you’re ready to take on some real challenge. Hold tight, we are diving deeper.
            </p>
            <p className="px-16"><b>You need to know:</b></p>
            <ul className="px-16 list-disc">
              <li>Basics of Array, String, Greedy, and Bit Manipulation</li>
              <li>Reverse an array</li>
              <li>Counting frequencies of array elements</li>
              <li>Kadane Algorithm</li>
              <li>Sliding Window etc.</li>
              <li><a href="https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/" className="underline">Top 50 Array Coding Problems for Interviews</a></li>
              <li><a href="https://www.geeksforgeeks.org/top-50-string-coding-problems-for-interviews/" className="underline">Top 50 String Coding Problems for Interviews</a></li>
            </ul>
          </div>
          
        </div>
      </section>
      
      <section className="bg-[#c9c3f5] p-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-xl font-semibold mb-4">Level 2 - Searching, Sorting and Basic Data Structures</h1>
            <p className="px-16 mb-4">
              At this stage, you need to learn a set of new techniques and algorithms to cope up with the time limits.
              Searching, Sorting, and Data Structures are the most important part of CP.
            </p>
            <p className="px-16"><b>You need to know:</b></p>
            <ul className="px-16 list-disc">
              <li><a href="https://practice.geeksforgeeks.org/explore?page=1&category[]=Searching&sortBy=submissions" className="underline">Searching Algorithms</a></li>
              <li><a href="https://www.interviewbit.com/courses/programming/arrays/sorting-algorithms" className="underline">Sorting Algorithms</a></li>
              <li>All types of Linked Lists</li>
              <li>Stack, Queue, Deque, and Priority Queue</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img src={lvl2} alt="Level 2" className="w-full h-auto" />
          </div>
        </div>
      </section>
      
      <section className="bg-[#e2e5e7] p-8">
        <div className="flex flex-wrap-reverse justify-between items-center">
        <div className="w-full md:w-1/2">
            <img src={lvl3} alt="Level 3" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-xl font-semibold mb-4">Level 3 - Tree-Graph and Taking Fast Track</h1>
            <p className="px-16 mb-4">
              Stick to your own logic as long as possible, you’ll eventually come up with something
              similar to the algorithm required to solve the question. With that, you have to tackle TLE.
            </p>
            <p className="px-16"><b>You need to know:</b></p>
            <ul className="px-16 list-disc">
              <li>Learning Tree-Graph data structures</li>
              <li>Tackle with TLE i.e You need to solve any problem in an optimized way</li>
              <li>BFS, DFS for tree and graph</li>
              <li><a href="https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/" className="underline">Dijkstra’s Shortest Path Algorithm</a></li>
              <li><a href="https://www.geeksforgeeks.org/top-50-tree-coding-problems-for-interviews/" className="underline">Top 50 Tree Coding Problems for Interviews</a></li>
            </ul>
          </div>
          
        </div>
      </section>
      
      <section className="bg-[#f7d6d6] p-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-xl font-semibold mb-4">Level 4 - Recursion and Dynamic Programming</h1>
            <p className="px-16 mb-4">
              At this stage, you need to learn a set of new techniques and algorithms to cope up with the
              time limits. Searching, Sorting, and Data Structures are the most important part of CP.
            </p>
            <p className="px-16"><b>You need to know:</b></p>
            <ul className="px-16 list-disc">
              <li><a href="https://www.geeksforgeeks.org/recursion" className="underline">Recursion</a></li>
              <li><a href="https://www.geeksforgeeks.org/backtracking-introduction" className="underline">Backtracking</a></li>
              <li><a href="https://www.geeksforgeeks.org/top-50-dynamic-programming-coding-problems-for-interviews/" className="underline">Dynamic Programming Questions</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img src={lvl4} alt="Level 4" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="section-7 py-8 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <div className="section7-part bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Coding Platforms</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.hackerrank.com/dashboard" className="text-purple-500 hover:underline">HackerRank</a></li>
                  <li><a href="https://www.codechef.com" className="text-purple-500 hover:underline">CodeChef</a></li>
                  <li><a href="https://codeforces.com/" className="text-purple-500 hover:underline">Codeforces</a></li>
                  <li><a href="https://leetcode.com/" className="text-purple-500 hover:underline">LeetCode</a></li>
                  <li><a href="https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions&itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=practice_header" className="text-purple-500 hover:underline">GeeksForGeeks</a></li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="section7-part bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">YouTube Channels</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.youtube.com/@takeUforward" className="text-purple-500 hover:underline">take U forward</a></li>
                  <li><a href="https://www.youtube.com/@CodeHelp" className="text-purple-500 hover:underline">CodeHelp - by Babbar</a></li>
                  <li><a href="https://www.youtube.com/@CodeIn10" className="text-purple-500 hover:underline">Code In 10 - Nishant Chahar</a></li>
                  <li><a href="https://www.youtube.com/@KunalKushwaha" className="text-purple-500 hover:underline">Kunal Kushwaha</a></li>
                  <li><a href="https://www.youtube.com/@ApnaCollegeOfficial" className="text-purple-500 hover:underline">Apna College</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-8 container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Popular YouTube Playlists</h1>
        <div className="flex flex-wrap justify-center">
        <div className="card bg-white p-4 rounded-lg shadow-md m-4" style={{ width: '18rem' }}>
            <img src={striver} className="card-img-top w-full h-48 object-cover rounded-t-lg" alt="Complete C++ Placement DSA Course" />
            <div className="card-body">
              <h5 className="card-title text-xl font-semibold mb-5">Strivers A2Z-DSA Course | DSA Playlist | Placements</h5>
              <a href="https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" className="btn bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-700">Click here</a>
            </div>
          </div>
          <div className="card bg-white p-4 rounded-lg shadow-md m-4" style={{ width: '18rem' }}>
            <img src={lovebabbar} className="card-img-top w-full h-48 object-cover rounded-t-lg" alt="Complete C++ Placement DSA Course" />
            <div className="card-body">
              <h5 className="card-title text-xl font-semibold mb-5">Complete C++ Placement DSA Course</h5>
              <a href="https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA" className="btn bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-700">Click here</a>
            </div>
          </div>
          <div className="card bg-white p-4 rounded-lg shadow-md m-4" style={{ width: '18rem' }}>
            <img src={apnaclg} className="card-img-top w-full h-48 object-cover rounded-t-lg" alt="C++ full Course |C++ Tutorial | DSA" />
            <div className="card-body">
              <h5 className="card-title text-xl font-semibold mb-4">C++ full Course |C++ Tutorial | DSA</h5>
              <a href="https://youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" className="btn bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-700">Click here</a>
            </div>
          </div>
          <div className="card bg-white p-4 rounded-lg shadow-md m-4" style={{ width: '18rem' }}>
            <img src={kunal} className="card-img-top w-full h-48 object-cover rounded-t-lg" alt="Java + DSA + Interview Preparation Course" />
            <div className="card-body">
              <h5 className="card-title text-xl font-semibold mb-4">Java + DSA + Interview Preparation Course</h5>
              <a href="https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" className="btn bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-700">Click here</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-9 container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">DSA Sheets</h1>
        <div className="flex flex-wrap justify-center">
          <div className="card bg-white p-4 rounded-lg shadow-md m-4 w-full md:w-1/2 lg:w-1/3">
            <div className="card-body">
              <h5 className="card-title text-xl font-semibold mb-4">Striver SDE Sheet</h5>
              <p className="card-text mb-4 text-justify">This sheet is prepared by Raj Vikramaditya A.K.A Striver, Candidate Master, 6*, who has bagged offers from Google Warsaw, Facebook London, Media.net(Directi).</p>
              <a href="https://www.codingninjas.com/codestudio/problem-lists/striver-sde-sheet-problems" className="btn bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-700">Click here</a>
            </div>
          </div>
          <div className="card bg-white p-4 rounded-lg shadow-md m-4 w-full md:w-1/2 lg:w-1/3">
            <div className="card-body">
              <h5 className="card-title text-xl font-semibold mb-4">Love Babbar DSA Sheet</h5>
              <p className="card-text mb-4 text-justify">It is a DSA sheet which covers almost all the concepts of Data Structures and Algorithms. It consists of 450 problems which will help you understand all the concepts of DSA.</p>
              <a href="https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/" className="btn bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-700">Click here</a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
</>
  );
};

export default Competitive;
