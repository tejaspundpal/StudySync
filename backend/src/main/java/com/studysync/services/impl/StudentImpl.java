package com.studysync.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.studysync.dto.LoginDTO;
import com.studysync.dto.StudentDTO;
import com.studysync.entities.Student;
import com.studysync.repos.StudentRepository;
import com.studysync.services.StudentService;
import com.studysync.services.payload.response.LoginMessage;

@Service
public class StudentImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public Student addStudent(StudentDTO studentDTO) {

		Student student = new Student(
				studentDTO.getPrn(),
				studentDTO.getFirstname(),
				studentDTO.getLastname(),
				studentDTO.getPhonenumber(),
				studentDTO.getEmail(),
				studentDTO.getYear(),
				studentDTO.getDivision(),
				this.passwordEncoder.encode(studentDTO.getPassword()),
				studentDTO.getImgUrl(),
				studentDTO.getLinkedinId(),
				studentDTO.getGithubId()
				);
		this.studentRepo.save(student);
				
		return student;
	}

	@Override
	public LoginMessage loginStudent(LoginDTO loginDTO) {
		String msg = "";
        Student student1 = studentRepo.findByEmail(loginDTO.getEmail());
        if (student1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = student1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Student> student = studentRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (student.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("password Not Match", false);
            }
        }else {
            return new LoginMessage("Email not exist", false);
        }
	}
	
	@Override
    public Student getLoggedInStudent(String email) {
        return this.studentRepo.findByEmail(email);
    }

	@Override
	public List<Student> getAllStudents() {

		List<Student>list = (List<Student>) this.studentRepo.findAll();
		return list;
	}

}
