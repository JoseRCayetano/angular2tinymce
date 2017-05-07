
import { Component, OnInit, OnDestroy, AfterViewInit, EventEmitter, Input, Output, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Subject } from "rxjs/Subject";
declare var tinymce: any;
@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css']
})
export class TinymceComponent implements OnInit {

  @Input() elementId: string;
  @Input() valor;
  @Output() onEditorKeyup = new EventEmitter<any>();
  emiterPrivado = new EventEmitter<any>();
  editor;
  test;
  regex = /(<([^>]+)>)/ig;

  cambioFlag = new Subject<any>();
  cambioFlag$ = this.cambioFlag.asObservable();
  nchar:number;

  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnChanges(change:SimpleChanges) {
    //Necesario apra cambio de idioma
    if (change.valor) {
      if (tinymce.get(this.elementId)){
          let nuevoValor = change.valor.currentValue;
          tinymce.get(this.elementId).setContent(nuevoValor);
           this.cambioFlag.next(this.editor.getContent().replace(this.regex,'').length);
          this.cdRef.detectChanges();
      }
    }
    console.log('onchanges', change.valor);

  }

  ngOnInit() {
    console.log(this.nchar);
    tinymce.init({
      selector: '#' + this.elementId,
      skin_url: '/app/../assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('init', () => {
          this.cambioFlag.next(this.editor.getContent().replace(this.regex,'').length);
          console.log('init',this.nchar)
        })
        editor.on('SetAttrib', function (e) {
                  editor.save();
         });
         editor.on('keyup change', () => {
           this.cambioFlag.next(this.editor.getContent().replace(this.regex,'').length);
           this.emiterPrivado.emit(this.editor.getContent().replace(this.regex,'').length)
           const content = this.editor.getContent();
            editor.save();
            this.onEditorKeyup.emit(content);
         })
      },
    });
    console.log(this.nchar);

    this.cambioFlag$.subscribe( (data) => {
      this.nchar = data;
      this.cdRef.detectChanges();
    })

  }

  ngAfterViewInit() {
    
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
  doNothing(){

  }

}
