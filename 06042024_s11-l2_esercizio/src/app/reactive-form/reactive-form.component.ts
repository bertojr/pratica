import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: this.fb.control('Paulo', Validators.required),
      cognome: this.fb.control('Dybala', Validators.required),
      authData: this.fb.group({
        password: this.fb.control(1234, [
          Validators.required,
          Validators.minLength(6),
          this.prova(),
        ]),
        confermaPassword: this.fb.control(1234, [
          Validators.required,
          Validators.minLength(6),
        ]),
        username: this.fb.control('pau', Validators.required),
      }),
      genere: this.fb.control('altro', Validators.required),
      file: this.fb.control(null),
      biografia: this.fb.control(null),
    });
  }
  invia() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Form non valido');
    }
  }

  prova(): ValidationErrors | null {
    return { prova: true };
  }
}
