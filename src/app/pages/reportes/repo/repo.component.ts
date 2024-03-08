import { Component, HostListener, OnInit } from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CorsService } from '@services';
import * as moment from 'moment';

@Component({
  selector: 'repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit{
  formBusqueda: UntypedFormGroup;
  nombres:string[]=[];
  nombress:string[]=[];
  url:string='/location/';
  region:any=null;
  locaciones:any;
  ides:any[]=[];
  personajes:any;

  constructor(
    private cors:CorsService,
    private formBuilder: UntypedFormBuilder,
    private messageService: MessageService
  ){
    this.formBusqueda = this.formBuilder.group({
      origen: [null, Validators.required],
    });
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.buscar(); 
    }
  }

  ngOnInit(): void {
    this.getLocations();
    this.buscar();
  }
  
  getLocations(){
    this.cors.get(this.url).then((res)=>{
      // console.log(res)
      this.locaciones = res.results;
      for(let i =0 ; i<this.locaciones.length;i++){
        if(this.locaciones[i].name){
          this.nombres.push(this.locaciones[i].name);
        }
      }
    }).catch((err)=>{
        console.log(err)
    });

  }
  personajesView(item:any){
    let nuevoStr;
    if(item.includes('/')){
      let j =item.substring(item.length - 3)
      nuevoStr = j.replace(/[a-zA-Z]*\//g, "");
    }else{
      nuevoStr = item.substring(item.length - 3);
    }
    return  nuevoStr;
  }


  buscar(){
    if(this.formBusqueda.valid){
      this.cors.get(this.url,{
        name:this.formBusqueda.controls['origen'].value
      }).then((res)=>{
        this.region = null;
        this.region= res.results[0];
        // console.log(this.region)
        if(this.region.residents){
          for(let i =0 ; i<this.region.residents.length;i++){
            if(this.region.residents[i]){
              // console.log(this.region.residents[i])
              this.ides.push(this.personajesView(this.region.residents[i]));
            }
          }
    
        }
        let arraySinComillas = this.ides.map(numero => parseInt(numero));
        let stringNumeros = arraySinComillas.join(',');
        // console.log("stringNumeros",stringNumeros)
        this.cors.get(`/character/${stringNumeros}`).then((res)=>{
          this.personajes= null;
          this.personajes = res;
          // console.log(this.personajes)
        }).catch((err)=>{
            console.log(err)
        });
    
      }).catch((err)=>{
        console.log(err)
      });

    }
  }
  dateFormat(value:any){
    return moment(value).format('DD-MMMM-yyyy')
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







}
