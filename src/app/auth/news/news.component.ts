import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {NewsModal} from "../../shared/models/news-modal.interface";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  @Input() newsContent: NewsModal[];
  @Input() redirect;
  constructor(public router: Router
  ) {
    this.newsContent = [];
  }

  ngOnInit() {
  }

  clickedContinue() {
    this.router.navigate([this.redirect]);
    this.modalCloseFunc();
  }

}
