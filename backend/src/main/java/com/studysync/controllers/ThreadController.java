package com.studysync.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studysync.entities.Thread;
import com.studysync.services.ThreadService;

import java.util.*;

/**
*
* @author Tejas Pundpal
*/

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", allowedHeaders = "*")
@RequestMapping("/api/thread")
public class ThreadController {

	@Autowired
	private ThreadService threadService;
	
	@PostMapping("/create-thread")
	public ResponseEntity<Thread> createThread(@RequestBody Thread thread){
		Thread addedThread = this.threadService.createThread(thread);
		return new ResponseEntity<>(addedThread,HttpStatus.CREATED);
	}
	
	@GetMapping("/all-threads")
	public ResponseEntity<List<Thread>> getAllThreads(){
		List<Thread> allThreads = this.threadService.getAllThreads();
		if(allThreads.size() <= 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(allThreads));
	}
	
	@GetMapping("/details/{id}")
	public ResponseEntity<Thread> getThreadById(@PathVariable Long id) throws ChangeSetPersister.NotFoundException{
		Optional<Thread> thread = this.threadService.getThreadById(id);
		if(thread.isPresent()) {
			return ResponseEntity.ok(thread.get());
		}else {
			throw new ChangeSetPersister.NotFoundException();
		}
	}
	
	@DeleteMapping("delete/{id}")
	public ResponseEntity<Void> deleteThreadById(@PathVariable Long id){
		boolean isDeleted = this.threadService.delteThreadById(id);
		if(isDeleted) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		
	}
}


