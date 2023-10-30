import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animals: any = [];
  filtro: string = "";

  constructor(private httpClient:HttpClient) {
    this.animals = this.httpClient.get('https://raw.githubusercontent.com/atelper1005/agenda-23-24/master/MOCK_DATA.json');
  }

  /*constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('https://raw.githubusercontent.com/atelper1005/agenda-23-24/master/MOCK_DATA.json').subscribe((animals: any[]) => {
      this.animals = animals;
    });
  }
*/
}
