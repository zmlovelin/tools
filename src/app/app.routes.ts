import {Routes} from '@angular/router';

export const ROUTER_CONFIG: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', loadChildren: './components/main#MainModule' },
];
