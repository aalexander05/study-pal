import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfigService } from '../app-config-service.service';
import { StudySessionView } from '../Dtos/studySessionView';
import { StudySummary } from '../Dtos/studySummary';

@Injectable({
  providedIn: 'root'
})
export class StudySessionService {
  
  controller: string = "StudySession"

  constructor(private httpClient: HttpClient,
    private appConfigService: AppConfigService) { }


  getAllSessions(): Observable<StudySessionView[]> {
    return this.httpClient.get<StudySessionView[]>(`${this.appConfigService.baseUrl}${this.controller}`);
  }

  getRecentSessions(): Observable<StudySessionView[]> {
    return this.httpClient.get<StudySessionView[]>(`${this.appConfigService.baseUrl}${this.controller}/Recent`);
  }

  getByIdForUser(studySessionId: string): Observable<StudySessionView> {
    return this.httpClient.get<StudySessionView>(`${this.appConfigService.baseUrl}${this.controller}/${studySessionId}`)
  }

  saveSession(sessionToSave: StudySessionView): Observable<void> {
    return this.httpClient.post<void>(`${this.appConfigService.baseUrl}${this.controller}`, sessionToSave);
  }

  updateSession(sessionToSave: StudySessionView): Observable<void> {
    return this.httpClient.put<void>(`${this.appConfigService.baseUrl}${this.controller}`, sessionToSave);
  }

  getSummary(): Observable<StudySummary> {
    return this.httpClient.get<StudySummary>(`${this.appConfigService.baseUrl}${this.controller}/Summary`)
  }

  deleteSession(studySessionId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.appConfigService.baseUrl}${this.controller}/${studySessionId}`);
  }



}
