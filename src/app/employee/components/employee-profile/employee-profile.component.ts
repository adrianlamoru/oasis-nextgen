import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Event, NavigationEnd, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ClientEmployeeDetails, ClientEmployees} from "../../../client/models";
import {WorkersCompClaimsService} from "../../../client/services";
import {UserType} from "../../../shared/models";
import {AuthService, ClientEmployeesService} from "../../../shared/services";
import {ClientDetail} from "../../models";

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

	private sessionProfile: object;
	employeeId: string;
	employeeIdSubscription: any;
	activatedTabsDictionary = {};
	employee: ClientEmployees;

	clientEmployeeModel = <ClientEmployeeDetails>
		{
			employeeEmergencyContact: [{
				name: '',
				relationship: {
					id: 1,
					name: ''
				},
				phone: ''
			}],
			employeeHomeAddress: [],
			employeeMailingAddress: [],
			employeeOtherDetails: [],
			employeePersonalDetails: [],
			employeeW2Address: []
		};

  constructor(
		private router: Router,
		private route: ActivatedRoute,
		private authService: AuthService,
		private clientEmployeesService: ClientEmployeesService,
		// private workersCompClaimsService: WorkersCompClaimsService

	) {
		// router.events.subscribe((event: Event) => {
		// 	if (event instanceof NavigationEnd) {
		// 		if (router.url.includes('/details/employeeReports')) {
		// 			this.isEmployeeReportsTabSelected = true;
		// 		} else {
		// 			this.isEmployeeReportsTabSelected = false;
		// 		}
		// 	}
		// });
	}

  ngOnInit() {
		window.scrollTo(0, 0);
		this.authService.getSessionToken().subscribe((response: any) => {
				this.sessionProfile = response.JSONOUT.responseProfile;
				this.getEmployeeDetailList(this.sessionProfile);
			},
			err => {
				console.log(err);
			});
  }

	getEmployeeDetailList(profile): void {

			this.employeeId = 'S34078';
		  this.employeeId = profile.employeeId;

			let employeeInfo: ClientEmployeeDetails;
			let storingResponse: any;
			this.clientEmployeesService.getEmployeeDetailData(profile.sessionToken, this.employeeId)
				.subscribe(response => {
					console.log('response =>', response);
					storingResponse = response;
					employeeInfo = storingResponse.JSONOUT.responseBody;
					this.clientEmployeeModel = employeeInfo;
				});
	}

}
