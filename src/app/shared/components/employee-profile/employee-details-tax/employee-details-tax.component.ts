import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {UserType} from "../../../models";
import { AuthService, ClientEmployeesService} from "../../../services";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-employee-details-tax',
	templateUrl: './employee-details-tax.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./employee-details-tax.component.scss']
})
export class EmployeeDetailsTaxComponent implements OnInit {
	private sessionProfile: object;
	userType: string;

	private employeeIdSubscription: any;

	@Input() employeeId: string;
	checkSumCount = '';

	/*federalGovernmentData = {
		filingStatus: 'S-Single',
		exemptions: '',
		overrideCode: '',
		overrideAmount: '',
		eicStatus: ''
	};

	stateGovernmentData = {
		state: 'FL',
		filingStatus: '',
		exemptions: '',
		overrideCode: '',
		overrideAmount: ''
	};*/

	federalGovernmentData = {
		filingStatus: 'S-Single',
		withholding: '0',
		overrideType: '',
		overrideAmount: '',
		eicFileStatus: '',
		w4FiledYear: '2008',
		w5FiledYear: '',
		exemptions: ''
	};

	stateGovernmentData = {
		state1: {
			state: 'FL',
			filingStatus: '',
			altCalc: '',
			allowance: '',
			secAllowance: '',
			exemption: '',
			suppExempt: '',
			nonResCert: 'NO',
			overType: '',
			overAmount: ''
		},
		state2: {
			state: '',
			filingStatus: '',
			altCalc: '',
			allowance: '',
			secAllowance: '',
			exemption: '',
			suppExempt: '',
			nonResCert: 'NO',
			overType: '',
			overAmount: ''
		}
	};

	formInformationData = {
		completedInsForm: 'No',
		ircaIdentification: 'FL DL',
		ircaEligibilityDocument: '',
		alienRegistration: '',
		renewDate: '',
		ficaExempt: 'NO'
	};

	constructor(private clientEmpService: ClientEmployeesService,
							private authService: AuthService,
							private route: ActivatedRoute,
							private router: Router) { }

	goToUrl(url: string) {
		window.open(url, '_blank');
	}

	ngOnInit() {
		this.userType = this.authService.getUserType();

		this.authService.getSessionToken().subscribe( (response: any) => {
				this.sessionProfile = response.JSONOUT.responseProfile;
				this.getTaxHoldingData(this.sessionProfile);
			},
			err => {
				console.log(err);
			});
	}

	isClient():boolean {
		return this.userType === UserType.client;
	}

	getTaxHoldingData(profile) {
		this.employeeIdSubscription = this.route.parent.params.subscribe(params => {

			this.employeeId = this.isClient() ? params['employeeId'] : profile.employeeId;

			// console.log(this.employeeId);
			this.clientEmpService.getEmployeeTaxWithHoldingData(profile.sessionToken, this.employeeId).subscribe (
				(res: any) => {
					if (res.JSONOUT.errorMessage) {
						alert(res.JSONOUT.errorMessage);
					} else {
						this.federalGovernmentData = res.JSONOUT.responseBody.federalTax[0];
						this.stateGovernmentData.state1 = res.JSONOUT.responseBody.stateTax1[0];
						this.stateGovernmentData.state2 = res.JSONOUT.responseBody.stateTax2[0];
						this.formInformationData = res.JSONOUT.responseBody.i9Form[0];
						this.checkSumCount = res.JSONOUT.responseProfile.recordChecksum;						
						// End
					}
				},
				err => {
					alert('Error occurred');
				}
			);
		});
	}

}
