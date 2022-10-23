import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/contacts'

  // get all contact
  getContacts() {
    return this.http.get<Contact[]>(this.baseUrl)
  }

  // get contact by id
  getContactById(id: number) {
    return this.http.get<Contact[]>(this.baseUrl + '/' + id)
  }
  
  // get contact by last name
  getContactByLastName(lastName: string) {
    return this.http.get<Contact[]>(this.baseUrl + '/' + lastName)
  }

  // create contact
  createContact(contact: Contact) {
    return this.http.post(this.baseUrl, contact)
  }

  // modify contact
  updateContact(contact: Contact) {
    return this.http.put(this.baseUrl + '/' + contact.id, contact)
  }

  // delete contact
  deleteContact(id: number) {
    return this.http.delete(this.baseUrl + '/' + id)
  }
}
