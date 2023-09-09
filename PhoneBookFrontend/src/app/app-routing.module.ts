import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/contact/add-contact/add-contact.component';
import { ListContactComponent } from './components/contact/list-contact/list-contact.component';
import { ListPhoneBookComponent } from './components/phone_book/list-phone-book/list-phone-book.component';
import { AddPhoneBookComponent } from './components/phone_book/add-phone-book/add-phone-book.component';

const routes: Routes = [
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'contacts', component: ListContactComponent},
  {path: 'contacts/add', component: AddContactComponent},
  {path: 'phone-books', component: ListPhoneBookComponent},
  {path: 'phone-books/add', component: AddPhoneBookComponent},
  {path: '**', redirectTo: 'contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
