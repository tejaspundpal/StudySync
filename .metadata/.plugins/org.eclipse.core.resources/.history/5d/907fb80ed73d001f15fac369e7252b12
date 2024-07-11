package com.studysync.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studysync.dto.LoginDTO;
import com.studysync.dto.StudentDTO;
import com.studysync.entities.Student;
import com.studysync.services.StudentService;
import com.studysync.services.payload.response.LoginMessage;

import jakarta.servlet.http.HttpServletRequest;

/**
*
* @author Tejas Pundpal
*/

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", allowedHeaders = "*")
@RequestMapping("/api/student")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/register")
	public ResponseEntity<Student> saveStudent(@RequestBody StudentDTO studentDTO) {
	    Student student = this.studentService.addStudent(studentDTO);
	    return new ResponseEntity<>(student, HttpStatus.CREATED);
	}
	
	 @PostMapping("/login")
	    public ResponseEntity<?> loginStudent(@RequestBody LoginDTO loginDTO, HttpServletRequest request) {
	        LoginMessage loginMessage = this.studentService.loginStudent(loginDTO);
	        if (loginMessage.isStatus()) {
	            request.getSession().setAttribute("student", loginDTO.getEmail());
	        }
	        return ResponseEntity.ok(loginMessage);
	    }

	    @GetMapping("/profile")
	    public ResponseEntity<Student> getProfile(HttpServletRequest request) {
	        String email = (String) request.getSession().getAttribute("student");
	        if (email == null) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
	        }
	        Student student = this.studentService.getLoggedInStudent(email);
	        return new ResponseEntity<>(student, HttpStatus.OK);
	    }
	    
	    @GetMapping("/allstudents")
	    public ResponseEntity<List<Student>> getStudents(){
	    	List<Student>list = this.studentService.getAllStudents();
	    	if(list.size()<=0) {
	    		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	    	}
	    	return ResponseEntity.of(Optional.of(list));
	    }
}


