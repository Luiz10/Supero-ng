import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const APP_ROUTES: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./views/login/login.module') .then(module => module.LoginModule)},
    { path: 'task', loadChildren: () => import('./views/task/task.module').then(module => module.TaskModule) }
]

@NgModule({
    exports: [CommonModule, RouterModule],
    imports: [RouterModule.forRoot(APP_ROUTES)]
})
export class AppRoutingModule { }