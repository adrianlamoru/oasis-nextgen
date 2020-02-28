import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement-area',
  templateUrl: './announcement-area.component.html',
  styleUrls: ['./announcement-area.component.scss']
})
export class AnnouncementAreaComponent implements OnInit {

  public title: string;
  public message: string;
  public ctaText: string;
  public ctaLink: string;
  public showAnnouncement: boolean;

  constructor(private route: Router) {
    this.title = 'Welcome to Oasis!';
    this.ctaText = 'Continue Onboarding';
    this.showAnnouncement = true;
    this.message = 'Nulla ut turpis accumsan nunc tempus aenean vestibulum pretium duis' +
      'sed nisl necat turpis sem mauris consequat lorem pharetra euismod';
    this.ctaLink = 'some-custom-url';
  }

  ngOnInit() {
  }

  goToLink() {
    this.route.navigate(['/' + this.ctaLink]);
  }

  closeAnnouncement() {
    this.showAnnouncement = false;
  }
}
