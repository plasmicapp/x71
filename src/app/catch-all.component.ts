import { Component } from '@angular/core';
import { ComponentRenderData } from '@plasmicapp/loader-angular';
import { PLASMIC } from './plasmic-init';

@Component({
  selector: 'catch-all',
  template: `
    <plasmic-root-provider
      *ngIf="!loading && prefetchedData"
      [loader]="loader"
      [prefetchedData]="prefetchedData"
    >
      <plasmic-component [component]="path"></plasmic-component>
    </plasmic-root-provider>
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="!loading && !prefetchedData">Error...</div>
  `,
})
export class CatchAllComponent {
  loader = PLASMIC;
  path: string = '';
  loading: boolean = true;
  prefetchedData: ComponentRenderData | null = null;

  constructor() {}

  ngOnInit() {
    (async () => {
      this.path = window.location.pathname.replace(/\/$/, '');
      this.prefetchedData = await PLASMIC.maybeFetchComponentData(this.path);
      console.log('!!', this.path, this.prefetchedData);
      this.loading = false;
    })();
  }
}
