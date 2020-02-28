import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Tasks } from '../../models';

enum status {
  active = 'active',
  completed = 'completed',
  deleted = 'deleted'
}
@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {
  @Input() myTasksData: Tasks[];

  private modal: NgbModalRef;

  constructor(private modalService: NgbModal,
              private router: Router) { }

  ngOnInit() {
  }

  removeClick(task: Tasks) {
    task.taskStatus = status.deleted;
  }

  filteredList(limit?: number) {
    if (!this.myTasksData) {
      return this.myTasksData;
    }

    const filteredList = this.myTasksData.filter(x => (x.taskStatus !== status.deleted));
    if (limit) {
      return filteredList.splice(0, limit);
    }
    return filteredList;
  }

  iconClass(task: Tasks) {
    if (task.taskStatus === status.completed) {
      return 'icon-small-check';
    } else if (task.taskStatus === status.active) {
      return 'icon-dot';
    }
    return '';
  }

  isCompleted(task: Tasks) {
    return task.taskStatus === status.completed;
  }

  addStrikethrough(task: Tasks) {
    return this.isCompleted(task) ? 'text-strike-through' : '';
  }

  openModal(content, size) {
    this.modal = this.modalService.open(content, { size: size });
  }

  navToTask(task: Tasks) {
    this.router.navigateByUrl(task.url);

    if (this.modal) {
      this.modal.close();
    }
  }
}
