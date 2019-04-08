import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppsService, Application } from '../../services/apps.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,
    private applicationService: AppsService,
    private router: Router) { }

  public applications: Application[] = [];
  applicationsComplete: Application[] = [];
  termino: string;
  id: string;
  searchApp: Application[] = [];

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.applicationService.getApps().subscribe((data: {}) => {
        this.applicationsComplete = data['Items'];
        this.buscarApp( params['termino']);
        this.termino = params['termino'];
        console.log(this.applications);
      });
    });
  }

  buscarApp( termino: string) {
    this.applications = [];
    termino = termino.toLowerCase();
    console.log(this.applicationsComplete);
    for (let i = 0, n = this.applicationsComplete.length; i < n; i++) {
      var app = this.applicationsComplete[i];
      const nombre = app.appName.toLowerCase();
        console.log(nombre);
        if (nombre.indexOf( termino ) >= 0) {
            console.log('termino encontrado ' + nombre);
            this.applications.push(app);
            console.log(app);
        }
    }
    if (this.applications.length === 0) {
      this.applications = this.applicationsComplete;
    }
}

  encontrarId(id: string) {
    console.log(id);
    for (var i = 0; i < this.applications.length; i++) {
      if (this.applications[i].id === id) {
        return this.applications[i];
      }
    }
  }

  public verMas(id: string) {
    this.router.navigate(['/more-info', id], {queryParams: {'application': JSON.stringify(this.encontrarId(id))}});
  }
}
