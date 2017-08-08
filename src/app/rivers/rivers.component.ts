import { Component, OnInit } from '@angular/core';
import { RiversService } from '../rivers.service';
@Component({
  selector: 'app-rivers',
  templateUrl: './rivers.component.html',
  styleUrls: ['./rivers.component.css']
})
export class RiversComponent implements OnInit {
  rivers;
  public loading: boolean;

  constructor(private service: RiversService) { }

  ngOnInit() {
    this.loading = true;
    this.rivers = this.service.getRivers();
  }

}
