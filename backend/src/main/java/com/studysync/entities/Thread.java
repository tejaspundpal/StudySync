package com.studysync.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.*;

@Entity
@Table(name = "THREAD")
public class Thread {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String title;
	
	@Column(columnDefinition = "TEXT")
	private String content;
	
	private String createdBy;
	
	@OneToMany(mappedBy = "thread", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Comment> comments = new ArrayList<>();
	
	public Thread() {
    }

    public Thread(String title, String content, String createdBy) {
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public void addComment(Comment comment) {
        comments.add(comment);
        comment.setThread(this);
    }

    public void removeComment(Comment comment) {
        comments.remove(comment);
        comment.setThread(null);
    }

	@Override
	public String toString() {
		return "Thread [id=" + id + ", title=" + title + ", content=" + content + ", createdBy=" + createdBy
				+ ", comments=" + comments + "]";
	}
    
    
}
