import { Component } from '@angular/core';
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from "../../components/form-input/form-input.component";
import { Router } from '@angular/router';
import { FingerprintComponent } from "../../components/fingerprint/fingerprint.component";
import { WebsocketService } from '../../services/websocket.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLayoutComponent, ReactiveFormsModule, FormInputComponent, FingerprintComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  getFinger: boolean = false

  constructor(private router : Router){}

  login(){
    this.getFinger = true;
  }

  navigate(){
    this.router.navigate(["register"])
  }

  
}
