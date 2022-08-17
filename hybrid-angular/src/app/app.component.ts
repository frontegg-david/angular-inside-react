import { Component, ViewEncapsulation } from '@angular/core';
import { APPLICATION_ID } from '../helpers';
import AppContext from '../AppContext';

@Component({
  selector: APPLICATION_ID,
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'hybrid-angular';

}
