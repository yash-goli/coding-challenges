import { Pipe, PipeTransform } from '@angular/core';
import { Option } from 'src/app/shared/models/pipes-task.model';

@Pipe({
  name: 'customSort'
})
export class CustomSortPipe implements PipeTransform {

  transform(value: Option[], ...args: (string | string[])[]): Option[] {
    const pipeArgs = args.flat();
    const newSortedValues = [...value];
    newSortedValues.sort(this.sort(pipeArgs));
    return newSortedValues;
  }

  sort(args: string[]) {
    return (a: any, b: any) => {
      return args.map((arg) => {
        let dir = 1;
        if (arg[0] === '-') {
          dir = -1;
          arg = arg.substring(1);
        }

        let l = a[arg];
        let r = b[arg];

        if (typeof a[arg] === 'string' && typeof b[arg] === 'string') {
          l = a[arg].toUpperCase();
          r = b[arg].toUpperCase();
        }

        if (l > r) return dir;
        if (l < r) return -(dir);
        return 0;
      }).reduce((acc, curr) => {
        return acc ? acc : curr;
      }, 0);
    };
  }
}
