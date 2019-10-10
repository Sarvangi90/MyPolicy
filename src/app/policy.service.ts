import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Policy } from './policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private policyUrl = 'api/policy';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.policyUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }

  private initializePolicy(): Policy {
    
    return {
      policyNum: 0
    };
  }
}
