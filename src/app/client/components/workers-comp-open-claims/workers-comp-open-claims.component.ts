import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { IWorkersCompClaim } from '../../models';
import { WorkersCompClaimsService } from '../../services';

@Component({
  selector: 'app-workers-comp-open-claims',
  templateUrl: './workers-comp-open-claims.component.html',
  styleUrls: ['./workers-comp-open-claims.component.scss']
})
export class WorkersCompOpenClaimsComponent implements OnInit {

	@ViewChild('workersCompDetailsViewModalForOpen') workersCompDetailsViewModalForOpen: ViewContainerRef;

	@Input() workersCompOpenClaimsData: IWorkersCompClaim[];
	workersClaimsRowSelected: IWorkersCompClaim[];
	actionModalHandle: NgbModalRef;

	constructor(private modalService: NgbModal) { }

	ngOnInit() { }

    onViewClick(data) {
		this.workersClaimsRowSelected = data;
		this.openWorkersCompViewModal('lg', this.workersCompDetailsViewModalForOpen);
	}

	openWorkersCompViewModal(size, content) {
		this.actionModalHandle = this.modalService.open(content, { size: size });
	}
}
