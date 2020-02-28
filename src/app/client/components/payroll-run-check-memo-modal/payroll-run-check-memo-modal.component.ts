import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { NgbModal, NgbActiveModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

/* Models */
import { Employee } from '../../models/payroll.interface';

@Component({
  selector: 'app-payroll-run-check-memo-modal',
  templateUrl: './payroll-run-check-memo-modal.component.html',
  styleUrls: ['./payroll-run-check-memo-modal.component.scss']
})
export class PayrollRunCheckMemoModalComponent implements OnInit {
  @Input() employee: Employee;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  @Output() memoSavedEvent = new EventEmitter<any>();

  formGroup: FormGroup;
  formTitle = 'Payroll Check Memo';
  saveBtnLabel: string;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.configureFormValidation();
    this.formTitle += ' - ' + this.employee.employeeName;
    this.saveBtnLabel = this.employee.checkMemo ? 'Save' : 'Add';
  }

  configureFormValidation(): void {
    this.formGroup = this.formBuilder.group({
      checkMemo: [null, [Validators.maxLength(50), Validators.minLength(1)]]
    }, { updateOn: 'submit' });
  }

  saveForm(form: NgForm): void {
    if (form.valid) {
      this.memoSavedEvent.emit({
        checkMemo: this.employee.checkMemo
      });

      this.modalCloseFunc('Form Saved');
    }
  }

}
