import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import {confirm, custom} from "devextreme/ui/dialog";
import { ClientEmployees, ClientEmployeeDetails } from '../../../../client/models';
import {IEthnicity, IMaritalStatus, IInterRelationship, IGender, States, IAddress, UserType} from '../../../models';
import { deepCopy } from '../../../utils/deep-copy.helper';
import { HeaderService, MartialStatusService, InterRelationshipService, EthnicityService, GenderService, StatesService, AuthService, ClientEmployeesService } from '../../../services';

@Component({
  selector: 'app-employee-details-personal',
  templateUrl: './employee-details-personal.component.html',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./employee-details-personal.component.scss']
})


//<span  *ngIf="toggle401KValue === false"><input type="text" value="$200.00" size="5" disabled/>  <span class="icon icon-alert-circle"></span></span>

// this.router.navigate(['client/employees/employee', this.selectedEmployee.employeeId]);
export class EmployeeDetailsPersonalComponent implements OnInit {
  @Input() employeeId: string;
	public unsubscribeTooltipText: string = "Please check the Unsubscribe box if you do not wish to receive promotional emails from our Marketing Department";

  @ViewChild('ddHomeAddressState') ddHomeAddressState: NgbDropdown; 
  @ViewChild('ddInterRelationshipBtn') ddInterRelationshipBtn;
  @ViewChild('ddHomeAddressStateBtn') ddHomeAddressStateBtn;
  @ViewChild('ddMaritalStatusBtn') ddMaritalStatusBtn;
  @ViewChild('ddGenderBtn') ddGenderBtn;
  @ViewChild('ddEthnicityBtn') ddEthnicityBtn;
  @ViewChild('ddMailingAddressStateBtn') ddmailingAddressStateBtn;
  @ViewChild('ddw2AddressStateBtn') ddw2AddressStateBtn;
  private sessionProfile: object;
  maritalStatusList: IMaritalStatus[];
  ethnicityList: IEthnicity[];
  genderList: IGender[];
  interRelationshipList: IInterRelationship[];
  statesList: States[] = [];
  clientEmployeeModel: ClientEmployees;
  clientEmployeeDetailsCopyModel: ClientEmployeeDetails;
  clientEmployeeDetailsModel: ClientEmployeeDetails;
  clientEmployeeStore: ClientEmployees;
  isInEditMode = false;
  employeePersonalDetailFormGroup: FormGroup;
  simDataOtherDetail: any[];
  private employeeIdSubscription: any;
  private employeeDate =  new Date('04/01/1975');
  checkSumCount = '';
  userType: string;
  constructor(
    private headerService: HeaderService,
    private martialStatusService: MartialStatusService,
    private interRelationshipService: InterRelationshipService,
    private ethnicityService: EthnicityService,
    private genderService: GenderService,
    private clientEmployeesService: ClientEmployeesService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private stateServices: StatesService,
    private employeePersonalDetailFormBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userType = this.authService.getUserType();

    this.clientEmployeeDetailsCopyModel = null;
    this.clientEmployeeDetailsModel = <ClientEmployeeDetails>
      {
        employeeEmergencyContact: [{
          name: '',
          relationship: {
            id: 1,
            name: ''
          },
          phone: ''
        }],
        employeeHomeAddress: [{
          address1: '',
          address2:  '',
          unitNumber:  '',
          city:  '',
          state: {
            ID: 0,
            Name: ''
          },
          zip:  ''
        }],
        employeeMailingAddress: [{
          address1: '',
          address2:  '',
          unitNumber:  '',
          city:  '',
          state: {
            ID: 0,
            Name: ''
          },
          zip:  ''
        }],
        employeeOtherDetails: [{}],
        employeePersonalDetails: [
          {
            firstName: '',
            lastName: '',
            age: '',
            birthDate: '',
            email: '',
						isUnsubscribeChecked: false,
            employeeId : '',
            ethnicity: '',
            gender: '',
            maritalStatus: '',
            middleName: '',
            nickName: '',
            ssn: '',
            phone1: '',
            phone2: '',
            titleCode: '',
            titleDescription: ''
          }
        ],
        employeeW2Address: [{
          address1: '',
          address2:  '',
          unitNumber:  '',
          city:  '',
          state: {
            ID: 0,
            Name: ''
          },
          zip:  ''
        }]
      };

    this.getData();
    this.configureFormValidation();
    this.authService.getSessionToken().subscribe( (response: any) => {
      this.sessionProfile = response.JSONOUT.responseProfile;
      this.getEmployeeDetailList(this.sessionProfile);
    },
    err => {
      console.log(err);
    });

  }

	isClient():boolean {
		return this.userType === UserType.client;
	}

	getData(): void {
    this.clientEmployeeModel = <ClientEmployees>
      {
        firstName: '',
        lastName: '',
        maritalStatus: {},
        ethnicity: {},
        interRelationship: {},
        gender: {},
        homeAddress: {},
        mailingAddress: {},
        w2Address: {},
        emergencyContact: {}
      };

    // this.getClientEmployee();

    // Get Marital Status List
    this.martialStatusService.getMaritalStatusList()
      .subscribe(response => {
        this.maritalStatusList = response;
      });

    // Get InterRelationship List
    this.interRelationshipService.getInterRelationshipList()
      .subscribe(response => {
        this.interRelationshipList = response;
      });

    // Get Gender List
    this.genderService.getGenderList()
      .subscribe(response => {
        this.genderList = response;
      });

    // Get Ethnicity List
    this.ethnicityService.getEthnicityList()
      .subscribe(response => {
        this.ethnicityList = response;
      });

    // Get State List
    // this.headerService.selectedCompany
    //   .subscribe(company => {
    //     if (company) {
    //       const that = this;
    //       setTimeout(function () {
    //         that.statesList = company.states;
    //         that.clientEmployeeDetailsModel.employeeHomeAddress[0].state = {
    //           ID: 0,
    //           Name: ''
    //         };
    //       }, 100);
    //     }
    //   });
      this.stateServices.getUSStatesData().subscribe(states => {
        this.statesList = states;
      });

    this.simDataOtherDetail = [
      { dataPoint: 'Handicapped', rowName: 'handicapped', value: 'No' },
      { dataPoint: 'Blind', rowName: 'blind', value: 'No' },
      { dataPoint: 'Smoker', rowName: 'smoker', value: 'Yes' },
      { dataPoint: 'Court Ordered Medical', rowName: 'courtOrderedMedical', value: 'No' },
      { dataPoint: 'Hawaii Medical Waiver', rowName: 'hawaiiMedicalWaiver', value: 'No' },
      { dataPoint: 'Mail Check Home', rowName: 'mailCheckHome', value: 'Yes' },
      { dataPoint: 'Officer', rowName: 'officer', value: 'Yes' },
      { dataPoint: 'Citizenship', rowName: 'citizenship', value: 'American' },
      { dataPoint: 'License Plate', rowName: 'licensePlateNumber', value: 'GHY356' },
      { dataPoint: 'License Plate State', rowName: 'stateIssuingLicense', value: 'California' },
      { dataPoint: 'Vietnam Veteran', rowName: 'vietnamVet', value: 'No' },
      { dataPoint: 'Service Medal Veteran', rowName: 'serviceMedalVet', value: 'No' },
      { dataPoint: 'Disabled Veteran', rowName: 'disabledVet', value: 'Yes' },
      { dataPoint: 'Separated Veteran', rowName: 'newlySeparatedVet', value: 'No' },
      { dataPoint: 'Active Duty Veteran', rowName: 'activeDutyVet', value: 'No' },
      { dataPoint: 'Tax Credit Employee', rowName: 'taxCreditEmployee', value: 'Yes' },
      { dataPoint: 'S Corporation', rowName: 'scorpPrincipal', value: 'No' },
      { dataPoint: 'Handbook Mailed', rowName: 'handbookMailedOn', value: 'Yes' },
      { dataPoint: 'Handbook Received', rowName: 'handbookReceivedOn', value: 'No' },
      { dataPoint: 'Max Garnishment %', rowName: 'maxGarnishment', value: '10%' },
      { dataPoint: 'Clock Number', rowName: 'clockNumber', value: '1234657890' }
    ];
  }

  // getClientEmployee(): void {
  //   this.clientEmployeesService.getEmployee(this.employeeId)
  //     .subscribe(response => {
  //       this.clientEmployeeModel = response;
  //       this.storeModel(response); // FOR SIMULATION
  //     });
  // }

  getEmployeeDetailList(profile): void {
    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {

			this.employeeId = this.isClient() ? params['employeeId'] : profile.employeeId;

			let employeeInfo: any = [];
      const updatedSimData = [];
      this.clientEmployeesService.getEmployeeDetailData(profile.sessionToken, this.employeeId)
        .subscribe(response => {
          employeeInfo = response;
          this.clientEmployeeDetailsModel = employeeInfo.JSONOUT.responseBody;
          // this.checkSumCount = employeeInfo.JSONOUT.responseProfile.recordChecksum;
          this.employeeDate = new Date(this.clientEmployeeDetailsModel.employeePersonalDetails[0].birthDate);
          this.simDataOtherDetail.map(item => {
            Object.keys(employeeInfo.JSONOUT.responseBody.employeeOtherDetails[0]).forEach(function(key) {
              if (item.rowName === key) {
                // tslint:disable-next-line:triple-equals
                if (employeeInfo.JSONOUT.responseBody.employeeOtherDetails[0][key] == false) {
                  employeeInfo.JSONOUT.responseBody.employeeOtherDetails[0][key] = 'No';
                // tslint:disable-next-line:triple-equals
                } else if (employeeInfo.JSONOUT.responseBody.employeeOtherDetails[0][key] == true) {
                  employeeInfo.JSONOUT.responseBody.employeeOtherDetails[0][key] = 'Yes';
                }
                updatedSimData.push({dataPoint: item.dataPoint,
                  // tslint:disable-next-line:triple-equals
                  value: (employeeInfo.JSONOUT.responseBody.employeeOtherDetails[0][key])});
              }
            });
          });
          this.simDataOtherDetail = updatedSimData;
          this.storeModel(this.clientEmployeeDetailsModel); // FOR SIMULATION
        });

    });
  }

  configureFormValidation(): void {
    const zipRegEx = '[0-9]{5}';
    const fourdigitRegEx = '[0-9]{4}';
    const emailRegEx = '^[^<>\\s\@]+(\\@[^<>\\s\\@]+(\\.[^<>\\s\\@]+)+)$';
    // Replaced phoneRegex to match PhoneMask regex
    // const phoneRegEx = '^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$';
    const phoneRegEx = '^(\d{0,3})(\d{0,3})(.*)';

    this.employeePersonalDetailFormGroup = this.employeePersonalDetailFormBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      middleName: [null, Validators.maxLength(1)],
      nickname: [null],
      dob: [null, Validators.required],
      age: [null, Validators.required],
      employeeId: [null, Validators.required],
      ssn: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      gender: [null, Validators.required],
      phone1: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14),Validators.pattern(phoneRegEx)]],
      phone2: [null, [Validators.minLength(10), Validators.maxLength(14)]],
      email: [null, [Validators.required, Validators.pattern(emailRegEx)]],
			isUnsubscribeChecked: [null],
      homeAddressLine1: [null, Validators.required],
      homeAddressLine2: [null],
      homeAddressUnitNumber: [null],
      homeAddressCity: [null, Validators.required],
      homeAddressZip: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern(zipRegEx)]],
      homeAddressZipPlusFour: [null, [Validators.minLength(4), Validators.maxLength(4), Validators.pattern(fourdigitRegEx)]],
      mailingAddressLine1: [null, Validators.required],
      mailingAddressIsSameAsHome: [null],
      mailingAddressLine2: [null],
      mailingAddressUnitNumber: [null],
      mailingAddressCity: [null, Validators.required],
      mailingAddressZip: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern(zipRegEx)]],
      w2AddressIsSameAsHome: [null],
      w2AddressLine1: [null, Validators.required],
      w2AddressLine2: [null],
      w2AddressUnitNumber: [null],
      w2AddressCity: [null, Validators.required],
      w2AddressZip: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern(zipRegEx)]],
      contactName: [null],
      contactPhoneNumber: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14),Validators.pattern(phoneRegEx)]]
    }, { updateOn: 'blur' });

    this.employeePersonalDetailFormGroup.controls['firstName'].disable();
    this.employeePersonalDetailFormGroup.controls['lastName'].disable();
    this.employeePersonalDetailFormGroup.controls['middleName'].disable();
    this.employeePersonalDetailFormGroup.controls['nickname'].disable();
    this.employeePersonalDetailFormGroup.controls['dob'].disable();
    this.employeePersonalDetailFormGroup.controls['age'].disable();
    this.employeePersonalDetailFormGroup.controls['employeeId'].disable();
    this.employeePersonalDetailFormGroup.controls['ssn'].disable();
    this.ddGenderBtn.nativeElement.disabled = true;
    this.ddEthnicityBtn.nativeElement.disabled = true;
    this.ddMaritalStatusBtn.nativeElement.disabled = true;
    this.employeePersonalDetailFormGroup.controls['gender'].disable();
    this.employeePersonalDetailFormGroup.controls['phone1'].disable();
    this.employeePersonalDetailFormGroup.controls['phone2'].disable();
    this.employeePersonalDetailFormGroup.controls['email'].disable();
    this.employeePersonalDetailFormGroup.controls['isUnsubscribeChecked'].disable();
    this.employeePersonalDetailFormGroup.controls['homeAddressLine1'].disable();
    this.employeePersonalDetailFormGroup.controls['homeAddressLine2'].disable();
    this.employeePersonalDetailFormGroup.controls['homeAddressUnitNumber'].disable();
    this.employeePersonalDetailFormGroup.controls['homeAddressCity'].disable();
    this.ddHomeAddressStateBtn.nativeElement.disabled = true;
    this.employeePersonalDetailFormGroup.controls['homeAddressZip'].disable();
    this.employeePersonalDetailFormGroup.controls['mailingAddressIsSameAsHome'].disable();
    this.employeePersonalDetailFormGroup.controls['mailingAddressLine1'].disable();
    this.employeePersonalDetailFormGroup.controls['mailingAddressLine2'].disable();
    this.employeePersonalDetailFormGroup.controls['mailingAddressUnitNumber'].disable();
    this.employeePersonalDetailFormGroup.controls['mailingAddressCity'].disable();
    this.ddmailingAddressStateBtn.nativeElement.disabled = true;
    this.employeePersonalDetailFormGroup.controls['mailingAddressZip'].disable();
    this.employeePersonalDetailFormGroup.controls['w2AddressIsSameAsHome'].disable();
    this.employeePersonalDetailFormGroup.controls['w2AddressLine1'].disable();
    this.employeePersonalDetailFormGroup.controls['w2AddressLine2'].disable();
    this.employeePersonalDetailFormGroup.controls['w2AddressUnitNumber'].disable();
    this.employeePersonalDetailFormGroup.controls['w2AddressCity'].disable();
    this.ddw2AddressStateBtn.nativeElement.disabled = true;
    this.employeePersonalDetailFormGroup.controls['w2AddressZip'].disable();
    this.employeePersonalDetailFormGroup.controls['contactName'].disable();
    this.ddInterRelationshipBtn.nativeElement.disabled = true;
    this.employeePersonalDetailFormGroup.controls['contactPhoneNumber'].disable();

    this.isInEditMode = false;

  }

	// onDeleteRow(data) {
	// 	const confirmDialog = confirm('Are you sure you want to delete this record?', null);
	// 	confirmDialog.then((dialogResult: any) => {
	// 		if (dialogResult) {
	// 			this.leaveTypes.splice(data.rowIndex, 1);
	// 		}
	// 	});

  saveForm(form: NgForm): void {

      if (form.valid && this.isInEditMode) {

      	if (this.isClient()) {
					this.saveModel();
				}
      	else {
					// const confirmDialog = confirm('By submitting this form you acknowledge that this information is complete and accurate. If any other personal information (not on this form) has changed recently and you wish for your records to be updated, please contact your employer.', 'Disclaimer');
					const confirmDialog = custom({
						title: 'Disclaimer',
						message: 'By submitting this form you acknowledge that this information is complete and accurate. If any other personal information (not on this form) has changed recently and you wish for your records to be updated, please contact your employer.',
						buttons: [
							{
								text: 'Submit',
								onClick: (e) => {
									this.saveModel();
								}
							},
							{
								text: 'Cancel',
								onClick: (e) => {
									this.toggleFormMode(true);
								}
							}
						],
					});

					confirmDialog.show();
				}

      }
  }

  saveModel() {
		this.storeModel(this.clientEmployeeDetailsModel);
		this.toggleFormMode(true);
  }

  cancelModel() {
    this.clientEmployeeDetailsModel = this.clientEmployeeDetailsCopyModel;
    this.toggleFormMode(true);
  }

  ngbDropdownChange(obj: any, propertyName: string, selectedItem: any) {
    obj[propertyName] = selectedItem.Name;
  }

  syncWithHomeAddress(e: any, addressTypeString: string): void {
    addressTypeString = addressTypeString.toLowerCase();

    if (this.isInEditMode) {
      if (addressTypeString === 'home') {
        if (this.clientEmployeeModel.mailingAddress.isSameAsHomeAddress) {
          this.syncAddressObj(this.clientEmployeeModel.homeAddress, this.clientEmployeeModel.mailingAddress);
        }

        if (this.clientEmployeeModel.w2Address.isSameAsHomeAddress) {
          this.syncAddressObj(this.clientEmployeeModel.homeAddress, this.clientEmployeeModel.w2Address);
        }
      } else if (e.value === true) {
        if (addressTypeString === 'mailing') {
          this.syncAddressObj(this.clientEmployeeModel.homeAddress, this.clientEmployeeModel.mailingAddress);
          this.toggleMailingAddressFields(false);
        } else if (addressTypeString === 'w2') {
          this.syncAddressObj(this.clientEmployeeModel.homeAddress, this.clientEmployeeModel.w2Address);
          this.toggleW2AddressFields(false);
        }
      } else {
        if (addressTypeString === 'mailing') {
          this.toggleMailingAddressFields(true);
        } else if (addressTypeString === 'w2') {
          this.toggleW2AddressFields(true);
        }
      }
    } else {
      this.toggleMailingAddressFields(false);
      this.toggleW2AddressFields(false);
    }
  }

  syncAddressObj(sourceObj: IAddress, destinationObj: IAddress): void {
    destinationObj.address1 = sourceObj.address1;
    destinationObj.address2 = sourceObj.address2;
    destinationObj.unitNumber = sourceObj.unitNumber;
    destinationObj.city = sourceObj.city;
    destinationObj.state = sourceObj.state;
    destinationObj.zip = sourceObj.zip;
  }

  toggleFormMode(isDisabled?: boolean): void {
    this.isInEditMode = !isDisabled;
    // console.log('toggleFormMode:' + this.isInEditMode);
    if (this.isInEditMode) {
      // this.setFormAsUntouched();
      this.employeePersonalDetailFormGroup.controls['phone1'].enable();
      this.employeePersonalDetailFormGroup.controls['phone2'].enable();
      this.employeePersonalDetailFormGroup.controls['email'].enable();
			this.employeePersonalDetailFormGroup.controls['isUnsubscribeChecked'].enable();
      this.employeePersonalDetailFormGroup.controls['homeAddressLine1'].enable();
      this.employeePersonalDetailFormGroup.controls['homeAddressLine2'].enable();
      this.employeePersonalDetailFormGroup.controls['homeAddressUnitNumber'].enable();
      this.employeePersonalDetailFormGroup.controls['homeAddressCity'].enable();
      this.ddHomeAddressStateBtn.nativeElement.disabled = false;
      this.employeePersonalDetailFormGroup.controls['homeAddressZip'].enable();
      this.employeePersonalDetailFormGroup.controls['mailingAddressIsSameAsHome'].enable();
      this.employeePersonalDetailFormGroup.controls['w2AddressIsSameAsHome'].enable();
      this.employeePersonalDetailFormGroup.controls['contactName'].enable();
      this.ddInterRelationshipBtn.nativeElement.disabled = false;
      this.employeePersonalDetailFormGroup.controls['contactPhoneNumber'].enable();

      this.syncWithHomeAddress(this.employeePersonalDetailFormGroup.controls['mailingAddressIsSameAsHome'], 'mailing');
      this.syncWithHomeAddress(this.employeePersonalDetailFormGroup.controls['w2AddressIsSameAsHome'], 'w2');
    } else {
      if (this.clientEmployeeStore) {
        this.clientEmployeeModel = JSON.parse(JSON.stringify(this.clientEmployeeStore)); // FOR SIMULATION
      }

      this.employeePersonalDetailFormGroup.controls['phone1'].disable();
      this.employeePersonalDetailFormGroup.controls['phone2'].disable();
      this.employeePersonalDetailFormGroup.controls['email'].disable();
      this.employeePersonalDetailFormGroup.controls['isUnsubscribeChecked'].disable();
      this.employeePersonalDetailFormGroup.controls['homeAddressLine1'].disable();
      this.employeePersonalDetailFormGroup.controls['homeAddressLine2'].disable();
      this.employeePersonalDetailFormGroup.controls['homeAddressUnitNumber'].disable();
      this.employeePersonalDetailFormGroup.controls['homeAddressCity'].disable();
      this.ddHomeAddressStateBtn.nativeElement.disabled = true;
      this.employeePersonalDetailFormGroup.controls['homeAddressZip'].disable();
      this.employeePersonalDetailFormGroup.controls['mailingAddressIsSameAsHome'].disable();
      this.employeePersonalDetailFormGroup.controls['w2AddressIsSameAsHome'].disable();
      this.employeePersonalDetailFormGroup.controls['contactName'].disable();
      this.ddInterRelationshipBtn.nativeElement.disabled = true;
      this.employeePersonalDetailFormGroup.controls['contactPhoneNumber'].disable();

      this.toggleMailingAddressFields(false);
      this.toggleW2AddressFields(false);
    }

    this.setFormAsUntouched();
  }

  editBtnListener(event) {
    this.clientEmployeeDetailsCopyModel = deepCopy(this.clientEmployeeDetailsModel);
    this.toggleFormMode(event.isDisabled);
  }

  toggleMailingAddressFields(enable: boolean): void {

    if (enable) {
      this.employeePersonalDetailFormGroup.controls['mailingAddressLine1'].enable();
      this.employeePersonalDetailFormGroup.controls['mailingAddressLine2'].enable();
      this.employeePersonalDetailFormGroup.controls['mailingAddressUnitNumber'].enable();
      this.employeePersonalDetailFormGroup.controls['mailingAddressCity'].enable();
      this.ddmailingAddressStateBtn.nativeElement.disabled = false;
      this.employeePersonalDetailFormGroup.controls['mailingAddressZip'].enable();
    } else {
      this.employeePersonalDetailFormGroup.controls['mailingAddressLine1'].disable();
      this.employeePersonalDetailFormGroup.controls['mailingAddressLine2'].disable();
      this.employeePersonalDetailFormGroup.controls['mailingAddressUnitNumber'].disable();
      this.employeePersonalDetailFormGroup.controls['mailingAddressCity'].disable();
      this.ddmailingAddressStateBtn.nativeElement.disabled = true;
      this.employeePersonalDetailFormGroup.controls['mailingAddressZip'].disable();
    }

  }

  toggleW2AddressFields(enable: boolean): void {
    if (enable) {
      this.employeePersonalDetailFormGroup.controls['w2AddressLine1'].enable();
      this.employeePersonalDetailFormGroup.controls['w2AddressLine2'].enable();
      this.employeePersonalDetailFormGroup.controls['w2AddressUnitNumber'].enable();
      this.employeePersonalDetailFormGroup.controls['w2AddressCity'].enable();
      this.ddw2AddressStateBtn.nativeElement.disabled = false;
      this.employeePersonalDetailFormGroup.controls['w2AddressZip'].enable();
    } else {
      this.employeePersonalDetailFormGroup.controls['w2AddressLine1'].disable();
      this.employeePersonalDetailFormGroup.controls['w2AddressLine2'].disable();
      this.employeePersonalDetailFormGroup.controls['w2AddressUnitNumber'].disable();
      this.employeePersonalDetailFormGroup.controls['w2AddressCity'].disable();
      this.ddw2AddressStateBtn.nativeElement.disabled = true;
      this.employeePersonalDetailFormGroup.controls['w2AddressZip'].disable();
    }
  }

  setFormAsUntouched(): void {
    const controls = this.employeePersonalDetailFormGroup.controls;
    for (const propertyName in controls) {
      if (controls.hasOwnProperty(propertyName)) { // Just to make tslint happy
        controls[propertyName].markAsUntouched();
      }
    }

  }

  storeModel(obj: ClientEmployeeDetails): void {
    this.clientEmployeeStore = JSON.parse(JSON.stringify(obj));
  }

  get diagnosticEmployee() { return JSON.stringify(this.clientEmployeeModel); }
  get diagnosticFormGroupControls() {
    try {
      const controls = this.employeePersonalDetailFormGroup.controls;
      const obj = [];

      for (const propertyName in controls) {
        if (controls.hasOwnProperty(propertyName)) { // Just to make tslint happy
          obj.push({
            id: propertyName,
            value: controls[propertyName].value,
            status: controls[propertyName].status,
            dirty: controls[propertyName].dirty,
            touched: controls[propertyName].touched,
            errors: controls[propertyName].errors
          });
        }
      }
      // console.log(obj);
      return JSON.stringify(obj);
    } catch (e) {
      return e;
    }
  }
}
