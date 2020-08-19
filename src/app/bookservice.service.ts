import { Injectable, Type } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private service:HttpClient) { }
  BookDetails(book:BookDetails) {
    throw new Error("Method not implemented.");
  }

  public getBooks(){
    console.log("ins service get books");
    const headers=new HttpHeaders().set('Content_Type','text/plain ;charset=utf=8');
    return this.service.get<BookDetails>("http://localhost:9996/getbook");
  }

  public getCategory(){
    console.log("ins service get books");
    const headers=new HttpHeaders().set('Content_Type','text/plain ;charset=utf=8');
    return this.service.get<BookDetails>("http://localhost:9996/getCategory");
  }

  public getcategorybyname(name:string){
    console.log("ins service get books");
    const headers=new HttpHeaders().set('Content_Type','text/plain ;charset=utf=8');
    return this.service.get("http://localhost:9996/viewCategory/"+name, { headers, responseType: 'json'});
  }

  public getbookbyname(name:string){
    console.log("ins service get books");
    const headers=new HttpHeaders().set('Content_Type','text/plain ;charset=utf=8');
    return this.service.get("http://localhost:9996/getBook/"+name, { headers, responseType: 'json'});
  }

  public get
}

export class BookDetails
{
  bookId: number;
  title: string;
  author:string;
  description: string;
  iSBN: string;
  price: number;
  publishdate: Date;
  availablebooks:number;
  noofreviews:number;
  review:Review[];
  order:OrderInfo[];
  ordercount:number;
  file:FileModel;
}

export class Review
{
  reviewno:number;
  rating:number;
  headline:string;
  comments:string;
}

export class Category
{
  categoryame:string;
  book:BookDetails[];
}

export class OrderInfo
{
 orderId:number;
 quantity:number;
 subTotal:number;
 total:number;
 orderStatus:number;
 paymentMethod:string;
 book:BookDetails;
}

export class FileModel
{
 fileId:number;
 fileName:string;
 type:string; 
 image:File;
}