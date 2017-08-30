import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>404: 页面未找到</md-card-title>
      <md-card-content>
        <p>哎呀，我迷路了</p>
      </md-card-content>
      <md-card-actions>
        <button md-raised-button color="primary" routerLink="/">带我回家</button>
      </md-card-actions>
    </md-card>
  `,
  styles: [
    `
    :host {
      text-align: center;
    }
  `,
  ],
})
export class NotFoundComponent {}
