import { Component, OnInit } from '@angular/core';
import { BookDetails, Category, BookserviceService } from '../bookservice.service';
import { Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
  books:any
  book1:any;
  book2:any;
  book3:any;
  category:any;
  title:string;
  constructor(private service:BookserviceService, private router:Router, private route:ActivatedRoute){}
  ngOnInit():any
  {
    this.service.getBooks().subscribe(
      response=>this.listbook(response)
    );
    this.service.getCategory().subscribe(
      response=>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response)
  {
    this.category=response;
  }
 
  public listbook(response):void
  {
    this.books=response;
    this.sortbypublishdate();
    this.sortbyreview();
    this.sortbyorder();
  }

  public sortbypublishdate(): void{
    this.book1=this.books.slice();
    this.book1.sort(function(a,b)
    {
      if(a.publishdate>b.publishdate)
      return -1;
      if(a.publishdate<b.publishdate)
      return 1;
      else return 0;
    })
  }


  public sortbyreview():void
  {
    this.book2=this.books.slice();
  this.book2.forEach(b => {
    let chars=b.review;
    b.noofreviews=chars.length;
  });
  this.book2.sort(function(a,b)
  {
    return b.noofreviews-a.noofreviews
  })
  }


  public sortbyorder():void
  {
    this.book3=this.books.slice();
    this.book3.forEach(b => {
      let char=b.order;
      b.ordercount=0;
      char.forEach(element => {
        b.ordercount+=element.quantity;
      });
      console.log(b.ordercount)
    });
  this.book3.sort(function(c,d)
  {
    return d.ordercount-c.ordercount;
  })
  }

  getbookbycategory(c:Category)
  {
    let categoryname=c.categoryame;
      this.router.navigate(['/viewbycategory'],{
      queryParams:{categoryname}
    })
  }

  getbookbyname()
  {
    let tile=this.title;
      this.router.navigate(['/searchbook'],{
      queryParams:{tile}
    })
}
}
