package com.studysync.services.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.studysync.entities.Comment;
import com.studysync.entities.Thread;
import com.studysync.repos.CommentRepository;
import com.studysync.repos.ThreadRepository;
import com.studysync.services.CommentService;

@Service
public class CommentImpl implements CommentService {
	
	@Autowired
	private CommentRepository commentRepo;
	
	@Autowired
	private ThreadRepository threadRepo;

	@Override
	public Comment addComment(Long threadId, Comment comment) {
		Optional<Thread> thread = threadRepo.findById(threadId);
		if(thread.isPresent()) {
			comment.setThread(thread.get());
			return commentRepo.save(comment);
		}else {
			throw new RuntimeException("Thread Not Found");
		}
	}

	@Override
	public boolean deleteComment(Long id) {
		Optional<Comment> comment = commentRepo.findById(id);
		if(comment.isPresent()) {
			commentRepo.deleteById(id);
			return true;
		}
		return false;
	}

		
}
