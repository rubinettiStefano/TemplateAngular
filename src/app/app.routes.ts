import { Routes } from '@angular/router';
import {TabellaDraghiComponent} from './components/tabella-mostri/tabella-draghi.component';
import {FormDragoComponent} from './components/form-drago/form-drago.component';
import {DettaglioDragoComponent} from './components/dettaglio-drago/dettaglio-drago.component';

export const routes: Routes = [
  //quando uri è tabella mostra componente TabellaDraghiComponent
  {path:"tabella",component:TabellaDraghiComponent},
  {path:"form",component:FormDragoComponent},
  //:pos -> spring {pos}
  {path:"dettaglio/:pos",component:DettaglioDragoComponent},


];
