import { Injectable } from '@angular/core';

@Injectable()
export class DateInfo {
	getDate() {
		var currentDate = new Date();
		return currentDate;
	}
}