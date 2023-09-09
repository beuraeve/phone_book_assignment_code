import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneBook } from 'src/app/model/phone-book';
import { PhoneBookServiceService } from 'src/app/service/phone-book-service.service';

@Component({
  selector: 'app-add-phone-book',
  templateUrl: './add-phone-book.component.html',
  styleUrls: ['./add-phone-book.component.css']
})
export class AddPhoneBookComponent {

  form: FormGroup;
  isSubmitted = false;

  constructor(
    private phoneBookService: PhoneBookServiceService,
    private router: Router
  ) {
    
    this.form = new FormGroup({
      name: new FormControl('', {validators: [Validators.required]})
    });
  }

  ngOnInit() {
  }

  get f() {
    return this.form.controls;
  }
  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.phoneBookService.addPhoneBook(this.form.value).subscribe({
        next: (result) => {
          this.router.navigate(['/phone-books']);
        },
        error: (e) => {
          console.log('http error => ', e);

        },
      });
    }
  }

  onBtnCancelClick() {
    this.router.navigate(['/phone-books']);
  }

}
