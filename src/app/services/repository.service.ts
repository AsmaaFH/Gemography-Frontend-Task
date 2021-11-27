import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private httpClient: HttpClient) { }

  getAllReposetories(){
    return this.httpClient.get(`${environment.API_URL}`);
  }
}


