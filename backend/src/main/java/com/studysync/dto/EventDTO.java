package com.studysync.dto;

import java.time.LocalDate;

public class EventDTO {

	private int id;
	private String title;
	private String description;
	private LocalDate date;
	private String time;
	private String location;
	private String year;
	private String teacherName;
	
	public String getTeacherName() {
		return teacherName;
	}
	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public EventDTO(String title, String description, LocalDate date, String time, String location, String year) {
		super();
		this.title = title;
		this.description = description;
		this.date = date;
		this.time = time;
		this.location = location;
		this.year = year;
		this.teacherName = teacherName;

	}
	public EventDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "EventDTO [id=" + id + ", title=" + title + ", description=" + description + ", date=" + date + ", time="
				+ time + ", location=" + location + ", year=" + year + ", teacherName=" + teacherName + "]";
	}
	
	
}
