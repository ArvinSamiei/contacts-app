package com.samiei.arvin.contacts.restfulServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;

import java.util.List;

public class SearchService {

    @Autowired
    private ContactsJpaRepository contactsJpaRepository;


}