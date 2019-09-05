import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONTACT_API} from '../../app.constants';
import {ContactEvent} from '../../event-list/event-list.component';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllEvents(username) {
    return this.http.get<ContactEvent[]>(`${CONTACT_API}/users/${username}/events`);
  }
}
