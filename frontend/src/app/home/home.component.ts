import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'udm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    

  }

  ngAfterContentInit(): void {
    let elem = $('.set-bg');
    
    elem.each(element => {
      
      var bg = $(elem[element]).data('setbg');
      $(elem[element]).css('background-image', 'url(' + bg + ')');

    });
    

  }

}
