import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ClientEmployeeProjectDetails, ISupportTicket } from '../../models/index';
import { ClientEmployeeProjectDetailsService, SupportTicketsService } from '../../services/index';

@Component({
  selector: 'app-dashbaord-projects-and-services',
  templateUrl: './dashbaord-projects-and-services.component.html',
  styleUrls: ['./dashbaord-projects-and-services.component.scss']
})
export class DashbaordProjectsAndServicesComponent implements OnInit {

	tabSelected = '';
	tab_P = 'Projects';
	tab_S = 'Support';
	buttonText: string = '';
	noOfProjects: number = 0;
	noOfServices: number = 0;
	selectedCaseData: ISupportTicket;

	projectsDetailsList: ClientEmployeeProjectDetails[];
	supportListOfCases: ISupportTicket[];

 	constructor(private router: Router,
 				private modalService: NgbModal,
 				private clientEmployeeProjectDetailsService: ClientEmployeeProjectDetailsService,
 				private supportTicketsService: SupportTicketsService) { }

	ngOnInit() {
		this.tabSelected = this.tab_S; 
		this.buttonText = 'See All Projects';
		this.getProjectDataSource();
		this.getSupportTicketsData();
	}

	getProjectDataSource() {
		this.clientEmployeeProjectDetailsService.getEmployeeProjectDetailsData().subscribe(
		  	projectsData => {
		    	this.projectsDetailsList = projectsData;
		    	this.noOfProjects = this.projectsDetailsList? this.projectsDetailsList.length : 0;
		  	}
		);
	}

	getSupportTicketsData() {
	    this.supportTicketsService.getSupportListOfCases().subscribe(
			supportListOfCases => {
				this.supportListOfCases = supportListOfCases;
				this.noOfServices = this.supportListOfCases? this.supportListOfCases.length : 0;				
				if(this.noOfProjects === 0 && this.noOfServices > 0) {
					this.tabSelected = this.tab_S; 
				}
			}
	    );
	}

	updateTabSelection(tabSelected): void {
		this.tabSelected = tabSelected;   
		this.buttonText = this.tabSelected === this.tab_P ? 'See All Projects' : 'Open Support';   
	}

	openProjectsSupportLink() {
		let linkToOpen =  this.tabSelected === this.tab_P ? '/client/onboarding' : '/client/support'
		this.router.navigate([linkToOpen]);
	}

	openSupport() {
		let linkToOpen =  '/client/support';
		this.router.navigate([linkToOpen]);
	}

	openSupportTicketDetails(caseNumberRef, size, content) {
		this.selectedCaseData = this.supportListOfCases.find(
		  caseItem => caseItem.caseNumber === caseNumberRef
		);
		this.modalService.open(content, { size: size});
	}

	openMarketplace() {
		this.router.navigate(['/client/bizvault']);
	}

	get showLink() {
		return (this.tabSelected === this.tab_P && this.noOfProjects > 0) || (this.tabSelected === this.tab_S && this.noOfServices > 0); 
	}
}
