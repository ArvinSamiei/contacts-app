package com.samiei.arvin.contacts.restfulServices;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.Date;

@Entity
public class Event {

    public Event(String name, LocalDate date, LocalDateTime localDateTime, String username) {
        this.name = name;
        this.date = date;
        this.username = username;
        this.time = localDateTime;
    }

    public Event() {
    }

    @Id
    @GeneratedValue
    Long id;

    String username;

    String name;

    LocalDate date;

    LocalDateTime time;

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }


}
