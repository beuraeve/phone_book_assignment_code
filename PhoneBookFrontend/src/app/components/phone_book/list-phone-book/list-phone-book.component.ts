import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { PhoneBook } from 'src/app/model/phone-book';
import { PhoneBookServiceService } from 'src/app/service/phone-book-service.service';

@Component({
  selector: 'app-list-phone-book',
  templateUrl: './list-phone-book.component.html',
  styleUrls: ['./list-phone-book.component.css'],
})
export class ListPhoneBookComponent {
  phoneBooks: any = [];

  columns = ['name', 'actions'];

  constructor(
    private phoneBookService: PhoneBookServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPhoneBooks();
  }

  getPhoneBooks() {
    this.phoneBookService.retrievePhoneBooks().subscribe({
      next: (result) => {
        this.phoneBooks = result;
      },
      error: (e) => {},
    });
  }

  onAddPhoneBookClick() {
    this.router.navigate(['/phone-books/add']);
  }
}
