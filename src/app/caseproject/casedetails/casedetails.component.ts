import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../service/dataShare.service';
import { CaseSearchService } from '../service/case-search.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-casedetails',
  templateUrl: './casedetails.component.html',
  styleUrls: ['./casedetails.component.css']
})
export class CasedetailsComponent implements OnInit {

  caseData = {'caseId':''};
  displayData = {};
  caseResults: any = [];
  caseSearchResultArray: any= []
  caseId: any;

  constructor(private router: Router, private dataShare: DatashareService, private service: CaseSearchService) { }

  ngOnInit(): void {

    
  }

  ionViewWillEnter(){
    this.dataShare.caseId.subscribe((params: any)=>{
      this.caseId = params;
    });
    
    this.service.getCaseById(this.caseId).subscribe((params: any)=>{
      console.log(params);
      this.caseResults = params;
    },
    (error: HttpErrorResponse)=>{
      console.log(error);
    })
  }

  goToCaseResults(){
    this.router.navigateByUrl('cases/caseResults');
  }

}
