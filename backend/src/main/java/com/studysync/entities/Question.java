package com.studysync.entities;

import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="QUESTION")
public class Question {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String question;
	
	private String subject;
	
	private String questionType;

	@ElementCollection
	private List<String>choices;
	
	@ElementCollection
	private List<String>correctAnswers;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getQuestionType() {
		return questionType;
	}

	public void setQuestionType(String questionType) {
		this.questionType = questionType;
	}

	public List<String> getChoices() {
		return choices;
	}

	public void setChoices(List<String> choices) {
		this.choices = choices;
	}

	public List<String> getCorrectAnswers() {
		return correctAnswers;
	}

	public void setCorrectAnswers(List<String> correctAnswers) {
		this.correctAnswers = correctAnswers;
	}

	public Question(String question, String subject, String questionType, List<String> choices,
			List<String> correctAnswers) {
		super();
		this.question = question;
		this.subject = subject;
		this.questionType = questionType;
		this.choices = choices;
		this.correctAnswers = correctAnswers;
	}

	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Question [id=" + id + ", question=" + question + ", subject=" + subject + ", questionType="
				+ questionType + ", choices=" + choices + ", correctAnswers=" + correctAnswers + "]";
	}
	
	
}
