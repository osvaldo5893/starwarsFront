import { Component, HostListener, OnInit } from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CorsService } from '@services';
import * as moment from 'moment';
// moment.lang('es');


@Component({
  selector: 'usu',
  templateUrl: './usu.component.html',
  styleUrls: ['./usu.component.scss']
})
export class UsuComponent  implements OnInit{
  formBusqueda: UntypedFormGroup;
  nombres:string[]=[
    'Rick Sanchez',
    'Morty Smith',
    'Summer Smith',
    'Beth Smith',
    'Jerry Smith'
  ];
  nombress:string[]=[];
  url:string='/character/';
  personaje:any;


  constructor(
    private cors:CorsService,
    private formBuilder: UntypedFormBuilder,
    private messageService: MessageService
  ){
    this.formBusqueda = this.formBuilder.group({
      nombre: [null, Validators.required],
    });

  }

  ngOnInit(): void {
  }

  dateFormat(value:any){
    return moment(value).format('DD-MMMM-yyyy')
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.buscar(); 
    }
  }


  filterName(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    this.nombress = this.nombres;

    for (let i = 0; i < this.nombress.length; i++) {
      let nombre = this.nombress[i];
      if (nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(nombre);
      }
    }
  
    this.nombress = filtered;
  }

  clearNames(){
    this.nombress = this.nombres;
  }


  buscar(){
    this.cors.get(this.url,{
      name:`${this.formBusqueda.controls['nombre'].value}`
    }).then((res)=>{
        // console.log(res.results[0])
        this.personaje =res.results[0];
    }).catch((err)=>{
        console.log(err)
        this.messageService.add({
          key: 'tst',
          severity: 'error',
          summary: 'No se encontraron resultados',
          detail: 'Intentalo Nuevamente!!',
        });

    });

  }

  episodiosView(item:any){
    let nuevoStr;
    if(item.includes('/')){
      let j =item.substring(item.length - 2)
      nuevoStr = j.replace(/\//g, "0");
    }else{
      nuevoStr = item.substring(item.length - 2);
    }

    return  nuevoStr;
  }









}
