import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Company, States, IStateComplianceDocumentCollection, IDataDriven } from '../../models';
import { FileService } from '../../services';

@Component({
  selector: 'app-human-resources-states-compliance-tax-modal',
  templateUrl: './human-resources-states-compliance-tax-modal.component.html',
  styleUrls: ['./human-resources-states-compliance-tax-modal.component.scss']
})
export class HumanResourcesStatesComplianceTaxModalComponent implements OnInit {
  @Input() company: Company;
  @Input() selectedState: States;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  @Input() title: string;
  @Input() downloadText: string;
  formsCollection: IStateComplianceDocumentCollection;

  constructor(
    private modalService: NgbModal,
    private fileService: FileService
  ) {
    this.title = 'State Compliance and Forms';
    this.downloadText = 'Download Poster';
  }

  ngOnInit() {
    
    this.formsCollection = this.company.stateComplianceDocumentRepo.stateCollection
      .filter(x => x.state.ID === this.selectedState.ID)[0];
  }

  download(documentMeta: IDataDriven) {
    this.fileService.downloadFileById(documentMeta.ID, documentMeta.Text);
  }

}
