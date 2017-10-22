import {Component} from '@angular/core';

@Component({
  selector: 'yw-app',
  template: `
  <!-- start of the parent app's content -->
    <div class="container-fluid">
      <h2>AppComponent</h2>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-8">
            <!-- demarcating where the/a tagline component should go -->
            <yw-tagline></yw-tagline>
            <yw-tagline></yw-tagline>
          </div>
          <div class="col-sm-4">
            <!-- a search component instance -->
            <yw-search></yw-search>
            <yw-tagline></yw-tagline>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
          <!-- a list -->
            <yw-list></yw-list>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <yw-list></yw-list>
          <!-- and a footer comp -->
            <yw-footer></yw-footer>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    div {
      background-color: #e0e0e0;
      padding: 8px;
    }
  `]
})
export class AppComponent {}
