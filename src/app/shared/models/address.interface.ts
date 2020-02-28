import { States } from '.';

export interface IAddress {
  address1?: string;
  address2?: string;
  unitNumber: string;
  city: string;
  state: States;
  zip: string;
  isSameAsHomeAddress?: boolean;
}
