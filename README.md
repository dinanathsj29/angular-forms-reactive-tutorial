<p align="center">
    <img src="./_images-angular-reactive-forms-tutorial/angular_logo_1.png" alt="Angular logo" title="Angular logo" width="200" />
</p>

Angular Reactive Forms (Model driven)
=====================

Working with existing/cloned/copied Angular App
---------------------
- Clone or Download the project/app from Github or any other sources
- If using Visual Studio Code / Insiders, open Command panel/terminal from menu: View -> Terminal (shortcut key is `CTRL + BackTick` OR `COMMAND + J`)
- Go inside the project/app directory, command: `cd _examples-angular-templateDrivenForm OR cd templateDrivenForm`
- Run command: `npm install` to install project/app dependencies `(node_modules)`
- To Build and run Angular App, command: `ng serve / npm start` OR `ng serve -o` OR `ng serve --open`
- To change the port from 4200 to other port - type command: `ng serve --port 5000`
- To check the application in browser type path/URL: `localhost:4200 / 5000`

1.1. Reactive Model Driven Forms
---------------------
We know that:
- Reactive forms give the ability to control validation from the component code
- Also, we are able to do a unit test of reactive model-driven forms

1.2. Setup Angular Project
---------------------
1. Create a `new Angular project` with command at the console: `ng new angular-reactive-forms-tutorial`
2. Change Directory and get inside the directory with the command: `cd angular-reactive-forms-tutorial` and check angular app folder structure

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-reactive-forms-tutorial/1-angular-project-structure.png" alt="Angular project/app folder structure" title="Angular project/app folder structure" width="500" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Angular project/app folder structure</figcaption>
  </figure>
</p>

3. Run/Serve/Build Angular application with the command: `ng serve` or `ng serve -o` or `ng serve --open`
    - `-o` or `--open` flag directly launch the application into default browser (default port is `4200`)
    - One can also change the port number by using the command: `ng serve --port 5000 -o`
4. Go to browser and type: `http://localhost:5000` to launch an angular application

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-reactive-forms-tutorial/2-angular-default-app-launch.png" alt="Angular default app launch" title="Angular default app launch" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Angular default app launch</figcaption>
  </figure>
</p>

1.3. Constructing HTML Form structure
=====================
1. In `Index.html` file, in `head` element, link/import/include any front-end UI framework like `Bootstrap` or `Zurb Foundation` which helps to easily style our app/form layout

> **Syntax & Example**: index.html
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css">

or

<!-- link/import/include zurb foundation -->
<link rel="stylesheet" href="./assets/library/foundation.min.css">
```

2. To verify the Zurb Foundation included/working properly in an application, `check the angular app in browser fonts, etc changed?`
    - Right click on page/element and check in `inspect element` the Zurb Foundation classes and properties applied to respective elements:

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-reactive-forms-tutorial/3-zurb-foundation-framework.png" alt="Zurb Foundation framework styly applied" title="Zurb Foundation framework styly applied" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Zurb Foundation framework styly applied</figcaption>
  </figure>
</p>

3. From file `app.component.html` delete all old code and add new markup to create form:

> **Syntax & Example**: app.component.html
```html
<!-- show this template if name property not exist or form not submitted -->
<div *ngIf="!name; else formsubmitdata">

  <form>

    <div class="form-container">

      <div class="row columns">
        
        <h1>Beginners Simple Reactive Form</h1>

        <!-- name -->
        <label>Name
          <input type="text" placeholder="Enter Name">
        </label>

        <!-- description -->
        <label>Description
          <textarea placeholder="Enter Description"></textarea>
        </label>

        <!-- checkbox -->
        <label for="validate">Minimum of 5 Characters Name required</label>
        <input type="checkbox" name="validate" value="1"> ON

        <!-- submit button -->
        <input type="submit" class="button expanded" value="Submit Form">

      </div>

    </div>

  </form>

</div>

<!-- show this template if name property exists or form submitted -->
<ng-template #formsubmitdata>

  <div class="form-container">

    <div class="row columns">

      <h1>You Entered Name: {{ name }}</h1>

      <p>Your Description Details: {{ description }}</p>

    </div>

  </div>
  
</ng-template>
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-reactive-forms-tutorial/4-simple-html-form.png" alt="Simple HTML Form with Zurb Foundation" title="Simple HTML Form with Zurb Foundation" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Simple HTML Form with Zurb Foundation</figcaption>
  </figure>
</p>

1.4. Styling HTML Form with CSS
=====================
- With the `Zurb Foundatio`n framework some styling applied, let us create some custom css style to make form/interface more attractive and intuative

> **Syntax & Example**: styles.css
```css
/* You can add global styles to this file, and also import other style files */

/* apply google font family */
@import url('https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei');

body {
  background:rgba(148, 134, 93, 0.35);;
  /* font-family: 'ZCOOL XiaoWei', serif !important; */
}

* {
  font-family: 'ZCOOL XiaoWei', serif !important;
}

.form-container {
  display:block;
  width:90%;
  padding:2em;
  margin: 2em auto;
  background:#fff;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  font-weight:bold;
}

.button {
  margin-top: 1rem;
  font-weight: bold;
}

/* error text message alert */
.alert {
  background: #f2dada;
  padding: 5px;
  font-size: .9em;
  margin-bottom: 15px;
  display: inline-block;
  animation: 2s alertAnim forwards;
}

/* animation effect for error text message alert */
@keyframes alertAnim {
  from {
    opacity:0;
    transform: translateY(-20px);
  }
  to {
    opacity:1;
    transform: translateY(0);
  }
}
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-reactive-forms-tutorial/5-css-styled-html-form.png" alt="CSS Style applied HTML Form" title="CSS Style applied HTML Form" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - CSS Style applied HTML Form</figcaption>
  </figure>
</p>

1.5. Integrating Rective Form Class
=====================
- To work with reactive/dynamic forms we need to import `'ReactiveFormsModule'` which provides bunch of classes/directives/utilities necessary to build reactive/dynamic forms

1. In `app.module.ts`: import { ReactiveFormsModule } from '@angular/forms'; 
    - also add to imports: [ ReactiveFormsModule ]

**Syntax & Example**: app.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

1.6. Composing Component Class with ReactiveForms building blocks
=====================
- `FormGroup` and `FormControl` are two important building blocks classes for reactive/dynamic forms
    - In Reactive forms, the form is represented by `model in component class`, FormGroup and FormControl classes used to make that model
    - `FormGroup` represents whole/entire form ( `form` is instance of `FormGroup` class ) 
    - `FormControl` represents each form field ( `form fields` are instance of `FormControl` class )
    - `FormBuilder` handle form control creation, dynamic/run time field/FormControl creation
    - `Validators` helps to setup validation on each form control

1. In `app.component.ts` import { FormBuilder, FormGroup, Validators } from '@angular/forms'; and write following logical code to build reactive form 

**Syntax & Example**: app.component.ts
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  simpleBegReactiveForm: FormGroup;     // form
  formSubmitPost: any;                  // A property for our submitted form
  name: string = '';                    // name text
  description: string = '';             // description text

  // create a FormBuilder dependecy injection
  constructor(private fb: FormBuilder) {

    // reference FormBuilder instance to control the validation of each form field
    this.simpleBegReactiveForm = fb.group({
      'name': ['', Validators.required],
      'description': ['', [Validators.required, Validators.minLength(30), Validators.maxLength(100)]],
      'validate': ''
    });

  }

  // handler to submit form
  submitFormData(formSubmitPost) {
    this.description = formSubmitPost.description;
    this.name = formSubmitPost.name;
  }

}
```

1.7. Update HTML Form (bind Model with View)
=====================
- Lets use and apply class members created in `app.component.ts` for specific field/controls and bind with form and input fields, `([formGroup]="simpleBegReactiveForm", formControlName="name" ...) `

**Syntax & Example**: app.component.html
```html
<!-- show this template if name property not exist or form not submitted -->
<div *ngIf="!name; else formsubmitdata">

  <!-- associate the model with view -->
  <form [formGroup]="simpleBegReactiveForm" (ngSubmit)="submitFormData(simpleBegReactiveForm.value)">

    <div class="form-container">

      <div class="row columns">
        
        <h1>Beginners Simple Reactive Form</h1>

        <!-- name -->
        <label>Name
          <input type="text" placeholder="Enter Name" formControlName="name">
        </label>

        <!-- description -->
        <label>Description
          <textarea formControlName="description"></textarea>
        </label>

        <!-- checkbox -->
        <label for="validate">Minimum of 5 Characters Name required</label>
        <input type="checkbox" name="validate" value="1" formControlName="validate" > ON

        <!-- submit button -->
        <input type="submit" class="button expanded" value="Submit Form" [disabled]="!simpleBegReactiveForm.valid">

      </div>

    </div>

  </form>

</div>
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-reactive-forms-tutorial/6-bind-model-view.png" alt="Bind Model with View" title="Bind Model with View" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Bind Model with View</figcaption>
  </figure>
</p>

1.8. Adding/Showing Validation Messages
=====================
- Now add required validation message text as a alert and use interpolation to show class member

**Syntax & Example**: app.component.html
```html
<!-- show name alert text -->
<div class="alert" *ngIf="!simpleBegReactiveForm.controls['name'].valid && simpleBegReactiveForm.controls['name'].touched">{{ titleAlertText }}</div>

<!-- show name description text -->
<div class="alert" *ngIf="!simpleBegReactiveForm.controls['description'].valid && simpleBegReactiveForm.controls['description'].touched">{{ descriptionAlertText }}</div>
```

**Syntax & Example**: app.component.ts
```typescript
titleAlertText = 'Name field is required';
descriptionAlertText = 'Specify Description between 30 to 100 characters';
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-reactive-forms-tutorial/7-showing-alert-error-message.png" alt="Shwoing alert error message text" title="Shwoing alert error message text" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Shwoing alert error message text</figcaption>
  </figure>
</p>

1.9. Implement Dyanmic Validation with checkbox
=====================
- Sometimes we need to perform form validation based on user input
- Like in current form, If checkbox is `ON` than `Name must required with 5 characters` else `any characters`
- We need to track value of checkbox and conditionaly set status of other field
  - `valueChanges` property helps to track the current value of any controls as a observables
  - `setValidators` methods - set desired validators to formControl/field
  - `clearValidators` methods - clears validators from formControl/field
- Finally we need to invoke/call `updateValueAndValidity` method to reflect latest status

**Syntax & Example**: app.component.ts
```typescript
ngOnInit() {

  // subscribe checkbox
  this.simpleBegReactiveForm.get('validate').valueChanges.subscribe(

  (validate) => {

    if (validate == '1') {
      // name field set/unset `required` validators
      this.simpleBegReactiveForm.get('name').setValidators([Validators.required, Validators.minLength(5)]);
      this.titleAlertText = 'Specify Name with 5 characters';
    } else {
      this.simpleBegReactiveForm.get('name').setValidators(Validators.required);
      this.titleAlertText = 'Name field is required';
    }
    // to reflect latest correct status
    this.simpleBegReactiveForm.get('name').updateValueAndValidity();

  });
}
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-reactive-forms-tutorial/8-checkbox-dynamic-validator-error.png" alt="Checkbox dynamic validator error" title="Checkbox dynamic validator error" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Checkbox dynamic validator error</figcaption>
  </figure>
</p>

<hr/>

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-reactive-forms-tutorial/9-checkbox-dynamic-validator-success.png" alt="Checkbox dynamic validator success" title="Checkbox dynamic validator success" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Checkbox dynamic validator success</figcaption>
  </figure>
</p>

<hr/>

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-reactive-forms-tutorial/10-submit-data.png" alt="Submit Data success screen" title="Submit Data success screen" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Submit Data success screen</figcaption>
  </figure>
</p>

1.10. Final working code
=====================
**Syntax & Example**: index.html
```html
<!doctype html>
  <html lang="en">

    <head>
      <meta charset="utf-8">
      <title>AngularReactiveFormsTutorial</title>
      <base href="/">

      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/x-icon" href="favicon.ico">

      <!-- link/import/include zurb foundation -->
      <link rel="stylesheet" href="./assets/library/foundation.min.css">

    </head>

    <body>
      <app-root></app-root>
    </body>
    
  </html>

```

**Syntax & Example**: app.component.html
```html
<!-- show this template if name property not exist or form not submitted -->
<div *ngIf="!name; else formsubmitdata">

  <!-- associate the model with view -->
  <form [formGroup]="simpleBegReactiveForm" (ngSubmit)="submitFormData(simpleBegReactiveForm.value)">

    <div class="form-container">

      <div class="row columns">
        
        <h1>Beginners Simple Reactive Form</h1>

        <!-- name -->
        <label>Name
          <input type="text" placeholder="Enter Name" formControlName="name">
        </label>

        <!-- show name alert text -->
        <div class="alert" *ngIf="!simpleBegReactiveForm.controls['name'].valid && simpleBegReactiveForm.controls['name'].touched">{{ titleAlertText }}</div>

        <!-- description -->
        <label>Description
          <textarea formControlName="description"></textarea>
        </label>
        
        <!-- show name description text -->
        <div class="alert" *ngIf="!simpleBegReactiveForm.controls['description'].valid && simpleBegReactiveForm.controls['description'].touched">{{ descriptionAlertText }}</div>

        <!-- checkbox -->
        <label for="validate">Minimum of 5 Characters Name required</label>
        <input type="checkbox" name="validate" value="1" formControlName="validate" > ON

        <!-- submit button -->
        <input type="submit" class="button expanded" value="Submit Form" [disabled]="!simpleBegReactiveForm.valid">

      </div>

    </div>

  </form>

</div>

<!-- show this template if name property exists or form submitted -->
<ng-template #formsubmitdata>

  <div class="form-container">

    <div class="row columns">

      <h2>You Entered Name: {{ name }}</h2>

      <p>Your Description Details: {{ description }}</p>

    </div>

  </div>
  
</ng-template>
```

**Syntax & Example**: styles.css
```css
/* You can add global styles to this file, and also import other style files */

/* apply google font family */
@import url('https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei');

body {
  background:rgba(148, 134, 93, 0.35);;
  /* font-family: 'ZCOOL XiaoWei', serif !important; */
}

* {
  font-family: 'ZCOOL XiaoWei', serif !important;
}

.form-container {
  display:block;
  width:90%;
  padding:2em;
  margin: 2em auto;
  background:#fff;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  font-weight:bold;
}

.button {
  margin-top: 1rem;
  font-weight: bold;
}

/* error text message alert */
.alert {
  background: #f2dada;
  padding: 5px;
  font-size: .9em;
  margin-bottom: 15px;
  display: inline-block;
  animation: 2s alertAnim forwards;
}

/* animation effect for error text message alert */
@keyframes alertAnim {
  from {
    opacity:0;
    transform: translateY(-20px);
  }
  to {
    opacity:1;
    transform: translateY(0);
  }
}
```

**Syntax & Example**: app.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Syntax & Example**: app.component.ts
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  simpleBegReactiveForm: FormGroup;     // form
  formSubmitPost: any;                  // A property for our submitted form
  name: string = '';                    // name text
  description: string = '';             // description text

  titleAlertText = 'Name field is required';
  descriptionAlertText = 'Specify Description between 30 to 100 characters';

  // create a FormBuilder dependecy injection
  constructor(private fb: FormBuilder) {

    // reference FormBuilder instance to control the validation of each form field
    this.simpleBegReactiveForm = fb.group({
      'name': ['', Validators.required],
      'description': ['', [Validators.required, Validators.minLength(30), Validators.maxLength(100)]],
      'validate': ''
    });

  }

  // handler to submit form
  submitFormData(formSubmitPost) {
    this.description = formSubmitPost.description;
    this.name = formSubmitPost.name;
  }
  
  ngOnInit() {

    // subscribe checkbox
    this.simpleBegReactiveForm.get('validate').valueChanges.subscribe(

    (validate) => {

      if (validate == '1') {
        // name field set/unset `required` validators
        this.simpleBegReactiveForm.get('name').setValidators([Validators.required, Validators.minLength(5)]);
        this.titleAlertText = 'Specify Name with 5 characters';
      } else {
        this.simpleBegReactiveForm.get('name').setValidators(Validators.required);
        this.titleAlertText = 'Specify Name with 5 characters';
      }
      // to reflect latest correct status
      this.simpleBegReactiveForm.get('name').updateValueAndValidity();

    });
  }

}
```
