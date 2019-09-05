import {Component, OnInit} from '@angular/core';
import {Contact, ContactComponent} from '../contact/contact.component';
import {style} from '@angular/animations';
import {Router} from '@angular/router';
import {ContactDataService} from '../service/data/contact-data.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  deleteUnsuccessful = false;

  constructor(
    private router: Router,
    private contactService: ContactDataService
  ) {
  }

  refreshContacts() {
    this.contactService.getAllContacts(sessionStorage.getItem('authenticatedUser')).subscribe(
      response => {
        this.contacts = response;
      }
    );
  }

  ngOnInit() {
    this.refreshContacts();
  }

  fullName(name, lastname) {
    return name + ' ' + lastname;
  }


  editContact(id: number, name: string, lastName: string, phoneNumber: string) {
    this.router.navigate(['users', sessionStorage.getItem('authenticatedUser'), 'contacts', id]);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('lastName', lastName);
    sessionStorage.setItem('phoneNumber', phoneNumber);
  }

  addContact() {
    this.router.navigate(['users', sessionStorage.getItem('authenticatedUser'), 'contacts', -1]);
  }

  deleteContact(id, username) {
    this.contactService.deleteContact(id, username).subscribe(
      response => {
        this.refreshContacts();
      },
      error => {
        console.log(error);
        this.deleteUnsuccessful = true;
      }
    );
  }

  searchContact() {
    this.router.navigate(['users', sessionStorage.getItem('authenticatedUser'), 'contacts', 'search']);
  }
}
