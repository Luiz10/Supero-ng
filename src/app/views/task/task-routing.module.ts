import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';

const APP_ROUTES: Routes = [
    {path: '', component: TaskComponent}
]

@NgModule({
    exports: [CommonModule, RouterModule],
    imports: [RouterModule.forChild(APP_ROUTES)]
})
export class TaskRoutingModule { }