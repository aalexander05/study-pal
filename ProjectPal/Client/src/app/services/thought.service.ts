import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThoughtForView } from '../Dtos/thought-for-view';
import { ThoughtForSave } from '../Dtos/thought-for-save';
import { AppConfigService } from '../app-config-service.service';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  controller: string = "Thought"

  get token(): string | null {
    return localStorage.getItem('token');
  }

  requestOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  }

  constructor(private httpClient: HttpClient,
    private appConfigService: AppConfigService) { }

  getAllThoughts(): Observable<ThoughtForView[]> {
    return this.httpClient.get<ThoughtForView[]>(`${this.appConfigService.baseUrl}${this.controller}`, this.requestOptions);
  }

  getRecentThoughts(): Observable<ThoughtForView[]> {
    return this.httpClient.get<ThoughtForView[]>(`${this.appConfigService.baseUrl}${this.controller}/Recent`, this.requestOptions );
  }

  saveThought(thoughtToSave: ThoughtForSave): Observable<void> {
    return this.httpClient.post<void>(`${this.appConfigService.baseUrl}${this.controller}`, thoughtToSave, this.requestOptions);
  }

}
