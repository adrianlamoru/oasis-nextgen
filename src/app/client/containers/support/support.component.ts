import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SupportAnalyticsService, SupportTicketsService } from '../../services/index';
import { StackedHorizontalData, PieData } from '../../../shared/models';
import { ISupportTicket } from '../../models';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  @ViewChild('tabSet') ngbTabSet;

  @ViewChild('supporTabRef') supporTabRef;

  // supportListOfCases: ISupportTicket[];
  filteredListOfCases: ISupportTicket[];

  tabToOpen = 'tab-critical';

  constructor(private modalService: NgbModal,
              private supportAnalyticsService: SupportAnalyticsService,
              private supportTicketsService: SupportTicketsService) { }
  horizontalBarChartData: StackedHorizontalData[];
  customSuppportPaletteCharts: string[] = ['#d53680', '#1a52ce', '#33bf96', '#cacdd3'];
  pieChartData: PieData[];

  ngOnInit() {
    this.getHorizontalBarChartDataSource();
    this.getPieDataSource();
    if (this.supportTicketsService.supportListOfCases === null || this.supportTicketsService.supportListOfCases === undefined) {
      this.getSupportTicketsData();
    }
  }

  getHorizontalBarChartDataSource() {
    this.supportAnalyticsService.getSupportHorizontalBarChartData().subscribe(
      horizontalBarChartData => {
        this.horizontalBarChartData = horizontalBarChartData;
      }
    );
  }

  getPieDataSource() {
    this.supportAnalyticsService.getSupportPieChartData().subscribe(
      pieChartData => {
        this.pieChartData = pieChartData;
      }
    );
  }

  getCaseCountByPriority(caseSensivity) {
    this.filteredListOfCases = [];
    if (this.supportTicketsService.supportListOfCases !== undefined) {
      this.filteredListOfCases = this.supportTicketsService.supportListOfCases.filter(function(item) {
        return item.priority === caseSensivity;
      });
      return this.filteredListOfCases.length;
    }
}

  getSupportTicketsData() {
    this.supportTicketsService.getSupportListOfCases().subscribe(
      supportListOfCases => {
        this.supportTicketsService.supportListOfCases = supportListOfCases;
      }
    );
  }

  OpenCreateTicketModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  createTicket(createTicketForm: NgForm) {

    this.supportTicketsService.supportListOfCases.unshift(createTicketForm.value);

    this.ngbTabSet.select(createTicketForm.value.priority);

    this.supporTabRef.ngOnInit();

  }
}
