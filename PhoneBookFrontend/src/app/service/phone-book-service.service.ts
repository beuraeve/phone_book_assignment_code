import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { PhoneBook } from '../model/phone-book';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookServiceService {

  headers: HttpHeaders;
  base_url = "https://localhost:7073/api";

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  retrieveContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.base_url}/Contacts`);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.base_url}/Contacts`, contact, {headers: this.headers});
  }

  retrievePhoneBooks(): Observable<PhoneBook[]> {
    return this.http.get<PhoneBook[]>(`${this.base_url}/PhoneBookTypes`);
  }

  addPhoneBook(phone_book: PhoneBook): Observable<PhoneBook> {
    return this.http.post<PhoneBook>(`${this.base_url}/PhoneBookTypes`, phone_book, {headers: this.headers});
  }
}
