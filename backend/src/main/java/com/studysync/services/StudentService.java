package com.studysync.services;
import java.util.*;

import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import com.studysync.dto.LoginDTO;
import com.studysync.dto.StudentDTO;
import com.studysync.entities.Student;
import com.studysync.services.payload.response.LoginMessage;

@Service
public interface StudentService {

	void addStudent(StudentDTO studentDTO);
	
	boolean verifyOtp(String email, String otp);

	LoginMessage loginStudent(LoginDTO loginDTO);

	Student getLoggedInStudent(String email);
	
	List<Student> getAllStudents();
	
	Optional<Student> getStudentById(int id);
	
	Student updateStudent(int id,Student student) throws ChangeSetPersister.NotFoundException;
}
