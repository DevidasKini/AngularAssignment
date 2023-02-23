import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CaseSearchService } from '../service/case-search.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DatashareService } from '../service/dataShare.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  searchCaseForm!: FormGroup;
  validationBegins: boolean = false;
  caseResults = {};
  constructor(private fb: FormBuilder, private router: Router, private service: CaseSearchService,
    private dataShare: DatashareService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.searchCaseForm = this.fb.group({
      caseName: ['', Validators.required]
    })
  }

  get formControls(){
    return this.searchCaseForm.controls;
  }

  formValidation(){
    console.log(this.searchCaseForm);
    return this.searchCaseForm.valid;
  }
  
  searchCase(){
    this.validationBegins = true;
    const isValid = this.formValidation();
    if(!isValid){
      return
    }
    console.log(this.searchCaseForm.controls.caseName.value);
    this.service.caseSearch(this.searchCaseForm.get('caseName')?.value).subscribe((params: any)=>{
      console.log(params);
      this.caseResults = params;
      this.dataShare.sendCaseData(this.caseResults);
      this.router.navigateByUrl('cases/caseResults');
    },
    (error: HttpErrorResponse)=>{
      console.log(error);
    })

  }

}
