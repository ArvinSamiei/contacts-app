import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../../contact/contact.component';
import {CONTACT_API} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllContacts(username) {
    return this.http.get<Contact[]>(`${CONTACT_API}/users/${username}/contacts`);
  }

  updateContact(id, username, contact) {
    return this.http.put(`${CONTACT_API}/users/${username}/contacts/${id}`, contact);
  }

  deleteContact(id, username) {
    return this.http.delete(`${CONTACT_API}/users/${username}/contacts/${id}`);
  }

  getContact(id, username) {
    return this.http.get<Contact>(`${CONTACT_API}/users/${username}/contacts/${id}`);
  }

  createContact(username, contact) {
    return this.http.post(`${CONTACT_API}/users/${username}/contacts`, contact);
  }

  searchContacts(username, theName, theLastName, thePhoneNumber) {
    return this.http.get<Contact[]>(`${CONTACT_API}/users/${username}/contacts/search`, {
        params: {
          name: theName,
          lastName: theLastName,
          phoneNumber: thePhoneNumber
        }
      }
    );
  }
}
