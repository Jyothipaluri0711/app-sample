import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  productDetails: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    
    // this.route.params.subscribe( params => this.doSearch(params['term'])); (1)
this.route.paramMap.subscribe(params => { 
    this.product = params.get('productdt'); 
})
if(this.product){
  let baseUrl = `https://fakestoreapi.com/products/category/${this.product }`;
  this.http.get<any>(baseUrl).subscribe(data => {
    // this.contacts = data;
    this.productDetails = data;
    // console.log(this.contacts);
})    
//   let baseUrl = `https://fakestoreapi.com/products/category/${this.product }`;
//   this.http.post<any>(baseUrl, { title: 'Angular POST Request Example' }).subscribe(data => {
//     this.productDetails = data;
// })
}
  }


  clickme(data: any){
    console.log(data);
    this.router.navigate(['product-list', data.id]); (1)
    // product-list/:id
  }

}
