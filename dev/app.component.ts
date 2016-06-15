import {Component} from '@angular/core';
import {TemplateDrivenFormComponent} from "./template-driven-form.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
       <my-template-driven></my-template-driven>
    `,
    directives: [TemplateDrivenFormComponent]
})
export class AppComponent {

}