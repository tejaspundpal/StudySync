package com.studysync.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.jdbc.object.UpdatableSqlQuery;
import org.springframework.stereotype.Service;

import com.studysync.entities.Question;
import com.studysync.repos.QuestionRepository;
import com.studysync.services.QuestionService;

import lombok.RequiredArgsConstructor;

@Service
public class QuestionImpl implements QuestionService{

	@Autowired
	private QuestionRepository questionRepo;
	
	@Override
	public Question createQuestion(Question question) {

		Question q = this.questionRepo.save(question);
		return q;
	}

	@Override
	public List<Question> getAllQuestions() {
        List<Question> questions = questionRepo.findAll();
		return questions;
	}

	@Override
	public Optional<Question> getQuestionById(int id) {
		Optional<Question> question = questionRepo.findById(id);
		return question;
	}

	@Override
	public List<String> getAllSubjects() {
		List<String> subjects = questionRepo.findDistinctSubject(); 
		return subjects;
	}

	@Override
	public Question updateQuestion(int id, Question question) throws ChangeSetPersister.NotFoundException {
		Optional<Question> theQuestion = this.getQuestionById(id);
		if(theQuestion.isPresent()) {
			Question updateQuestion = theQuestion.get();
			updateQuestion.setQuestion(question.getQuestion());
			updateQuestion.setChoices(question.getChoices());
			updateQuestion.setCorrectAnswers(question.getCorrectAnswers());
			return questionRepo.save(updateQuestion);
		}else {
            throw new ChangeSetPersister.NotFoundException();
        }
	}

	@Override
	public void deleteQuestion(int id) {
		questionRepo.deleteById(id);
	}

}
