import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-completed',
  templateUrl: './onboarding-completed.component.html',
  styleUrls: ['./onboarding-completed.component.scss']
})
export class OnboardingCompletedComponent implements OnInit {
  private confirmation: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.configureConfirmationMessage();
  }

  goToSupport() {
    this.router.navigate(['/client/support']);
  }

  configureConfirmationMessage() {
    this.confirmation = {
      title: 'Thank you.',
      message: `Your submission has been received and a case has been opened for us to review.
                Please visit the Support tab in the main navigation to see your status.
                Here's your case number.`
    };
  }
}
