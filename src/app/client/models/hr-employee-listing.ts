import { Status } from '../../shared/models/status.interface';
export interface HrEmployeeListing {
    clientID: string;
    employeeID: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    telephone: string;
    status: Status;
    alternatePhone: string;
    email: string;
    homeDivision: string;
    homeLocation: string;
    employeeType: string;
    jobTitle: string;
    workPhone: string;
}
