package com.samiei.arvin.contacts.restfulServices;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactsJpaRepository extends JpaRepository<Contact, Long> {

    List<Contact> findByUsername(String username);


}
