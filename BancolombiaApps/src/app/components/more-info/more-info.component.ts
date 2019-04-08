import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppsService, Application } from '../../services/apps.service';
import { ApplicationsComponent } from '../applications/applications.component';
import { AppComponent } from '../../app.component';
import {Location} from '@angular/common';


@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  moreInfo: any = {};
  application: Application;

  constructor( private activatedRoute: ActivatedRoute,
    private applicationService: AppsService,
    private _location: Location,
    private _moreInfoApp: ApplicationsComponent) {

    this.application = JSON.parse(this.activatedRoute.snapshot.queryParams['application']);
   }

  ngOnInit() {
  }

  public backClicked() {
    this._location.back();
  }
}
