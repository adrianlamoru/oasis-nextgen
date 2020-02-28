import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from '../../../shared/services';

@Component({
  selector: 'app-hr-e-learning',
  templateUrl: './hr-e-learning.component.html',
  styleUrls: ['./hr-e-learning.component.scss']
})
export class HrELearningComponent implements OnInit {
  @Input() available: boolean;


  eLearningCardData = {
    title: 'eLearning',
    subText: 'Online training and talent solutions for your people.',
    previewItemsList: ['Customized course offering',
      'Videos and books',
      'Major categories of instruction',
      'Enable and empower your people '],
    websiteLink: 'http://www.oasisadvantage.com/'
  };

  eLearningModalData = {
    title: 'eLearning',
    description: `Support your employees with a library of material as well as custom content you develop and add.`,
    features: ['Business Skill Training', 'Digital Skills Training', 'Compliance Training'],
    additionalInfo: [
      {
        text: 'eLearning Website',
        link: 'https://oasispayroll.skillport.com/'
      },
      {
        text: 'Top Five Benefits of ELearning',
        link: 'https://elearningindustry.com/benefits-of-using-elearning-tools-for-staff-training'
      }],
    };

  constructor(
    private modalService: NgbModal,
    private fileService: FileService) { }

  ngOnInit() {  }

  openButtonAction(link) {
    window.open(link, '_blank');
  }

    openCardModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  openELearningDetailsModal(size, content, indexValue) {
    // this.benefitsDetailsModalData = this.benefitsPlanList[indexValue];
    // console.log(this.benefitsDetailsModalData);
    this.modalService.open(content, { size: size });
  }

  download(documentMeta: any) {
    this.fileService.downloadFileById(documentMeta.ID, documentMeta.title);
  }

  openWebAuthPDF() {
    window.open('/assets/pdf/samplePDFForPrint.pdf', '_blank');
  }

  openAdditionalInfoAction(additionalInfoItem){
    window.open(additionalInfoItem.link, '_blank');
  }

}
