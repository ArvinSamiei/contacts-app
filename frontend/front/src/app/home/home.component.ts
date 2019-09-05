import {Component, OnInit} from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.hardcodedAuthenticationService.isLoggedIn();
  }

  goToContacts() {
    this.router.navigate(['users', sessionStorage.getItem('authenticatedUser'), 'contacts']);
  }
}
