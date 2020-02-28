import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from '../../../shared/services';

@Component({
  selector: 'app-workers-comp-risk',
  templateUrl: './workers-comp-risk.component.html',
  styleUrls: ['./workers-comp-risk.component.scss'],
  providers: [NgbActiveModal, NgbModal]
})
export class WorkersCompRiskComponent implements OnInit {

  actionModalHandle: NgbModalRef;

  downloadRiskItems = [{
    ID: 1,
    title: 'Risk Download 1'
  }, {
    ID: 2,
    title: 'Risk Download 2'
  }, {
    ID: 3,
    title: 'Risk Download 3'
  }];

  constructor(private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private fileService: FileService) { }

  ngOnInit() {
  }

  download(documentMeta: any) {
    this.fileService.downloadFileById(documentMeta.ID, documentMeta.title);
  }
}
