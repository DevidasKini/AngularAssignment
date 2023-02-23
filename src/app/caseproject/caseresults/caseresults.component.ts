import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../service/dataShare.service';
import { CaseSearchService } from '../service/case-search.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-caseresults',
  templateUrl: './caseresults.component.html',
  styleUrls: ['./caseresults.component.css']
})
export class CaseresultsComponent implements OnInit {


  presentations = ['1', '2','3'];
  caseResults = {};
  caseSearchResultArray: any= [];
  caseId: any;
  index = 0;
  constructor(private router: Router, private dataShare: DatashareService, private service: CaseSearchService) { }

  ngOnInit(): void {
    this.dataShare.caseData.subscribe((params: any)=>{
      this.caseResults = params;
      this.caseSearchResultArray = params.caseSearchResultArray;
      console.log(this.caseSearchResultArray);
      this.caseSearchResultArray.forEach((element:any )=> {
        this.caseId = element.caseId
      });
    })
  }

  getCaseDetails(){
    this.dataShare.sendCaseID(this.caseSearchResultArray[this.index]?.caseId);
    this.router.navigateByUrl('cases/caseDetails');
  }
  
}
