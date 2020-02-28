import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DevExtremeModule } from 'devextreme-angular';

import { PageNotFoundComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    DevExtremeModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    PageNotFoundComponent,

    // Export the modules that are commont to all modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule,
    DevExtremeModule
  ]
})
export class CoreModule { }
