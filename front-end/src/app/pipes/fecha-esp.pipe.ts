import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaEsp'
})
export class FechaEspPipe implements PipeTransform {

  transform(value: string, mostrarDia: boolean = true): string {
    const fecha = new Date(value);
    const day = this.pad(fecha.getDate());
    const month = fecha.toLocaleDateString('es-ES', { month: 'long' });
    const year = fecha.getFullYear();
    
    if (mostrarDia) {
      return `${day}/${month}/${year}`;
    } else {
      return `${month}/${year}`;
    }
  }

  // Esta función agrega un 0 al principio si el número es menor que 10
  private pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}

