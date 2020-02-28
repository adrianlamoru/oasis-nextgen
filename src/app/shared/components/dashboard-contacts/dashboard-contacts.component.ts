import { Component, OnInit, Input } from '@angular/core';
import { DashboardContact, portalType } from '../../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardContactsService } from '../../services';

@Component({
  selector: 'app-dashboard-contacts',
  templateUrl: './dashboard-contacts.component.html',
  styleUrls: ['./dashboard-contacts.component.scss']
})
export class DashboardContactsComponent implements OnInit {
  public contacts: DashboardContact[];

  @Input()
  portal: portalType = portalType.client;

  constructor(private modalService: NgbModal,
              private contactService: DashboardContactsService) { }

  ngOnInit() {
    this.initContacts();
  }

  private initContacts() {
    this.contactService.get(this.portal).subscribe(
      (contacts: DashboardContact[]) => {
        this.contacts = contacts;
      },
      (e) => { this.contacts = []; throw e; }
    );
  }

  openModal(content, size) {
    this.modalService.open(content, { size: size });
  }
}
