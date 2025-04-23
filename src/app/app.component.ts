import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MostroRepositoryService} from './services/ajax/mostro-repository.service';
import {Mostro} from './model/mostro';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //stato del componente, dati da mostrare
  mostri:Mostro[] = [];

  //angular istanzia la repository e la passa come proprietà al componente
  constructor(private mostroRepo:MostroRepositoryService)
  {}


  carica()
  {
    //chiamo la repository per farmi arrivare l'array di mostri
    //quando l'array arriva lo stampo in console
    this.mostroRepo.getAllMostri()
      .subscribe(
        //qui dentro metto la call back, una funzione che riceve come parametro
        //l'array di mostri che il metodo ha ottenuto convertendo il JSON
        //e lo usa per fare ciò che voglio, in questo caso stampare
        (arrayDiMostriLettiDalMetodo)=>
        {
          //corpo della funzione
          console.log(arrayDiMostriLettiDalMetodo);
          alert("Quando premerai ok l'array mostri sarà riempito")
          this.mostri = arrayDiMostriLettiDalMetodo;
        }
      );
  }
}
