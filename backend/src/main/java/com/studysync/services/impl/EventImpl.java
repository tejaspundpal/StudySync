package com.studysync.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.studysync.dto.EventDTO;
import com.studysync.entities.Event;
import com.studysync.repos.EventRepository;
import com.studysync.services.EventService;

/**
*
* @author Tejas Pundpal
*/

@Service
public class EventImpl implements EventService {

	@Autowired
	private EventRepository eventRepo;
	
	@Override
	public Event addEvent(EventDTO eventDTO) {
		Event event = new Event();
		event.setTitle(eventDTO.getTitle());
		event.setDescription(eventDTO.getDescription());
		event.setDate(eventDTO.getDate());
		event.setTime(eventDTO.getTime());
		event.setLocation(eventDTO.getLocation());
		event.setYear(eventDTO.getYear());
		event.setTeacherName(eventDTO.getTeacherName());
		
		return eventRepo.save(event);
	}

	@Override
	public List<Event> allEvents() {
		List<Event> events = eventRepo.findAll();
		return events;
	}

	@Override
	public Optional<Event> getEventById(int id) {
		Optional<Event> event = eventRepo.findById(id);
		return event;
	}

	@Override
	public boolean deleteEventById(int id) {
		Optional<Event> event = eventRepo.findById(id);
		if(event.isPresent()) {
			eventRepo.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public Event updateEvent(int id, Event event) throws NotFoundException {
		Optional<Event> theEvent = this.getEventById(id);
		if(theEvent.isPresent()) {
			Event updateEvent = theEvent.get();
			updateEvent.setTime(event.getTime());
			updateEvent.setDate(event.getDate());
			updateEvent.setLocation(event.getLocation());
			return eventRepo.save(updateEvent);
		}else {
			throw new ChangeSetPersister.NotFoundException();
		}
	}

}
