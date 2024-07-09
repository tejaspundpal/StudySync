package com.studysync.services.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.studysync.dto.LoginDTO;
import com.studysync.dto.TeacherDTO;
import com.studysync.entities.Teacher;
import com.studysync.repos.TeacherRepository;
import com.studysync.services.TeacherService;
import com.studysync.services.payload.response.LoginMessage;

@Service
public class TeacherImpl implements TeacherService {

	@Autowired
	private TeacherRepository teacherRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public Teacher addTeacher(TeacherDTO teacherDTO) {

		Teacher teacher = new Teacher(
				teacherDTO.getTid(),
				teacherDTO.getFirstname(),
				teacherDTO.getLastname(),
				teacherDTO.getPhonenumber(),
				teacherDTO.getEmail(),
				this.passwordEncoder.encode(teacherDTO.getPassword()),
			    teacherDTO.getImgUrl(),
			    teacherDTO.getNotes()
				);
		
		this.teacherRepo.save(teacher);
		
		return teacher;
	}

	@Override
	public LoginMessage loginTeacher(LoginDTO loginDTO) {

		Teacher teacher = this.teacherRepo.findByEmail(loginDTO.getEmail());
		if(teacher != null) {
			String password = loginDTO.getPassword();
			String encodedPassword = teacher.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if(isPwdRight) {
				Optional<Teacher>teacher1 = this.teacherRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
				if(teacher1.isPresent()) {
					return new LoginMessage("Login Success",true);
				}
				else {
					return new LoginMessage("Login failed",false);
				}
			}
			else {
				return new LoginMessage("Password Not Match",false);
			}
		}
		else {
			return new LoginMessage("Email not exist",false);
		}
	}

}
