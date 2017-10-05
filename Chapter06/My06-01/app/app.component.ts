import {Component} from '@angular/core';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container-fluid">
      <h1>Younderwater Portal</h1>
      <yw-planner></yw-planner><!-- <= imported from the planner module/component -->
      <log-book></log-book>
      <buddy-comp></buddy-comp>
        <inventory></inventory>
    </div>
  `
})
export class AppComponent {
}
