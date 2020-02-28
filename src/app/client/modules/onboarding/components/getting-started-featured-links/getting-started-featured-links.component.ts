import { Component, OnInit } from '@angular/core';
import { FileLink } from '../../../../../shared/models';
import { NgbModal } from '../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { FileService } from '../../../../../shared/services';
import { DocumentsFormsSearchService } from '../../../../../shared/services';

@Component({
  selector: 'app-getting-started-featured-links',
  templateUrl: './getting-started-featured-links.component.html',
  styleUrls: ['./getting-started-featured-links.component.scss']
})
export class GettingStartedFeaturedLinksComponent implements OnInit {
  public docList: FileLink[];
  searchQuery: string;

  constructor(private modalService: NgbModal,
              private fileService: FileService,
              private docFormsSearchService: DocumentsFormsSearchService) {
  }

  ngOnInit() {
    this.docFormsSearchService.getGettingStartedFileList().subscribe((result) => {
      this.docList = result;
    });
  }

  download(doc: FileLink) {
    this.fileService.downloadFileByUrl(doc.url, doc.name);
  }

  openModal(content, size) {
    this.modalService.open(content, { size: size });
  }

}
