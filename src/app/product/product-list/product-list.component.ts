import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { CommonService } from 'src/app/shared/common.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(public commmonService: CommonService) {}

  form = new FormGroup({
    name: new FormControl(),
  });

  productList: Product[];
  page = 1;
  count = 0;
  tablesize = 3;
  tablesizes = [3, 6, 9, 12];
  ngOnInit(): void {
    this.commmonService.getProduct().subscribe((prodList) => {
      this.productList = prodList;
    });
  }

  searchProduct(key: string): void {
    const results: Product[] = [];
    for (const product of this.productList) {
      if (product.name.toLowerCase().indexOf(key.toLowerCase()) != -1)
        results.push(product);
    }
    this.productList = results;
    if (results.length === 0 || !key) {
      this.commmonService.getProduct();
      window.location.reload();
    }
  }

  deletePro(id: number) {
    this.commmonService.deleteProduct(id).subscribe();
  }
  onTableDataChange(event) {
    this.page = event;
    this.commmonService.getProduct().subscribe((prodList) => {
      this.productList = prodList;
    });
  }
  searchForm() {}

  d: any;
  openPDF(): void {
    this.d = document.getElementById('productData');
    html2canvas(this.d).then((canvas) => {
      let fileWidth = 30;
      let fileHeight = 14;
      const FILEURI = canvas.toDataURL('image/png');
      let position = 0;

      let PDF = new jsPDF('l', 'cm', 'a4');

      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('product.pdf');
    });
  }
}
