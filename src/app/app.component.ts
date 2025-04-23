import { Component } from '@angular/core';
import {TabellaMostriComponent} from './components/tabella-mostri/tabella-mostri.component';
import {FormDragoComponent} from './components/form-drago/form-drago.component';
import {Mostro} from './model/mostro';
import {MostroRepositoryService} from './services/ajax/mostro-repository.service';

@Component({
  selector: 'app-root',
  imports: [
    TabellaMostriComponent,
    FormDragoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //stato del componente, dati da mostrare
  mostriInApp:Mostro[] = [];

  //angular istanzia la repository e la passa come proprietà al componente
  constructor(private mostroRepo:MostroRepositoryService)
  {
   this.ricaricaTabella();
  }

  //quando richiamato refresha l'array con i dati freschi freschi dal backend
  ricaricaTabella() {
    this.mostroRepo.getAllMostri()
      .subscribe(arrayDiMostriLettiDalMetodo=>this.mostriInApp = arrayDiMostriLettiDalMetodo);
  }
}
