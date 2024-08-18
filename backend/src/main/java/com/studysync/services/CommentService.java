package com.studysync.services;

import org.springframework.stereotype.Service;

import com.studysync.entities.Comment;

@Service
public interface CommentService {

	Comment addComment(Long threadId,Comment comment);
	
	boolean deleteComment(Long id);
}
