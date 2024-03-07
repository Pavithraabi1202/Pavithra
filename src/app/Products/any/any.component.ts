import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'HopeTutors-any',
  templateUrl: './any.component.html',
  styleUrls: ['./any.component.css']
})
export class AnyComponent {
  productdata:any;

  constructor(private service: ProductService) {
    this.LoadproductData();
  }

  private LoadproductData() {
    this.service.Loadproducts().subscribe((data) => {
      this.productdata = data.products;
    });
  }

}
