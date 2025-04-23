import {Component, Input} from '@angular/core';
import {Drago} from '../../model/drago';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dettaglio-drago',
  imports: [
    NgIf
  ],
  templateUrl: './dettaglio-drago.component.html',
  styleUrl: './dettaglio-drago.component.css'
})
export class DettaglioDragoComponent
{
  //null è anche un tipo in typescript
  @Input() drago:Drago | null = null;
}
