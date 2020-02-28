import { ErrorHandler } from '@angular/core';
import { Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

export class OasisErrorHandler implements ErrorHandler {

  static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = 'An error occurred: Please click this message to refresh';
  static readonly DEFAULT_ERROR_TITLE: string = 'Something went wrong';

  constructor() {}

  public handleError(error: any) {
    console.error('Oasis Error Handler: ', error );

    if (error.status === 400 || error.status === 401 || error.status === 403 || error.status === 502) {
      this.showError('Something went wrong. Please contact 561-561-5656');
    }
      // } else {
    //   this.showError('Something went wrong. Try after some time.');
    // }
  }

  private showError(message: string) {
       // alert(message);
  }
}

