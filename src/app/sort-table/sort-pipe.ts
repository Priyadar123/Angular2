import {Pipe, PipeTransform} from '@angular/core';

@Pipe({  name: 'orderBy' })

/*the sort function compares two objects at a time and if obj1 is greater than obj2 it returns 1, else if obj1 is less than obj2 it returns -1 and if equal it returns 0. */

export class SortPipe implements PipeTransform {

  transform(array: Array<any>, args?: any): any {
    
    return array.sort(function(obj1:any,obj2:any){
          if(obj1[args.property] < obj2[args.property]){
            return -1 * args.sort;
          }
          else if(obj1[args.property] > obj2[args.property]){
            return 1 * args.sort;
          }
          else{
            return 0;
          }
        });
    };
}