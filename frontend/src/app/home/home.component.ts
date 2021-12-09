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
    // $('.set-bg').each(r => {
    //   var bg = $(this).data('setbg');
    //   // console.log(bg);
    //   $(this).css('background-image', 'url(' + bg + ')');
    // });

    console.log($('.set-bg'));
    
    let elem = $('.set-bg');
    
    elem.each(element => {
      
      var bg = $(elem[element]).data('setbg');

      // console.log(bg);
      $(elem[element]).css('background-image', 'url(' + bg + ')');

    });
    

  }

}
