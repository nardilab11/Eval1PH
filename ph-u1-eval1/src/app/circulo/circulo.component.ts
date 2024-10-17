import { Component, OnInit } from '@angular/core';
import { IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader, IonCardContent, IonList, IonItem, IonInput, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/figura';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader, IonList, IonInput, IonItem, IonButton]
})
export class CirculoComponent  implements OnInit {
  radioStr: string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPer() {
    const radio = parseFloat(this.radioStr)
    const circulo = new Circulo("Círculo", radio)
    const perimetro = circulo.calcularPerimetro().toFixed(2)
    this.resultado = "El perímetro es " + perimetro + " cm"
  }

}
