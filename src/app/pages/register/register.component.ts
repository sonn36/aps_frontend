import { Component } from '@angular/core';
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";
import { FormInputComponent } from "../../components/form-input/form-input.component";
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface RegisterForm {
  username: FormControl,
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DefaultLayoutComponent, ReactiveFormsModule, FormInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup<RegisterForm>;


  constructor(private router: Router, private loginService: LoginService, private toastService: ToastrService) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  register() {
    this.loginService.register(this.registerForm.value.username,
      this.registerForm.value.email,
      this.registerForm.value.password).subscribe({
        next: () => this.toastService.success("Cadastrado com sucesso"),
        error: () => this.toastService.error("Erro ao cadastrar")
      })
  }

  navigate() {
    this.router.navigate(["login"])
  }
}
