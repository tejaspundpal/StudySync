package com.studysync.entities;

import java.time.LocalDate;
import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="NOTES")
public class Notes {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 private int notesid;
	
	 private String teacherName;
	 private String title;
	 private String subject;
	 private String year;
	 private LocalDate uploadDate;
	 private String description;

//	 @Column(columnDefinition = "LONGBLOB")
	 @Lob
	  private byte[] fileData;

	  @ManyToOne(fetch = FetchType.LAZY)
	  @JoinColumn(name = "teacherid")
	  private Teacher teacher;

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public LocalDate getUploadDate() {
		return uploadDate;
	}

	public void setUploadDate(LocalDate uploadDate) {
		this.uploadDate = uploadDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getFileData() {
		return fileData;
	}

	public void setFileData(byte[] fileData) {
		this.fileData = fileData;
	}

	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public Notes(String teacherName, String title, String subject, String year, LocalDate uploadDate,
			String description, byte[] fileData, Teacher teacher) {
		super();
		this.teacherName = teacherName;
		this.title = title;
		this.subject = subject;
		this.year = year;
		this.uploadDate = uploadDate;
		this.description = description;
		this.fileData = fileData;
		this.teacher = teacher;
	}

	public Notes() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Notes [teacherName=" + teacherName + ", title=" + title + ", subject=" + subject + ", year=" + year
				+ ", uploadDate=" + uploadDate + ", description=" + description + ", fileData="
				+ Arrays.toString(fileData) + ", teacher=" + teacher + "]";
	}
	
	  
}


