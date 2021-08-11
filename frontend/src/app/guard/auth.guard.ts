import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {UserService} from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: UserService) { }

  async canActivate() {
    return await this.auth.isAuthenticated();
  }

}
