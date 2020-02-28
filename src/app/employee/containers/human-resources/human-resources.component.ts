import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../shared/services';


import { States} from '../../../shared/models';

@Component({
  selector: 'app-human-resources',
  templateUrl: './human-resources.component.html',
  styleUrls: ['./human-resources.component.scss']
})
export class HumanResourcesComponent implements OnInit {

  hrTraining = {
    title: 'Training',
    previewItemsList: [
    { docName: 'eLearning Center Instructions for Employees', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
    { docName: 'eLearning Center Report Running Instructions', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
    { docName: 'Oasis-sponsored Compliance Courses', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
    { docName: 'Oasis-sponsored Management Courses', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
    { docName: 'Oasis-sponsored MS Office 2010 Courses', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
    { docName: 'Oasis-sponsored MS Office 2013 Courses', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
    { docName: 'Oasis-sponsored Professional Skill Courses', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
    { docName: 'eLearning for Purchase Course Catalog', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
    { docName: 'All Client Webinar Schedule', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
    { docName: 'All Client Webinar Archive', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' }
    ]};

    hrHandbookDocuments = {
      title: 'Handbooks & Documents',
      previewItemsList: [
      { docName: 'Oasis CORE and California Handbook (English)', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
      { docName: 'Oasis CORE and California Handbook (Spanish)', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
      { docName: 'Oasis CORE Handbook (Creole)', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
      { docName: 'Oasis CORE Handbook (English)', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' },
      { docName: 'Oasis CORE Handbook (Spanish)', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf' }
      ]};

    trainingLink = 'http://somewebsite.com';

    linksCardData = {
      title: 'Links',
      previewItemsList: [{name: 'W-2/1095-C Services', reviewLink: 'http://www.w2.services'},
                         {name: 'Federal and State Labor Posters', reviewLink: 'http://www.federalstatelabor.com'},
                         {name: 'Employment Verification', reviewLink: 'http://www.verification.com'}]
    };

  stateTaxPostsStates: States[] = [
    {ID: 1, Name: 'Alaska', StateCompliancePoster: {ID: '1', Text: 'Poster'} },
    {ID: 2, Name: 'Canada', StateCompliancePoster: {ID: '1', Text: 'Poster'}}];

  hCards = {
    'showLinks': true,
    'showStateTaxForms': true,
    'showTraining': true,
    'showHandbooksDocuments': true

  };
  constructor(private headerService: HeaderService) { }

  ngOnInit() {

  }


  openCTAButtonAction(link, btnLinkConfig) {
    window.open(link, btnLinkConfig);
  }

}
