import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { LoginFormComponent } from './components/login-form.component';
import { LoginComponent } from './containers/login.component';

import { reducers } from './reducers';
import { AuthEffects } from './effects/auth.effects';

export const COMPONENTS = [LoginComponent, LoginFormComponent];

@NgModule({
  imports: [
    SharedModule
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class RootAuthModule {}
