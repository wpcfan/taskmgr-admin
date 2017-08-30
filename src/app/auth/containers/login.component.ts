
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Authenticate } from '../models/user.model';
import * as fromAuth from '../reducers';
import * as Auth from '../actions/auth.action';

@Component({
  selector: 'app-login',
  template: `
    <app-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </app-login-form>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  pending$ = this.store.select(fromAuth.getLoginPagePending);
  error$ = this.store.select(fromAuth.getLoginPageError);

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  onSubmit($event: Authenticate) {
    this.store.dispatch(new Auth.Login($event));
  }
}
