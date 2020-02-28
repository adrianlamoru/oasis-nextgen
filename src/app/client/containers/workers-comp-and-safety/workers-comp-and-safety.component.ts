import { Component, OnInit } from '@angular/core';

import { WorkersCompClaimsService } from '../../services';
import { IWorkersCompClaim } from '../../models';

@Component({
  selector: 'app-workers-comp-and-safety',
  templateUrl: './workers-comp-and-safety.component.html',
  styleUrls: ['./workers-comp-and-safety.component.scss']
})
export class WorkersCompAndSafetyComponent implements OnInit {
  workersCompOpenClaimsData: IWorkersCompClaim[];

  constructor(private workersCompClaimsService: WorkersCompClaimsService) { }

  ngOnInit() {
    this.workersCompClaimsService.getWorkersCompClaims().subscribe(
      claimsData => {
        this.workersCompOpenClaimsData = claimsData.filter(function(item) {
          return item.status === 'Open';
        });
      }
    );
  }

}
