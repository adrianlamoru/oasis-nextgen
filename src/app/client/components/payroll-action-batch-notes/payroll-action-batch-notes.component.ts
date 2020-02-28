import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxTextAreaComponent } from 'devextreme-angular';
import { Roster, Batch, Note } from '../../models/index';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payroll-action-batch-notes',
  templateUrl: './payroll-action-batch-notes.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./payroll-action-batch-notes.component.scss']
})
export class PayrollActionBatchNotesComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dxDataGrid: DxDataGridComponent;
  @ViewChild(DxTextAreaComponent) dxTextArea: DxTextAreaComponent;

  @Input() batch: Batch;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  selectedNote: Note;
  notesData: Note[];
  currentNote: string;

  datePipe: DatePipe;

  constructor() {
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  ngOnInit() {
    this.datePipe = new DatePipe('en');
    this.currentNote = '';
    this.notesData = [{
      ID: 1,
      note: 'Batch for all managers in operations.',
      date: new Date()
    }, {
      ID: 2,
      note: 'PTO not included for some employees',
      date: new Date()
    }];
  }

  addNote(): void {
    const currentDate = new Date();
    this.notesData.push({
      ID: +currentDate,
      note: this.currentNote,
      date: currentDate
    });
    this.currentNote = '';
  }

  onSubmitClick(e) {
    this.dxDataGrid.instance.saveEditData();
  }

  onCancelClick(e) {
      this.dxDataGrid.instance.cancelEditData();
  }

  onEditRow(data) {
    this.dxDataGrid.instance.editRow(data.rowIndex);
  }

  onEditKeyDown(event, data) {
      if (event.keyCode === 13) {
          this.onEditRow(data);
      }
  }

  onDeleteRow(data) {
    this.dxDataGrid.instance.deleteRow(data.rowIndex);
  }

  onDeleteKeyDown(event, data) {
      if (event.keyCode === 13) {
          this.onDeleteRow(data);
      }
  }

  onEditingStart(e: any) {
    this.selectedNote = e.data;
  }

  onEditorPreparing(e: any) {
    if (e.dataField === 'note') {
        e.editorName = 'dxTextArea';
    }
  }

  popupTitle = () => {
    return 'Edit Note – ' + this.datePipe.transform(this.selectedNote.date, 'mediumDate');
  }
}
