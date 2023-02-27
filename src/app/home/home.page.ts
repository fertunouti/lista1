import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('input') meuInput:any;
  minhaLista = ["Batata", "Cebola","Limão"];
  texto="";


  constructor() {}

  adiciona () {
        this.minhaLista.push(this.texto);
        this.texto = "";
        this.meuInput.setFocus();
  };
  remove (indice:number){
          this.minhaLista.splice(indice,1);
          this.meuInput.setFocus();
             
 };

}
