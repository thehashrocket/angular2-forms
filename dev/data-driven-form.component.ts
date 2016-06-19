import {Component} from '@angular/core';

@Component({
    selector: 'my-data-driven',
    template: `
        <h2>Sign-up form</h2>
        <form (ngSubmit)="onSubmit()">
            <div>
                <label for="mail">Mail</label>
                <input type="text" id="mail" required>
                <span class="validation-error" >Not Valid</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="text" id="password" required >
                <span class="validation-error" >Not Valid</span>
            </div>
            <div>
                <label for="confirm-password">Confirm Password</label>
                <input type="text" id="confirm-password" required >
                <span class="validation-error" >Not Valid</span>
            </div>
            <button type="submit">Submit</button>
            
</form>
<h2>You submitted</h2>
<div>Mail: {{user.mail}}</div>
<div>Password: {{user.password}}</div>
    `,
})
export class DataDrivenFormComponent {
    user = {mail: '', password: ''};
    onSubmit(form) {
        console.log(form.value)
        this.user.mail = form.value['email'];
        this.user.password = form.controls['password'].value;
    }
}