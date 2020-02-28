import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  RoutesRecognized
} from '@angular/router';

/* Models */
import { IWouldLikeLink, IPage } from '../../models';

/* Serivces */
import { PageConfigService } from '../../services/page-config.service';
import { NgbModal, NgbActiveModal } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { SupportTicketsService } from '../../../client/services';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { SupportComponent } from '../../../client/containers';



@Component({
  selector: 'app-i-would-like',
  templateUrl: './i-would-like.component.html',
  styleUrls: ['./i-would-like.component.scss']
})
export class IWouldLikeComponent implements OnInit {
  @ViewChild('supportComponentTemplate')
  private supportComponentTemplate: SupportComponent;

  @ViewChild('supportCreateTicketModalTemplate') supportCreateTicketModalTemplate: ViewContainerRef;

  private routeSubscription: any;
  private page: IPage;
  private model: any = { criteria: '' };
  modalActionHandler: NgbActiveModal;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private supportTicketsService: SupportTicketsService,
    private pageConfigService: PageConfigService) { }

  ngOnInit() {
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.model = {};
        this.getData(event.urlAfterRedirects);
      }
    });

    this.getData(this.router.url);
  }

  getData(url: string) {
    this.page = this.pageConfigService.getPageConfig();
  }

  onClick(link: IWouldLikeLink) {
    if (link.link !== '') {
      if (link.link.toLowerCase().startsWith('http')) {
        window.open(link.link, link.target);
      } else if (link.link.toLowerCase().startsWith('/')) {
        if (this.modalActionHandler !== undefined) {
          this.modalActionHandler.close();
        }
        this.router.navigate([link.link]);
      }
    } else if (link.action !== '') {
      const action = link.action;

      if (action === 'createSupportTicket') {
        this.openModal(this.supportCreateTicketModalTemplate, 'sm');
      }
    }
  }

  get diagnosticRouteUrl() { return JSON.stringify(this.router.url); }

  openModal(content, size) {
    this.modalActionHandler = this.modalService.open(content, { size: size });
  }

  createTicket(createTicketForm: NgForm) {
    this.supportTicketsService.getSupportListOfCases().subscribe(
      supportListOfCases => {
        this.supportTicketsService.supportListOfCases = supportListOfCases;
        this.supportTicketsService.supportListOfCases.unshift(createTicketForm.value);
        this.router.navigate(['client/support']);
      }
    );
  }

}
