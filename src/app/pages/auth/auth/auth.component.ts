import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormControl,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { CorsService } from '@services';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  msgs: Message[] = [];
  formLogin: UntypedFormGroup;
  constructor(private messageService: MessageService,private formBuilder: UntypedFormBuilder, private router: Router,private cors: CorsService,) {
      this.formLogin = this.formBuilder.group({
          email: [null, Validators.required],
          pWd: [null, Validators.required],
      });
  }

  onSignIn() {
      this.formLogin.markAllAsTouched();
    //   if(this.formLogin.valid){
    //       if((this.formLogin.value.email =='admin' && this.formLogin.value.pWd =='admin')){
    //           let a=null;
    //           if(this.formLogin.value.email =='admin'){
    //               a={
    //                   "role":"admin",
    //                   "firstName":"admin",
    //                   "lastName":"admin",
    //                   "email":"admin@test.com"
    //               }
    //           }
              
    //           localStorage.setItem( "userData",JSON.stringify(a))   
    //           this.router.navigate(['/home']);
  
    //       }else{
    //           this.messageService.add({
    //               key: 'tst',
    //               severity: 'error',
    //               summary: 'Usuario o contraseña Invalidos',
    //               detail: 'Intentalo Nuevamente!!',
    //             });
    //       }
  
    //   }






  }

}
