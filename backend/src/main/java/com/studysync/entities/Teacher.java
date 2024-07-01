package com.studysync.entities;

import java.util.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="TEACHER")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Teacher {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	@Column(unique = true)
	private String tid;
	private String firstname;
	private String lastname;
	private String phonenumber;
	@Column(unique = true)
	private String email;
	private String password;
	private String cpassword;
	@Column(length=1000)
	private String imgUrl;
	private USER_ROLE role = USER_ROLE.ROLE_TEACHER;
	
	@JsonIgnore
    @OneToMany(mappedBy = "teacher", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private List<Notes> notes;

	public Teacher(String tid, String firstname, String lastname, String phonenumber, String email, String password,
			String cpassword, String imgUrl, USER_ROLE role, List<Notes> notes) {
		super();
		this.tid = tid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phonenumber = phonenumber;
		this.email = email;
		this.password = password;
		this.cpassword = cpassword;
		this.imgUrl = imgUrl;
		this.role = role;
		this.notes = notes;
	}

	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public List<Notes> getNotes() {
		return notes;
	}

	public void setNotes(List<Notes> notes) {
		this.notes = notes;
	}

	public USER_ROLE getRole() {
		return role;
	}
	
	@Override
	public String toString() {
		return "Teacher [tid=" + tid + ", firstname=" + firstname + ", lastname=" + lastname + ", phonenumber="
				+ phonenumber + ", email=" + email + ", password=" + password + ", cpassword=" + cpassword + ", imgUrl="
				+ imgUrl + ", role=" + role + ", notes=" + notes + "]";
	}
	
	
}
