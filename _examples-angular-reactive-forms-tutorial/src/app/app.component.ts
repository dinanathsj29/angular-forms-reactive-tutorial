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
        this.titleAlertText = 'Name field is required';
      }
      // to reflect latest correct status
      this.simpleBegReactiveForm.get('name').updateValueAndValidity();

    });
  }

}
