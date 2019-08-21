import {Component, Input, OnInit} from '@angular/core';

export class Contact {

  constructor(
    public name?: string,
    public lastName?: string,
    public phoneNumber?: string,
    public id?: number) {

  }

  fullName() {
    return this.name + ' ' + this.lastName;
  }

  imagePath() {
    return '../../assets/' + this.name + this.lastName + '' + '.jpg';
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  // @Input()
  // contact: Contact;

  checked = false;

  constructor(
    public contact: Contact
  ) {
  }

  ngOnInit() {
  }


}
