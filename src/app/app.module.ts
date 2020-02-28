import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpTokenInterceptor } from './shared/interceptors/http.token.interceptor';

import { AuthService, AuthGuard } from './shared/services';

// Custom modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OasisErrorHandler } from './shared/errorHandling/oasis-errorHandler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Custom modules
    CoreModule,
    SharedModule,
    // App routes at the end!
    AppRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: OasisErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    AuthService,
    AuthGuard
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
