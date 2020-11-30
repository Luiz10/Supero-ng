import { StatusPipe } from './../../pipes/status.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, } from '@angular/core';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import { FormTaskComponent } from './form-task/form-task.component';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule, RadioControlRegistry} from 'primeng/radiobutton';
@NgModule({
    exports: [TaskComponent, FormTaskComponent, StatusPipe],
    declarations: [TaskComponent, FormTaskComponent,StatusPipe],
    imports: [TaskRoutingModule, CommonModule, InputTextModule, TableModule,
        InputTextareaModule,CheckboxModule, FormsModule, ReactiveFormsModule,ButtonModule,
        DialogModule,RadioButtonModule],
     providers:[RadioControlRegistry]
})
export class TaskModule { }