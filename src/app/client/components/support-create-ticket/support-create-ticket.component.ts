import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-support-create-ticket',
  templateUrl: './support-create-ticket.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./support-create-ticket.component.scss']
})
export class SupportCreateTicketComponent implements OnInit {
  @Input() modalCloseFunc?;
  @Input() modalDismissFunc?;

  @Input() selectedCaseCategory?;
  @Input() selectedCaseType?;

  @Output() createTicketEvent = new EventEmitter();

  createTicketForm: FormGroup;

  selectedCategoryItem: any;
  categoryTypes: any[];
  tabSelected = 'tab_summary';

  categoryTypesDropdownItems = [
    {
      categoryName: '401K',
      types: [
        '401k Consultation',
        'Deferral Change/Addition',
        'Loan (Start or Stop)',
        'New Client Sponsored Plan',
        'Plan Questions',
        'Report'
      ]
    },
    {
      categoryName: 'ACA Compliance',
      types: [
        '1094/95 Inquiries',
        'Client Data Change',
        'EE Data Change',
        'Eligibility Status'
      ]
    }, {
      categoryName: 'Benefits',
      types: [
        'Deductoin Service',
        'Disability Inquiry',
        'Eligibility Service Inquiry',
        'FSA/HSA Inquiry',
        'Life Inquiry'
      ]
    }

    // '401K',
    // 'ACA Compliance',
    // 'Benefits',
    // 'Client Data',
    // 'COBRA',
    // 'Enrollment Center',
    // 'Garnishment',
    // 'Human Resources',
    // 'Implementation',
    // 'Payroll',
    // 'Tax',
    // 'Time and Attendance',
    // 'Unemployment',
    // 'Workers Comp',
    // 'WSE Support'
  ];

  priorityDropdownItems = [
    'Critical',
    'High',
    'Medium',
    'Low'
  ];

  constructor(private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.createTicketForm = this.formBuilder.group({
      caseNumber: [null, Validators.required],
      subject: [null, Validators.required],
      category: [null, Validators.nullValidator],
      type: [null, Validators.nullValidator],
      status: ['New', Validators.required],
      priority: [null, Validators.nullValidator],
      detail: [null, Validators.required],
      discussion: [null, Validators.nullValidator],
      resolution: [null, Validators.nullValidator]
    });

    this.createTicketForm.get('category').patchValue(this.selectedCaseCategory);
    this.createTicketForm.get('type').patchValue(this.selectedCaseType);
  }

  updateTabSelection(tabSelected): void {
    this.tabSelected = tabSelected;
  }

  selectedCategory(item) {
    console.log(item);
    this.selectedCategoryItem = item;
    this.categoryTypes = item.types;
    this.createTicketForm.get('category').clearValidators();
    this.createTicketForm.get('category').setValue(item.categoryName);
    this.createTicketForm.get('type').setValue('');
  }

  selectedType(item) {
    this.createTicketForm.get('type').setValue(item);
    this.createTicketForm.get('type').clearValidators();

  }

  selectedPriority(item) {
    this.createTicketForm.get('priority').setValue(item);
    this.createTicketForm.get('priority').clearValidators();

  }

  createTicket() {
    const randomCaseNumber = Math.floor(1000 + Math.random() * 9000);

    console.log(this.createTicketForm);

    this.createTicketForm.get('caseNumber').setValue(randomCaseNumber);
    this.createTicketForm.get('status').setValue('New');

    this.createTicketEvent.emit(this.createTicketForm);
  }
}

