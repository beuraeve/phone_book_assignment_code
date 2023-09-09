import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhoneBookComponent } from './list-phone-book.component';

describe('ListPhoneBookComponent', () => {
  let component: ListPhoneBookComponent;
  let fixture: ComponentFixture<ListPhoneBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhoneBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
