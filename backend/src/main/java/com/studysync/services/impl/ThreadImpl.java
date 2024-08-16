package com.studysync.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.studysync.entities.Thread;
import com.studysync.repos.ThreadRepository;
import com.studysync.services.ThreadService;

@Service
public class ThreadImpl implements ThreadService {

	@Autowired
	private ThreadRepository threadRepo;
	
	@Override
	public Thread createThread(Thread thread) {
		Thread addedThread = threadRepo.save(thread);
		return addedThread;
	}

	@Override
	public Optional<Thread> getThreadById(Long id) {
		Optional<Thread> thread = threadRepo.findById(id);
		return thread;
	}

	@Override
	public List<Thread> getAllThreads() {
		List<Thread> allThreads = threadRepo.findAll();
		return allThreads;
	}

	@Override
	public boolean delteThreadById(Long id) {
		Optional<Thread> thread = this.getThreadById(id);
		if(thread.isPresent()) {
			threadRepo.deleteById(id);
			return true;
		}
		return false;
	}

}
