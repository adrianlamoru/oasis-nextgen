// Angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Header, portalType } from '../../models';

// Local Services
import { HeaderService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: Header;
  @Input() headerType: portalType;

  @Output() isLoadingValueToClient: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private headerService: HeaderService
  ) {
    this.headerType = portalType.employee;
  }

  ngOnInit() {

    this.headerService.getHeaderData(this.headerType)
      .subscribe(headerData => {
        this.header = headerData;
      });
  }

  isLoadingValueChange(isLoadingValueFromNavBar) {
    this.isLoadingValueToClient.emit(isLoadingValueFromNavBar);
  }

}
