import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray, FormControl, FormControlName } from '@angular/forms';
import { ValidatorService } from '../../../../shared/services';
import { AbstractStep } from '../AbstractStep';
import { WorksiteAddress, AchDebitSetup } from '../models';

@Injectable()
export class OnboardingFormService {
  private form: FormGroup;

  constructor(private fb: FormBuilder,
              private validator: ValidatorService) {
    this._build();
  }

  /**
   * Returns the forms at the specified level.
   * @param step First level step
   * @param substep Second level step
   */
  public get(...steps: string[]): FormGroup {
    return this._getRec(this.form, ...steps);
  }

  private _getRec(form: FormGroup, ...steps: string[]): FormGroup {
    const stepName = steps.shift();
    const step = form.get(stepName) as FormGroup;
    if (step) {
      if (steps.length) {
        return this._getRec(step, ...steps);
      } else {
        return step;
      }
    }
    return null;
  }

  /**
   * Returns true if all field validation under the step either passes or has
   *  not been touched.
   * @param step First level step
   * @param substep Second level step
   */
  public checkGroupValidation(step: string, substep?: string): boolean {
    const group = <FormGroup>this.get(step, substep);
    if (!group) {
      return true;
    }
    return this._areControlsValid(group);
  }

  /**
   * Recursivly calls itself to check for validity according to the
   *  definition that something is valid if it is untouched OR valid.
   * @param toVerify AbstractControl to check if it or it's children
   * controls are valid
   */
  private _areControlsValid(toVerify: AbstractControl): boolean {
    if (toVerify instanceof FormControl) {
      return toVerify.valid || !toVerify.touched || toVerify.disabled;
    } else if (toVerify instanceof FormGroup || toVerify instanceof FormArray) {
      let allValid = true;
      for (const key in toVerify.controls) {
        if (allValid && toVerify.controls[key]) {
          const control = toVerify.controls[key];
          allValid = allValid && this._areControlsValid(control);
        }
      }
      return allValid;
    }
  }

  public addAuthorizedClientContact(contactType: string) {
    const newGroup = this.fb.group({
      contactType: [contactType],
      sameAsPrimary: [false],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone1: ['', [Validators.required, this.validator.PhoneNumber]],
      ext1: [''],
      phone2: [''],
      ext2: [''],
      fax: [''],
      webAccess: [''],
    });
    const group = this.get('gettingStarted', 'authorizedClientContacts') as FormGroup;
    const list = group.controls['list'] as FormArray;
    list.push(newGroup);
  }

  public addFeinEntity(fein: string, name: string) {
    const newGroup = this.fb.group({
      fein: [fein],
      entityName: [name],
    });
    const group = this.get('setupClient', 'businessStructure') as FormGroup;
    const list = group.controls['fein'] as FormArray;
    list.push(newGroup);
  }

  public removeFeinEntity(index: number) {
    const group = this.get('setupClient', 'businessStructure') as FormGroup;
    const list = group.controls['fein'] as FormArray;
    list.removeAt(index);
  }

  public addWorksiteLocation(location: string) {
    const newGroup = this.fb.group({
      name: [location, Validators.required],
    });
    const group = this.get('setupClient', 'locations') as FormGroup;
    const list = group.controls['locations'] as FormArray;
    list.push(newGroup);
  }

  public removeWorksiteLocation(index: number) {
    const group = this.get('setupClient', 'locations') as FormGroup;
    const list = group.controls['locations'] as FormArray;
    list.removeAt(index);
  }

  public addWorksiteAddress(location: WorksiteAddress) {
    const newGroup = this.fb.group({
      code: [location.code, Validators.required],
      name: [location.name, Validators.required],
      address1: [location.address1, Validators.required],
      address2: [location.address2],
      city: [location.city, Validators.required],
      township: [location.township],
      state: [location.state, Validators.required],
      zip: [location.zip, [Validators.required, this.validator.Zip]],
      contactName: [location.contactName, Validators.required],
      contactNumber: [location.contactNumber, [Validators.required, this.validator.PhoneNumber]],
    });
    const group = this.get('setupClient', 'addresses') as FormGroup;
    const list = group.controls['addresses'] as FormArray;
    list.push(newGroup);
  }

  public removeWorksiteAddress(index: number) {
    const group = this.get('setupClient', 'addresses') as FormGroup;
    const list = group.controls['addresses'] as FormArray;
    list.removeAt(index);
  }

  public addAchDebitSetup(setup: AchDebitSetup) {
    const newGroup = this.fb.group({
      bankName: [setup.bankName, Validators.required],
      routingNumber: [setup.routingNumber, Validators.required],
      routingNumberConfirm: [setup.routingNumberConfirm, Validators.required],
      accountNumber: [setup.accountNumber, Validators.required],
      accountNumberConfirm: [setup.accountNumberConfirm, Validators.required],
      allocationCode: [setup.allocationCode],
      allocationDescription: [setup.allocationDescription],
    });
    const group = this.get('setupClient', 'addresses') as FormGroup;
    const list = group.controls['addresses'] as FormArray;
    list.push(newGroup);
  }

  public removeAchDebitSetup(index: number) {
    const group = this.get('setupClient', 'addresses') as FormGroup;
    const list = group.controls['addresses'] as FormArray;
    list.removeAt(index);
  }

  private _validatePaymentMethod(group: FormGroup) {
    const achDebit = group.get('achDebit');
    const wireTransfer = group.get('wireTransfer');
    const groupValid = achDebit.value || wireTransfer.value;
    return groupValid ? null : { paymentMethod: true };
  }

  private _validateJointEmployerGroup(group: FormGroup) {
    const jointEmployerYes = group.get('jointEmployerYes');
    const jointEmployerNo = group.get('jointEmployerNo');
    const groupValid = jointEmployerYes.value || jointEmployerNo.value;
    return groupValid ? null : { jointEmployerGroup: true };
  }

  // STEP 3 - VALIDATIONS - Start
  //// STEP 3A - Start
  private _validateIndependantContractors(group: FormGroup) {
    const independantContractorsYes = group.get('independantContractorsYes');
    const independantContractorsNo = group.get('independantContractorsNo');
    const groupValid = independantContractorsYes.value || independantContractorsNo.value;
    return groupValid ? null : { independantContractorsGroup: true };
  }

  private _validateFederalContracts(group: FormGroup) {
    const federalContractsYes = group.get('federalContractsYes');
    const federalContractsNo = group.get('federalContractsNo');
    const groupValid = federalContractsYes.value || federalContractsNo.value;
    return groupValid ? null : { federalContractsGroup: true };
  }

  private _validateeVerifyUsing(group: FormGroup) {
    const eVerifyUsingYes = group.get('eVerifyUsingYes');
    const eVerifyUsingNo = group.get('eVerifyUsingNo');
    const groupValid = eVerifyUsingYes.value || eVerifyUsingNo.value;
    return groupValid ? null : { eVerifyUsingGroup: true };
  }

  private _validateeVerifyContinue(group: FormGroup) {
    const eVerifyContinueYes = group.get('eVerifyContinueYes');
    const eVerifyContinueNo = group.get('eVerifyContinueNo');
    const groupValid = eVerifyContinueYes.value || eVerifyContinueNo.value;
    return groupValid ? null : { eVerifyContinueGroup: true };
  }
  //// STEP 3A - END
  //// STEP 3B - START
  private _validateWorkOutsidePhyLoc(group: FormGroup) {
    const workOutsidePhyLocYes = group.get('workOutsidePhyLocYes');
    const workOutsidePhyLocNo = group.get('workOutsidePhyLocNo');
    const groupValid = workOutsidePhyLocYes.value || workOutsidePhyLocNo.value;
    return groupValid ? null : { workOutsidePhyLocGroup: true };
  }

  private _validateWorkFromHome(group: FormGroup) {
    const workFromHomeYes = group.get('workFromHomeYes');
    const workFromHomeNo = group.get('workFromHomeNo');
    const groupValid = workFromHomeYes.value || workFromHomeNo.value;
    return groupValid ? null : { workFromHomeGroup: true };
  }

  private _validateWorkStateNotResident(group: FormGroup) {
    const workStateNotResidentYes = group.get('workStateNotResidentYes');
    const workStateNotResidentNo = group.get('workStateNotResidentNo');
    const groupValid = workStateNotResidentYes.value || workStateNotResidentNo.value;
    return groupValid ? null : { workStateNotResidentGroup: true };
  }

  private _validateCoveredEmplrFLMA(group: FormGroup) {
    const coveredEmplrFLMAYes = group.get('coveredEmplrFLMAYes');
    const coveredEmplrFLMANo = group.get('coveredEmplrFLMANo');
    const groupValid = coveredEmplrFLMAYes.value || coveredEmplrFLMANo.value;
    return groupValid ? null : { coveredEmplrFLMAGroup: true };
  }

  private _validateWantOfferFLMA(group: FormGroup) {
    const wantOfferFLMAYes = group.get('wantOfferFLMAYes');
    const wantOfferFLMANo = group.get('wantOfferFLMANo');
    const groupValid = wantOfferFLMAYes.value || wantOfferFLMANo.value;
    return groupValid ? null : { wantOfferFLMAGroup: true };
  }

  private _validateFirstPayrollGroup(group: FormGroup) {
    const firstPayrollYes = group.get('firstPayrollYes');
    const firstPayrollNo = group.get('firstPayrollNo');
    const groupValid = firstPayrollYes.value || firstPayrollNo.value;
    return groupValid ? null : { firstPayrollGroup: true };
  }

  private _validateCourtOrderGroup(group: FormGroup) {
    const courtOrderYes = group.get('courtOrderYes');
    const courtOrderNo = group.get('courtOrderNo');
    const groupValid = courtOrderYes.value || courtOrderNo.value;
    return groupValid ? null : { courtOrderGroup: true };
  }

  //// STEP - 3B - END
  // STEP 3 - Validations - END

  // STEP 4 - VALIDATIONS - Start
  //// STEP - 4A - Start
  private _validateCheckDateSaturdayGroup(group: FormGroup) {
    const checkDateSaturdayMonday = group.get('checkDateSaturdayMonday');
    const checkDateSaturdayFriday = group.get('checkDateSaturdayFriday');
    const groupValid = checkDateSaturdayMonday.value || checkDateSaturdayFriday.value;
    return groupValid ? null : { checkDateSaturdayGroup: true };
  }

  private _validateCheckDateSundayGroup(group: FormGroup) {
    const checkDateSundayMonday = group.get('checkDateSundayMonday');
    const checkDateSundayFriday = group.get('checkDateSundayFriday');
    const groupValid = checkDateSundayMonday.value || checkDateSundayFriday.value;
    return groupValid ? null : { checkDateSundayGroup: true };
  }

  private _validateCheckDateHolidayGroup(group: FormGroup) {
    const checkDateHolidayBefore = group.get('checkDateHolidayBefore');
    const checkDateHolidayAfter = group.get('checkDateHolidayAfter');
    const groupValid = checkDateHolidayBefore.value || checkDateHolidayAfter.value;
    return groupValid ? null : { checkDateHolidayGroup: true };
  }

  private _validateAdditionalPayCyclesGroup(group: FormGroup) {
    const additionalPayCyclesYes = group.get('additionalPayCyclesYes');
    const additionalPayCyclesNo = group.get('additionalPayCyclesNo');
    const groupValid = additionalPayCyclesYes.value || additionalPayCyclesNo.value;


    // if (additionalPayCyclesYes.touched && !additionalPayCyclesYes.value) {
    //   additionalPayCyclesYes.setValidators([Validators.required]);
    // }

    // if (additionalPayCyclesNo.touched && !additionalPayCyclesNo.value) {
    //   additionalPayCyclesNo.setValidators([Validators.required]);
    // }


    return groupValid ? null : { additionalPayCyclesGroup: true };
  }

  //// STEP - 4A - End
  //// STEP - 4B - START
  private _validateoutofcyclePayroll(group: FormGroup) {
    const outofcyclePayrollYes = group.get('outofcyclePayrollYes');
    const outofcyclePayrollNo = group.get('outofcyclePayrollNo');
    const groupValid = outofcyclePayrollYes.value || outofcyclePayrollNo.value;
    return groupValid ? null : { outofcyclePayrollGroup: true };
  }

  private _validatepayOutTips(group: FormGroup) {
    const payOutTipsYes = group.get('payOutTipsYes');
    const payOutTipsNo = group.get('payOutTipsNo');
    const groupValid = payOutTipsYes.value || payOutTipsNo.value;
    return groupValid ? null : { outofcyclePayrollGroup: true };
  }

  //// STEP - 4B - End

  //// STEP - 4C - Start

  private _validateFrequentPayCodes(group: FormGroup) {
    const reg = group.get('reg');
    const ot = group.get('ot');
    const tiphrs = group.get('tiphrs');
    const cashtips = group.get('cashtips');
    const chgtips = group.get('chgtips');
    const hol = group.get('hol');
    const vac = group.get('vac');
    const sick = group.get('sick');
    const personal = group.get('personal');
    const pto = group.get('pto');
    const expNt = group.get('expNt');
    const mileNt = group.get('mileNt');
    const retro = group.get('retro');
    const retroHrs = group.get('retroHrs');
    const juryDuty = group.get('juryDuty');
    const bonus = group.get('bonus');
    const bonusSuppl = group.get('bonusSuppl');
    const salary = group.get('salary');
    const bereavement = group.get('bereavement');
    const comm = group.get('comm');
    const other = group.get('other');
    const groupValid = reg.value || ot.value || tiphrs.value || cashtips.value || chgtips.value || hol.value
                        || vac.value || sick.value || personal.value || pto.value || expNt.value ||
                        mileNt.value || retro.value || retroHrs.value || juryDuty.value || bonus.value ||
                        bonusSuppl.value || salary.value || bereavement.value || comm.value || other.value;
    return groupValid ? null : { frequentPayCodesGroup: true };
  }

  private _validateNonTaxableReimbursements(group: FormGroup) {
    const nonTaxableReimbursementsYes = group.get('nonTaxableReimbursementsYes');
    const nonTaxableReimbursementsNo = group.get('nonTaxableReimbursementsNo');
    const groupValid = nonTaxableReimbursementsYes.value || nonTaxableReimbursementsNo.value;
    return groupValid ? null : { nonTaxableReimbursementsGroup: true };
  }

  private _validateTaxableAllowances(group: FormGroup) {
    const taxableAllowancesYes = group.get('taxableAllowancesYes');
    const taxableAllowancesNo = group.get('taxableAllowancesNo');
    const groupValid = taxableAllowancesYes.value || taxableAllowancesNo.value;
    return groupValid ? null : { taxableAllowancesGroup: true };
  }

  private _validateMiscDeductions(group: FormGroup) {
    const miscDeductionsYes = group.get('miscDeductionsYes');
    const miscDeductionsNo = group.get('miscDeductionsNo');
    const groupValid = miscDeductionsYes.value || miscDeductionsNo.value;
    return groupValid ? null : { miscDeductionsGroup: true };
  }
  private _validatePtoEmployees(group: FormGroup) {
    const ptoEmployeesYes = group.get('ptoEmployeesYes');
    const ptoEmployeesNo = group.get('ptoEmployeesNo');
    const groupValid = ptoEmployeesYes.value || ptoEmployeesNo.value;
    return groupValid ? null : { ptoEmployeesGroup: true };
  }

  //// STEP - 4C - End

  //// STEP - 4D - Start
  private _validateEmployerBenefitContribution(group: FormGroup) {
    const employerBenefitContributionYes = group.get('employerBenefitContributionYes');
    const employerBenefitContributionNo = group.get('employerBenefitContributionNo');
    const groupValid = employerBenefitContributionYes.value || employerBenefitContributionNo.value;
    return groupValid ? null : { employerBenefitContributionGroup: true };
  }

  private _validateEmployer401kContribution(group: FormGroup) {
    const employer401kContributionYes = group.get('employer401kContributionYes');
    const employer401kContributionNo = group.get('employer401kContributionNo');
    const groupValid = employer401kContributionYes.value || employer401kContributionNo.value;
    return groupValid ? null : { employer401kContributionGroup: true };
  }

  private _validateGeneralLedger(group: FormGroup) {
    const generalLedgerYes = group.get('generalLedgerYes');
    const generalLedgerNo = group.get('generalLedgerNo');
    const groupValid = generalLedgerYes.value || generalLedgerNo.value;
    return groupValid ? null : { generalLedgerGroup: true };
  }

  private _validateCertifiedPayroll(group: FormGroup) {
    const certifiedPayrollYes = group.get('certifiedPayrollYes');
    const certifiedPayrollNo = group.get('certifiedPayrollNo');
    const groupValid = certifiedPayrollYes.value || certifiedPayrollNo.value;
    return groupValid ? null : { certifiedPayrollGroup: true };
  }

  //// STEP - 4D - End

  // STEP 4 - VALIDATIONS - End

  // STEP 5 - Validations - Start

//// STEP - 5A - Start

  private _validateapplicableLargeEmployer(group: FormGroup) {
    const applicableLargeEmployerYes = group.get('applicableLargeEmployerYes');
    const applicableLargeEmployerNo = group.get('applicableLargeEmployerNo');
    const groupValid = applicableLargeEmployerYes.value || applicableLargeEmployerNo.value;
    return groupValid ? null : { applicableLargeEmployerGroup: true };
  }

  private _validateownPlan(group: FormGroup) {
    const ownPlanYes = group.get('ownPlanYes');
    const ownPlanNo = group.get('ownPlanNo');
    const groupValid = ownPlanYes.value || ownPlanNo.value;
    return groupValid ? null : { ownPlanGroup: true };
  }

  private _validateClientSponseredGroup(group: FormGroup) {
    const ownPlanYes = group.get('ownPlanGroup.ownPlanYes');
    const ownPlanYesGroup = group.get('ownPlanYesGroup');
    if (ownPlanYes.value === true && ownPlanYesGroup.touched) {
      const health = group.get('ownPlanYesGroup.health');
      const dental = group.get('ownPlanYesGroup.dental');
      const life = group.get('ownPlanYesGroup.life');
      const vision = group.get('ownPlanYesGroup.vision');
      const voluntary = group.get('ownPlanYesGroup.voluntary');
      const other = group.get('ownPlanYesGroup.other');

      const groupValid = health.value || dental.value || life.value || vision.value || voluntary.value || other.value;
      return groupValid ? null : { clientSponseredGroup: true};
    }
    return null;
  }

  private _validatedeductionFreqAndPeriods(group: FormGroup) {
    const deductionFreqAndPeriodsMonthly = group.get('deductionFreqAndPeriodsMonthly');
    const deductionFreqAndPeriodsSemiMonthly = group.get('deductionFreqAndPeriodsSemiMonthly');
    const deductionFreqAndPeriodsBiWeekly = group.get('deductionFreqAndPeriodsBiWeekly');
    const deductionFreqAndPeriodsWeekly = group.get('deductionFreqAndPeriodsWeekly');
    const deductionFreqAndPeriodsTwiceWeekly = group.get('deductionFreqAndPeriodsTwiceWeekly');
    const groupValid = deductionFreqAndPeriodsMonthly.value || deductionFreqAndPeriodsSemiMonthly.value ||
                deductionFreqAndPeriodsBiWeekly.value || deductionFreqAndPeriodsWeekly.value || deductionFreqAndPeriodsTwiceWeekly.value;
    return groupValid ? null : { deductionFreqAndPeriodsGroup: true };
  }

  private _validatecobraParticipants(group: FormGroup) {
    const cobraParticipantsYes = group.get('cobraParticipantsYes');
    const cobraParticipantsNo = group.get('cobraParticipantsNo');
    const groupValid = cobraParticipantsYes.value || cobraParticipantsNo.value;
    return groupValid ? null : { cobraParticipantsGroup: true };
  }

  private _validateretirementPlan(group: FormGroup) {
    const retirementPlanNA = group.get('retirementPlanNA');
    const retirementPlanOasisSponsored = group.get('retirementPlanOasisSponsored');
    const retirementPlanClientSponsored = group.get('retirementPlanClientSponsored');
    const groupValid = retirementPlanNA.value || retirementPlanOasisSponsored.value || retirementPlanClientSponsored.value;
    return groupValid ? null : { retirementPlanGroup: true };
  }

  //// STEP - 5B - Start
  private _validateI9Election(group: FormGroup) {
    const i9ElectionOasis = group.get('i9ElectionOasis');
    const i9ElectionCurrent = group.get('i9ElectionCurrent');
    const groupValid = i9ElectionOasis.value || i9ElectionCurrent.value;
    return groupValid ? null : { i9ElectionGroup: true };
  }

  private _validatebiLingual(group: FormGroup) {
    const biLingualYes = group.get('biLingualYes');
    const biLingualNo = group.get('biLingualNo');
    const groupValid = biLingualYes.value || biLingualNo.value;
    return groupValid ? null : { biLingualGroup: true };
  }
  //// STEP - 5B -END
  // STEP 5 - Validations - End

  private _validateJointEmployerYesCheckbox(control: FormControlName) {
    // if (control instanceof FormControl) {
    //   // return control.valid || !control.touched || control.disabled;
    //   if (control.touched) {

    //   }
    // }

    // const jointEmployerYes = this.form.get(['setupClient', 'businessStructure', 'jointEmployerGroup', 'jointEmployerYes']);
    // const jointEmployerNo = this.form.get(['setupClient', 'businessStructure', 'jointEmployerGroup', 'jointEmployerNo']);
    // console.log('Yes: ' + jointEmployerYes + ' No: ' + jointEmployerNo);
    // const groupValid = jointEmployerYes.value || jointEmployerNo.value;
    //  return groupValid ? null : { jointEmployerGroup: true };
  }

  private _build() {
    this.form = this.fb.group({
      gettingStarted: this.fb.group({
        generalInfo: this.fb.group({
          clientId: [{value: '', disabled: true}, Validators.required],
          clientFein: ['', Validators.required],
          clientLegalName: ['', Validators.required],
          clientDbaName: ['', Validators.required],
          mainPhoneNumber: ['', [Validators.required, this.validator.PhoneNumber]],
          mainFaxNumber: ['', this.validator.PhoneNumber],
          address1: ['', Validators.required],
          address2: [''],
          city: ['', Validators.required],
          county: ['', Validators.required],
          state: ['', Validators.required],
          zip: ['', [Validators.required, this.validator.Zip]],
        }),
        primaryDecisionMaker: this.fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          title: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phone1: ['', [Validators.required, this.validator.PhoneNumber]],
          ext1: ['', this.validator.PhoneExt],
          phone2: ['', this.validator.PhoneNumber],
          ext2: ['', this.validator.PhoneExt],
          fax: ['', this.validator.PhoneNumber],
        }),
        authorizedClientContacts: this.fb.group({
          list: this.fb.array([]) // Add using addAuthorizedClientContacts
        })
      }),
      setupClient: this.fb.group({
        businessStructure: this.fb.group({
          businessType: ['', Validators.required],
          owner: ['', Validators.required],
          shareholder: ['', Validators.required],
          partner: ['', Validators.required],
          naicsCode: ['', Validators.required],
          sicCode: ['', Validators.required],
          fein: this.fb.array([]), // addFeinEntity and removeFeinEntity
          jointEmployerGroup: this.fb.group(
            {
              jointEmployerYes: [''],
              jointEmployerNo: ['']
            },
            {
              validator: [this._validateJointEmployerGroup]
            }
          ),
          relatedToOasisGroup: this.fb.group(
            {
              relatedToOasisYes: [''],
              relatedToOasisNo: ['']
            }
          ),
          entityId: ['', Validators.nullValidator],
          primaryCompany: ['', Validators.nullValidator],
          joinEntityPrimaryCompanyGroup: this.fb.group({
            joinEntityPrimaryCompanyYes: [''],
            joinEntityPrimaryCompanyNo: ['']
          }),
          overtimeCalculationGroup: this.fb.group({
            overtimeCalculationYes: [''],
            overtimeCalculationNo: ['']
          }),
          locations: this.fb.array([]), // addWorksiteLocation and removeWorksiteLocation
          addresses: this.fb.array([]), // addWorksiteAddress and removeWorksiteAddress
          paymentMethod: this.fb.group(
            {
              achDebit: [''],
              wireTransfer: [''],
            },
            { validator: this._validatePaymentMethod }
          ),
          achDebitSetups: this.fb.array([]), // addAchDebitSetup and removeAchDebitSetup
        }),
        jobCosting: this.fb.group({}),
        jobTitles: this.fb.group({}),
      }),

      employeeInformation: this.fb.group({
        employeeStatus: this.fb.group({
          numFTEmployees: ['', Validators.required],
          numPTEmployees: ['', Validators.required],
          numSeasonalEmployees: [''],
          employementContractsGroup: this.fb.group(
            {
              employementContractsYes: [''],
              employementContractsNo: ['']
            }
          ),
          independantContractorsGroup: this.fb.group(
            {
              independantContractorsYes: [''],
              independantContractorsNo: ['']
            },
            { validator: this._validateIndependantContractors }
          ),
          federalContractsGroup: this.fb.group(
            {
              federalContractsYes: [''],
              federalContractsNo: [''],
              // dunsNumber: [{value: '', disabled: true}]
            },
            { validator: this._validateFederalContracts }
          ),
          unionEmployeesGroup: this.fb.group(
            {
              unionEmployeesYes: [''],
              unionEmployeesNo: ['']
            }
          ),
          stateContractGroup: this.fb.group(
            {
              stateContractYes: [''],
              stateContractNo: ['']
            }
          ),
          eVerifyAwareGroup: this.fb.group(
            {
              eVerifyAwareYes: [''],
              eVerifyAwareNo: ['']
            }
          ),
          eVerifyUsingGroup: this.fb.group(
            {
              eVerifyUsingYes: [''],
              eVerifyUsingNo: ['']
            },
            { validator: this._validateeVerifyUsing }
          ),
          eVerifyContinueGroup: this.fb.group(
            {
              eVerifyContinueYes: [''],
              eVerifyContinueNo: ['']
            },
            { validator: this._validateeVerifyContinue }
          ),
          usingEVerifyFlag: ['', Validators.required],
          keepingEVerifyFlag: ['', Validators.required]
        }),
        employeeTaxes: this.fb.group({
          workOutsidePhyLocGroup: this.fb.group(
            {
              workOutsidePhyLocYes: [''],
              workOutsidePhyLocNo: ['']
            },
            { validator: this._validateWorkOutsidePhyLoc }
          ),
          workFromHomeGroup: this.fb.group(
            {
              workFromHomeYes: [''],
              workFromHomeNo: ['']
            },
            { validator: this._validateWorkFromHome }
          ),
          workStateNotResidentGroup: this.fb.group(
            {
              workStateNotResidentYes: [''],
              workStateNotResidentNo: ['']
            },
            { validator: this._validateWorkStateNotResident }
          ),
          coveredEmplrFLMAGroup: this.fb.group(
            {
              coveredEmplrFLMAYes: [''],
              coveredEmplrFLMANo: ['']
            },
            { validator: this._validateCoveredEmplrFLMA }
          ),
          wantOfferFLMAGroup: this.fb.group(
            {
              wantOfferFLMAYes: [''],
              wantOfferFLMANo: ['']
            },
            { validator: this._validateWantOfferFLMA }
          ),
          firstPayrollGroup: this.fb.group(
            {
              firstPayrollYes: [''],
              firstPayrollNo: ['']
            },
            { validator: this._validateFirstPayrollGroup }
          ),
          courtOrderGroup: this.fb.group(
            {
              courtOrderYes: [''],
              courtOrderNo: ['']
            },
            { validator: this._validateCourtOrderGroup }
          ),
        })
      }),

      payrollInformation: this.fb.group({
        payrollCycle: this.fb.group({
          payFrequencyDD: ['', Validators.required],
          checkDay: ['', Validators.nullValidator],
          paidTwiceMonth1: ['', Validators.nullValidator],
          paidTwiceMonth2: ['', Validators.nullValidator],
          paidOnceMonth: ['', Validators.nullValidator],
          sevenDayWorkStart: ['', Validators.required],
          sevenDayWorkEnd: ['', Validators.required],
          tentativeFirstPay: ['', Validators.required],
          tentativeEndPay: ['', Validators.required],
          tentativeFirstCheck: ['', Validators.required],
          checkDateSaturdayGroup: this.fb.group(
            {
              checkDateSaturdayMonday: [''],
              checkDateSaturdayFriday: ['']
            },
            { validator: this._validateCheckDateSaturdayGroup }
          ),
          checkDateSundayGroup: this.fb.group(
            {
              checkDateSundayMonday: [''],
              checkDateSundayFriday: ['']
            },
            { validator: this._validateCheckDateSundayGroup }
          ),
          checkDateHolidayGroup: this.fb.group(
            {
              checkDateHolidayBefore: [''],
              checkDateHolidayAfter: ['']
            },
            { validator: this._validateCheckDateHolidayGroup }
          ),
          additionalPayCyclesGroup: this.fb.group(
            {
              additionalPayCyclesYes: [''],
              additionalPayCyclesNo: [''],
            },
            { validator: [this._validateAdditionalPayCyclesGroup] }
          ),
          additionalFieldsGroup: this.fb.group({
            addlPayFrequencyDD: ['', Validators.required],
            addlCheckDay: ['', Validators.nullValidator],
            addlPaidTwiceMonth1: ['', Validators.nullValidator],
            addlPaidTwiceMonth2: ['', Validators.nullValidator],
            addlPaidOnceMonth: ['', Validators.nullValidator],
            addlSevenDayWorkStart: ['', Validators.required],
            addlSevenDayWorkEnd: ['', Validators.required],
            addlTentativeFirstPay: ['', Validators.required],
            addlTentativeEndPay: ['', Validators.required],
            AddlTentativeFirstCheck: ['', Validators.required]
          })
        }),
        payrollProcessing: this.fb.group({
          preferredProcessingDay: ['', Validators.required],
          preferredProcessingMethod: ['', Validators.required],
          timeSheetSortedEmployeeLastName: ['', Validators.required],
          timeSheetSortedLocation: ['', Validators.required],
          timeSheetSortedDepartment: ['', Validators.required],
          timeSheetSortedDivision: ['', Validators.required],
          productName: ['', Validators.required],
          overTimeInclude: ['', Validators.required],
          overTimeSeparate: ['', Validators.required],
          outofcyclePayrollGroup: this.fb.group(
            {
              outofcyclePayrollYes: [''],
              outofcyclePayrollNo: ['']
            },
            { validator: this._validateoutofcyclePayroll }
          ),
          timeSheetSortedGroup: this.fb.group(
            {
              timeSheetSortedEmployeeLastName: [''],
              timeSheetSortedLocation: [''],
              timeSheetSortedDepartment: [''],
              timeSheetSortedDivision: [''],
            },
          ),
          faxTimeSheetSortedGroup: this.fb.group(
            {
              faxTimeSheetSortedEmployeeLastName: [''],
              faxTimeSheetSortedLocation: [''],
              faxTimeSheetSortedDepartment: [''],
              faxTimeSheetSortedDivision: [''],
            },
          ),
          isOverTimeGroup: this.fb.group(
            {
              includedInHours: [''],
              separateFromHours: ['']
            },
          ),
          payOutTipsGroup: this.fb.group(
            {
              payOutTipsYes: [''],
              payOutTipsNo: ['']
            },
            { validator: this._validatepayOutTips }
          ),
          selectChargeTipsGroup: this.fb.group(
            {
              selectChargeTipsYes: [''],
              selectChargeTipsNo: ['']
            },
          ),
          cashTipsGroup: this.fb.group(
            {
              cashTipsYes: [''],
              cashTipsNo: ['']
            },
          ),
          serviceChargeGroup: this.fb.group(
            {
              serviceChargeYes: [''],
              serviceChargeNo: ['']
            },
          ),
      }),
      payrollStructure: this.fb.group({
        frequentPayCodesGroup: this.fb.group({
          reg: [''],
          ot: [''],
          tiphrs: [''],
          cashtips: [''],
          chgtips: [''],
          hol: [''],
          vac: [''],
          sick: [''],
          personal: [''],
          pto: [''],
          expNt: [''],
          mileNt: [''],
          retro: [''],
          retroHrs: [''],
          juryDuty: [''],
          bonus: [''],
          bonusSuppl: [''],
          salary: [''],
          bereavement: [''],
          comm: [''],
          other: ['']
        },
        { validator: this._validateFrequentPayCodes }
        ),
        nonTaxableReimbursementsGroup: this.fb.group({
          nonTaxableReimbursementsYes: [''],
          nonTaxableReimbursementsNo: ['']
        },
        { validator: this._validateNonTaxableReimbursements }
        ),
        taxableAllowancesGroup: this.fb.group({
          taxableAllowancesYes: [''],
          taxableAllowancesNo: ['']
        },
        { validator: this._validateTaxableAllowances }
        ),
        miscDeductionsGroup: this.fb.group({
          miscDeductionsYes: [''],
          miscDeductionsNo: ['']
        },
        { validator: this._validateMiscDeductions }
        ),
        ptoEmployeesGroup: this.fb.group({
          ptoEmployeesYes: [''],
          ptoEmployeesNo: ['']
        },
        { validator: this._validatePtoEmployees })
      }),
      payrollReports: this.fb.group({
        invoicesSorted: ['', Validators.required],
        reportsSorted: ['', Validators.required],
        payStubsSorted: ['', Validators.required],
        checksDelivered: ['', Validators.required],
        deliveringChecks: ['', Validators.required],
        employerBenefitContributionGroup: this.fb.group(
          {
            employerBenefitContributionYes: [''],
            employerBenefitContributionNo: ['']
          },
          { validator: this._validateEmployerBenefitContribution }
        ),
        employer401kContributionGroup: this.fb.group(
          {
            employer401kContributionYes: [''],
            employer401kContributionNo: ['']
          },
          { validator: this._validateEmployer401kContribution }
        ),
        generalLedgerGroup: this.fb.group(
          {
            generalLedgerYes: [''],
            generalLedgerNo: ['']
          },
          { validator: this._validateGeneralLedger }
        ),
        certifiedPayrollGroup: this.fb.group(
          {
            certifiedPayrollYes: [''],
            certifiedPayrollNo: ['']
          },
          { validator: this._validateCertifiedPayroll }
        ),
      }),
    }),

      benefitsInformation: this.fb.group({
        benefitsStructure: this.fb.group({
          applicableLargeEmployerGroup: this.fb.group(
            {
              applicableLargeEmployerYes: [''],
              applicableLargeEmployerNo: ['']
            },
            { validator: this._validateapplicableLargeEmployer }
          ),
          tentativeBenefitsEffectiveDate: [''],
          oasisSponsoredGroup: this.fb.group(
            {
              oasisSponsoredHealth: [''],
              oasisSponsoredLongTermDisability: [''],
              oasisSponsoredLife: [''],
              oasisSponsoredVision: [''],
              oasisSponsoredShortTermDisability: [''],
              oasisSponsoredDental: [''],
              oasisSponsoredAdAndD: ['']
            }
          ),
          clientSponseredGroup: this.fb.group(
            {
              ownPlanGroup: this.fb.group(
                {
                  ownPlanYes: [''],
                  ownPlanNo: ['']
                },
                { validator: this._validateownPlan }
              ),
              ownPlanYesGroup: this.fb.group(
                {
                  health: [''],
                  dental: [''],
                  life: [''],
                  vision: [''],
                  voluntary: [''],
                  other: ['']
                },
              )
            },
            { validator: this._validateClientSponseredGroup }
          ),
          deductionFreqAndPeriodsGroup: this.fb.group(
            {
              deductionFreqAndPeriodsMonthly: [''],
              deductionFreqAndPeriodsSemiMonthly: [''],
              deductionFreqAndPeriodsBiWeekly: [''],
              deductionFreqAndPeriodsWeekly: [''],
              deductionFreqAndPeriodsTwiceWeekly: ['']
            },
            { validator: this._validatedeductionFreqAndPeriods }
          ),
          deductionsToAddGroup: this.fb.group(
            {
              deductionsToAddYes: [''],
              deductionsToAddNo: ['']
            }
          ),
          variableTrackingReportGroup: this.fb.group(
            {
              variableTrackingReportYes: [''],
              variableTrackingReportNo: ['']
            }
          ),
          retirementPlanGroup: this.fb.group(
            {
              retirementPlanNA: [''],
              retirementPlanOasisSponsored: [''],
              retirementPlanClientSponsored: ['']
            },
            { validator: this._validateretirementPlan }
          ),
          cobraParticipantsGroup: this.fb.group(
            {
              cobraParticipantsYes: [''],
              cobraParticipantsNo: ['']
            },
            { validator: this._validatecobraParticipants }
          )
        }),
        benefitsOrientation: this.fb.group({
          i9ElectionGroup: this.fb.group(
            {
              i9ElectionOasis: [''],
              i9ElectionCurrent: ['']
            },
            { validator: this._validateI9Election }
          ),
          biLingualGroup: this.fb.group(
            {
              biLingualYes: [''],
              biLingualNo: ['']
            },
            { validator: this._validatebiLingual }
          ),
        })
      })
    });
  }
}
