import { Component, OnInit, Input } from '@angular/core';

/* Models */
import { States, IPage, PageLabel, Company, IDataDriven } from '../../models';


/* Services */
import { StatesService, PageConfigService, HeaderService, FileService } from '../../services';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-human-resources-states-compliance-tax',
  templateUrl: './human-resources-states-compliance-tax.component.html',
  styleUrls: ['./human-resources-states-compliance-tax.component.scss']
})
export class HumanResourcesStatesComplianceTaxComponent implements OnInit {
  @Input() company: Company;
  @Input() titleModal: string;
  @Input() downloadModalText: string;
  @Input() states: States[];
  @Input() page: IPage;


  model: any = {};
  posterCardLabelCode: 'POSTERS-AND-FORMS-CARD';
  posterCardLabel: PageLabel;
  defaultPosterCardLabel: PageLabel;
  title: string;

  modalOpening: boolean;
  constructor(
    private pageConfigService: PageConfigService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService,
    private modalService: NgbModal,
    private fileService: FileService
  ) { }

  ngOnInit() {
    this.modalOpening = false;
    if(this.page){
      this.modalOpening = true;
    }
    this.title = this.titleModal;
    this.defaultPosterCardLabel = {
      code: 'POSTERS-AND-FORMS-CARD',
      description: 'Poster Card',
      displayTitle: this.title ? this.title : 'State Things for Client and Employee views',
      displayText: 'Oasis has the state-specific resources you need.'
    };

    //this.page = this.pageConfigService.getPageConfig();
    if(this.page){
      this.posterCardLabel = this.page.pageLabels.filter(x => x.code === this.posterCardLabelCode)[0];
    }
    if (this.posterCardLabel === undefined || this.posterCardLabel === null) {
      this.posterCardLabel = this.defaultPosterCardLabel;
    }
  }

  ngbDropdownChange(obj: any, propertyName: string, selectedItem: any) {
    obj[propertyName] = selectedItem;
  }

  openActionModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  download(documentMeta: IDataDriven) {
    this.fileService.downloadFileById(documentMeta.ID, documentMeta.Text);
  }
}
