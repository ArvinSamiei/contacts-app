package com.samiei.arvin.contacts.restfulServices;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EventJpaResource {

    Logger logger = LoggerFactory.getLogger(EventJpaResource.class);

    @Autowired
    private EventJpaRepository eventJpaRepository;

    @GetMapping("/users/{username}/events")
    public List<Event> getAllEvents(@PathVariable String username) {
        logger.info(eventJpaRepository.findByUsername(username).toString());

        return eventJpaRepository.findByUsername(username);
    }
}
