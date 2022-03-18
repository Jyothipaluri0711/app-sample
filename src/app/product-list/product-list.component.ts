import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productId: any;
  productDetailsDesc: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
      // this.route.params.subscribe( params => this.doSearch(params['term'])); (1)
this.route.paramMap.subscribe(params => { 
  this.productId = params.get('id');
  console.log() 
})
if(this.productId){
let baseUrl = `https://fakestoreapi.com/products/${this.productId }`;
this.http.get<any>(baseUrl).subscribe(data => {
  // this.contacts = data;
  this.productDetailsDesc = data;
  console.log(this.productDetailsDesc);
})    
  }

}
}
