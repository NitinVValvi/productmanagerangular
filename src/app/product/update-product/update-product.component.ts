import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { window } from 'rxjs';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public commonser: CommonService,
    private loca: Location
  ) {}
  updateProduct: FormGroup;
  ngOnInit(): void {
    this.updateProduct = this.fb.group({
      id: [],
      name: [''],
      description: [''],
      builtIn_Country: [''],
      price: [],
    });
    this.editProduct();
  }
  editProduct() {
    let prodObj: any = this.loca.getState();
    console.log('getState()' + prodObj.id);
    if (prodObj.id != 0) {
      this.updateProduct.get('id').setValue(prodObj.id);
      this.updateProduct.get('name').setValue(prodObj.name);
      this.updateProduct.get('description').setValue(prodObj.description);
      this.updateProduct
        .get('builtIn_Country')
        .setValue(prodObj.builtIn_Country);
      this.updateProduct.get('price').setValue(prodObj.price);
    }
  }

  onSubmit() {
    this.commonser.updateProduct(this.updateProduct.value).subscribe();
    this.loca.back();
  }
  getBack() {
    this.loca.back();
  }
}
