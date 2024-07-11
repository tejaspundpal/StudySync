package com.studysync.services.impl;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.studysync.entities.Notes;
import com.studysync.repos.NotesRepository;

@Service
public class NotesService {

	@Autowired
	private NotesRepository notesRepo;
	
	public Notes saveFile(MultipartFile notes,String teacherName,String title,String subject,String year,String description) throws IOException {
		Notes notes1 = new Notes();
		notes1.setFileData(notes.getBytes());
		notes1.setTeacherName(teacherName);
		notes1.setTitle(title);
		notes1.setSubject(subject);
		notes1.setYear(year);
		notes1.setDescription(description);
		notes1.setUploadDate(LocalDate.now());
		
		return notesRepo.save(notes1);
	}
	
	public List<Notes>getAllFiles(){
		return notesRepo.findAll();
	}
}
