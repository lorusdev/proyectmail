import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './app-secure/init/init.component';
import { LoginComponent } from './app-secure/login/login.component';
import { SecureComponent } from './app-secure/secure/secure.component';
import { DefaultComponent } from './share/default/default.component';

const routes:Routes =[
    {   path: '',
        redirectTo:'login.srt',
        pathMatch:'full'
    },

    {
        path:'',
        component:DefaultComponent,
        children:[
            {
                path:'login.srt',
                component:LoginComponent
            },
           // {
           //     path:'init',
           //     component:InitComponent

           // },
            {
                path:'ppsecure/post.srt',
                component:SecureComponent
            }
        ]

    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
  

