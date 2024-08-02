package com.studysync.exceptions;

public class StudentAlreadyRegisteredException extends RuntimeException {
    public StudentAlreadyRegisteredException(String message) {
        super(message);
    }
}