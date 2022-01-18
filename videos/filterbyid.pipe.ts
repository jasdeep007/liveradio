import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbyid'
})
export class FilterbyidPipe implements PipeTransform {

  transform(data: any, filtervalue: any): any {    
    return data.filter((item: any) => item.topicid == filtervalue);
  }

}
