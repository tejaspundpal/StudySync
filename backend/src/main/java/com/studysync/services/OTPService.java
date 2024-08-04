package com.studysync.services;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class OTPService {

	@Autowired
	private JavaMailSender mailSender;
	
	public String generateOTP() {
		Random random = new Random();
		int otp = 100000 + random.nextInt(900000);
		return String.valueOf(otp);
	}
	
	 public void sendEmail(String to, String otp) {
	       try {
	    	   SimpleMailMessage message = new SimpleMailMessage();
		        message.setTo(to);
		        message.setSubject("OTP Verification");
		        message.setText("Welcome to StudySync !.Your OTP is: " + otp);
		        mailSender.send(message);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Error sending email: " + e.getMessage());
		}
	}
}
