import { CasedetailsComponent } from './casedetails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasedetailsRoutingModule } from './casedetails-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CasedetailsComponent
  ],
  imports: [
    CommonModule,
    CasedetailsRoutingModule,
    NgbModule,
    HttpClientModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CasedetailsModule { }
