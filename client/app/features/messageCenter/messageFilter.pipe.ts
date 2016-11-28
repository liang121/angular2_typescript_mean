import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'messageFilter'})

export class MessageFilterPipe implements PipeTransform {
	transform(messages:any[], condition: any, isEnable:boolean): any{
		var result:any[] = [];
		var currentDate = new Date();
		if(this.isEmpty(condition)||this.isEmpty(messages)){
			return messages;
		}
		if(isEnable){
			var i:number;
			for(i=0; i<messages.length;i++){
				if(this.isNum(condition)){
					if(this.daysDiff(messages[i].messageHeader.date,currentDate)<=condition){
						result.push(messages[i]);
					}
				}else{
					if(messages[i].isReaded=== false){
						result.push(messages[i]);
					}
				}
			}
			return result;
		}else{
			return messages;
		}
	};
	daysDiff(sDate, eDate){
		var startDate = new Date(sDate);
        var endDate = new Date(eDate);
        return Math.ceil((endDate.getTime() - startDate.getTime())/1000/3600/24);
	}
	isEmpty(val:any){
		if(val=== '' || val=== undefined || val=== null){
			return true;
		}else{
			return false;
		}
	}
	isNum(val:any){
		if (typeof(val) === 'number') return true;
		else return false;
	}
}
