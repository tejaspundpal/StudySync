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
import com.studysync.entities.Comment;
import com.studysync.services.CommentService;
import java.util.*;

/**
*
* @author Tejas Pundpal
*/

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", allowedHeaders = "*")
@RequestMapping("/api/comments")
public class CommentController {

	@Autowired
	private CommentService commentService;
	
	@PostMapping("/thread/{threadId}")
	public ResponseEntity<Comment> addComment(@PathVariable Long threadId,@RequestBody Comment comment){
		Comment addedComment = this.commentService.addComment(threadId, comment);
		return new ResponseEntity<>(addedComment,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteComment(@PathVariable Long id){
		boolean isDeleted = this.commentService.deleteComment(id);
		if(isDeleted) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}
