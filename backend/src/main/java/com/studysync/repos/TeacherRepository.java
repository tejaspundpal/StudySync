package com.studysync.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.studysync.entities.Teacher;

@EnableJpaRepositories
@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
	Optional<Teacher> findOneByEmailAndPassword(String email,String password);
	Teacher findByEmail(String email);
}
