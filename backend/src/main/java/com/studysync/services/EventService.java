package com.studysync.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.studysync.dto.EventDTO;
import com.studysync.entities.Event;

@Service
public interface EventService {

	Event addEvent(EventDTO eventDTO);
	
	List<Event> allEvents();
	
	Optional<Event> getEventById(int id);
	
	boolean deleteEventById(int id);
}
