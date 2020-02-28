import { Component, OnInit, Input } from '@angular/core';
import {GarnishmentsHistoryReportService} from '../../services';
import {GarnishmentsHReport} from '../../models'
@Component({
  selector: 'app-compensation-garnishments-docket-history',
  templateUrl: './compensation-garnishments-docket-history.component.html',
  styleUrls: ['./compensation-garnishments-docket-history.component.scss']
})
export class CompensationGarnishmentsDocketHistoryComponent implements OnInit {

  @Input() selectedDocket: string;
  history_report:GarnishmentsHReport[]=[];
  selected_report: GarnishmentsHReport;
  reportsToShow: GarnishmentsHReport[] = [];

  constructor(private _garnishmentsHistoryReportService:GarnishmentsHistoryReportService) { }

  ngOnInit() {
    this.history_report= this._garnishmentsHistoryReportService.getHistoryReport();
    this.selected_report = this.getFromId(this.selectedDocket);
    this.filterByDocketId(this.selectedDocket);
  }

  getFromId(id: string){
    for(var i = 0; i < this.history_report.length; i++){
      if(this.history_report[i].docket_number == id)
      return this.history_report[i];
    }
    return this.history_report[0];
  }

  filterByDocketId(id: string){
    this.reportsToShow = this.history_report.filter(x => id? x.docket_number == id: true);
  }

  filterGranTotal (id: string):number{
    var temp:number = 0;
    for (var i=0;i<this.reportsToShow.length; i++)
      {
        temp+=this.reportsToShow[i].amount_due;
      }
      
      return temp;
    }

}
