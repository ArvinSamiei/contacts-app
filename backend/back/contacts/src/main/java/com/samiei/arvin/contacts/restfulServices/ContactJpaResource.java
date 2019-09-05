package com.samiei.arvin.contacts.restfulServices;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.*;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ContactJpaResource {

    Logger logger = LoggerFactory.getLogger(ContactsJpaRepository.class);

    @Autowired
    private ContactsJpaRepository contactsJpaRepository;

    SearchService searchService = new SearchService();

    @Autowired
    private EventJpaRepository eventJpaRepository;

    @GetMapping("/users/{username}/contacts")
    public List<Contact> getAllContacts(@PathVariable String username) {
        eventJpaRepository.save(new Event("findAll", LocalDate.now(), LocalDateTime.now(), username));
        return contactsJpaRepository.findByUsername(username);
    }

    @PutMapping("users/{username}/contacts/{id}")
    public ResponseEntity<Contact> updateContact(@PathVariable String username, @PathVariable Long id, @RequestBody Contact contact) {

        logger.info(contact.name);
//        Todo todoUpdated = todoJpaRepository.save(todo);
        Contact updatedContact = contactsJpaRepository.save(contact);
        eventJpaRepository.save(new Event("update", LocalDate.now(), LocalDateTime.now(), username));
        return new ResponseEntity<Contact>(contact, HttpStatus.OK);
    }

    @DeleteMapping("/users/{username}/contacts/{id}")
    public ResponseEntity<Contact> deleteContact(@PathVariable String username, @PathVariable Long id) {

        contactsJpaRepository.deleteById(id);

        return ResponseEntity.noContent().build();

    }

    @GetMapping("users/{username}/contacts/{id}")
    public Contact getContact(@PathVariable String username, @PathVariable Long id) {
        eventJpaRepository.save(new Event("load", LocalDate.now(), LocalDateTime.now(), username));
        return contactsJpaRepository.findById(id).get();
    }

    @PostMapping("users/{username}/contacts")
    public ResponseEntity<Void> addContact(@PathVariable String username, @RequestBody Contact contact) {
        Contact createdContact = contactsJpaRepository.save(contact);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdContact.getId()).toUri();
        eventJpaRepository.save(new Event("save", LocalDate.now(), LocalDateTime.now(), username));
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("users/{username}/contacts/search")
    public List<Contact> searchContacts(@PathVariable String username, @RequestParam String name, @RequestParam String lastName, @RequestParam String phoneNumber) {
        return search(name, lastName, phoneNumber);
    }

    public List<Contact> search(String name, String lastName, String phoneNumber) {
        System.out.println(name);
        ExampleMatcher exampleMatcher = ExampleMatcher.matching()
                .withMatcher("name", ExampleMatcher.GenericPropertyMatchers.contains().ignoreCase())
                .withMatcher("lastName", ExampleMatcher.GenericPropertyMatchers.contains().ignoreCase())
                .withMatcher("phoneNumber", ExampleMatcher.GenericPropertyMatchers.contains());

        Example<Contact> example = Example.of(new Contact(name, lastName, phoneNumber), exampleMatcher);
        List<Contact> contacts = contactsJpaRepository.findAll(example);
        return contacts;
    }


}
