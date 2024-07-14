package com.studysync.repos;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.studysync.entities.Question;

@EnableJpaRepositories
@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

	 @Query("SELECT DISTINCT q.subject FROM Question q")
     List<String> findDistinctSubject();
	 Page<Question> findBySubject(String subject, Pageable pageable);
}
