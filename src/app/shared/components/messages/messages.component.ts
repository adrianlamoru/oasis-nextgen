import { Component, OnInit, Input } from '@angular/core';

import { Message } from '../../models';

import { MessageService } from '../../services';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @Input() messages: Message[];

  constructor(
    public messageService: MessageService) { }

  ngOnInit() {

  }

  closeMessage(message: Message) {
    const index: number = this.messages.indexOf(message);
    this.messages.splice(index, 1);
  }

  get diagnosticMessages() { return JSON.stringify(this.messages); }

}
