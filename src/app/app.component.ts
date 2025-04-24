import { Component } from '@angular/core';
import {TabellaDraghiComponent} from './components/tabella-mostri/tabella-draghi.component';
import {FormDragoComponent} from './components/form-drago/form-drago.component';
import {Mostro} from './model/mostro';
import {MostroRepositoryService} from './services/ajax/mostro-repository.service';
import {Drago} from './model/drago';
import {DragoRepositoryService} from './services/ajax/drago-repository.service';
import {DettaglioDragoComponent} from './components/dettaglio-drago/dettaglio-drago.component';
import {NgIf} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    TabellaDraghiComponent,
    FormDragoComponent,
    DettaglioDragoComponent,
    NgIf,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{


}
