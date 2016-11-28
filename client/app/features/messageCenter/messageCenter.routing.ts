import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageCenter} from './messageCenter.component.js';
import {MessageInbox} from './messageInbox.component.js';
import {MessageSentbox} from './messageSentbox.component.js';

export const routes: Routes = [
	{ 
		path:'', 
		component: MessageCenter,
		children: [
			{
				path: 'inbox', component: MessageInbox,
			},
			{
				path: 'sentbox', component: MessageSentbox,
			},
			{
				path: '', redirectTo: 'inbox', pathMatch: 'full'
			}
		],
	},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);