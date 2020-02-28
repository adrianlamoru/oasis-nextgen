import { States, IStateComplianceDocumentRepo } from '.';

export interface MenuOption {
    text: string;
    link: string;
    active?: boolean;
    enableOnFirstTimeLoging?: boolean;
    visibleOnlyOnFirstTimeLoging?: boolean;
    visibleOnlyAfterFirstTimeLoging?: boolean;
}

export interface Company {
  text: string;
  id: number;
  states?: States[];
  stateComplianceDocumentRepo?: IStateComplianceDocumentRepo;
  hrCardsAvailable?: IHrCardsAvailable[];
}

export interface Header {
    showResponsiveHorizontalMenu?: boolean;
    showResponsiveLogo?: boolean;
    clientCompanyLogo?: string;
    companies?: Company[];
    menuOptions: MenuOption[];
    profileOptions: MenuOption[];
}

export interface IHrCardsAvailable {
    hrCardName: string;
    hrCardStatus: boolean;
}
