package com.studysync.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studysync.entities.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
