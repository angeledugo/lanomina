import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbTabset } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    providers:[ NgbTabset ]
  })
  export class ProfileComponent implements OnInit {
    
    ngOnInit() {
    }
  }