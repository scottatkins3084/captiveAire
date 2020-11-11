import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CardTypeService } from '../services/card-type.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  type: string;
  validateSupport: boolean;
  setDate: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const d = new Date();
    this.setDate = d.getFullYear() + '-' + (d.getMonth() + 1);
    this.validateSupport = false;
    this.initializePaymentForm();
  }

  initializePaymentForm(): void{
    this.paymentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      card: ['', [Validators.required, this.getCardType()]],
      date: ['', [Validators.required]],
      code: ['', [Validators.required]],
      postal: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  submit(): void {
    this.validateSupport = true;
    console.log(this.paymentForm);
  }

  getCardType(): any{
    return (control: AbstractControl): {[key: string]: boolean} | null => {
      this.type = CardTypeService.GetCardType(control.value);
      return null;
    };
  }

}
