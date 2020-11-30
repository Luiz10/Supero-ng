import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
    selector: 'app-form-task',
    templateUrl: './form-task.component.html',
    styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit {

    @Input() taskEditada: Task
    formGroup: FormGroup;
    @Output() eventEmitSalvar = new EventEmitter();

    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): void {
        this.formBuild()
        this.formPreenchidaTask()
    }

    private formBuild() {
        this.formGroup = this.fb.group({
            id: [null],
            descricao: [null, Validators.required],
            titulo: [null, Validators.required],
            status: [null,Validators.required],
           
        })
    }

    public formPreenchidaTask() {
        this.formGroup.patchValue({
            id: this.taskEditada.id,
            titulo: this.taskEditada.titulo,
            status: this.taskEditada.status,
            descricao: this.taskEditada.descricao,


        })
    }

    public salvarForm() {
        const formSalvo = this.formGroup.getRawValue();
        this.eventEmitSalvar.emit(formSalvo)
    }

}