import { IDataDriven } from '.';

export interface States {
  ID: number;
  Name: string;
  StateCompliancePoster?: IDataDriven;
}
