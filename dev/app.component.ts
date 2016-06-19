import {Component} from '@angular/core';
import {TemplateDrivenFormComponent} from "./template-driven-form.component";
import {DataDrivenFormComponent} from "./data-driven-form.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <h3>Template Driven Form</h3>
       <my-template-driven></my-template-driven>
       <br/><br/>
       <h3>Data Driven Form</h3>
       <my-data-driven></my-data-driven>
    `,
    directives: [TemplateDrivenFormComponent, DataDrivenFormComponent]
})
export class AppComponent {

}