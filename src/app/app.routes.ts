import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/auth/feature/login-page/login-page.component';
import { MapPageComponent } from './modules/dashboard/feature/map-page/map-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MapPageComponent,
  },
];
