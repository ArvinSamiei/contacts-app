import {Component, OnInit} from '@angular/core';
import {EventDataService} from '../service/data/event-data.service';
import {Time} from '@angular/common';

export class ContactEvent {
  id: number;

  username: string;

  name: string;

  date: Date;

  time: Time;

  constructor() {
  }
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  contacsEvents: ContactEvent[];

  constructor(
    private eventDataService: EventDataService
  ) {
  }

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventDataService.getAllEvents(sessionStorage.getItem('authenticatedUser')).subscribe(
      response => {
        this.contacsEvents = response;
        console.log(response);
      }
    );
  }

  getTime(contactEvent) {
    let time = contactEvent.time.toString();
    time = time.substring(time.indexOf('T') + 1, time.indexOf('.'));
    return time;
  }
}
