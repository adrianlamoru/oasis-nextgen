import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';

import { FormGroup, FormArray, FormBuilder, AbstractControl, FormControl } from '@angular/forms';

import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { ClientContacts } from '../../../../models';

import { ClientContactsService } from '../../../../services';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { AbstractStep } from '../../AbstractStep';
import { OnboardingWizardService } from '../../services';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent extends AbstractStep implements OnInit, AfterViewChecked {
  @ViewChild('tabSet')

  private tabSet: NgbTabset;

  public groupId = 'gettingStarted';
  public selectedTab: string;
  public clientContacts: ClientContacts[];
  public clientContactsForm: FormGroup;
  public clientContactsArray: FormArray;

  public tempData: any = '';
  public primaryData: any = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private clientContactsService: ClientContactsService,
              private onboardingWizzardService: OnboardingWizardService,
              protected formService: OnboardingFormService) {
    super(formService);

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const urlParts = router.url.split('/');
        this.selectedTab = urlParts[urlParts.length - 1];
      }
    });
  }

  ngOnInit() {
    super.ngOnInit();

    this.clientContactsService.getClientContacts()
      .subscribe(clientContacts => {
        this.clientContacts = clientContacts;
      });

    this.clientContactsArray = this.formBuilder.array([
      this.formBuilder.group({
        contactType: 'Primary',
        sameAsPrimary: false,
        userData: this.formBuilder.group({
          firstName: 'Sukruthi',
          lastName: 'Atluri',
          title: 'Developer',
          email: 'sukruthi@oasis.com',
          phone: '660-528-5801',
          ext: '1234',
          cellPhone: '660-528-8888',
          fax: '660-519-5191'
        })
      }),
      this.formBuilder.group(
        {
          contactType: 'Secondary',
          sameAsPrimary: false,
          userData: this.formBuilder.group({
            firstName: 'Philip',
            lastName: 'Won',
            title: 'Software Developer',
            email: 'philip.won@oasis.com',
            phone: '561-765-7654',
            ext: '4321',
            cellPhone: '561-765-4321',
            fax: '561-123-6543'
          })
        }
      ),
      this.formBuilder.group(
        {
          contactType: 'CFO/Acct',
          sameAsPrimary: false,
          userData: this.formBuilder.group({
            firstName: 'Philip',
            lastName: 'Won',
            title: 'Software Developer',
            email: 'philip.won@oasis.com',
            phone: '561-765-7654',
            ext: '4321',
            cellPhone: '561-765-4321',
            fax: '561-123-6543'
          })
        }
      ),
      this.formBuilder.group({
        contactType: 'Payroll',
        sameAsPrimary: false,
        userData: this.formBuilder.group({
          firstName: 'Frank',
          lastName: 'Del',
          title: 'Software Developer',
          email: 'frank.del@oasis.com',
          phone: '561-123-1234',
          ext: '1234',
          cellPhone: '561-321-4321',
          fax: '561-321-3211'
        })
      }),
      this.formBuilder.group(
        {
          contactType: 'Benefits',
          sameAsPrimary: false,
          userData: this.formBuilder.group({
            firstName: 'Philip',
            lastName: 'Won',
            title: 'Software Developer',
            email: 'philip.won@oasis.com',
            phone: '561-765-7654',
            ext: '4321',
            cellPhone: '561-765-4321',
            fax: '561-123-6543'
          })
        }
      ),
      this.formBuilder.group(
        {
          contactType: 'Human Resources',
          sameAsPrimary: false,
          userData: this.formBuilder.group({
            firstName: 'Philip',
            lastName: 'Won',
            title: 'Software Developer',
            email: 'philip.won@oasis.com',
            phone: '561-765-7654',
            ext: '4321',
            cellPhone: '561-765-4321',
            fax: '561-123-6543'
          })
        }
      ),
      this.formBuilder.group(
        {
          contactType: '401(k)',
          sameAsPrimary: false,
          userData: this.formBuilder.group({
            firstName: 'Philip',
            lastName: 'Won',
            title: 'Software Developer',
            email: 'philip.won@oasis.com',
            phone: '561-765-7654',
            ext: '4321',
            cellPhone: '561-765-4321',
            fax: '561-123-6543'
          })
        }
      ),
      this.formBuilder.group(
        {
          contactType: 'Safety and W/C Claims',
          sameAsPrimary: false,
          userData: this.formBuilder.group({
            firstName: 'Philip',
            lastName: 'Won',
            title: 'Software Developer',
            email: 'philip.won@oasis.com',
            phone: '561-765-7654',
            ext: '4321',
            cellPhone: '561-765-4321',
            fax: '561-123-6543'
          })
        }
      ),
      this.formBuilder.group(
        {
          contactType: 'Survey',
          sameAsPrimary: false,
          userData: this.formBuilder.group({
            firstName: 'Philip',
            lastName: 'Won',
            title: 'Software Developer',
            email: 'philip.won@oasis.com',
            phone: '561-765-7654',
            ext: '4321',
            cellPhone: '561-765-4321',
            fax: '561-123-6543'
          })
        }
      )
    ]);

    this.clientContactsForm = this.formBuilder.group({
      clientContactsArray: this.clientContactsArray
    });

    this.primaryData = this.clientContactsForm.get(['clientContactsArray', 0, 'userData']);
  }

  ngAfterViewChecked(): void {
    if (this.tabSet) {
      this.tabSet.select(this.selectedTab);
    }
  }

  onTabChange(event: NgbTabChangeEvent) {
    this.onboardingWizzardService.saveAndGo(event.activeId);
    this.router.navigate(['../' + event.nextId], { relativeTo: this.route });
  }

  updatedPrimaryContactListener(e) {
    console.log(e);
    // const updateEmployee = e.updatedEmployee;
    // for (const propertyName in this.selectedEmployee) {
    //   if (e.updatedEmployee.hasOwnProperty(propertyName) && propertyName.toLowerCase().startsWith('dc_')) { // Just to make tslint happy
    //     this.selectedEmployee[propertyName] = e.updatedEmployee[propertyName];
    //   }
    // }
  }
}
