import { Component, ViewChild, ElementRef } from '@angular/core';
import { getCaseSection, getAgeCases, getGenderCases, getProvinceCases } from '../../assets/data/query';
import { sortCasesSection, sortCasesAge, sortCasesProvince, blackThemeDonut } from '../../assets/utils';
import { Chart } from 'chart.js';
import * as Highcharts from "highcharts";
import { Apollo } from "apollo-angular";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private apollo: Apollo) { }

  @ViewChild('genderCases', { static: false }) genderCases: ElementRef;
  @ViewChild('provinceCases', { static: false }) provinceCases: ElementRef;
  @ViewChild('ageCases', { static: false }) ageCases: ElementRef;

  Highchart: any = Highcharts;

  cases_setion: any = [];
  cases_age: any = [];

  last_update: string;



  bars: any;
  colorArray: any;

  ionViewWillEnter() {
    this.getCases();
    // this.provinceChart();
    // this.genderChart();

  }

  getCases() {
    /* 
      Get case section
    */
    this.apollo
      .watchQuery({
        query: getCaseSection,
        fetchPolicy: "network-only"
      })
      .valueChanges.pipe(map((result: any) => result.data.cases_section))
      .subscribe(data => {
        this.cases_setion = sortCasesSection(data);
      });

    /* 
      Get age cases
    */
    this.apollo
      .watchQuery({
        query: getAgeCases,
        fetchPolicy: "network-only"
      })
      .valueChanges.pipe(map((result: any) => result.data.cases_age))
      .subscribe(data => {
        this.cases_age = sortCasesAge(data);
      });


    /* 
     Get province cases
    */
    this.apollo
      .watchQuery({
        query: getProvinceCases,
        fetchPolicy: "network-only"
      })
      .valueChanges.pipe(map((result: any) => result.data.cases_province))
      .subscribe(data => {
        this.provinceChart(sortCasesProvince(data));

      });

    /* 
      Get gender cases
    */
    this.apollo
      .watchQuery({
        query: getGenderCases,
        fetchPolicy: "network-only"
      })
      .valueChanges.pipe(map((result: any) => result.data.cases_gender))
      .subscribe(data => {
        this.genderChart(data);

      });
  }

  provinceChart(cases: any) {

    this.Highchart.theme = blackThemeDonut;
    // Apply the theme
    this.Highchart.setOptions(this.Highchart.theme);

    this.Highchart.chart('provinceCases', {
      chart: {
        type: 'pie',
        height: 'max-content'
      },
      title: {
        text: 'Provincia'
      },
      subtitle: {
        text: 'Fuente: Ministerio de Salud'
      },

      accessibility: {
        announceNewData: {
          enabled: true
        },
        point: {
          valueSuffix: '%'
        }
      },

      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y}%'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> casos<br/>'
      },

      series: [
        {
          name: "Provincia",
          colorByPoint: true,
          data: [...cases.series]
        }
      ],
      drilldown: {
        series: [...cases.drilldown]
      }
    });
  }

  genderChart(cases) {
    let casesFormat = [];
    cases.forEach((element) => {
      casesFormat.push([element.gender, element.number])
    });

    this.Highchart.theme = blackThemeDonut;
    // Apply the theme
    this.Highchart.setOptions(this.Highchart.theme);


    this.Highchart.chart('genderCases', {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 50,
          beta: 0
        }
      },
      title: {
        text: 'Género'
      },
      subtitle: {
        text: 'Fuente: Ministerio de Salud'
      },
      plotOptions: {
        pie: {
          depth: 100,
          allowPointSelect: false,
          cursor: 'pointer',
          showInLegend: true,
          dataLabels: {
            align: 'right',
            color: '#294469',
            shadow: false,
            x: -10,
            enabled: true,
            inside: true,
            // formatter: labelFormatterFunction,
            connectorWidth: 1,
          },

        }
      },
      series: [{
        name: 'Casos',
        data: [...casesFormat]
      }]
    });
  }

}
