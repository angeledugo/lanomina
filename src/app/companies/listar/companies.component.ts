import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CompanieService } from '../../services/companie.service';
import { Response } from '@angular/http/src/static_response';

import { Companie } from '../../models/companies';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  providers:[UserService, CompanieService]
})
export class CompaniesComponent implements OnInit {
  public identity;
  public token;
  public companies: Companie;
  public loading;
  constructor(
    private _userService: UserService,
    private _companieService: CompanieService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {

    if(this.identity) {
      this.getCompanies();
    } else {
      //this._router.navigate(['/login']);

    }
  }

  getCompanies() {

    this.loading = 'show';
    this._route.params.forEach((params: Params) => {
      let id = +params['id'];

      this._companieService.getCompanies(this.token).subscribe(
        response => {

            if(response.status = 'success') {
              console.log(this.companies);
                //Podemos ver la tarea
                this.companies = response.data;
                this.loading = 'hiden';



            } else {
              this._router.navigate(['/login']);
            }
        },
        error => {
            console.log(<any>error);
        }
      )
    });
  }



}
