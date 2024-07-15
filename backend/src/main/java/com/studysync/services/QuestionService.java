package com.studysync.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.studysync.entities.Question;
import org.springframework.data.crossstore.ChangeSetPersister;
import lombok.RequiredArgsConstructor;

@Service
public interface QuestionService {

	Question createQuestion (Question question);
	
	List<Question> getAllQuestions();
	
	Optional<Question> getQuestionById(int id);
	
	List<String> getAllSubjects();
	
    Question updateQuestion(int id, Question question) throws ChangeSetPersister.NotFoundException;
    
    void deleteQuestion(int id);
    
    List<Question> getQuestionsForUsers(Integer noOfQuestions,String subject);
}
