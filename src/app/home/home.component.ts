import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts : any;
  selectedContact: any;

  // constructor(public dataService: DataService) { }
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.http.get<any>('https://fakestoreapi.com/products/categories').subscribe(data => {
      this.contacts = data;
      console.log(this.contacts);
  })    
    // this.contacts = this.dataService.getContacts();    
  }
  clickme(data: string){
    console.log(data);
    this.router.navigate(['product-details', data]); (1)

    // this.router.navigate(['/ product-details'], { queryParams: {productdt : data } });
    // this.msg='anchor tag is Clicked';
    // return this.msg;
  }
  // public selectContact(contact){
  //   this.selectedContact = contact;
  // }

}
