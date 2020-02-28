import { Component, OnInit } from '@angular/core';
import { ClientEmployeeDirectDeposit, IDataDriven } from "../../../models";

@Component({
	selector: 'app-employee-details-direct-deposit',
	templateUrl: './employee-details-direct-deposit.component.html',
	styleUrls: ['./employee-details-direct-deposit.component.scss']
})
export class EmployeeDetailsDirectDepositComponent implements OnInit {

	directDepositData: ClientEmployeeDirectDeposit[] = [{
		type: 'TY-001',
		account: 'AC-001',
		amount: 'AM-001',
		status: 'ST-001'
	},
		{
			type: 'TY-002',
			account: 'AC-002',
			amount: 'AM-002',
			status: 'ST-001'
		}];

	typeDataDriven: IDataDriven[] = [{
		ID: 'TY-001',
		Text: 'C'
	},
		{
			ID: 'TY-002',
			Text: 'S'
		}];

	accountDataDriven: IDataDriven[] = [{
		ID: 'AC-001',
		Text: 'xxxx56789'
	},
		{
			ID: 'AC-002',
			Text: 'xxxx98888'
		}];

	amountDataDriven: IDataDriven[] = [{
		ID: 'AM-001',
		Text: '$10.00'
	},
		{
			ID: 'AM-002',
			Text: 'BALANCE'
		}];

	statusDataDriven: IDataDriven[] = [{
		ID: 'ST-001',
		Text: 'Deposit Active'
	},
		{
			ID: 'ST-002',
			Text: 'Deposit Inactive'
		}];

	constructor() { }

	ngOnInit() {
	}

}
