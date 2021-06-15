import { Component } from '@angular/core';


interface Persona{
  nombre:string;
  favoritos:Favorito[];
}

interface Favorito{
  id:number;
  nombre:string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  persona:Persona ={
    nombre:'Félix',
    favoritos:[
      {id:1, nombre:'Metal Gear'},
      {id:2, nombre:'Death Stranding'}
    ]
  }
 


  guardar(){
    console.log("formulario Posteado");
  }

}
