import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Roster, Note } from '../../models/index';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payroll-action-notes',
  templateUrl: './payroll-action-notes.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./payroll-action-notes.component.scss']
})
export class PayrollActionNotesComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dxDataGrid: DxDataGridComponent;

  @Input() roster: Roster;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  currentNote: string;
  selectedNote: Note;
  notesData: Note[];

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
      note: `Payroll includes last week's three new hires`,
      date: new Date()
    }, {
      ID: 2,
      note: 'PTO not included for Simon Winchester',
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

  onEditorPreparing(e: any) {
    if (e.dataField === 'note') {
        e.editorName = 'dxTextArea';
    }
  }

  onInitNewRow(e: any) {
  }

  onEditingStart(e: any) {
    this.selectedNote = e.data;
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

  popupTitle = () => {
    return 'Edit Note – ' + this.datePipe.transform(this.selectedNote.date, 'mediumDate');
  }
}
