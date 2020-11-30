import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

    public formGroup: FormGroup;
    public listaTask = []
    public taskSelecionado: Task
    public editarTask: boolean = false;
    public btnEditarTask: boolean= true

    constructor(private fb: FormBuilder) {

    }

   
    ngOnInit(): void {
        this.formBuild();
    }

    private formBuild() {
        this.formGroup = this.fb.group({
            titulo: [null, Validators.required],
            descricao: [null, Validators.required],
            status:1
        })
    }

    onRowSelect(event){
        this.btnEditarTask = false
    }

    unRowSelect(){
        this.btnEditarTask = true
    }

    adicionar(){
        const insert = this.formGroup.getRawValue()
        insert.id = this.listaTask.length + 1;
        this.listaTask.push(insert)
        this.formGroup.patchValue({titulo: undefined,descricao: undefined, status: 1})
    }

    excluir(event: Task){
        this.listaTask = this.listaTask.filter(index => index.id != event.id);
        this.taskSelecionado = undefined
    }
    editar(){
        this.editarTask = true;
    }

    eventEmitSalvar(event){
        this.listaTask = this.listaTask.filter(index => index.id != event.id)
        this.listaTask.push(event);
        this.editarTask= false;
        this.taskSelecionado = undefined;
        this.btnEditarTask = true;
    }


}