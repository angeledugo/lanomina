import { Component, OnInit } from '@angular/core';
import { CCosto } from '../../../models/ccosto';
import { UserService } from '../../../services/user.service';
import { CcostoService } from '../../../services/ccosto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-nccosto',
    templateUrl: './nccosto.component.html',
    providers:[UserService, CcostoService]
  })

export class NccostoComponent implements OnInit {
  public ccosto: CCosto;
  public identity;
  public token;
  public status_ccosto;
  constructor(
    private _userService: UserService,
    private _ccostoService: CcostoService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    if(this.identity == null && !this.identity.sub) {
      this._router.navigate(['/login']);
    } else {
      this.ccosto = new CCosto(1,'','','0','null','null');
    }

  }

  onSubmit() {
    this._ccostoService.create(this.token, this.ccosto).subscribe(
      response => {
        this.status_ccosto = response.status;
        if(this.status_ccosto !== 'success') {
          this.status_ccosto = 'error';
        } else {
          this.ccosto = response.data;
          //this._router.navigate(['/task',this.task.id])
          this._router.navigate(['/admin/centro-costo']);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
