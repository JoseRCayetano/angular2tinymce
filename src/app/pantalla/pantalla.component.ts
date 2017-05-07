import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ApplicationRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent implements OnInit {
  myForm: FormGroup;
  caaa;
  aplication: ApplicationRef;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  //Cuando se levanta el keyp
   mostrar(event){
    this.myForm.get('rich').setValue(event);
    
  }

  buildForm() {
     this.myForm = this._fb.group({
      rich: 'hi'
    });
  }
  //Boton cambio idioma
  cambiarValor(){
    
     this.myForm = this._fb.group({
      rich: 'hola'
    });
      
  }
  //Mostrar el form
  mostrarValueForm(){
    console.log(this.myForm.get('rich').value);
  }
  

}
