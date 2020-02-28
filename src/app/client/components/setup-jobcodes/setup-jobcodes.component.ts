import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DxDataGridComponent, DxPopupComponent } from 'devextreme-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested/column-dxi';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';
import { StatesService, HeaderService } from '../../../shared/services';
import { States, Company } from '../../../shared/models';
import { JobCode } from '../../models';
import { ClientSetupJobcodeService } from '../../services';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-setup-jobcodes',
  templateUrl: './setup-jobcodes.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./setup-jobcodes.component.scss']
})
export class SetupJobcodesComponent implements OnInit {
  @ViewChild('gridContainer') gridContainer: DxDataGridComponent;
  @ViewChild('jCodeForm') jCodeForm: NgForm;

  listOfStates: States[];
  selectedCompany: Company;

  // contentReady: boolean;

  private tokenData: String = '';
  currentSelectedRow: any;
  actionTypeSelected = '';
  popupTitle = '';
  editPopupVisible = false;
  popupRequestCodeVisible = false;

  isJobDropDownBoxOpened = false;
  isPayGradeDropDownBoxOpened = false;
  contentReady = false;
  stateSelectionComponent: any;

  // TODO: Tie this in to the user's actual type.
  // Either PEO or ASO
  userType = 'ASO';

  jobDataRows: JobCode[] = [
    {
      Code: '20185',
      Title: 'User Experience Designer',
      Description: 'Supports product design and development',
      States: [2],
      Exempt: true,
      JobClass: 'Job Class 1',
      EEOJobGroup: 'group-1',
      EEOJobClass: 'eeoClass-1',
      Supervisory: true,
      PayGrade: 'none',
      SpecialRequirements: false,
      ProbationDays: '',
      PerDiemPercent: '',
      IsSalesPosition: false,
      IsTippedPosition: false,
      IsDOT: false
    },
    {
      Code: '20186',
      Title: 'User Experience Designer',
      Description: 'Enables the successful use of digital products',
      States: [1, 2],
      Exempt: false,
      JobClass: 'Job Class 1',
      EEOJobGroup: 'group-1',
      EEOJobClass: 'eeoClass-1',
      Supervisory: true,
      PayGrade: 'none',
      SpecialRequirements: false,
      ProbationDays: '',
      PerDiemPercent: '',
      IsSalesPosition: false,
      IsTippedPosition: false,
      IsDOT: false
    },
    {
      Code: '20187',
      Title: 'Product Owner',
      Description: 'Responsible for managing the project',
      States: [1],
      Exempt: true,
      JobClass: 'Job Class 1',
      EEOJobGroup: 'group-1',
      EEOJobClass: 'eeoClass-1',
      Supervisory: true,
      PayGrade: 'none',
      SpecialRequirements: false,
      ProbationDays: '',
      PerDiemPercent: '',
      IsSalesPosition: false,
      IsTippedPosition: false,
      IsDOT: false
    }
  ];

  jobClassDropDown = [
    {
      ID: 'JC-01',
      Name: 'Job Class 1',
      Description: 'Class 1 description',
      EEOJobGroup: 'Class 1 EEOJG',
      EEOJobClass: 'Class 1 EEOJC',
      Exempt: true
    },
    {
      ID: 'JC-02',
      Name: 'Job Class 2',
      Description: 'Class 2 description',
      EEOJobGroup: 'Class 2 EEOJG',
      EEOJobClass: 'Class 2 EEOJC',
      Exempt: true
    },
    {
      ID: 'JC-03',
      Name: 'Job Class 3',
      Description: 'Class 3 description',
      EEOJobGroup: 'Class 3 EEOJG',
      EEOJobClass: 'Class 3 EEOJC',
      Exempt: false
    }
  ];

  payGradeDropDown = [
    {
      ID: 'PG-01',
      Name: 'Pay Grade 1'
    },
    {
      ID: 'PG-02',
      Name: 'Pay Grade 2'
    },
    {
      ID: 'PG-03',
      Name: 'Pay Grade 3'
    }
  ];

  constructor(
    private modalService: NgbModal,
    private stateServices: StatesService,
    private headerService: HeaderService,
    private authService: AuthService,
    private jobsService: ClientSetupJobcodeService
  ) {}

  ngOnInit() {
    this.stateServices.getUSStatesData().subscribe(states => {
      this.listOfStates = states;
    });

    this.headerService.selectedCompany.subscribe(company => {
      try {
        this.selectedCompany = company;
      } catch (e) {}
    });

    this.authService.getSessionToken().subscribe(
      (response: any) => {
        // console.log('token => ', response.JSONOUT.responseProfile.sessionToken);
        this.tokenData = response.JSONOUT.responseProfile.sessionToken;
        // uncomment the code when service works
        // this.getJobCodeData(this.tokenData);
      },
      err => {
        console.log(err);
      }
    );

    this.currentSelectedRow = {
      Code: '',
      Title: '',
      Description: '',
      States: [],
      Exempt: null,
      JobClass: '',
      EEOJobGroup: '',
      EEOJobClass: '',
      Supervisory: null,
      PayGrade: '',
      SpecialRequirements: null,
      ProbationDays: '',
      PerDiemPercent: '',
      IsSalesPosition: null,
      IsTippedPosition: null,
      IsDOT: null
    };
  }

  getJobCodeData(sessionToken) {
    this.jobsService.getJobCodeData(sessionToken).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          // un comment when service works
          // this.jobDataRows = res.JSONOUT;
          // console.log('res ==>', res);
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }

  setJobCodeData(jobCodeData) {
    this.jobsService.setJobCodeData(jobCodeData).subscribe(
      (res: any) => {
        if (res.JSONOUT.errorMessage) {
          alert(res.JSONOUT.errorMessage);
        } else {
          // console.log('Data inserted');
          this.getJobCodeData(this.tokenData);
        }
      },
      err => {
        alert('Error occurred');
      }
    );
  }

  addCode(): void {
    if (this.jCodeForm) {
      this.jCodeForm.reset();
    }

    this.actionTypeSelected = 'ADD';
    this.updateCurrentSelectedRow({});
    this.updatePopupStaticText();
    if (this.stateSelectionComponent) {
      this.stateSelectionComponent.unselectAll();
    }
    this.editPopupVisible = true;
  }

  openModal(size, content, e) {
    this.modalService.open(content, { size: size });
  }

  onCellButtonClick(e) {
    this.actionTypeSelected =
      e.cellElement.innerText == null
        ? ''
        : e.cellElement.innerText.trim().toUpperCase();

    if (this.actionTypeSelected === 'EDIT') {
      this.updatePopupStaticText();
      this.editPopupVisible = true;
    } else if (this.actionTypeSelected === 'VIEW STATES') {
      const selectedIDs = e.data.States;
      const selectedStates = [];
      if (this.listOfStates) {
        this.listOfStates.forEach(state => {
          if (selectedIDs.indexOf(state.ID) >= 0) {
            selectedStates.push(state.Name);
          }
        });
      }

      e.data.selectedStates = selectedStates;
    }

    this.updateCurrentSelectedRow(e.data);
  }

  onSubmitClick() {
  //  if (this.actionTypeSelected === 'EDIT') {
  //     const myObject = { sessionToken: this.tokenData };
  //     Object.assign(myObject, this.currentSelectedRow);

  //     // comment when service works, just for simulation
  //     for (let i = 0; i < this.jobDataRows.length; i++) {
  //       {
  //         if (this.jobDataRows[i].Code === this.currentSelectedRow.Code) {
  //           this.jobDataRows[i].sessionToken = myObject.sessionToken.toString();
  //         }
  //       }
  //     }
  //     // un comment when service works

  //     // this.setJobCodeData(myObject);
  //   } else if (this.actionTypeSelected === 'ADD') {
  //     const myObject = { sessionToken: this.tokenData };
  //     Object.assign(myObject, this.currentSelectedRow);
  //     // un comment below line when service works
  //     // this.setJobCodeData(myObject);
  //     // delete below line when service works
  //     this.jobDataRows.push(
  //       JSON.parse(JSON.stringify(this.currentSelectedRow))
  //     );
  //   }
    this.editPopupVisible = false;
    this.actionTypeSelected = ''; 
  }

  onRequestCode() {
    console.log('Making the request to add the code... (fake)');
    this.popupRequestCodeVisible = false;
  }

  onCancelClick() {
    this.editPopupVisible = false;
    this.popupRequestCodeVisible = false;
    this.actionTypeSelected = '';

    (this.currentSelectedRow.Code = ''),
      (this.currentSelectedRow.Title = ''),
      (this.currentSelectedRow.Description = ''),
      (this.currentSelectedRow.States = []),
      (this.currentSelectedRow.Exempt = null),
      (this.currentSelectedRow.JobClass = ''),
      (this.currentSelectedRow.EEOJobGroup = ''),
      (this.currentSelectedRow.EEOJobClass = ''),
      (this.currentSelectedRow.Supervisory = null),
      (this.currentSelectedRow.PayGrade = ''),
      (this.currentSelectedRow.SpecialRequirements = null),
      (this.currentSelectedRow.ProbationDays = ''),
      (this.currentSelectedRow.PerDiemPercent = ''),
      (this.currentSelectedRow.IsSalesPosition = null),
      (this.currentSelectedRow.IsTippedPosition = null),
      (this.currentSelectedRow.IsDOT = null);
  }

  updateCurrentSelectedRow(data): void {
    this.currentSelectedRow.Code = data.Code || '';
    this.currentSelectedRow.Title = data.Title || '';
    this.currentSelectedRow.Description = data.Description || '';
    this.currentSelectedRow.States = data.States || [];
    this.currentSelectedRow.Exempt = data.Exempt || null;
    this.currentSelectedRow.JobClass = data.JobClass || '';
    this.currentSelectedRow.EEOJobGroup = data.EEOJobGroup || '';
    this.currentSelectedRow.EEOJobClass = data.EEOJobClass || '';
    this.currentSelectedRow.Supervisory = data.Supervisory || null;
    this.currentSelectedRow.PayGrade = data.PayGrade || '';
    this.currentSelectedRow.SpecialRequirements =
      data.SpecialRequirements || null;
    this.currentSelectedRow.ProbationDays = data.ProbationDays || '';
    this.currentSelectedRow.PerDiemPercent = data.PerDiemPercent || '';
    this.currentSelectedRow.IsSalesPosition = data.IsSalesPosition || null;
    this.currentSelectedRow.IsTippedPosition = data.IsTippedPosition || null;
    this.currentSelectedRow.IsDOT = data.IsDOT || null;
    this.currentSelectedRow.selectedStates = data.selectedStates || null;
  }

  updatePopupStaticText(): void {
    this.popupTitle = this.actionTypeSelected.toLowerCase() + ' Job Code';
  }

  stateSelectionChanged(e: any) {
    const component = e && e.component;

    if (!component) {
      return;
    }

    // cell.setValue(component.getSelectedNodesKeys());
    this.currentSelectedRow.States = component.getSelectedNodesKeys();
  }

  selectedStatesToString(selectedIDs: any) {
    const selectedStates = [];

    if (this.listOfStates) {
      this.listOfStates.forEach(state => {
        if (selectedIDs.indexOf(state.ID) >= 0) {
          selectedStates.push(state.Name);
        }
      });
    }

    return selectedStates.join(', ');
  }

  syncTreeViewSelection(e: any): void {
    const component = e && e.component;
    this.stateSelectionComponent = component;

    if (!component) {
      return;
    }

    this.contentReady = false;
    component.unselectAll();

    if (this.currentSelectedRow.States === undefined) {
      this.currentSelectedRow.States = [];
    }

    if (this.currentSelectedRow.States.length > 0) {
      this.currentSelectedRow.States.forEach(item => {
        component.selectItem(item);
      });
    }

    this.contentReady = true;

    const selectAll = document
      .getElementsByClassName('dx-treeview-select-all-item')
      .item(0);
    selectAll.addEventListener(
      'click',
      function() {
        this.currentSelectedRow.States = component.getSelectedNodesKeys();
      }.bind(this)
    );
  }

  changeJobCodeSelection(item) {
    this.currentSelectedRow.JobClass = item.Name;
    this.currentSelectedRow.Description = item.Description;
    this.currentSelectedRow.EEOJobGroup = item.EEOJobGroup;
    this.currentSelectedRow.EEOJobClass = item.EEOJobClass;
    this.currentSelectedRow.Exempt = item.Exempt;
    this.isJobDropDownBoxOpened = !this.isJobDropDownBoxOpened;
  }

  changePayGradeSelection(item) {
    this.currentSelectedRow.PayGrade = item.Name;
    this.isPayGradeDropDownBoxOpened = !this.isPayGradeDropDownBoxOpened;
  }

  /*
  addCode(): void {
    this.dxDataGrid.instance.addRow();
  }

  onValueChanged(event: any, data: any): void {
    data.setValue(event.value);
  }

  syncTreeViewSelection(e: any, cell: any): void {
    const component = (e && e.component);

    if (!component) {
      return;
    }

    this.contentReady = false;
    component.unselectAll();

    if (cell.value === undefined) {
      cell.setValue([]);
    }

    cell.value.forEach(item => {
      component.selectItem(item);
    });
    this.contentReady = true;

    const selectAll = document.getElementsByClassName('dx-treeview-select-all-item').item(0);
    selectAll.addEventListener('click', function () {
      cell.setValue(component.getSelectedNodesKeys());
    });
  }

  treeView_itemSelectionChanged(e: any, cell: any, c) {
    const component = (e && e.component);

    if (!component) {
      return;
    }

    cell.setValue(component.getSelectedNodesKeys());
  }

  onEditorPreparing(e: any): void {
    if (e.row.inserted) {
      e.editorOptions.disabled = false;
    }
  }

  onInitialized(e: any, cell: any) {
    cell.disabled = true;
    if (cell.row.inserted && cell.row.rowIndex === 0) {
      cell.disabled = false;
    }
  }
  */

  onEnterKeyDown(event, data) {
    if (event.event.code === 'Enter') {
      data.statesOpened = !data.statesOpened;
      event.event.stopPropagation();
    }
  }
}
