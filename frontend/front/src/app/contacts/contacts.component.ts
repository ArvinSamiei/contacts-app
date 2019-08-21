import {Component, OnInit} from '@angular/core';
import {Contact, ContactComponent} from '../contact/contact.component';
import {style} from '@angular/animations';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
    new ContactComponent(new Contact('Cristiano', 'Ronaldo', '09121234567', 1)),
    new ContactComponent(new Contact('Julio', 'Cesar', '09121234568', 2)),
    new ContactComponent(new Contact('Diego', 'Milito', '09121234569', 3)),
    new ContactComponent(new Contact('Cristiano', 'Ronaldo', '09121234567', 4)),
    new ContactComponent(new Contact('Julio', 'Cesar', '09121234568', 5)),
    new ContactComponent(new Contact('Diego', 'Milito', '09121234569', 6))
  ];

  constructor() {
  }

  ngOnInit() {
  }


}
