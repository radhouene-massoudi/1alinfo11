import { Component, OnInit } from '@angular/core';
import { TestService } from './../../test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private t:TestService) { }

  ngOnInit(): void {
    this.t.showMsg();
  }

}
