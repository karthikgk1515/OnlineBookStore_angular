import { Component, OnInit, Input } from '@angular/core';
import { BookserviceService, Category } from '../bookservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-viewbycategory',
  templateUrl: './viewbycategory.component.html',
  styleUrls: ['./viewbycategory.component.css']
})
export class ViewbycategoryComponent implements OnInit {
  data:any
  categorybooks:any
  errormessage:any
  message:any
  constructor(private router:Router, private route:ActivatedRoute,
     private service:BookserviceService, private location:Location) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params=>{
       this.data=params.categoryname})

         this.service.getcategorybyname(this.data).subscribe(
      data=>
      {
        this.categorybooks=data
      this.errormessage=data},
      error=>
      {
        this.errormessage=error.error.message
        this.message=error.error.details;
        if(confirm(this.errormessage+": "+this.data))
        window.location.reload();
      }
      );
  }
  backClicked()
  {
    this.location.back();
  }
}
