import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-ngx-table',
  templateUrl: './heroes-ngx-table.component.html',
  styleUrls: ['./heroes-ngx-table.component.css']
})
export class HeroesNgxTableComponent implements OnInit {

  p: number;
  elements: any = [];
  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
    this.p = 1;

    for (let i = 1; i <= 25; i++) {
      this.elements.push({id: 'SKOK ' + i, date: 'Data ' + i, branch: 'Oddział ' + i, date2: 'Termin ' + i, status: 'Status'
      , isCollapsed: this.isCollapsed });
    }
  }

}
