import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: []
})
export class MainComponent implements OnInit {
  data;
  data2;
  data1;
  cars;
  groupedCars;
  selectedCar2;
  constructor() {

  }

  ngOnInit() {

    this.data = [
      {
        label: '子墨', value: 'usa.png',
        children: [
          {label: 'Cadillac', value: 'Cadillac'},
          {label: 'Ford', value: 'Ford'},
          {label: 'GMC', value: 'GMC'}
        ]
      },
      {
        label: 'jp2', value: 'usa.png',
        children: [
          {label: 'Casafdillac', value: 'Cadillac'},
          {label: 'Fofsafsard', value: 'Ford'},
          {label: 'GfasMC', value: 'GMC'}
        ]
      },
      {
        label: '子墨2', value: 'usa.png',
        children: [
          {label: 'Cfsaadillac', value: 'Cadillac'},
          {label: 'Ffasord', value: 'Ford'},
          {label: 'GMC', value: 'GMC'}
        ]
      },
      {
        label: 'jp', value: 'usa.png',
        children: [
          {label: 'Cadillacfas', value: 'Cadillac'},
          {label: 'Fordfasf', value: 'Ford'},
          {label: 'GMfasfC', value: 'GMC'}
        ]
      },
    ];
    this.data1 = [
      {label: 'Cadillac', value: 'Cadillac'},
    ];
    this.data2 = [
      {label: 'Cadillac', value: 'Cadillac'},
      {label: 'Ford', value: 'Ford'},
      {label: 'GMC', value: 'GMC'},
      {label: 'Cadillac', value: 'Cadillac'},
      {label: 'Ford', value: 'Ford'},
      {label: 'GMC', value: 'GMC'},
      {label: 'Cadillac', value: 'Cadillac'},
      {label: 'Ford', value: 'Ford'},
      {label: 'GMC', value: 'GMC'},
      {label: 'Cadillac', value: 'Cadillac'},
      {label: 'Ford', value: 'Ford'},
      {label: 'GMC', value: 'GMC'},
      {label: 'Cadillac', value: 'Cadillac'},
      {label: 'Ford', value: 'Ford'},
      {label: 'GMC', value: 'GMC'}
    ];


    this.cars = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
    ];

    this.groupedCars = [
      {
        label: 'Germany', value: 'germany.png',
        items: [
          {label: 'Audi', value: '1'},
          {label: 'BMW', value: '2'},
          {label: 'Mercedes', value: 'Mercedes'}
        ]
      },
      {
        label: 'USA', value: 'usa.png',
        items: [
          {label: 'Cadillac', value: 'Cadillac'},
          {label: 'Ford', value: 'Ford'},
          {label: 'GMC', value: 'GMC'}
        ]
      },
      {
        label: 'Japan', value: 'japan.png',
        items: [
          {label: 'Honda', value: 'Honda'},
          {label: 'Toyota', value: 'Toyota'}
        ]
      }
    ];

  }


  public onSelectChange(e) {
    console.log(e);
  }


}
