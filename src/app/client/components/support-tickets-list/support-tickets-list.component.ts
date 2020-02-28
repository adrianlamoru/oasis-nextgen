import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { ISupportTicket } from '../../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupportTicketsService } from '../../services';

@Component({
  selector: 'app-support-tickets-list',
  templateUrl: './support-tickets-list.component.html',
  styleUrls: ['./support-tickets-list.component.scss'],
})
export class SupportTicketsListComponent implements OnInit {
  private _listOfCases: ISupportTicket[];
  @Input() caseSensivity: string;
  @Input()
  set listOfCases(casesList: ISupportTicket[]) {
    this._listOfCases = casesList;
  }
  get listOfCasesData(): any { return this._listOfCases; }

  filteredListOfCases: ISupportTicket[];
  filteredUnsortedListOfCases: ISupportTicket[];

  selectedCaseData: ISupportTicket;

  constructor(private modalService: NgbModal,
  private supportTicketsService: SupportTicketsService) { }

  ngOnInit() {
    this.getFilteredCases(this.caseSensivity);
  }

  // ngAfterContentChecked() {
  //   this.getFilteredCases(this.caseSensivity);
  // }

  getFilteredCases(caseSensivity) {
    switch (caseSensivity) {

      case 'critical': {
        this.filteredListOfCases = [];
        if (this._listOfCases !== undefined) {
          this.filteredListOfCases = this._listOfCases.filter(function(item) {
            return item.priority === 'Critical';
          });
        }
        break;
      }
      case 'high': {
        this.filteredListOfCases = [];
        if (this._listOfCases !== undefined) {
          this.filteredListOfCases = this._listOfCases.filter(function(item) {
            return item.priority === 'High';
          });
        }
        break;
      }
      case 'medium': {
        this.filteredListOfCases = [];
        if (this._listOfCases !== undefined) {
          this.filteredListOfCases = this._listOfCases.filter(function(item) {
            return item.priority === 'Medium';
          });
        }
        break;
      }
      case 'low': {
        this.filteredListOfCases = [];
        if (this._listOfCases !== undefined) {
          this.filteredListOfCases = this._listOfCases.filter(function(item) {
            return item.priority === 'Low';
          });
        }
        break;
      }
    }
  }

  sortSupportListBy(statusValue) {
    // Storing the unsorted list of support tickets (Initial List that we get from the backend service)
    this.filteredUnsortedListOfCases = this.filteredListOfCases;

    // Resetting the support ticket list to intial list before performing any sort function/case
    this.filteredListOfCases = this.filteredUnsortedListOfCases;

    switch (statusValue) {
      case 'status': {
        this.filteredListOfCases.sort(
          function(a, b) {
              return a.status < b.status ? -1 : a.status > b.status ? 1 : 0;
          });
        break;
      }
    }
  }

  openSupportTicketDetails(caseNumberRef, size, content) {
    this.selectedCaseData = this.supportTicketsService.supportListOfCases.find(
      caseItem => caseItem.caseNumber === caseNumberRef
    );
    this.modalService.open(content, { size: size});
  }

}
