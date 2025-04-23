import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Mostro} from '../../model/mostro';
import {MostroRepositoryService} from '../../services/ajax/mostro-repository.service';
import {Drago} from '../../model/drago';

@Component({
  selector: 'app-tabella-mostri',
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './tabella-draghi.component.html',
  styleUrl: './tabella-draghi.component.css'
})
export class TabellaDraghiComponent
{
  //il valore di questa proprietà viene passato dal padre
  @Input() draghi:Drago[] = [];

  @Output()
  mostraDettaglio:EventEmitter<number> = new EventEmitter<number>();

  mostraDettaglioDrago(i: number)
  {
    this.mostraDettaglio.emit(i);//viene emesso evento che porta
    //come payload informativo (contenuto), l'indice del drago cliccato
  }
}
