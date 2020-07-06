import { Component, OnInit } from '@angular/core';
import { country } from '../rep';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-conwise',
  templateUrl: './conwise.component.html',
  styleUrls: ['./conwise.component.css']
})
export class ConwiseComponent implements OnInit {
  s:any[]
  //k=false;
  s1:any[];
  constructor(private covid:CovidService) {
  }
errorMessage='';
  ngOnInit(): void {
    this.covid.get().subscribe({
      next:report =>{this.s=report.cases_time_series,
        this.s1=report.cases_time_series},
      error: err => this.errorMessage = err
    })
  }
  _listFilter:string;

  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.s=this.listFilter?this.performFilter(this.listFilter):this.s;
  }

  sortD(colName)
{
  document.getElementById("i").style.backgroundColor = "white";
  document.getElementById("d").style.backgroundColor = "black";
    if(colName!='date')
    this.s.sort((a, b) =>Number(a[colName]) > Number(b[colName]) ? 1 : Number(a[colName] )< Number(b[colName]) ? -1 : 0);
   // this.k=false;
   if(colName=='active')
  this.s.sort((a, b) =>a.totalconfirmed-a.totaldeceased-a.totalrecovered>b.totalconfirmed-b.totalrecovered-b.totaldeceased ? 1 : a.totalconfirmed-a.totaldeceased-a.totalrecovered<b.totalconfirmed-b.totalrecovered-b.totaldeceased ? -1 : 0);
   if(colName=='date')
   this.s.sort((a,b)=>new Date(a.date) > new Date(b.date)?1:new Date(a.date)<new Date(b.date)?-1:0 );
}
sortA(colName)
{
  document.getElementById("i").style.backgroundColor = "black";
  document.getElementById("d").style.backgroundColor = "white";
  if(colName!='date')
  this.s.sort((a, b) =>Number(a[colName]) > Number(b[colName]) ?-1 : Number(a[colName] )< Number(b[colName]) ? 1 : 0);
  if(colName=='active')
  this.s.sort((a, b) =>a.totalconfirmed-a.totaldeceased-a.totalrecovered>b.totalconfirmed-b.totalrecovered-b.totaldeceased ? -1 : a.totalconfirmed-a.totaldeceased-a.totalrecovered<b.totalconfirmed-b.totalrecovered-b.totaldeceased ? 1 : 0);
  if(colName=='date')
  this.s.sort((a,b)=>new Date(a.date) > new Date(b.date)?-1:new Date(a.date)<new Date(b.date)?1:0 );
}

performFilter(filterBy:string):country[]{
  filterBy=filterBy.toLowerCase();
  return this.s1.filter((st :country)=>
  st.date.toLocaleLowerCase().indexOf(filterBy)!==-1);
}

}
