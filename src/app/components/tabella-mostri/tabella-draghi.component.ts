import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Mostro} from '../../model/mostro';
import {MostroRepositoryService} from '../../services/ajax/mostro-repository.service';
import {Drago} from '../../model/drago';
import {StatoGlobaleService} from '../../services/stato/stato-globale.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-tabella-mostri',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './tabella-draghi.component.html',
  styleUrl: './tabella-draghi.component.css'
})
export class TabellaDraghiComponent
{
  //private=non disponibile nella view, nell'html
  //public=disponibile
  constructor(public stato:StatoGlobaleService) {
  }


  @Output()
  mostraDettaglio:EventEmitter<number> = new EventEmitter<number>();

  mostraDettaglioDrago(i: number)
  {
    this.mostraDettaglio.emit(i);//viene emesso evento che porta
    //come payload informativo (contenuto), l'indice del drago cliccato
  }
}
