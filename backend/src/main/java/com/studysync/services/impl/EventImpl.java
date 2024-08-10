package com.studysync.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.studysync.dto.EventDTO;
import com.studysync.entities.Event;
import com.studysync.repos.EventRepository;
import com.studysync.services.EventService;

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

}
