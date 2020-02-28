import { Injectable } from '@angular/core';
import { SortOptions } from '../models';

@Injectable()
export class SortService {

    constructor() { }

    getSortOptions(): SortOptions[] {
        return [
            {
                ID: 1,
                Text: 'Department'
            },
            {
                ID: 2,
                Text: 'Division'
            },
            {
                ID: 3,
                Text: 'Job'
            },
            {
                ID: 4,
                Text: 'Location'
            }
        ];
    }

    getClientAllocationSortOptions(): any[] {
        return [
            {
                id: 1,
                text: 'Division',
                isSelected: false
            }, {
                id: 2,
                text: 'Department',
                isSelected: false
            }, {
                id: 3,
                text: 'Location',
                isSelected: false
            }, {
                id: 4,
                text: 'Project',
                isSelected: false
            }, {
                id: 5,
                text: 'Pay method',
                isSelected: false
            }, {
                id: 6,
                text: 'Job code',
                isSelected: false
            }, {
                id: 7,
                text: 'Shift',
                isSelected: false
            }
        ];
    }

    getGrossToNetSortOptions(): any[] {
        return [
            {
                id: 1,
                text: 'Location',
                isSelected: false
            }, {
                id: 2,
                text: 'Division',
                isSelected: false
            }, {
                id: 3,
                text: 'Department',
                isSelected: false
            }, {
                id: 4,
                text: 'Clock No.',
                isSelected: false
            }, {
                id: 5,
                text: 'Project No.',
                isSelected: false
            }
        ];
    }

    getYears(): SortOptions[] {
        return [
            {
                ID: 1,
                Text: '2018'
            },
            {
                ID: 2,
                Text: '2017'
            },
            {
                ID: 3,
                Text: '2016'
            },
            {
                ID: 4,
                Text: '2015'
            }
        ];
    }

    getBatches(): SortOptions[] {
        return [
            {
                ID: 1,
                Text: '2017180 12/22/2017 BWMGR'
            },
            {
                ID: 2,
                Text: '2017179 12/22/2017 BIWEEKLY'
            },
            {
                ID: 3,
                Text: '2017178 12/19/2017 Reissue hector'
            },
            {
                ID: 4,
                Text: '2017166 12/02/2017 BWMGR'
            }
        ];
    }

}
