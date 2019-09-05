import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactDataService} from '../service/data/contact-data.service';
import {Contact} from '../contact/contact.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  name: string;
  lastName: string;
  phoneNumber: string;
  contacts: Contact[] = [];
  deleteUnsuccessful: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactDataService: ContactDataService
  ) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.name = queryParams.get('name');
      this.lastName = queryParams.get('lastName');
      this.phoneNumber = queryParams.get('phoneNumber');
    });

    this.refreshContacts();

  }

  refreshContacts() {
    this.contactDataService.searchContacts(sessionStorage.getItem('authenticatedUser'), this.name, this.lastName, this.phoneNumber)
      .subscribe(
        response => {
          this.contacts = response;
        }
      );
  }

  editContact(id: number, name: string, lastName: string, phoneNumber: string) {
    this.router.navigate(['users', sessionStorage.getItem('authenticatedUser'), 'contacts', id]);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('lastName', lastName);
    sessionStorage.setItem('phoneNumber', phoneNumber);
  }


  deleteContact(id, username) {
    this.contactDataService.deleteContact(id, username).subscribe(
      response => {
        this.refreshContacts();
      },
      error => {
        console.log(error);
        this.deleteUnsuccessful = true;
      }
    );
  }


}
