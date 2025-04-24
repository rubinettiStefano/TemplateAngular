import {Component, Input} from '@angular/core';
import {Drago} from '../../model/drago';
import {NgIf} from '@angular/common';
import {StatoGlobaleService} from '../../services/stato/stato-globale.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dettaglio-drago',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './dettaglio-drago.component.html',
  styleUrl: './dettaglio-drago.component.css'
})
export class DettaglioDragoComponent
{
  constructor(private stato:StatoGlobaleService) {
  }
  //il valore messo qui è il valore messo nell'uri
  //al posto del segnaposto :pos
  //es: /dettaglio/4  pos prende valore 4
  @Input() pos:number=-1;//la inizializzo a -1, così di base non ha senso

  getDrago()
  {
    return this.stato.draghiInApp[this.pos];
  }
}
