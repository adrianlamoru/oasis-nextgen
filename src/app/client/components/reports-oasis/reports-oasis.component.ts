import { Component, OnInit } from '@angular/core';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { confirm } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-reports-oasis',
  templateUrl: './reports-oasis.component.html',
  styleUrls: ['./reports-oasis.component.scss']
})
export class ReportsOasisComponent implements OnInit {

  selectedBeginningDate: NgbDateStruct;

  selectedEndDate: NgbDateStruct;

  reports = [];

  menuOptions = [{
    id: 'actions',
    name: 'ACTIONS',
    items: [{
      id: 'Open',
      name: 'Open'
    }, {
      id: 'Delete',
      name: 'Delete'
    }]
  }];

  constructor() { }

  ngOnInit() {

    window.scroll(0, 0);
    const today = new Date();
    this.selectedBeginningDate = {
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear()
    };
    this.selectedEndDate = {
      day: today.getDate(),
      month: today.getMonth() + 2,
      year: today.getFullYear()
    };

    this.createSimulatedData();
  }

  createSimulatedData() {
    this.reports = [{
      reportName: 'Employee Check Register No Titles Batch 1234567890 04/22/11 PM CSV',
      runDate: '11/30/2018'
    }, {
      reportName: 'Employee Check Register No Titles Batch 1234567890 04/22/11 PM CSV',
      runDate: '11/30/2018'
    }, {
      reportName: 'Employee Check Register No Titles Batch 1234567890 04/22/11 PM CSV',
      runDate: '11/30/2018'
    }, {
      reportName: 'Employee Check Register No Titles Batch 1234567890 04/22/11 PM CSV',
      runDate: '11/30/2018'
    }];
  }

  onDeleteRow() {
    const confirmDialog = confirm('Are you sure you want to delete this record?', 'Delete record');
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        console.log('Report deleted');
      }
    });
  }

  onDropdownClick(args, obj, menu) {

    if (!args.itemData) {
      return;
    }

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
      console.log('Open report here');
    } else if (args.itemData.id === 'Delete') {
      this.onDeleteRow();
    }
  }

  getFilteredData() {
    console.log('Get Filtered data.');
  }
}
