package com.studysync.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="STUDENT")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	@Column(unique = true)
	private String prn;
	private String firstname;
	private String lastname;
	private String phonenumber;
	@Column(unique = true)
	private String email;
	private String year;
	private String division;
	private String password;
	private String cpassword;
	@Column(length=1000)
	private String imgUrl;
	@Column(length=1000)
	private String githubId;
	@Column(length=1000)
	private String linkedinId;
	private USER_ROLE role = USER_ROLE.ROLE_STUDENT;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
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
	public USER_ROLE getRole() {
		return role;
	}
	public Student(String prn, String firstname, String lastname, String phonenumber, String email, String year,
			String division, String password, String cpassword, String imgUrl, String githubId, String linkedinId,
			USER_ROLE role) {
		super();
		this.prn = prn;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phonenumber = phonenumber;
		this.email = email;
		this.year = year;
		this.division = division;
		this.password = password;
		this.cpassword = cpassword;
		this.imgUrl = imgUrl;
		this.githubId = githubId;
		this.linkedinId = linkedinId;
		this.role = role;
	}
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Student [prn=" + prn + ", firstname=" + firstname + ", lastname=" + lastname + ", phonenumber="
				+ phonenumber + ", email=" + email + ", year=" + year + ", division=" + division + ", password="
				+ password + ", cpassword=" + cpassword + ", imgUrl=" + imgUrl + ", githubId=" + githubId
				+ ", linkedinId=" + linkedinId + ", role=" + role + "]";
	}
	
	
}
