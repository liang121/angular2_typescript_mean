import {Component, OnInit} from '@angular/core';
@Component({
	templateUrl: './client/app/features/messageCenter/messageBox.html'
})

export class MessageSentbox implements OnInit {
	templateId:string;
	mark:string;
	filterCondition: string;
	messagesObject: any[] = [];
	ngOnInit(){
		this.templateId = 'SENT BOX';
		this.mark = 'Mark As Read';
		this.filterCondition = 'ALL';
	}
};