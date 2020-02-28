import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Module imports
import { AuthModule } from './auth/auth.module';

import { PageNotFoundComponent } from './core/containers';
import { LoginComponent } from './auth/login/login.component';
import { GuideComponent } from './style-guide/guide/guide.component';

const routes: Routes = [
  {
    path: 'client',
    loadChildren: 'app/client/client.module#ClientModule'
  },
  {
    path: 'employee',
    loadChildren: 'app/employee/employee.module#EmployeeModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'guide',
    loadChildren: 'app/style-guide/style-guide.module#StyleGuideModule'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
