import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/mergeMap';

@Injectable()
export class UserService {
  public users = [];
  public err = {};
  private _baseUrl = 'https://test-api.javascript.ru/v1/shkyrmetoffa-gmail-com/users';

  constructor(private _http:Http) {
    let requestObservable = this._http.get(this._baseUrl);
    requestObservable.subscribe((response:Response) => {
      this.users = response.json();
    });
  }

  returnUsers() {
    return this.users;
  }

  add(user) {
    this._http.post(this._baseUrl, user).subscribe((response:Response) => {
      this.users.push(response.json());
    },
    (err:Response) => {
      this.err = err.json();
      // console.log (this.err);
    });
    alert('Type your email and full name, please');
  }
  removeUser(removeFromList) {
    this._http.delete(this._baseUrl + '/' + removeFromList._id).subscribe(() => {
      this.users = this.users.filter(users => users !== removeFromList);
    });
  }

}

