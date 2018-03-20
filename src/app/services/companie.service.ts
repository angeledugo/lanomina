import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class CompanieService {
    public url:string;

    constructor(private _http: Http){
      this.url = GLOBAL.url;
    }
    getCompanies(token, page = null){
      let params = "authorization=" + token;
      let headers = new Headers({'Content-type' : 'application/x-www-form-urlencoded'});
      if(page == null) {
        page = 1;
      }

      return this._http.post( this.url + '/companies', params ,{headers : headers})
        .map( res => res.json());
    }
}
