import { NgModule } from '@angular/core';
import { EventType, NavigationEnd, NavigationStart, Router, RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [ {
  path: 'test',
  component: TestingComponent
}, {
  path: 'customers',
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
} ];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  constructor(private router:Router) {

    this.router.navigate(['/'], )
    this.router.events.subscribe((event: any): void => {
      if(event.type == EventType.NavigationStart) {
        console.log(event.type,  event.url, event)
      }
    });

  }

}
