import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NewsModal } from '../../../../../shared/models';
import { NgbModal } from '../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../../shared/services';

@Component({
  selector: 'app-client-and-employee-orientation',
  templateUrl: './client-and-employee-orientation.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./client-and-employee-orientation.component.scss']
})
export class ClientAndEmployeeOrientationComponent implements OnInit {
  @Input() orientationData: NewsModal;
  @Input() orientationFilteredList: NewsModal;

  userType: string;

  closeResult: string;
  activeIndex;
  toggle = 0;

  constructor(
    private modalService: NgbModal,
    private authService: AuthService) { }

  openNewsModal(content, anchorID) {
    this.modalService.open(content, { size: 'lg' });
    setTimeout(() => {
      const element = document.getElementById(anchorID);
      element.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

  ngOnInit() {
    this.userType = this.authService.getUserType();
  }

  clicked(index, toggle) {
    this.activeIndex = index;
    this.toggle = toggle;
  }

}
