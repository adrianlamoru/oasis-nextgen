import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ClientDetail } from '../../models';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  @Input() public clientDetail: ClientDetail;

  // View my Profile Modal
  editAccount = false;
  editAddresses = false;
  editHomeAddress = false;
  editMailingAddress = false;
  editW2Address = false;
  editContacts = false;
  editPrimaryContact = false;
  editEmergencyContact = false;

  mailingAddress = false;
  w2Address = false;
  electronicW2 = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openMyProfileModal(content) {
    this.modalService.open(content, { size: 'lg'});
  }

  profileEdit(source) {
    if (source === 'account') {
      this.editAccount = !this.editAccount;
    }
    if (source === 'homeAddress') {
      this.editHomeAddress = !this.editHomeAddress;
    }
    if (source === 'mailingAddress') {
      this.editMailingAddress = !this.editMailingAddress;
    }
    if (source === 'w2Address') {
      this.editW2Address = !this.editW2Address;
    }
    if (source === 'primaryContact') {
      this.editPrimaryContact = !this.editPrimaryContact;
    }
    if (source === 'emergencyContact') {
      this.editEmergencyContact = !this.editEmergencyContact;
    }
    if (source === 'editAddresses') {
      this.editHomeAddress = false;
      this.editMailingAddress = false;
      this.editW2Address = false;
      this.editAddresses = false;
    }
    if (source === 'editContacts') {
      this.editPrimaryContact = false;
      this.editEmergencyContact = false;
      this.editContacts = false;
    }

    if (this.editHomeAddress || this.editMailingAddress || this.editW2Address) {
      this.editAddresses = true;
    }
    if (this.editPrimaryContact || this.editEmergencyContact) {
      this.editContacts = true;
    }
  }

  toggle(value) {
    if (value === 'mailingAddress') {
      this.mailingAddress = !this.mailingAddress;
    } else if (value === 'w2Address') {
      this.w2Address = !this.w2Address;
    } else if (value === 'electronicW2') {
      this.electronicW2 = !this.electronicW2;
    }
  }
}
