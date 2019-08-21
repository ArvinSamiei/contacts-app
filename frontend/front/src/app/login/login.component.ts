import {Component, OnInit} from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  loginFailed = false;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit() {
  }

  login() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['contacts']);
    } else {
      this.loginFailed = true;
    }
  }

  isLoggedIn() {
    return !(sessionStorage.getItem('authenticatedUser') === null);
  }

}
