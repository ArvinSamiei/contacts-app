import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(username, password) {
    if (username === 'arvin' && password === '123') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return !(sessionStorage.getItem('authenticatedUser') === null);
  }

  logOut() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
