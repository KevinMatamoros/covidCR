import { Component, ViewChild } from '@angular/core';
import { getNews } from '../../assets/data/query';
import { Chart } from 'chart.js';
import { Apollo } from "apollo-angular";
import { map } from 'rxjs/operators';
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private apollo: Apollo) { }

  ionViewDidEnter() {
    this.getNews();
    // this.provinceChart();
    // this.genderChart();

  }

  news: any = [];

  getNews() {
    this.apollo
      .watchQuery({
        query: getNews,
        fetchPolicy: "network-only"
      })
      .valueChanges.pipe(map((result: any) => result.data.news))
      .subscribe(data => {
        this.news = data.sort((a, b) => {
          let keyA = new Date(a.date),
            keyB = new Date(b.date);
          // Compare the 2 dates
          if (keyA > keyB) return -1;
          if (keyA < keyB) return 1;
          return 0;

        });
        
      });
    }

  setDescription(id: string) {
          let element = document.getElementById(id);
        }

}
