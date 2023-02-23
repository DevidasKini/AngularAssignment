import { CaseresultsComponent } from './caseresults.component';
import { CasedetailsComponent } from './../casedetails/casedetails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseresultsRoutingModule } from './caseresults-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CaseresultsComponent
  ],
  imports: [
    CommonModule,
    CaseresultsRoutingModule,
    NgbModule,
    HttpClientModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CaseresultsModule { }
