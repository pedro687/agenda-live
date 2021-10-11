import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    let dateOut: moment.Moment = moment(date, "YYYY-MM-DDTHH:mm:ss");
    return dateOut.format("yyyy/MM/DD HH:mm");
  }

}
