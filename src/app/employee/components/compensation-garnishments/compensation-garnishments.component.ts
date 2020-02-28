import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { GarnishmentsDocketReportService } from '../../services/garnishments-docket-report.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CompensationGarnishmentsDocketReportComponent } from '../compensation-garnishments-docket-report/compensation-garnishments-docket-report.component';

@Component({
  selector: 'app-compensation-garnishments',
  templateUrl: './compensation-garnishments.component.html',
  styleUrls: ['./compensation-garnishments.component.scss'],
  providers: [GarnishmentsDocketReportService]
})
export class CompensationGarnishmentsComponent implements OnInit {


  @ViewChild('navbar') navbar: ElementRef;
  
  isLoading = true;
  selectedDocket: string;// = '81212003';
  selectedDisplayDocket: string;// = '81212003';
  disableViewReportButton: boolean = true;


 

  docktetsIDS: string[] = null;// = ['81212003', '81212004', '81212005']
  

  constructor(private garnishmentsDocketReportService: GarnishmentsDocketReportService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  subNavMenuConfig = [
    {
      name: 'Docket Report',
      route: 'docketReport',
      active: true
    },
    {
      name: 'History',
      route: 'docketReportHistory',
      active: null
    }
  ];


  ngOnInit() {
    this.garnishmentsDocketReportService.getReportsIds()
    .subscribe(
      res =>{
        this.docktetsIDS = res;
        this.selectedDocket = this.docktetsIDS[0];
        this.selectedDisplayDocket = this.selectedDocket;
      },
      err =>{
        console.log(err);
      }

    );
   if(!this.docktetsIDS){
     this.docktetsIDS = this.garnishmentsDocketReportService.getReportsIdsNO();
     
      this.selectedDocket = this.docktetsIDS[0];
      this.selectedDisplayDocket = this.selectedDocket;
   }
   setTimeout(() => {

    this.isLoading = false;
  }, 1500);
 
  }


  onSelectionChanged(id: string){
    this.selectedDisplayDocket = id;

    // Enable view report button when there is a change in dropdown
    this.disableViewReportButton = this.selectedDocket === id;
  }

  changeActive(i: number){
    for(var j = 0; j < this.subNavMenuConfig.length; j++){
      if(i != j){
        this.subNavMenuConfig[j].active = null;
      }
    }
    this.subNavMenuConfig[i].active = true;
  }
  getFilteredData(){

    this.isLoading = true;

    setTimeout(() => {
      this.selectedDocket = this.selectedDisplayDocket;
    this.disableViewReportButton = true;
      //this.update();

      this.isLoading = false;
    }, 1500);


    
    //this.subNavMenuConfig[0].active = null;
    //this.subNavMenuConfig[0].active = true;
   
    //this.router.navigate(['docketReport', this.selectedDocket], {relativeTo: this.activatedRoute});
    

      //this.router.navigateByUrl('/employee/compensation/garnischments/docketReport/'+this.selectedDocket);
    
  }

  

}
