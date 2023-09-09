import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneBookServiceService } from 'src/app/service/phone-book-service.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {
  contacts: any = [];

  columns = ['name', 'phoneNumber','phoneBookTypeId', 'actions'];

  constructor(
    private phoneBookService: PhoneBookServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.phoneBookService.retrieveContacts().subscribe({
      next: (result) => {
        this.contacts = result;
      },
      error: (e) => {},
    });
  }

  onAddContactClick() {
    this.router.navigate(['/contacts/add']);
  }
}
