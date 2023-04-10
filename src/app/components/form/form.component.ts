import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  form!: FormGroup;
  status: 'init' | 'loading' | 'success' | 'error' = 'init';
  errorInfo: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(64)]],
      email: ['', [Validators.required, Validators.maxLength(64), Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(64), Validators.pattern(/^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)]],
      file: ['', Validators.required],
      service: ['', Validators.required],
    });
  }

  submitForm() {
    this.status = 'loading';
    if(this.form.valid){
      // API call later
      console.log(this.form.value);
      this.status = 'success';
    } else {
      this.status = 'error';
      this.errorInfo = 'Form is not valid';
    }
  }

  markFormGroupTouched() {
    Object.keys(this.form.controls).forEach(key => {
      this.form.controls[key].markAsDirty();
    });
  }

  resetForm(){
    this.form.reset();
  }
}
