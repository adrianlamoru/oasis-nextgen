
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from '../core/core.module';

import {
  HeaderService,
  MessageService,
  NewsService,
  TasksService,
  StatesService,
  StatusService,
  SortService,
  ErrorMessageCenterService,
  PageConfigService,
  FileService,
  AgreementService,
  ClientLoginNewsService,
  ValidatorService,
  AlertsService,
  DocumentsFormsSearchService,
  DashboardContactsService,
  DashboardSlidesService,
  ClientEmployeesService,
  DirectDepositService
} from './services';

import { HeaderComponent } from './containers';

import {
  MessagesComponent,
  NavbarComponent,
  IWouldLikeComponent,
  EnrichmentAreaComponent,
  AddsCarouselComponent,
  DashboardNewsComponent,
  DashboardAlertsComponent,
  MyTasksComponent,
  DoughnutChartComponent,
  PieChartComponent,
  HistogramChartComponent,
  StackedBarChartComponent,
  AreaChartComponent,
  EditButtonLinkComponent,
  SpiderChartComponent,
  StackedBarChartHorizontalComponent,
  CurrentValueFormatComponent,
  StepWidgetComponent,
  CustomSelectComponent,
  BarChartComponent,
  UploadComponent,
  OasisLoaderComponent,
  UploadFileRestrictionsComponent,
  DocumentsFormsSearchComponent,
  FooterComponent,
  FooterLegalComponent,
  FooterPrivacyComponent,
  FooterRequirementsComponent,
  FooterAgreementComponent,
  FooterSecurityComponent,
  FooterLegalEmployeeComponent,
  FooterPrivacyEmployeeComponent,
  FooterRequirementsEmployeeComponent,
  FooterAgreementEmployeeComponent,
  FooterSecurityEmployeeComponent,
  EmployeeDetailsPersonalComponent,
  EmployeeDetailsTaxComponent,
  EmployeeDetailsDirectDepositComponent,
  DashboardContactsComponent,
  ChangeUsernameModalComponent,
  ChangePasswordModalComponent,
  ProgressBarComponent,
  PasswordStrengthComponent
} from './components';

import {
  SearchFilterPipe, ContainsFilterPipe, GroupByPipe
} from './pipes';

import {
  ClickStopPropagationDirective, PhoneMask
} from './directives';

import { MiddleTruncatePipe } from '../client/pipes';
import { SupportCreateTicketComponent } from '../client/components';

import { HumanResourcesUpcomingReviewsLinksComponent } from './components/human-resources-upcoming-reviews-links/human-resources-upcoming-reviews-links.component';
import { HumanResourcesStatesComplianceTaxComponent } from './components/human-resources-states-compliance-tax/human-resources-states-compliance-tax.component';
import { HumanResourcesStatesComplianceTaxModalComponent } from './components/human-resources-states-compliance-tax-modal/human-resources-states-compliance-tax-modal.component';
import { HumanResourcesTrainingComponent } from './components/human-resources-training/human-resources-training.component';
import { HumanResourcesHandbooksDocumentsComponent } from './components/human-resources-handbooks-documents/human-resources-handbooks-documents.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [
    SupportCreateTicketComponent,
    MessagesComponent,
    NavbarComponent,
    IWouldLikeComponent,
    EnrichmentAreaComponent,
    AddsCarouselComponent,
    DashboardNewsComponent,
    DashboardAlertsComponent,
    MyTasksComponent,
    DoughnutChartComponent,
    PieChartComponent,
    HistogramChartComponent,
    StackedBarChartComponent,
    StackedBarChartHorizontalComponent,
    AreaChartComponent,
    CurrentValueFormatComponent,
    BarChartComponent,
    StepWidgetComponent,
    EditButtonLinkComponent,
    SpiderChartComponent,
    CustomSelectComponent,
    DocumentsFormsSearchComponent,
    EmployeeDetailsPersonalComponent,
    EmployeeDetailsTaxComponent,
    EmployeeDetailsDirectDepositComponent,
    DashboardContactsComponent,
    ProgressBarComponent,
    PasswordStrengthComponent,
    // Modals
    ChangeUsernameModalComponent,
    ChangePasswordModalComponent,

    // Containers
    HeaderComponent,
    // Pipes
    SearchFilterPipe,
    ContainsFilterPipe,
    GroupByPipe,
    MiddleTruncatePipe,
    // Directives
    ClickStopPropagationDirective,
    PhoneMask,
    UploadComponent,
    FooterComponent,
    FooterLegalEmployeeComponent,
    FooterLegalComponent,
    FooterPrivacyEmployeeComponent,
    FooterRequirementsEmployeeComponent,
    FooterAgreementEmployeeComponent,
    FooterSecurityEmployeeComponent,
    FooterPrivacyComponent,
    FooterRequirementsComponent,
    FooterAgreementComponent,
    FooterSecurityComponent,
    OasisLoaderComponent,
    UploadFileRestrictionsComponent,
    HumanResourcesTrainingComponent,
    HumanResourcesHandbooksDocumentsComponent,
    HumanResourcesUpcomingReviewsLinksComponent,
    HumanResourcesStatesComplianceTaxComponent,
    HumanResourcesStatesComplianceTaxModalComponent
  ],
  exports: [
    SupportCreateTicketComponent,
    MessagesComponent,
    IWouldLikeComponent,
    EnrichmentAreaComponent,
    AddsCarouselComponent,
    DashboardNewsComponent,
    DashboardAlertsComponent,
    MyTasksComponent,
    DoughnutChartComponent,
    PieChartComponent,
    BarChartComponent,
    HistogramChartComponent,
    StackedBarChartComponent,
    StackedBarChartHorizontalComponent,
    AreaChartComponent,
    HeaderComponent,
    CurrentValueFormatComponent,
    StepWidgetComponent,
    UploadComponent,
    UploadFileRestrictionsComponent,
    SpiderChartComponent,
    HeaderComponent,
    EditButtonLinkComponent,
    CustomSelectComponent,
    OasisLoaderComponent,
    DashboardContactsComponent,
    HumanResourcesTrainingComponent,
    HumanResourcesHandbooksDocumentsComponent,
    HumanResourcesUpcomingReviewsLinksComponent,
    HumanResourcesStatesComplianceTaxComponent,
    ProgressBarComponent,
    // Pipes
    SearchFilterPipe,
    ContainsFilterPipe,
    GroupByPipe,
    MiddleTruncatePipe,
    // Directives
    ClickStopPropagationDirective,
    PhoneMask,
    FooterComponent,
    DocumentsFormsSearchComponent
  ],
  providers: [
    HeaderService,
    MessageService,
    NewsService,
    TasksService,
    StatesService,
    StatusService,
    SortService,
    ErrorMessageCenterService,
    PageConfigService,
    FileService,
    AgreementService,
    ClientLoginNewsService,
    ValidatorService,
    AlertsService,
    DocumentsFormsSearchService,
    DashboardContactsService,
    DashboardSlidesService,
    ClientEmployeesService,
    DirectDepositService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class SharedModule { }
