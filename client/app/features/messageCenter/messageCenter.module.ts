import { NgModule }     	from '@angular/core';
import { routing }  		from './messageCenter.routing.js';
import { ShareModule } 		from '../share/share.module.js';
import { MessageInbox } 	from './messageInbox.component.js';
import { MessageSentbox } 	from './messageSentbox.component.js';
import { MessageCenter } 	from './messageCenter.component.js';
import { DateInfo }			from '../service/dateInfo.service.js';


@NgModule({
  imports:      [ routing, ShareModule ],
  declarations: [ MessageInbox, MessageSentbox, MessageCenter ],
  providers: 	[ DateInfo ]
})
export default class MessageCenterModule { }