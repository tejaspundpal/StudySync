package com.studysync.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "OTP_VERIFICATION")
@Data
public class OTPVerification {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(unique = true)
    private String email;

    private String otp;
    private String prn;
    private String firstname;
    private String lastname;
    private String phonenumber;
    private String year;
    private String division;
    private String password;
    private String imgUrl;
    private String githubId;
    private String linkedinId;
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
	public String getPrn() {
		return prn;
	}
	public void setPrn(String prn) {
		this.prn = prn;
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
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
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
	public String getGithubId() {
		return githubId;
	}
	public void setGithubId(String githubId) {
		this.githubId = githubId;
	}
	public String getLinkedinId() {
		return linkedinId;
	}
	public void setLinkedinId(String linkedinId) {
		this.linkedinId = linkedinId;
	}
	public OTPVerification(int id, String email, String otp, String prn, String firstname, String lastname,
			String phonenumber, String year, String division, String password, String imgUrl, String githubId,
			String linkedinId) {
		super();
		this.id = id;
		this.email = email;
		this.otp = otp;
		this.prn = prn;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phonenumber = phonenumber;
		this.year = year;
		this.division = division;
		this.password = password;
		this.imgUrl = imgUrl;
		this.githubId = githubId;
		this.linkedinId = linkedinId;
	}
	public OTPVerification() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "OTPVerification [id=" + id + ", email=" + email + ", otp=" + otp + ", prn=" + prn + ", firstname="
				+ firstname + ", lastname=" + lastname + ", phonenumber=" + phonenumber + ", year=" + year
				+ ", division=" + division + ", password=" + password + ", imgUrl=" + imgUrl + ", githubId=" + githubId
				+ ", linkedinId=" + linkedinId + "]";
	}
    
    
}

