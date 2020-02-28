import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FileService } from '../../../shared/services';
import { SubnavMenu } from '../../models';
import { SubnavService } from '../../services';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  subnavMenu: SubnavMenu;

  constructor(
    private modalService: NgbModal,
    private subnavService: SubnavService,
    private router: Router,
    private fileService: FileService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.subnavService.getSubnavDataForReports()
    .subscribe(subnavForReports => {
      this.subnavMenu = subnavForReports;
    });
  }
}
