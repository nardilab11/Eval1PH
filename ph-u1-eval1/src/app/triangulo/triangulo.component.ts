import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../modelo/figura';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonInput, IonButton, FormsModule]
})
export class TrianguloComponent  implements OnInit {

  ladoAStr: string = "";
  ladoBStr: string = "";
  ladoCStr: string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPer() {
    const ladoA = parseFloat(this.ladoAStr)
    const ladoB = parseFloat(this.ladoBStr)
    const ladoC = parseFloat(this.ladoCStr)
    const triangulo = new TrianguloEscaleno("Triángulo", ladoA, ladoB, ladoC)
    const perimetro = triangulo.calcularPerimetro().toFixed(2)
    this.resultado = "El perímetro es " + perimetro + " cm"
  }

}
