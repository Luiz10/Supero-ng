import { Uppercase } from './../../diretivas/uppercase';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { AutenticationService } from 'src/app/services/authentication.service';


@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule,InputTextModule,
    LoginRoutingModule,ButtonModule, HttpClientModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers:[AutenticationService]
})
export class LoginModule { }