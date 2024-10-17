import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonSelect, IonSelectOption, SelectChangeEventDetail, IonCard } from '@ionic/angular/standalone';
import { CirculoComponent } from "../circulo/circulo.component";
import { IonSelectCustomEvent } from '@ionic/core';
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCard, IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent, IonSelect, IonSelectOption, TrianguloComponent, CommonModule],
})
export class HomePage {
  figura:string = ""

  constructor() {}

  esCirculo(){return this.figura == "circulo"}
  esTriangulo(){return this.figura == "triangulo"}

  manejarSeleccionFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.figura = $event.detail.value
  }
}
