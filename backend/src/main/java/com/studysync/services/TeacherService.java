package com.studysync.services;

import org.springframework.stereotype.Service;

import com.studysync.dto.LoginDTO;
import com.studysync.dto.TeacherDTO;
import com.studysync.entities.Teacher;
import com.studysync.services.payload.response.LoginMessage;

@Service
public interface TeacherService {

	Teacher addTeacher(TeacherDTO teacherDTO);
	LoginMessage loginTeacher(LoginDTO loginDTO);
}
