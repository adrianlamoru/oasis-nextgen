import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from '../../../shared/services';
import { FileLink } from '../../models';
import { DocumentsFormsSearchService } from '../../services';
import { IBasePage } from '../../models';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-documents-forms-search',
  templateUrl: './documents-forms-search.component.html',
  styleUrls: ['./documents-forms-search.component.scss']
})
export class DocumentsFormsSearchComponent implements OnInit {
  public docList: FileLink[] = [];

  public criteria: string;

  constructor(private router: Router,
              private modalService: NgbModal,
              private fileService: FileService,
              private docFormsSearchService: DocumentsFormsSearchService) {
                this.criteria = '';
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const nextPage: IBasePage = {
          id: null,
          title: event.urlAfterRedirects,
          url: event.urlAfterRedirects
        };
        this.docFormsSearchService.getFileList(nextPage).subscribe((result) => {
          this.docList = result;
        });
      }
    });

    const page: IBasePage = {
      id: null,
      title: this.router.url,
      url: this.router.url
    };
    this.docFormsSearchService.getFileList(page).subscribe((result) => {
      this.docList = result;
    });
  }

  download(doc: FileLink) {
    this.fileService.downloadFileByUrl(doc.url, doc.name);
  }

  openModal(content, size) {
    this.modalService.open(content, { size: size, windowClass : 'document-forms-modal', backdrop: 'static' });
  }
}
