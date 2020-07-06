import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchfilter',
    pure: false
})
export class SearchPipe implements PipeTransform {
    transform(taxedIncome: any[], filter: Object): any {
        if (!taxedIncome || !filter) {
            return taxedIncome;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return taxedIncome.filter(item => item.state.indexOf(filter) !== -1);
    }
}