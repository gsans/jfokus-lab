import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class UsersService {
  private _users; //class property
  constructor(private http: Http) {
    /*this._users = [{
      id: 34,
      username: 'batman',
      roles: ['admin', 'user'],
      superuser: true
    }, {
        id: 67,
        username: 'spiderman',
        roles: ['user'],
        superuser: false
      }]; */
  }

  get() {
    //return this._users;
    return this.http.get('/assets/users.json')
      .map(response => response.json());
  }
}