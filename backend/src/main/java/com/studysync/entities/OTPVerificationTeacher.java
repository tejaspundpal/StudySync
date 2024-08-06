package com.studysync.entities;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "OTP_VERIFICATION_TEACHER")
@Data
public class OTPVerificationTeacher {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(unique = true)
	private String email;
	
	private String otp;
	private String tid;
	private String firstname;
	private String lastname;
	private String phonenumber;
	private String password;
	private String imgUrl;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getOtp() {
		return otp;
	}
	public void setOtp(String otp) {
		this.otp = otp;
	}
	public String getTid() {
		return tid;
	}
	public void setTid(String tid) {
		this.tid = tid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public OTPVerificationTeacher(String email, String otp, String tid, String firstname, String lastname,
			String phonenumber, String password, String imgUrl) {
		super();
		this.email = email;
		this.otp = otp;
		this.tid = tid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phonenumber = phonenumber;
		this.password = password;
		this.imgUrl = imgUrl;
	}
	public OTPVerificationTeacher() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "OTPVerificationTeacher [id=" + id + ", email=" + email + ", otp=" + otp + ", tid=" + tid
				+ ", firstname=" + firstname + ", lastname=" + lastname + ", phonenumber=" + phonenumber + ", password="
				+ password + ", imgUrl=" + imgUrl + "]";
	}
		
	
}
