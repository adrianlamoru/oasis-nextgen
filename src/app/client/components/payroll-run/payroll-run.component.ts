import { Component, OnInit, ViewEncapsulation, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Element } from '@angular/compiler';
import { DxDataGridComponent, DxListComponent, DxDateBoxComponent, DxSelectBoxComponent } from 'devextreme-angular';

import { PayrollService } from '../../services';
import { Employee, Batch, Roster } from '../../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payroll-run',
  templateUrl: './payroll-run.component.html',
  styleUrls: ['./payroll-run.component.scss'],
  providers: [NgbActiveModal, NgbModal]
})
export class PayrollRunComponent implements OnInit {
  @ViewChild('payrollActionDownload') payrollActionDownload: ViewContainerRef;
  @ViewChild('payrollActionUpload') PayrollActionUpload: ViewContainerRef;
  @ViewChild('payrollActionNotes') payrollActionNotes: ViewContainerRef;
  @ViewChild('payrollOffCycleBatch') payrollOffCycleBatch: ViewContainerRef;
  @ViewChild('payrollActionBatchNotes') payrollActionBatchNotes: ViewContainerRef;
  @ViewChild('supportCreateTicketModalTemplate') supportCreateTicketModalTemplate: ViewContainerRef;
  @ViewChild('gridContainer') gridContainer: DxDataGridComponent;

  @Input() isDashboard;

  private batches: Batch[] = [];
  private actionModalHandle: NgbModalRef;
  private selectedRoster: Roster;
  private rosterStep1URLTemplate = '/client/payroll/run/batch/{batchId}/roster/{rosterId}/hours-earnings';

  private currentBatch: Batch;
  private restartPopupVisible = false;

  contextMenuCommonActions: any[] = [{
    id: 'Open',
    name: 'Open'
  }, {
    id: 'Download',
    name: 'Download'
  }, {
    id: 'Upload',
    name: 'Upload'
  }, {
    id: 'Notes',
    name: 'Notes'
  }, {
    id: 'Restart',
    name: 'Restart',
  }];

  constructor(private router: Router,
    private payrollService: PayrollService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.batches = [];

    const batchList = this.payrollService.getBatchesList();

    for (const batch of batchList) {
      if (!batch.isManual) {
        this.batches.push(batch);
      }
    }
  }

  public getDropdownActions(currentRoster: any): any[] {
    if (!currentRoster.items) {
      currentRoster.items = [{
        id: 'actions',
        name: 'ACTIONS',
        items: []
      }];

      const currentItems = currentRoster.items[0].items;
      for (const item of this.contextMenuCommonActions) {
        currentItems.push(item);

        if (currentRoster.isOffCycle && item.id === 'Open') {
          currentItems.push({
            id: 'Edit',
            name: 'Edit'
          });
        }
      }
    }

    const currentRosterItems = currentRoster.items[0].items;

    if (this.payrollService.inRecycleRoster(currentRoster.id)) {
      const restartItem = currentRosterItems[currentRosterItems.length - 1];
      if (restartItem.name !== 'Undo Restart') {
        restartItem.name = 'Undo Restart';
      }
    } else {
      const undoRestartItem = currentRosterItems[currentRosterItems.length - 1];
      if (undoRestartItem.name !== 'Restart') {
        undoRestartItem.name = 'Restart';
      }
    }

    return currentRoster.items;
  }

  runRegularPayroll() {
    this.goToRosterPayRollStep(this.selectedRoster);
  }

  onEditOffCycleBatchClick() {
    this.openActionModal('xs', this.payrollOffCycleBatch);
  }

  onOffCycleBatchClick() {
    this.selectedRoster = this.payrollService.addNewOffCycleRoster();
    this.openActionModal('xs', this.payrollOffCycleBatch);
  }

  updateSelectedRoster(updatedRoster: Roster): void {
    this.selectedRoster.id = updatedRoster.id;
    this.selectedRoster.batchNumber = updatedRoster.batchNumber;
    this.selectedRoster.status = updatedRoster.status;
    this.selectedRoster.location = updatedRoster.location;
    this.selectedRoster.description = updatedRoster.description;
    this.selectedRoster.checkDate = updatedRoster.checkDate;
    this.selectedRoster.startDate = updatedRoster.startDate;
    this.selectedRoster.endDate = updatedRoster.endDate;
    this.selectedRoster.frequency = updatedRoster.frequency;
    this.selectedRoster.total = updatedRoster.total;
    this.selectedRoster.totalPayroll = updatedRoster.totalPayroll;
    this.selectedRoster.totalDeductions = updatedRoster.totalDeductions;
    this.selectedRoster.employees = updatedRoster.employees;
    this.selectedRoster.payGroup = updatedRoster.payGroup;
  }

  saveRoster(updatedRoster: Roster): void {
    if (updatedRoster.batchNumber) {
      this.updateSelectedRoster(updatedRoster);
    } else {
      this.payrollService.addNewOffCycleRosterToBatch(updatedRoster);
    }

    this.ngOnInit();
  }

  onCellClick(event: { columnIndex: number, data: Roster }) {
    /*
     if (event.columnIndex !== 5) {
       this.goToRosterPayRollStep(event.data);
     }
     */
  }

  goToRosterPayRollStep(roster: Roster) {
    const url = this.payrollService.getCurrentStep(roster.batchNumber, roster.id);
    this.router.navigate([url]);
  }

  isSubmittedRoster(roster: Roster) {
    return this.payrollService.getCurrentNumberStep(roster.batchNumber, roster.id) === 4;
  }

  mapSubmitted(roster: Roster, items: any[]): any[] {
    if (this.isSubmittedRoster(roster)) {
      const tempItems: any[] = [];

      while (items[0].items.length > 0) {
        tempItems.push(items[0].items.pop());
      }

      items[0].items.push({
        id: 'ContactOasis',
        name: 'Contact Oasis'
      });

      while (tempItems.length > 0) {
        const item = tempItems.pop();
        if (item.id !== 'ContactOasis') {
          items[0].items.push({
            id: item.id,
            name: item.name,
            disabled: true
          });
        }
      }
    }

    return items;
  }

  public getDropdownMenuActions(currentRoster: Roster) {
    const items = this.getDropdownActions(currentRoster);
    const mappedItems = this.mapSubmitted(currentRoster, items);
    return mappedItems;
  }

  goToManualRosterPayRollStep() {
    const url = this.payrollService.getCurrentStep('', '');
    this.router.navigate([url]);
  }

  onRowPrepared(event) {
    if (event.data.status === 'In Progress') {
      event.rowElement.attributes.class.value += ' status-batch-progress';
    } else if (event.data.status === 'New') {
      event.rowElement.attributes.class.value += ' status-batch-new';
    } else if (event.data.status === 'Past Due') {
      event.rowElement.attributes.class.value += ' status-batch-past-due';
    }
  }

  openActionModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });

    this.actionModalHandle.result.then((data) => {
      if (data !== 'Cancel') {
        this.gridContainer.instance.refresh();
        const el = document.getElementById('gridFooter');
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  onDropdownClick(args, obj, menu) {
    if (!args.itemData) {
      return;
    }

    this.selectedRoster = obj.data;

    if (args.itemData.id === 'actions') {
      if (menu.instance._visibleSubmenu) {
        setTimeout(function () {
          if (menu.instance._visibleSubmenu) {
            menu.instance._visibleSubmenu.hide();
          }
        }, 100);
        return;
      }
    }

    if (args.itemData.id === 'Open') {
      this.runRegularPayroll();
    } else if (args.itemData.id === 'Edit') {
      this.onEditOffCycleBatchClick();
    } else if (args.itemData.id === 'Download') {
      this.openActionModal('xs', this.payrollActionDownload);
    } else if (args.itemData.id === 'Upload') {
      this.openActionModal('sm', this.PayrollActionUpload);
    } else if (args.itemData.id === 'Notes') {
      this.openActionModal('xs', this.payrollActionNotes);
    } else if (args.itemData.name === 'Restart') {
      this.onRestart();
    } else if (args.itemData.name === 'Undo Restart') {
      this.payrollService.backToDumped(this.selectedRoster.id);
      this.ngOnInit();
    } else if (args.itemData.id === 'ContactOasis') {
      this.openActionModal('sm', this.supportCreateTicketModalTemplate);
    }
  }

  openActionBatchNotesModal(batch) {
    this.currentBatch = batch;
    this.openActionModal('xs', this.payrollActionBatchNotes);
  }

  onRestart() {
    this.restartPopupVisible = true;
  }

  onNoRestartClick() {
    this.restartPopupVisible = false;
  }

  onYesRestartClick() {
    this.restartPopupVisible = false;
    this.payrollService.resetRoster(this.selectedRoster);
    this.ngOnInit();
  }
}
