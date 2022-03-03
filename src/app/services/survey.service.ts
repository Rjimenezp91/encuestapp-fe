import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  localUrl = 'http://localhost:9090/http://localhost:8080'
  constructor( private httpClient : HttpClient) { }
  

  saveSurvey(survey: any){
    return this.httpClient.post( `${this.localUrl}/save`, survey).toPromise();
  }

  getAll(){
    return this.httpClient.get(`${this.localUrl}/getAll`).toPromise();
  }
}
