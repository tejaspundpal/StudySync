package com.studysync.controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.studysync.entities.Question;
import com.studysync.services.QuestionService;

import lombok.RequiredArgsConstructor;

/**
*
* @author Tejas Pundpal
*/


@RestController
@RequestMapping("/api/quiz")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class QuestionController {

	@Autowired
	private QuestionService questionService;
	
	@PostMapping("/create-question")
	public ResponseEntity<Question> createQuestion(@RequestBody Question question){
		Question q = this.questionService.createQuestion(question);
		return new ResponseEntity<>(q, HttpStatus.CREATED);
	}
	
	@GetMapping("/all-questions")
	public ResponseEntity<List<Question>> getAllQuestions(){
		List<Question> questions = this.questionService.getAllQuestions();
		if(questions.size() <= 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(questions));
	}
	
	@GetMapping("/question/{id}")
	public ResponseEntity<Question> getQuestionById(@PathVariable int id) throws ChangeSetPersister.NotFoundException{
		Optional<Question> theQuestion = questionService.getQuestionById(id);
        if (theQuestion.isPresent()){
            return ResponseEntity.ok(theQuestion.get());
        }else {
            throw new ChangeSetPersister.NotFoundException();
        }
	}
	
	@GetMapping("/subjects")
	public ResponseEntity<List<String>> getAllSubjects(){
		List<String> subjects = this.questionService.getAllSubjects();
		if(subjects.size() <= 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(subjects));
	}
	
	@PutMapping("/question/{id}/update")
	public ResponseEntity<Question> updateQuestion(@PathVariable int id,@RequestBody Question question) throws ChangeSetPersister.NotFoundException {
		Question updateQuestion = this.questionService.updateQuestion(id, question);
		return new ResponseEntity<>(updateQuestion, HttpStatus.CREATED);
	}
	
	@DeleteMapping("question/{id}/delete")
	public ResponseEntity<Void> deleteQuestion(@PathVariable int id){
		this.questionService.deleteQuestion(id);
		return ResponseEntity.noContent().build();
	}
	
	 @GetMapping("/fetch-questions-for-user")
	    public ResponseEntity<List<Question>> getQuestionsForUser(
	            @RequestParam Integer noOfQuestions, @RequestParam String subject){
	        List<Question> allQuestions = questionService.getQuestionsForUsers(noOfQuestions, subject);

	        List<Question> mutableQuestions = new ArrayList<>(allQuestions);
	        Collections.shuffle(mutableQuestions);

	        int availableQuestions = Math.min(noOfQuestions, mutableQuestions.size());
	        List<Question> randomQuestions = mutableQuestions.subList(0, availableQuestions);
	        return ResponseEntity.ok(randomQuestions);
	    }
}
