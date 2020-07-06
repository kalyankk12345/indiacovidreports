import { Component, OnInit } from '@angular/core';
import { Gen } from 'src/app/gen';
import { CovidService } from 'src/app/covid.service';

@Component({
  selector: 'app-covidnews',
  templateUrl: './covidnews.component.html',
  styleUrls: ['./covidnews.component.css']
})
export class CovidnewsComponent implements OnInit {


  pageTitle = 'NewsApp';
  news:Gen;
  constructor(private k:CovidService)
  {

  }
  ngOnInit():void{
    this.k.getA('covid-19').subscribe({
     next:  items =>this.news = items,
     error: err =>console.log(err)
    });

  }


}
