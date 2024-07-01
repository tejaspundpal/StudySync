import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faReact, faPhp, faJs, faHackerrank, faGithub, faGoogle, faTwitter, faLinkedin, faGolang, faDocker, faCss3, faAngular, faStackOverflow, faJenkins, faJira, faMicrosoft, faNodeJs, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faC, faCode, faDatabase, faFlask } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const icons = [
  { icon: faJava, name: 'Java', url: 'https://www.java.com', color: '#007396' },
  { icon: faC, name: 'C', url: 'https://en.wikipedia.org/wiki/C_(programming_language)', color: '#A8B9CC' },
  { icon: faPython, name: 'Python', url: 'https://www.python.org', color: '#3776AB' },
  { icon: faReact, name: 'React', url: 'https://reactjs.org', color: '#61DAFB' },
  { icon: faAngular, name: 'Angular', url: 'https://angular.io', color: '#DD0031' },
  { icon: faPhp, name: 'PHP', url: 'https://www.php.net', color: '#777BB4' },
  { icon: faJs, name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', color: '#F7DF1E' },
  { icon: faStackOverflow, name: 'StackOverflow', url: 'https://stackoverflow.com', color: '#FE7A16' },
  { icon: faHackerrank, name: 'HackerRank', url: 'https://www.hackerrank.com', color: '#2EC866' },
  { icon: faJenkins, name: 'Jenkins', url: 'https://www.jenkins.io', color: '#D24939' },
  { icon: faJira, name: 'Jira', url: 'https://www.atlassian.com/software/jira', color: '#0052CC' },
  { icon: faGithub, name: 'GitHub', url: 'https://github.com', color: '#181717' },
  { icon: faGoogle, name: 'Google', url: 'https://www.google.com', color: '#4285F4' },
  { icon: faLaravel, name: 'Laravel', url: 'https://laravel.com', color: 'F54E31' },
  { icon: faLinkedin, name: 'LinkedIn', url: 'https://www.linkedin.com', color: '#0077B5' },
  { icon: faCode, name: 'Coding', url: 'https://en.wikipedia.org/wiki/Computer_programming', color: '#000000' },
  { icon: faDatabase, name: 'Database', url: 'https://en.wikipedia.org/wiki/Database', color: '#4DB33D' },
  { icon: faGolang, name: 'Golang', url: 'https://golang.org', color: '#00ADD8' },
  { icon: faDocker, name: 'Docker', url: 'https://www.docker.com', color: '#2496ED' },
  { icon: faCss3, name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', color: '#1572B6' },
  { icon: faNodeJs, name: 'Node.js', url: 'https://nodejs.org', color: '#339933' },
  { icon: faMicrosoft, name: 'Visual Studio', url: 'https://visualstudio.microsoft.com', color: '#5C2D91' }
];

const StudentExplore = () => {
  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-8 mt-8 text-gray-700">Explore Coding Tools & Technologies</h1>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg hover:bg-gray-100 transition"
            >
              <FontAwesomeIcon icon={item.icon} size="3x" style={{ color: item.color }} />
              <span className="mt-2 text-sm font-semibold text-gray-700">{item.name}</span>
            </a>
          ))}
        </div>
        <NavLink to="/student/explore-friends" className="bg-purple-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-purple-700 transition mb-3">
          Explore Friends At StudySync
        </NavLink>
    </div>
  )
}

export default StudentExplore