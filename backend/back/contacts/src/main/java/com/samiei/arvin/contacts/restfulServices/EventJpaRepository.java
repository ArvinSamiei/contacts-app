package com.samiei.arvin.contacts.restfulServices;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventJpaRepository extends JpaRepository<Event, Long> {

    List<Event> findByUsername(String username);
}
