import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Key } from 'protractor';
import { GarnishmentsDocketReportService } from '../../services/garnishments-docket-report.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { GarnishmentsReport } from '../../models';



@Component({
  selector: 'app-compensation-garnishments-docket-report',
  templateUrl: './compensation-garnishments-docket-report.component.html',
  styleUrls: ['./compensation-garnishments-docket-report.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [GarnishmentsDocketReportService]
  
})
export class CompensationGarnishmentsDocketReportComponent implements OnInit {

  @Input() selectedDocket: string;

  innerData: any = null;
  allData: any[] = null;
  isLoading = false;
  showOldData = false;

  finalInnerData: GarnishmentsReport;
  finalAllData: GarnishmentsReport[];
    
  constructor(private garnishmentsDocketReportService: GarnishmentsDocketReportService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.garnishmentsDocketReportService.getReports()
    .subscribe(
      res =>{
        this.allData = res;
      },
      err =>{
console.log(err);
      }
    );
    if(!this.allData){
      this.allData = this.garnishmentsDocketReportService.getReportsNO();
    }

    this.garnishmentsDocketReportService.getFinalReports()
    .subscribe(
      res =>{
        this.finalAllData = res;
      },
      err =>{
        console.log(err);
      }
    );
    if(!this.finalAllData){
      this.finalAllData = this.garnishmentsDocketReportService.getFinalReportsNO();
    }
    
    this.innerData = this.obtainDocketFromId(this.selectedDocket);
    this.finalInnerData = this.obtainFinalDocketFromId(this.selectedDocket);
    //console.log('this.finalInnerData:' + this.finalInnerData.docketNumber);
    
    setTimeout(() => {

      this.isLoading = false;
    }, 1500);
  }
  
  obtainDocketFromId(id: string){
    for(var i = 0; i < this.allData.length; i++){
      if(this.allData[i]['Docket Number'] == id){
        return this.allData[i];
      }
      
    }
    return this.allData[0];
    
  }
  obtainFinalDocketFromId(id: string){
    for(var i = 0; i < this.finalAllData.length; i++){
      if(this.finalAllData[i].docketNumber == id){
        return this.finalAllData[i];
      }
      
    }
    return this.finalAllData[0];
    
  }
  obtainKeys(){
    
    return Object.keys(this.innerData);
  }

}
