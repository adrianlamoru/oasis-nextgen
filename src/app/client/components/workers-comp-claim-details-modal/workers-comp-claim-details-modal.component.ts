import { Component, OnInit, Input } from '@angular/core';

import { IWorkersCompClaim } from '../../models';

@Component({
	selector: 'app-workers-comp-claim-details-modal',
	templateUrl: './workers-comp-claim-details-modal.component.html',
	styleUrls: ['./workers-comp-claim-details-modal.component.scss']
})
export class WorkersCompClaimDetailsModalComponent implements OnInit {

	@Input() workersCompClaim: IWorkersCompClaim[];
	@Input() modalCloseFunc;
	@Input() modalDismissFunc;

	constructor() { }

	ngOnInit() {
	}

	isStatusOpen(status) {
		return status.toLowerCase() === 'open';
	}

}
