import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { MessageFilterPipe } from '../messageCenter/messageFilter.pipe.js';

//import {ArHeader} from '../header/header.component';

@NgModule({
  imports:      [ CommonModule, HttpModule, FormsModule ],
  declarations: [ MessageFilterPipe ],
  exports: 		[ CommonModule, HttpModule, FormsModule, MessageFilterPipe ]
})
export class ShareModule { }