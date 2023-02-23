import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  public data: any = [];
  public caseData = new BehaviorSubject<any>(this.data);
  public id: any = [];
  public caseId = new BehaviorSubject<any>(this.id);

  sendCaseData(params: any){
    this.data = params;
    this.caseData.next(this.data);
  }

  sendCaseID(params: any){
    this.id = params;
    this.caseId.next(this.id);
  }
}
