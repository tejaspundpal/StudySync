package com.studysync.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.studysync.entities.Notes;
import com.studysync.services.impl.NotesService;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:5173") 
public class NotesController {

	@Autowired
	private NotesService notesService;
	
	@PostMapping("/upload")
	public ResponseEntity<Notes>uploadFile(@RequestParam("notes") MultipartFile notes,
										   @RequestParam("teacherName") String teacherName,
										   @RequestParam("subject") String subject,
										   @RequestParam("year") String year,
										   @RequestParam("description") String description) throws IOException{
		Notes notes1 = this.notesService.saveFile(notes, teacherName, subject, year, description);
		return new ResponseEntity<>(notes1,HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
    public ResponseEntity<List<Notes>> getAllFiles(){
		List<Notes> list = this.notesService.getAllFiles();
		if(list.size() <= 0) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
    	return ResponseEntity.of(Optional.of(list));

	}
	
	@GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable int id) {
        Optional<Notes> optionalNotes = notesService.getAllFiles().stream().filter(n -> n.getNotesid() == id).findFirst();
        if (optionalNotes.isPresent()) {
            Notes notes = optionalNotes.get();
            return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + notes.getTitle() + "\"")
                .body(notes.getFileData());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
	
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void>deleteNote(@PathVariable int id){
    	boolean isRemoved = this.notesService.deleteNoteById(id);
    	if(isRemoved) {
    		return ResponseEntity.noContent().build();
    	}
    	return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
