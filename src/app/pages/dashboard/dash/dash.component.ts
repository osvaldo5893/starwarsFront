import { Component, HostListener, OnInit } from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CorsService } from '@services';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit{

  personajes:any[]=[];
  infoPagination:any[]=[];
  pagina:number=1;
  url:string='/character/';
  formBusqueda: UntypedFormGroup;
  tipoBusqueda:string[]=[
    'Nombre',
    'Estatus',
    'Especie',
    'Sexo'
  ];
  estatus:string[]=[
    'Vivo',
    'Muerto',
    'Desconococido'
  ];
  especie:string[]=[
    'Humano',
    'Alien',
    'Humanoide',
    'Desconocido',
    'Creatura Mitica',
    'Poopybutthole',
    'Animal',
    'Robot',
    'Cronenberg',
    'Disease',
  ];
  sexo:string[]=[
    'Masculino',
    'Femenino',
  ];

  constructor(
    private cors:CorsService,
    private formBuilder: UntypedFormBuilder,
    private messageService: MessageService
  ){
    this.formBusqueda = this.formBuilder.group({
      tipo: [null, Validators.required],
      tipo1: [null, Validators.required]
    });
  }


  ngOnInit(): void {
    this.cors.get(this.url,{
      page:this.pagina
    }).then((res)=>{
      this.infoPagination=res.info;
      // console.log(this.infoPagination);
      this.personajes = res.results;
      // console.log(this.personajes)
        
    }).catch((err)=>{
        console.log(err)
    });

  }

  cambioTipo(item:any){
    this.formBusqueda.controls['tipo1'].reset();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.buscar(); 
    }
  }


  buscar():void{
    if(this.formBusqueda.valid ==true){
      let params={};
      if(this.formBusqueda.controls['tipo'].value=='Nombre'){
        params={
          name:`${this.formBusqueda.controls['tipo1'].value}`,
          page:this.pagina

        };
      }else if(this.formBusqueda.controls['tipo'].value=='Estatus'){
        let stat='';
        if(this.formBusqueda.controls['tipo1'].value=='Vivo'){
          stat='alive';
        }else if(this.formBusqueda.controls['tipo1'].value=='Muerto'){
          stat='dead';
        }else if(this.formBusqueda.controls['tipo1'].value=='Desconococido'){
          stat='unknown';
        }
        params={
          status:stat,
          page:this.pagina
        };
      }else if(this.formBusqueda.controls['tipo'].value=='Especie'){
        let stat='';
        if(this.formBusqueda.controls['tipo1'].value=='Humano'){
          stat='Human';
        }else if(this.formBusqueda.controls['tipo1'].value=='Alien'){
          stat='Alien';
        }else if(this.formBusqueda.controls['tipo1'].value=='Humanoide'){
          stat='Humanoid';
        }else if(this.formBusqueda.controls['tipo1'].value=='Desconocido'){
          stat='unknown';
        }else if(this.formBusqueda.controls['tipo1'].value=='Poopybutthole'){
          stat='Poopybutthole';
        }else if(this.formBusqueda.controls['tipo1'].value=='Creatura Mitica'){
          stat='Mythological Creature';
        }else if(this.formBusqueda.controls['tipo1'].value=='Aniaml'){
          stat='Animal';
        }else if(this.formBusqueda.controls['tipo1'].value=='Robot'){
          stat='Robot';
        }else if(this.formBusqueda.controls['tipo1'].value=='Cronenberg'){
          stat='Cronenberg';
        }else if(this.formBusqueda.controls['tipo1'].value=='Disease'){
          stat='Disease';
        }
        params={
          species:stat,
          page:this.pagina
        };
      }else if(this.formBusqueda.controls['tipo'].value=='Sexo'){
        let stat='';
        if(this.formBusqueda.controls['tipo1'].value=='Masculino'){
          stat='male';
        }else if(this.formBusqueda.controls['tipo1'].value=='Femenino'){
          stat='female';
        }
        params={
          gender:stat,
          page:this.pagina
        };
      }
      this.cors.get(this.url,params).then((res)=>{
          this.personajes = res.results;
      }).catch((err)=>{
          console.log(err)
          this.messageService.add({
            key: 'tst',
            severity: 'error',
            summary: 'No se encontraron resultados',
            detail: 'Intentalo Nuevamente!!',
          });
    
      });
    }else{
      this.messageService.add({
          key: 'tst',
          severity: 'error',
          summary: 'Error!! Campos Faltantes',
          detail: 'Intentalo Nuevamente!!',
        });

    }
  }










}
