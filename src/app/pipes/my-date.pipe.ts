import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {
  arr:any [] = ['Հունվար', 'Փետրվար','Մարտ','Ապրիլ', 'Մայիս','Հունիս','Հուլիս','Օգոստոս','Սեպտեմբեր','Հոկտեմբեր','Նոյեմբեր','Դեկտեմբեր']

  transform(value: any, ...args: unknown[]): unknown {
    const year = value.getFullYear();
    const month = value.getMonth();
    const day = value.getDate();
    const resMonth = this.arr[month]
    return `${year},${resMonth},${day}`;
  }

}
