import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/authentication.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public formGroup: FormGroup;
    constructor(private fb: FormBuilder,
        private auth: AutenticationService,
        private route: Router) {

    }
    ngOnInit(): void {
        this.formBuilder();
    }

    private formBuilder() {
        this.formGroup = this.fb.group({
            username: [null, Validators.required],
            senha: [null, Validators.required]
        })
    }

    public login() {
        this.auth.login(this.formGroup.value).subscribe(response => {
            console.log(response)
            this.formGroup.reset()
        })
    }

}