import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { StyleGuideRoutingModule } from './style-guide-routing.module';

import { GuideComponent } from './guide/guide.component';
import { MockDatabaseService } from '../in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HrELearningComponent } from '../client/components';
import { TableRemoveAddExampleComponent } from './examples/index';
import { FormatDatePipe } from '../client/pipes/index';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    StyleGuideRoutingModule,
    HttpClientInMemoryWebApiModule.forFeature(
      MockDatabaseService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
  ],
  declarations: [
    GuideComponent,
    HrELearningComponent,
    // EXAMPLES
    TableRemoveAddExampleComponent
  ],
  exports: [
    GuideComponent,
    // EXAMPLES
    TableRemoveAddExampleComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class StyleGuideModule { }

