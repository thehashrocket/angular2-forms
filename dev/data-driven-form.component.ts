import {Component, OnInit} from '@angular/core';
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";

@Component({
    selector: 'my-data-driven',
    template: `
        <h2>Sign-up form</h2>
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div>
                <label for="mail">Mail</label>
                <input [ngFormControl]="myForm.controls['email']" type="text" id="mail" #mail="ngForm">
                <span class="validation-error" *ngIf="!mail.valid">Not Valid</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input [ngFormControl]="myForm.controls['password']" type="text" id="password"  #password="ngForm" >
                <span class="validation-error"  *ngIf="!password.valid">Not Valid</span>
            </div>
            <div>
                <label for="confirm-password">Confirm Password</label>
                <input [ngFormControl]="myForm.controls['confirmPassword']" type="text" id="confirm-password"  #confirmPassword="ngForm" >
                <span class="validation-error"  *ngIf="!confirmPassword.valid">Not Valid</span>
            </div>
            <button type="submit">Submit</button>
            
</form>
<h2>You submitted</h2>
<div>Mail: {{user.email}}</div>
<div>Password: {{user.password}}</div>
    `,
})
export class DataDrivenFormComponent implements OnInit {
    myForm: ControlGroup;
    user = {mail: '', password: ''};

    constructor(private _formBuilder: FormBuilder) {}

    onSubmit(form) {
        this.user = this.myForm.value;

    }

    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.compose([
                Validators.required,
                hasNumbers
            ])],
            'confirmPassword': ['', Validators.required]
        });
    }
}

function hasNumbers(control: Control): {[s: string]: boolean} {
    if(!control.value.match('\\d+')) {
        return {noNumbers: true}
    }
}