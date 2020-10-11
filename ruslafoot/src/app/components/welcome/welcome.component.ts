import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input() show: boolean;
  @Output() screenSubmitted = new EventEmitter;
  @Output() user = new EventEmitter;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submitScreen(){
    if(this.form.valid){
      this.user.emit(this.form);
      this.screenSubmitted.emit(true);
    }
  }

}
