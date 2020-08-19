import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListbookComponent }from './listbook/listbook.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'  
import { ViewbycategoryComponent } from './viewbycategory/viewbycategory.component'
import { SearchbookComponent } from './searchbook/searchbook.component';


const routes: Routes = [
  { path: 'listbook', component:ListbookComponent},
  { path: 'viewbycategory', component:ViewbycategoryComponent},
  { path: 'searchbook', component: SearchbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,  
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
