import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubnavMenu, ClientContacts } from '../../models';
import { SubnavService, ClientContactsService } from '../../services';
import { PhoneMask } from '../../../shared/directives';


// Models

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  subnavMenu: SubnavMenu;
  clientContacts: ClientContacts[];

  public clientContactsForm: FormGroup;
  public clientContactsArray: FormArray;

  tempData: any = '';
  primaryData: any = '';

  constructor(
    private subnavService: SubnavService,
    private clientContactsService: ClientContactsService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  openWebAuthPDF() {
    window.open('/assets/pdf/WebUserAuthorization.pdf', '_blank');
  }

  ngOnInit() {
    this.subnavService.getSubnavData()
      .subscribe(subnav => {
        this.subnavMenu = subnav;
      });

    this.clientContactsService.getClientContacts()
      .subscribe(clientContacts => {
        this.clientContacts = clientContacts;
      });

    this.clientContactsArray = this.formBuilder.array([
      this.formBuilder.group({
        contactType: 'Primary',
        sameAsPrimary: false,
        userData: this.formBuilder.group({
          firstName: 'Sai',
          lastName: 'Ambati',
          title: 'UI Developer',
          email: 'saiambati@oasis.com',
          phone: '(660) 528-5801',
          ext: '4321',
          cellPhone: '(999) 888-7777',
          fax: '(999) 666-5555'
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
            phone: '(561) 765-7654',
            ext: '4321',
            cellPhone: '(561) 765-4321',
            fax: '(561) 123-6543'
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
            phone: '(561) 765-7654',
            ext: '4321',
            cellPhone: '(561) 765-4321',
            fax: '(561) 123-6543'
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
          phone: '(561) 123-1234',
          ext: '1234',
          cellPhone: '(561) 321-4321',
          fax: '(561) 321-3211'
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
            phone: '(561) 765-7654',
            ext: '4321',
            cellPhone: '(561) 765-4321',
            fax: '(561) 123-6543'
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
            phone: '(561) 765-7654',
            ext: '4321',
            cellPhone: '(561) 765-4321',
            fax: '(561) 123-6543'
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
            phone: '(561) 765-7654',
            ext: '4321',
            cellPhone: '(561) 765-4321',
            fax: '(561) 123-6543'
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
            phone: '(561) 765-7654',
            ext: '4321',
            cellPhone: '(561) 765-4321',
            fax: '(561) 123-6543'
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
            phone: '(561) 765-7654',
            ext: '4321',
            cellPhone: '(561) 765-4321',
            fax: '(561) 123-6543'
          })
        }
      )
    ]);

    this.clientContactsForm = this.formBuilder.group({
      clientContactsArray: this.clientContactsArray
    });

  }

  openClientContactsModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  selectedCheckbox(selectedContactId, event: Event, index) {
    this.primaryData = this.clientContactsForm.get(['clientContactsArray', 0, 'userData']).value;

    const checkBoxValue = this.clientContactsForm.get(['clientContactsArray', index, 'sameAsPrimary']).value;
    if (checkBoxValue === true) {
      this.clientContactsForm.get(['clientContactsArray', index, 'userData']).disable();

      this.tempData = this.clientContactsForm.get(['clientContactsArray', index, 'userData']).value;
      this.clientContactsForm.get(['clientContactsArray', index, 'userData']).patchValue(this.primaryData);
    } else {
      this.clientContactsForm.get(['clientContactsArray', index, 'userData']).enable();

      this.clientContactsForm.get(['clientContactsArray', index, 'userData']).patchValue(this.tempData);
    }
  }

}

