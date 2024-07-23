package com.studysync.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studysync.entities.Notes;

@Repository
public interface NotesRepository extends JpaRepository<Notes, Integer> {

}
