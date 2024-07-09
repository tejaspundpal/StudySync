package com.studysync.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studysync.dto.LoginDTO;
import com.studysync.dto.TeacherDTO;
import com.studysync.entities.Teacher;
import com.studysync.services.TeacherService;
import com.studysync.services.payload.response.LoginMessage;

import jakarta.servlet.http.HttpServletRequest;


@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", allowedHeaders = "*")
@RequestMapping("/api/teacher")
public class TeacherController {

	@Autowired
	private TeacherService teacherService;
	
	@PostMapping("/register")
	public ResponseEntity<Teacher>saveTeacher(@RequestBody TeacherDTO teacherDTO){
		Teacher teacher = this.teacherService.addTeacher(teacherDTO);
		return new ResponseEntity<>(teacher,HttpStatus.CREATED);
	}
	
	 @PostMapping("/login")
	    public ResponseEntity<?> loginStudent(@RequestBody LoginDTO loginDTO, HttpServletRequest request) {
	        LoginMessage loginMessage = this.teacherService.loginTeacher(loginDTO);
	        if (loginMessage.isStatus()) {
	            request.getSession().setAttribute("teacher", loginDTO.getEmail());
	        }
	        return ResponseEntity.ok(loginMessage);
	    }
	
}
