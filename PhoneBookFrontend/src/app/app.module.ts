import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddContactComponent } from './components/contact/add-contact/add-contact.component';
import { ListContactComponent } from './components/contact/list-contact/list-contact.component';
import { ListPhoneBookComponent } from './components/phone_book/list-phone-book/list-phone-book.component';
import { AddPhoneBookComponent } from './components/phone_book/add-phone-book/add-phone-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ListContactComponent,
    AddPhoneBookComponent,
    HeaderComponent,
    ListPhoneBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
