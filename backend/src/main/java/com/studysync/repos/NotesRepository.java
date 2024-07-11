package com.studysync.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studysync.entities.Notes;

public interface NotesRepository extends JpaRepository<Notes, Integer> {

}
