package com.studysync.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.studysync.entities.OTPVerificationTeacher;

@Repository
@EnableJpaRepositories
public interface OTPVerificationTeacherRepository extends JpaRepository<OTPVerificationTeacher, Integer>{

	OTPVerificationTeacher findByEmail(String email);
	OTPVerificationTeacher findByEmailAndOtp(String email,String otp);
}
