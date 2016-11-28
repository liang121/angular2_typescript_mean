import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { ShareModule } 		from './features/share/share.module';
import { UserInfo } 			from './features/service/userInfo.service.js';
import { AppComponent }  	from './app.component.js';
import { routing } 			from './app.routing.js';

@NgModule({
  imports:      [ BrowserModule, routing, ShareModule],
  declarations: [ AppComponent ],
  providers: 	[ UserInfo ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
