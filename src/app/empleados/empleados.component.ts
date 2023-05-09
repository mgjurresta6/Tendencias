import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent {
  name: string = '';
  age: number = 0;
  birthdate: Date = new Date();
  state: boolean = false;

  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: [0, [Validators.min(1)]],
      birthdate: [new Date()],
      state: [false,[]],
    })
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      alert('Guardado');
    } else {
      alert('Formulario No Valido');
    }
  }

  validateForm() {
    if (this.name === '' && this.name.length <= 3) {

    }
  }
}
