import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
   getProducts(){
      return this.http.get("http://localhost:3002/products");
  }
   newProduct(item:any){
     return this.http.post("http://localhost:3002/insert",{"product":item})
     .subscribe(data=>{
       console.log(data)})
     }
    }
   
   

