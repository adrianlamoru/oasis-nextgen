// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/',
  // Setup - Divisions
  clientSetupGetDivision: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayLstDivisions',
  clientSetupSetDivision: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayUpdDivision',
  // Setup - Departments
  clientSetupGetDepartments: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayLstDepartments',
  clientSetupSetDepartments: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayUpdDepartment',
  // Setup - Projects
  clientSetupGetProjects: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayLstProjects',
  clientSetupSetProjects: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayUpdProject',
  // Setup - Jobs
  clientSetupGetJobCode: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayLstJobs',
  clientSetupSetJobCode: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayUpdJob',
  // Setup - WorkSite Update
  clientSetupGetWorkSite: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayLstWorksites',
  clientSetupSetWorkSite: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayUpdWorksite',
  // Setup - WorkSite Client Contacts
  clientSetupGetWorkSiteContacts: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayLstWorksiteContacts',
  clientSetupSetWorkSiteContacts: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayUpdWorksiteContacts',
  // Setup - Events
  clientSetupGetEvents: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClHumLstEvents',
  clientSetupSetEvents: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClHumUpdEvents',
  // Setup - Skill Maintenance
  clientSetupGetSkillMaintenance: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayLstSkills',
  clientSetupSetSkillMaintenance: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayUpdSkill',
  // Setup - General Ledger
  clientSetupGetGLAccSysDetails: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayLstGeneralLedgerCodes',
  clientSetupSetGLAccSysDetails: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayUpdGeneralLedgerCode',
  clientSetupDeleteGLAccSysDetails: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClPayDelGeneralLedgerCode',
  // Employee - Get Employees
  clientEmployeeLstSearch: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClHumLstEmployeeSearch',
  clientEmployeeDetail: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClHumGetEmployeeDetail',
  clientEmployeeTaxWithHolding: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClHumGetEmployeeTaxWithholding',
  clientEmployeeEmployment: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClHumGetEmployeeCompanyDetail',
  clientEmployeePTO: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClBenLstPtoSummary',
  clientEmployeePTOViewDetail: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClBenLstPtoDetail',
  clientEmployeeBenefitDetail: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClBenLstBenefitsSummary',
  clientEmployee401KSummary: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsClBenLstEmployee401kSummary',
  // Session Token
  sessionTokenGeneration: 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/NsShGenEstablishSession'
};
