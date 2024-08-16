package com.studysync.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.studysync.entities.Thread;

@Repository
@EnableJpaRepositories
public interface ThreadRepository extends JpaRepository<Thread, Long>{

}
