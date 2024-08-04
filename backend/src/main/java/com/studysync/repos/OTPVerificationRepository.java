package com.studysync.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.studysync.entities.OTPVerification;

@Repository
@EnableJpaRepositories
public interface OTPVerificationRepository extends JpaRepository<OTPVerification, Integer> {
    OTPVerification findByEmail(String email);
    OTPVerification findByEmailAndOtp(String email, String otp);
}
