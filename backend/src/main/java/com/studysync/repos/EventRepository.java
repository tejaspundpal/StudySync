package com.studysync.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.studysync.entities.Event;

@EnableJpaRepositories
@Repository
public interface EventRepository extends JpaRepository<Event,Integer> {

}
