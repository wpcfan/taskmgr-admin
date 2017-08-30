
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User, Authenticate } from '../models/user.model';

@Injectable()
export class AuthService {
  constructor() {}

  login({ username, password }: Authenticate) {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test') {
      return Observable.throw('Invalid username or password');
    }

    return Observable.of({ name: 'User' });
  }

  logout() {
    return Observable.of(true);
  }
}
