import { Pipe, PipeTransform } from '@angular/core';
import { Residence } from 'src/app/core/models/residence.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(residences: Residence[], searchText: string): Residence[] {
    if (!residences || !searchText) {
      return residences;
    }

    return residences.filter(residence =>
      residence.address.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
