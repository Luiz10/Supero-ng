import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform{
    transform(status) {
        if(status === 1){
              return 'Em andamento'
        }
        return 'Finalizado'
    }

}