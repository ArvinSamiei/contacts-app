import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactDataService} from '../service/data/contact-data.service';
import {Contact} from '../contact/contact.component';


// export class ContactPlusImage {
//   name: string;
//   lastName: string;
//   phoneNumber: string;
//   image: File;
//
//   constructor(name: string,
//               lastName: string,
//               phoneNumber: string,
//               image: File
//   ) {
//   }
// }


@Component({
  selector: 'app-manage-contact',
  templateUrl: './manage-contact.component.html',
  styleUrls: ['./manage-contact.component.css']
})

export class ManageContactComponent implements OnInit {

  // name: string;
  // lastName: string;
  // phoneNumber: string;
  // image: File;

  contact: Contact;
  title: string;

  constructor(
    private router: Router,
    private contactService: ContactDataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.contact = new Contact(sessionStorage.getItem('authenticatedUser'), '', '', '');
    const idString = 'id';
    const id = this.route.snapshot.params[idString];
    if (id != -1) {
      this.title = 'Edit Contact';
      this.contactService.getContact(id, sessionStorage.getItem('authenticatedUser')).subscribe(
        response => {
          this.contact = response;
        }
      );
    } else {
      this.title = 'Create Contact';
    }


    //   this.name = this.getField('name');
    // this.lastName = this.getField('lastName');
    // this.phoneNumber = this.getField('phoneNumber');
  }

  getField(field: string) {
    return sessionStorage.getItem(field);
  }

  save() {
    const idString = 'id';
    const id = this.route.snapshot.params[idString];
    if (id === -1) {
      return this.contactService.createContact(sessionStorage.getItem('authenticatedUser'), this.contact).subscribe(
        response => {
          this.router.navigate(['users', sessionStorage.getItem('authenticatedUser'), 'contacts']);
        }
      )
        ;
    } else {
      return this.contactService.updateContact(id, sessionStorage.getItem('authenticatedUser'),
        this.contact
      ).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['users', sessionStorage.getItem('authenticatedUser'), 'contacts']);
        }
      );
    }
  }
}
