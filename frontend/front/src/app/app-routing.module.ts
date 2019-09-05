import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {RouteGuardService} from './service/route-guard.service';
import {ManageContactComponent} from './manage-contact/manage-contact.component';
import {EventListComponent} from './event-list/event-list.component';
import {SearchComponent} from './search/search.component';
import {SearchResultsComponent} from './search-results/search-results.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users/:username/contacts', component: ContactsComponent, canActivate: [RouteGuardService]},
  {path: 'users/:username/contacts/search', component: SearchComponent, canActivate: [RouteGuardService]},
  {path: 'users/:username/contacts/search/results', component: SearchResultsComponent, canActivate: [RouteGuardService]},
  {path: 'users/:username/contacts/:id', component: ManageContactComponent, canActivate: [RouteGuardService]},
  {path: 'users/:username/events', component: EventListComponent, canActivate: [RouteGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
