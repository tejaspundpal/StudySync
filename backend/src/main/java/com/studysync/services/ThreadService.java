package com.studysync.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.studysync.entities.Thread;

@Service
public interface ThreadService {

	Thread createThread(Thread thread);
	
	Optional<Thread> getThreadById(Long id);
	
	List<Thread> getAllThreads();
	
	boolean delteThreadById(Long id);
}
