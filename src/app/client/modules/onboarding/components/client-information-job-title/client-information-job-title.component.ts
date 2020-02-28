import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { confirm } from 'devextreme/ui/dialog';
import { AbstractStep } from '../../AbstractStep';
import form from '../../../../../../../node_modules/devextreme/ui/form';
import { OnboardingFormService } from '../../services/onboarding-form.service';
import { OnboardingWizardService } from '../../services';

@Component({
  selector: 'app-client-information-job-title',
  templateUrl: './client-information-job-title.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./client-information-job-title.component.scss']
})
export class ClientInformationJobTitleComponent extends AbstractStep implements OnInit {
  @ViewChild('dxDataGrid') dxDataGrid: DxDataGridComponent;

  public groupId = 'jobTitle';
  public contentReadyRowEdited = false;
  public insertingRow = false;


  flsaExemptCheckboxGroup = {
    yes: false,
    no: false
  };

  jobTitlesDataRows = [{
    'ID': 1,
    'JobStates': ['AL'],
    'W/C_Code': '42341',
    'JobCode': '45623',
    'JobTitle': 'Mechanic',
    'JobDescription': 'Make things work again',
    'FLSA_Exempt': true,
    'inserting': false,
    'statesOpened': false
    }, {
      'ID': 2,
      'JobStates': ['AK'],
      'W/C_Code': '45622',
      'JobCode': '42341',
      'JobTitle': 'Registered Nurse',
      'JobDescription': 'Heal people',
      'FLSA_Exempt': false,
      'inserting': false,
      'statesOpened': false
    },
    {
      'ID': 3,
      'JobStates': [],
      'W/C_Code': '',
      'JobCode': '',
      'JobTitle': '',
      'JobDescription': '',
      'FLSA_Exempt': false,
      'inserting': true,
      'statesOpened': false
      }
  ];

  multiselected: any[];

  statesDropdown: any[] = [{
    name: 'Alabama',
    abbr: 'AL',
    value: false
    },
    {
      name: 'Alaska',
      abbr: 'AK',
      value: false
    },
    {
      name: 'American Samoa',
      abbr: 'AS',
      value: false
    },
    {
      name: 'Arizona',
      abbr: 'AZ',
      value: false
    },
    {
      name: 'Arkansas',
      abbr: 'AR',
      value: false
    },
    {
      name: 'California',
      abbr: 'CA',
      value: false
    },
    {
      name: 'Colorado',
      abbr: 'CO',
      value: false
    }
  ];

  selectedStates = [];

  constructor(protected formService: OnboardingFormService) {
    super(formService);
  }

  ngOnInit() {
    this.createFLSA_Exempt();

    this.multiselected = [];
    // this.disabled = false;
    this.jobTitlesDataRows.forEach(j => this.multiselected.push({ID: j.ID, JobStates: j.JobStates}));
  }

  createFLSA_Exempt() {
    if (this.jobTitlesDataRows.length > 0) {
      this.jobTitlesDataRows.forEach((jobTitle) => {
        this.selectedStates.push({
          id: jobTitle.ID,
          selection: jobTitle.FLSA_Exempt
        });
      });
    }
  }

  updateFLSA_Exempt(selectedRow: any) {
    if (this.selectedStates.length < 0) {
      return;
    }
    const index = this.selectedStates.findIndex(e => e.id === selectedRow.ID);
    if (index === -1) {
      this.selectedStates.push({
        id: selectedRow.ID,
        selection: selectedRow.FLSA_Exempt
      });
    } else {
      this.selectedStates[index].selection = selectedRow.FLSA_Exempt;
    }
  }

  onChangeCellValue(selectedRow: any, event: any) {
    if (event.event) {
      const index = this.selectedStates.findIndex(s => s.id === selectedRow.ID);
      if (index !== -1) {
        if (event.element.innerText === 'Yes') {
          this.selectedStates[index].selection = event.value;
        }
        if (event.element.innerText === 'No') {
          this.selectedStates[index].selection = !event.value;
        }
      }
    }
  }

  removeFLSA_Exempt(selectedRow: any) {
    const index = this.selectedStates.findIndex(e => e.id === selectedRow.ID);
    if (index !== -1) {
      this.selectedStates.splice(index, 1);
    }
  }

  isFLSA_Exempt(data: any) {
    const index = this.selectedStates.findIndex(s => s.id === data.ID);
    if (index !== -1) {
      return this.selectedStates[index].selection;
    }
    return false;
  }

  onContentReadydxTreeView(e, cell: any) {
    const component = (e && e.component);
    if (!component) {
      return;
    }

    this.contentReadyRowEdited = false;
    component.unselectAll();

    if (cell.value === undefined) {
      cell.setValue([]);
    }

    cell.value.forEach(item => {
      component.selectItem(item);
    });
    this.contentReadyRowEdited = true;

    const multiselected = this.multiselected;
    const setMultiSelected = this.setMultiSelected;

    const selectAll = document.getElementsByClassName('dx-treeview-select-all-item').item(0);
    selectAll.addEventListener('click', function () {
      setMultiSelected(cell.data, component.getSelectedNodesKeys(), multiselected);
    });
  }

  onItemSelectionChangedRowEdited(e, cell: any) {
    const component = (e && e.component);
    if (!component) {
      return;
    }
    this.setMultiSelected(cell.data, component.getSelectedNodesKeys());
  }

  onAddRow(data) {
    this.jobTitlesDataRows[data.rowIndex].inserting = false;
    const inserted = {
      'ID': this.jobTitlesDataRows[data.rowIndex].ID + 1,
      'JobStates': [],
      'W/C_Code': '',
      'JobCode': '',
      'JobTitle': '',
      'JobDescription': '',
      'FLSA_Exempt': true,
      'inserting': true,
      'statesOpened': false
      };
    this.jobTitlesDataRows.push(inserted);
    this.updateFLSA_Exempt(data);
  }

  onDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.jobTitlesDataRows.splice(data.rowIndex, 1);
        this.removeFLSA_Exempt(data);
      }
    });
  }

  onAddKeyDown(event, data) {
      if (event.keyCode === 13) {
          this.onAddRow(data);
      }
  }

  onDeleteKeyDown(event, data) {
      if (event.keyCode === 13) {
          this.onDeleteRow(data);
      }
  }

  getMultiSelected(data: any): number[] {
    const selected = this.multiselected.find(j => j.ID === data.ID);

    if (selected) {
      return selected.JobStates;
    }

    return data.JobStates;
  }

  setMultiSelected(data: any, ids: number[], multiselected?: any[]) {
    if (!multiselected) {
      multiselected = this.multiselected;
    }
    const selected = multiselected.find(j => j.ID === data.ID);

    if (selected) {
      selected.JobStates = ids;
    } else {
      data.JobStates = ids;
    }
  }

  onEnterKeyDown(event, data) {
    if (event.event.code === 'Enter') {
      data.statesOpened = !data.statesOpened;
      event.event.stopPropagation();
    }
  }

  onClosed(event, data) {
    const selected = this.multiselected.find(j => j.ID === data.ID);
    data.JobStates = selected.JobStates;
  }

  onGroupedCheckBoxChanged(group, variable, event) {
    if (!event.value) {
      return;
    }

    for (const property in this[group]) {
      if (property !== variable) {
        this[group][property] = false;
      }
    }
  }
}
