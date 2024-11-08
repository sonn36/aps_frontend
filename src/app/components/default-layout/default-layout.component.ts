import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent {
  @Input({required: true}) primaryText!: string;
  @Input({required: true}) btnPrimaryText!: string;
  @Input({required: true}) btnSecondaryText!: string;
  @Input({required: true}) messageHint!: string;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();


  submit() {
    this.onSubmit.emit()
  }

  navigate() {
    this.onNavigate.emit();
  }
}
