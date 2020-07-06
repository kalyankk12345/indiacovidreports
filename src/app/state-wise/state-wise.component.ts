import { Component, OnInit } from '@angular/core';
import { state } from '../rep1';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.css']
})
export class StateWiseComponent implements OnInit {
  s:state[];
  s1:state[];
  d:Date=new Date();
  month=Number(this.d.getMonth())+1;
  _listFilter:string;
  constructor(private covid:CovidService) { }
errorMessage='';
  ngOnInit(): void {
    this.covid.get().subscribe({
      next:report =>{this.s=report.statewise;
        this.s1=report.statewise;},
      error: err => this.errorMessage = err
    })
  //  this.s1=this.s;

  }
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.s1=this.listFilter?this.performFilter(this.listFilter):this.s;
  }
  sortingo='';
  sortA(colName)
  {
      document.getElementById("i").style.backgroundColor = "green";
      document.getElementById("d").style.backgroundColor = "white";
      this.sortingo=colName+" is sorted in Increasing Order";
      if(colName!='state'&&colName!='drate'&&colName!='rrate')
      this.s1.sort((a, b) =>Number(a[colName]) > Number(b[colName]) ? 1 : Number(a[colName] )< Number(b[colName]) ? -1 : 0);
      else
      {if(colName=='state')
      this.s1.sort((a, b) =>a[colName]>b[colName] ? 1 : a[colName] <b[colName] ? -1 : 0);
      else  if(colName=='rrate')
      this.s1.sort((a,b) =>(a.recovered/a.confirmed)>(b.recovered/b.confirmed) ? 1 : (a.recovered/a.confirmed)<(b.recovered/b.confirmed) ? -1 : 0);
      else if(colName=='drate')
      this.s1.sort((a,b) =>(a.deaths/a.confirmed)>(b.deaths/b.confirmed) ? 1 : (a.deaths/a.confirmed)<(b.deaths/b.confirmed) ? -1 : 0);}


  }
  sortD(colName)
  {
    document.getElementById("i").style.backgroundColor = "white";
    document.getElementById("d").style.backgroundColor = "green";
    this.sortingo=colName+" is sorted in Decreasing Order";
    if(colName!='state'&&colName!='drate'&&colName!='rrate')
    this.s1.sort((a, b) =>Number(a[colName]) > Number(b[colName]) ?-1 : Number(a[colName] )< Number(b[colName]) ? 1 : 0);
    else{
      if(colName=='state')
      this.s1.sort((a, b) =>a[colName]>b[colName] ? -1 : a[colName] <b[colName] ? 1 : 0);
      else if(colName=='rrate')
      this.s1.sort((a,b) =>(a.recovered/a.confirmed)>(b.recovered/b.confirmed) ? -1 : (a.recovered/a.confirmed)<(b.recovered/b.confirmed) ? 1 : 0);
      else if(colName=='drate')
      this.s1.sort((a,b) =>(a.deaths/a.confirmed)>(b.deaths/b.confirmed) ? -1 : (a.deaths/a.confirmed)<(b.deaths/b.confirmed) ? 1 : 0);
    }

  }
  performFilter(filterBy:string):state[]{
    filterBy=filterBy.toLowerCase();
    return this.s1.filter((st : state)=>
    st.state.toLocaleLowerCase().indexOf(filterBy)!==-1);
}

}
