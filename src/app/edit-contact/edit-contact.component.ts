import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../Contact';
import { ContactService } from '../contact.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact: Contact
  editContactForm: FormGroup
  submitted: boolean = false
  
  constructor(private formBuilder: FormBuilder, private router: Router, private contactService: ContactService) { }

  ngOnInit() {
    let contactId = localStorage.getItem("editContactId")
    if (!contactId) {
      alert("Invalid action.")
      this.router.navigate(['/'])
      return
    }	
    this.editContactForm = this.formBuilder.group({
      id: [],
      phoneNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
    this.contactService.getContactById(+contactId)
      .subscribe(data => {
        this.editContactForm.setValue(data)
      })
  }							

  onSubmit() {
    this.submitted = true
    if (this.editContactForm.invalid) {
      return
    }
    //returns the first value they receive from the source and closes the observable
    this.contactService.updateContact(this.editContactForm.value)
      .pipe(first()).subscribe(data => {
        this.router.navigate(['/'])
      }, error => {
        alert(error);
      });
  }

}
