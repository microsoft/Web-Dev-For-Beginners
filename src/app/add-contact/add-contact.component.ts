import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  addContactForm: FormGroup
  submitted: boolean = false

  constructor(private formBuilder: FormBuilder, private router: Router, private contactService: ContactService) { }

  ngOnInit() {
    this.addContactForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true
    if (this.addContactForm.invalid) {
      return
    }
    this.contactService.createContact(this.addContactForm.value).subscribe(data => {
      this.router.navigate(['list-user'])
    })
  }

}

