import { Component, OnInit, Input } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  data:any
  result:any
  message:any
  errormessage:any
  constructor(private service: BookserviceService,
     private router:Router, private route:ActivatedRoute,
     private location:Location) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      this.data=params.tile})
   
       this.service.getbookbyname(this.data).subscribe(
      data=>
      {
        this.result=data;
        this.message=data;
        this.errormessage=data;
      },
      error=>{
        this.errormessage=error.error.message;
        this.message=error.error.details;
        if(confirm(this.data+" "+this.errormessage))
        this.router.navigate(['listbook'])
});
  }
  backClicked()
  {
    this.location.back();
  }
 
}
