import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneBookServiceService } from 'src/app/service/phone-book-service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  form: FormGroup;
  isSubmitted = false;
  phoneBookTypes: any = [];

  constructor(
    private phoneBookService: PhoneBookServiceService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl('', { validators: [Validators.required] }),
      phoneNumber: new FormControl('', { validators: [Validators.required] }),
      phoneBookTypeId: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit() {
    this.getPhoneBooks();
  }

  getPhoneBooks() {
    this.phoneBookService.retrievePhoneBooks().subscribe({
      next: (result) => {
        this.phoneBookTypes = result;
      },
      error: (e) => {},
    });
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.valid) {
      this.phoneBookService.addContact(this.form.value).subscribe({
        next: (result) => {
          this.router.navigate(['/contacts']);
        },
        error: (e) => {
          console.log('http error => ', e);
        },
      });
    }
  }

  onBtnCancelClick() {
    this.router.navigate(['/contacts']);
  }
}
