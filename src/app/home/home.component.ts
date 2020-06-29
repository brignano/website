import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {

  @HostBinding('class') class = 'router-flex';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
