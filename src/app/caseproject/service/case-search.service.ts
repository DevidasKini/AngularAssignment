import { HttpParams, HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaseSearchService {

  constructor(private http: HttpClient) { }

  caseSearch(search: any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("caseName:", `${search}`);
    queryParams = queryParams.append("sort", `${'filedDate'}`);
    queryParams= queryParams.append("order", `${'desc'}`);
    queryParams = queryParams.append("pageNumber", `${'1'}`);
    

    return this.http.get(`${environment.caseSearchResults}?q=${queryParams}`);
  }

  getCaseById(id: any){
    let caseId = id;
    return this.http.get(`${environment.getCaseByIdUrl}/${caseId}`)
  }
}
