import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

// Load project modules
import { SharedModule } from '../shared/shared.module';
// containers
import { AppComponent } from './containers/app.component';
import { NotFoundComponent } from './containers/not-found.component';
// components
import { LayoutComponent } from './components/layout.component';
import { SideNavComponent } from './components/sidenav.component';
import { NavItemComponent } from './components/nav-item.component';
import { ToolbarComponent } from './components/toolbar.component';
// utils
import { loadSvgResources } from '../utils/svg.util';

import '../utils/debug.util';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';

export const COMPONENTS = [
  AppComponent,
  NotFoundComponent,
  LayoutComponent,
  NavItemComponent,
  SideNavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf()
    parentModule: CoreModule,
    iconRegistry: MdIconRegistry,
    sanitizer: DomSanitizer) {
    if (parentModule) {
      throw new Error('CoreModule 已经装载，请仅在 AppModule 中引入该模块。');
    }
    loadSvgResources(iconRegistry, sanitizer);
  }
}
