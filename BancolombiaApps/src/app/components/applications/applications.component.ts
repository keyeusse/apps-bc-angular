import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppsService, Application } from '../../services/apps.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})

export class ApplicationsComponent implements OnInit {

  applications: Application[] = [];

  get getApp(): Application[] {
      return this.applications;
  }

  constructor( private _applicationService: AppsService,
    private router: Router
    ) { }

  ngOnInit() {
      this._applicationService.getApps().subscribe((data: {}) => {
      this.applications = data['Items'];
      console.log(this.applications);
    });
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
