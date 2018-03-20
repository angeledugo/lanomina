import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { Response } from '@angular/http/src/static_response';
import { error } from 'util';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  providers:[UserService]
})

export class AuthComponent implements OnInit {
    public title: string;
    public user;
    public identity;
    public token;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.user = {
      'email' : '',
      'password' : '',
      'getHash' : 'true'
    }

  }

  ngOnInit() {
    console.log("bienvenido");
    this.logout();
    this.redirectIfIdentity();
  }

  redirectIfIdentity(){
    let identity = this._userService.getIdentity();
    if(identity != null && identity.sub){
      this._router.navigate(["/companies"]);
    }
  }
  logout() {
    this._route.params.forEach((params : Params) => {
      let logout = +params['id'];
      if(logout == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        //window.location.href = '/autentication/login';
      }

    });
  }
  onSubmit() {

    this._userService.signup( this.user ).subscribe(
      response => {
        this.identity  = response;
        if( this.identity.length <= 1) {
          console.log("Error en el servidor");
        } else {
          if(!this.identity.status){
            localStorage.setItem('identity', JSON.stringify(this.identity));
            // GET TOKEN
            this.user.getHash = null;
            this._userService.signup(this.user).subscribe(
              response => {
                  this.token  = response;
                  if(this.identity.length <= 1 ){
                      console.log('error en el servidor');
                  }else{
                      if(!this.identity.status){
                          localStorage.setItem('token', JSON.stringify(this.token));
                          window.location.href = 'companies';
                      }
                  }
              },
              error => {
                  console.log(<any>error);
              }
            );
          }
        }

      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
