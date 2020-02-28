interface ContactDetail {
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  email?: string;
  ext?: string;
  cellPhone?: string;
  fax?: string;
}

export interface ClientContacts {
    contactId: string;
    contactType: string;
    sameAsPrimary: boolean;
    contactDetail: ContactDetail;
}
