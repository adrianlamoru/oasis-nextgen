import { States, IDataDriven } from '.';

export interface IStateComplianceDocumentCollection {
  state: States;
  forms?: IDataDriven[];
}

