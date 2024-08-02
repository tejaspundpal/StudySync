package com.studysync.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.studysync.entities.Student;

@EnableJpaRepositories
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

	Optional<Student> findOneByEmailAndPassword(String email,String password);
	Student findByEmail(String email);
	Optional<Student> findByPrn(String prn);
}
