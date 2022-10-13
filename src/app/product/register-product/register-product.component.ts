import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
})
export class RegisterProductComponent implements OnInit {
  registerProduct: FormGroup;

  constructor(
    public common: CommonService,
    private locations: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerProduct = this.fb.group({
      id: [],
      name: [''],
      description: [''],
      builtIn_Country: [''],
      price: [],
    });
  }
  goBack() {
    this.locations.back();
  }
  addProduct(prod: Product) {
    this.common.registerProduct(prod).subscribe();
    console.log('register successfully');
    window.location.reload();
  }
  onSubmit() {
    // if (this.registerProduct.valid) {
    //   this.common.registerProduct(this.registerProduct.value).subscribe();
    // }
  }
}
