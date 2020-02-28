import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { AgreementComponent } from './agreement/agreement.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, AgreementComponent, NewsComponent],
  exports: [LoginComponent]
})
export class AuthModule { }
