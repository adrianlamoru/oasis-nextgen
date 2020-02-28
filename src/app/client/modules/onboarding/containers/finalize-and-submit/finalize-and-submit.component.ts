import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-finalize-and-submit',
  templateUrl: './finalize-and-submit.component.html',
  styleUrls: ['./finalize-and-submit.component.scss']
})
export class FinalizeAndSubmitComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openUploadModal(size, content) {
    this.modalService.open(content, { size: size });
  }

}
