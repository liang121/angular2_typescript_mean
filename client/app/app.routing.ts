import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MessageCenter } from './features/messageCenter/messageCenter.module'

export const routes: Routes = [
  { path: '', redirectTo: 'messageCenter', pathMatch: 'full'},
  //{ path: '', redirectTo: '/messageCenter', pathMatch: 'full'},
  { path: 'messageCenter', loadChildren: './client/app/features/messageCenter/messageCenter.module.js' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);