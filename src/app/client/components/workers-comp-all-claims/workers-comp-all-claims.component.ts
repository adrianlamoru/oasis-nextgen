import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { IWorkersCompClaim } from '../../models';
import { WorkersCompClaimsService } from '../../services';

@Component({
  selector: 'app-workers-comp-all-claims',
  templateUrl: './workers-comp-all-claims.component.html',
  styleUrls: ['./workers-comp-all-claims.component.scss']
})
export class WorkersCompAllClaimsComponent implements OnInit {

	@ViewChild('workersCompDetailsViewModal') workersCompDetailsViewModal: ViewContainerRef;

	@Input() workersCompAllClaimsData: IWorkersCompClaim[];
	workersUnsortedCompAllClaimsData: IWorkersCompClaim[];
	workersClaimsRowSelected: IWorkersCompClaim[];
	actionModalHandle: NgbModalRef;

	constructor(
				private modalService: NgbModal,
				private workersCompClaimsService: WorkersCompClaimsService
			) { }

	ngOnInit() {
		this.workersCompClaimsService.getWorkersCompClaims().subscribe(workersCompAllClaimsData => {
	        this.workersCompAllClaimsData = workersCompAllClaimsData;
	        this.workersUnsortedCompAllClaimsData = workersCompAllClaimsData;
	    })
	}

	sortWorkersCompListBy(searchKey) {

		// Resetting the list to intial list before performing any sort function/case
		this.workersCompAllClaimsData = this.workersUnsortedCompAllClaimsData;

		switch (searchKey) {
			case 'Name': {
				this.workersCompAllClaimsData.sort(
				    function(a, b) {
					    return a.employeeName < b.employeeName ? -1 : a.employeeName > b.employeeName ? 1 : 0;
					});
				break;
			}
			case 'Status': {
				this.workersCompAllClaimsData.sort(
					function(a, b) {
					    return a.status < b.status ? -1 : a.status > b.status ? 1 : 0;
					});
				break;
			}
			case 'Type': {
				this.workersCompAllClaimsData.sort(
					function(a, b) {
					    return a.claimType < b.claimType ? -1 : a.claimType > b.claimType ? 1 : 0;
					});
				break;
			}
			case 'InjuryDate': {
				this.workersCompAllClaimsData.sort(
					function(a, b) {
					    return Date.parse(a.injury)< Date.parse(b.injury) ? -1 : Date.parse(a.injury) > Date.parse(b.injury) ? 1 : 0;
					});
				break;
			}
			case 'UpdatedDate': {
				this.workersCompAllClaimsData.sort(
					function(a, b) {
					    return Date.parse(a.updated) < Date.parse(b.updated) ? -1 : Date.parse(a.updated) > Date.parse(b.updated) ? 1 : 0;
					});
				break;
			}
		}
    }

    onViewClick(data) {
    	this.workersClaimsRowSelected = data.data;    	
		this.openWorkersCompViewModal('lg', this.workersCompDetailsViewModal);
	}

	openWorkersCompViewModal(size, content) {
		this.actionModalHandle = this.modalService.open(content, { size: size });
	}

	isStatusOpen(status) {
		return status.toLowerCase() === 'open';
	}

}
