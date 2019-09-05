import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: string;
  name = '';
  lastName = '';
  phoneNumber = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const usernameString = 'username';
    this.username = this.route.snapshot.params[usernameString];
  }


  search() {
    this.router.navigate(['users', sessionStorage.getItem('authenticatedUser'), 'contacts', 'search', 'results'], {
      queryParams: {
        name: this.name,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber
      }
    });
  }
}
