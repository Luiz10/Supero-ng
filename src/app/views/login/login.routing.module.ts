import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent}
]

@NgModule({
    exports:[CommonModule, RouterModule],
    imports:[RouterModule.forChild(APP_ROUTES)]
})
export class LoginRoutingModule{}