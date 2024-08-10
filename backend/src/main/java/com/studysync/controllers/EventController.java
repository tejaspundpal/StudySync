package com.studysync.controllers;

import java.util.List;
import java.util.Optional;

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

import com.studysync.dto.EventDTO;
import com.studysync.entities.Event;
import com.studysync.services.EventService;

/**
*
* @author Tejas Pundpal
*/

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", allowedHeaders = "*")
@RequestMapping("/api/event")
public class EventController {

	@Autowired
	private EventService eventService;
	
	@PostMapping("/create-event")
	public ResponseEntity<Event> addEvent(@RequestBody EventDTO eventDTO){
		Event event = this.eventService.addEvent(eventDTO);
		return new ResponseEntity<>(event,HttpStatus.CREATED);
	}
	
	@GetMapping("/all-events")
	public ResponseEntity<List<Event>> getAllEvents(){
		List<Event> events = this.eventService.allEvents();
		if(events.size() <= 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(events));
	}
	
	@GetMapping("/details/{id}")
	public ResponseEntity<Event> getEventById(@PathVariable int id) throws ChangeSetPersister.NotFoundException{
		Optional<Event> event = this.eventService.getEventById(id);
		if(event.isPresent()) {
			return ResponseEntity.ok(event.get());
		}
		else {
			throw new ChangeSetPersister.NotFoundException();
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteEvent(@PathVariable int id){
		boolean isDeleted = this.eventService.deleteEventById(id);
		if(isDeleted) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}
