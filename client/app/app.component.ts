import { Component, OnInit } from '@angular/core';
// import {UserInfo} from './features/service/userInfo.service.js';
//import { DateInfo }        from './features/service/dateInfo.service';

@Component({
  selector: 'my-app',
  template: `
  <p>Message Center</p>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit { 
	constructor() { }  //,private dateInfo:DateInfo
	ngOnInit(){
		// console.log(this.userInfo.getUserInfo()+'   from app.component.ts');
    //console.log(this.dateInfo.getDate()+ '   from messageCenter.component');
	}
}
