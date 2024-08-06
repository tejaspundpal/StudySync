package com.studysync.services.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.studysync.dto.LoginDTO;
import com.studysync.dto.TeacherDTO;
import com.studysync.entities.OTPVerificationTeacher;
import com.studysync.entities.Teacher;
import com.studysync.exceptions.TeacherAlreadyRegisteredException;
import com.studysync.repos.OTPVerificationTeacherRepository;
import com.studysync.repos.TeacherRepository;
import com.studysync.services.OTPService;
import com.studysync.services.TeacherService;
import com.studysync.services.payload.response.LoginMessage;

@Service
public class TeacherImpl implements TeacherService {

	@Autowired
	private TeacherRepository teacherRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private OTPVerificationTeacherRepository otpVerificationTeacherRepo;
	
	@Autowired
	private OTPService otpService;
	
	@Override
	public void addTeacher(TeacherDTO teacherDTO) {

		Optional<Teacher> existingTeacher = teacherRepo.findByTid(teacherDTO.getTid());
		
		if(existingTeacher.isPresent()){
			throw new TeacherAlreadyRegisteredException("Teacher is already registered with entered tid");
		}
		
		String otp = otpService.generateOTP();
		otpService.sendEmail(teacherDTO.getEmail(), otp);
		
		OTPVerificationTeacher otpVerificationTeacher = new OTPVerificationTeacher();
		
		otpVerificationTeacher.setEmail(teacherDTO.getEmail());
		otpVerificationTeacher.setOtp(otp);
		otpVerificationTeacher.setTid(teacherDTO.getTid());
		otpVerificationTeacher.setFirstname(teacherDTO.getFirstname());
		otpVerificationTeacher.setLastname(teacherDTO.getLastname());
		otpVerificationTeacher.setPhonenumber(teacherDTO.getPhonenumber());
		otpVerificationTeacher.setPassword(passwordEncoder.encode(teacherDTO.getPassword()));
		otpVerificationTeacher.setImgUrl(teacherDTO.getImgUrl());
		
		otpVerificationTeacherRepo.save(otpVerificationTeacher);
	}
	
	@Override
	public boolean verifyOtp(String email,String otp) {
		OTPVerificationTeacher otpVerificationTeacher = otpVerificationTeacherRepo.findByEmailAndOtp(email, otp);
		
		if(otpVerificationTeacher != null) {
			Teacher teacher = new Teacher(
					otpVerificationTeacher.getTid(),
					otpVerificationTeacher.getFirstname(),
					otpVerificationTeacher.getLastname(),
					otpVerificationTeacher.getPhonenumber(),
					otpVerificationTeacher.getEmail(),
					otpVerificationTeacher.getPassword(),
					otpVerificationTeacher.getImgUrl()
					);
			teacherRepo.save(teacher);
			otpVerificationTeacherRepo.delete(otpVerificationTeacher);
			return true;
		}else {
			return false;
		}
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
					return new LoginMessage("Login Success",true,teacher.getTeacherid());
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

	@Override
	public Optional<Teacher> getTeacherById(int id) {
		Optional<Teacher> teacher = teacherRepo.findById(id);
		return teacher;
	}

}
