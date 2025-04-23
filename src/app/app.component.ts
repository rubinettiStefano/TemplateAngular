import { Component } from '@angular/core';
import {TabellaDraghiComponent} from './components/tabella-mostri/tabella-draghi.component';
import {FormDragoComponent} from './components/form-drago/form-drago.component';
import {Mostro} from './model/mostro';
import {MostroRepositoryService} from './services/ajax/mostro-repository.service';
import {Drago} from './model/drago';
import {DragoRepositoryService} from './services/ajax/drago-repository.service';
import {DettaglioDragoComponent} from './components/dettaglio-drago/dettaglio-drago.component';

@Component({
  selector: 'app-root',
  imports: [
    TabellaDraghiComponent,
    FormDragoComponent,
    DettaglioDragoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //stato del componente, dati da mostrare
  draghiInApp:Drago[] = [];
  dragoSelezionato:Drago | null = null;

  //angular istanzia la repository e la passa come proprietà al componente
  constructor(private dragoRepo:DragoRepositoryService)
  {
   this.ricaricaArray();
  }

  //quando richiamato refresha l'array con i dati freschi freschi dal backend
  ricaricaArray() {
    this.dragoRepo.getAllMostri()
      .subscribe(arrayDiDraghiLettiDalMetodo=>this.draghiInApp = arrayDiDraghiLettiDalMetodo);
  }

  mostraDrago(posizione: number)
  {

    this.dragoSelezionato = this.draghiInApp[posizione];
  }
}
