import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseprojectComponent } from './caseproject/caseproject.component';

const routes: Routes = [
  {
    path: 'cases',
    component: CaseprojectComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./caseproject/home/home.module').then((mod) => mod.HomeModule),
      },
      {
        path: 'caseResults',
        loadChildren: () =>
          import('./caseproject/caseresults/caseresults.module').then((mod) => mod.CaseresultsModule),
      },
      {
        path: 'caseDetails',
        loadChildren: () =>
          import('./caseproject/casedetails/casedetails.module').then((mod) => mod.CasedetailsModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/cases/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
