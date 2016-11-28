import { Component, OnInit } from '@angular/core';
// import {UserInfo} from '../service/userInfo.service.js';
import { DateInfo }				from '../service/dateInfo.service.js';

@Component({
  templateUrl: './client/app/features/messageCenter/messageCenter.html'
})

export class MessageCenter implements OnInit {
	constructor(private dateInfo:DateInfo){};
	ngOnInit(){
		// console.log(this.userInfo.getUserInfo()+'   from massageCenter.component.ts')
		console.log(this.dateInfo.getDate()+ '   from messageCenter.component');
	}
}
