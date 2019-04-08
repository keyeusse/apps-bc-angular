import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  applications: Application[] = [];

  public endpoint = 'https://rmspgtif2m.execute-api.us-east-2.amazonaws.com/InfoApps/';

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor( public http: HttpClient) {
  }

  getApps(): Observable<Application[]> {
      return this.http.get<Application[]>(this.endpoint + 'infoapps');
    }

  getMoreInfo(i: string) {
      return this.applications[i];
  }

    buscarApp( termino: string): Application[] {

      this.getApps().subscribe((data: {}) => {
        this.applications = data['Items'];
      });
      const appArr: Application[] = [];
      termino = termino.toLowerCase();
      for ( const app of this.applications) {

          const nombre = app.appName.toLowerCase();

          if (nombre.indexOf( termino ) >= 0) {
              appArr.push(app);
          }
      }
      return appArr;
  }
}

export interface Application {
  id: string;
  image: string;
  appName: string;
  description: string;
  moreInfo: string;
}
