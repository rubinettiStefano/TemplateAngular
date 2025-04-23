import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Mostro} from '../../model/mostro';
import {MostroRepositoryService} from '../../services/ajax/mostro-repository.service';

@Component({
  selector: 'app-tabella-mostri',
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './tabella-mostri.component.html',
  styleUrl: './tabella-mostri.component.css'
})
export class TabellaMostriComponent
{

  @Input() mostri:Mostro[] = [];


  // carica()
  // {
  //   //chiamo la repository per farmi arrivare l'array di mostri
  //   //quando l'array arriva lo stampo in console
  //   this.mostroRepo.getAllMostri()
  //     .subscribe(
  //       //qui dentro metto la call back, una funzione che riceve come parametro
  //       //l'array di mostri che il metodo ha ottenuto convertendo il JSON
  //       //e lo usa per fare ciò che voglio, in questo caso stampare
  //       (arrayDiMostriLettiDalMetodo)=>
  //       {
  //         //corpo della funzione
  //         console.log(arrayDiMostriLettiDalMetodo);
  //         alert("Quando premerai ok l'array mostri sarà riempito")
  //         this.mostri = arrayDiMostriLettiDalMetodo;
  //       }
  //     );
  // }
}
