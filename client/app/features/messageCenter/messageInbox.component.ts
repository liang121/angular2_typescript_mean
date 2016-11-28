import {Component, OnInit} 	from '@angular/core';
import { Http, Response } 	from '@angular/http';
import 'rxjs/Rx';
import { DateInfo }				from '../service/dateInfo.service.js';
@Component({
	templateUrl: './client/app/features/messageCenter/messageBox.html'
})
export class MessageInbox implements OnInit {
	constructor(private http:Http, private dateInfo:DateInfo){};
	templateId:string;
	mark:string;
	filterCondition: string;
	messagesObject: any[] = [];
	selectedItemsId: Array<any>;
	conditionVal:any;
	ngOnInit(){
		this.templateId = 'INBOX'
		this.mark = 'Mark As Read';
		this.filterCondition = 'ALL';
		this.getMessage();
		console.log(this.dateInfo.getDate()+ '   from messageInbox.component');
	}
	getMessage(){

	  	this.http.post('http://localhost:9000/api/inbox/systemMessages/operate',{action:'G'})
	    .subscribe(　		
	    	data =>  this.assignMessage(data)
	    );
	}
	assignMessage(data){
		this.messagesObject = JSON.parse(data._body);
	}
	operateMessage(action,actionName){
		if(actionName){
			this.mark = actionName;
		}
		this.http.post('http://localhost:9000/api/inbox/systemMessages/operate', {action: action, selectedItemsId: this.selectedItemsId})
		.subscribe(
			data => this.getMessage()
		);
	}
	updateSelectedId(itemObject){
		itemObject.selected = !itemObject.selected;
		this.selectedItemsId = [];
		for(var i=0; i<this.messagesObject.length; i++){
			if(this.messagesObject[i].selected === true){
				this.selectedItemsId.push(this.messagesObject[i]._id);
			}
		}
	}
	setFilterCondition(conditionVal,conditionName){
		this.filterCondition = conditionName;
		this.conditionVal = conditionVal;
	}

	
};