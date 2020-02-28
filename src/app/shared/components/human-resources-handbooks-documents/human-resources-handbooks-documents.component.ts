import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-human-resources-handbooks-documents',
  templateUrl: './human-resources-handbooks-documents.component.html',
  styleUrls: ['./human-resources-handbooks-documents.component.scss']
})
export class HumanResourcesHandbooksDocumentsComponent implements OnInit {
  @Input() available: string;
  @Input() humanResourcesActivitesCardData: any;
  @Input() websiteLink: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  openCardModal(size, content) {
    this.modalService.open(content, { size: size });
  }
}

