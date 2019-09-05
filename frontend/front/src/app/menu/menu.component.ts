import {Component, OnInit} from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardcodedAuthenticationUser: HardcodedAuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.hardcodedAuthenticationUser.isLoggedIn();
  }

  logOut() {
    this.hardcodedAuthenticationUser.logOut();
    this.router.navigate(['/login']);
  }

  goToContacts() {
    this.router.navigate(['users', sessionStorage.getItem('authenticatedUser'), 'contacts']);
  }

  goToEvents() {
    this.router.navigate(['users', sessionStorage.getItem('authenticatedUser'), 'events']);
  }
}
