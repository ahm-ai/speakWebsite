import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styles: []
})
export class ShopComponent implements OnInit {


  img: string = '../../assets/shop.png';


  constructor() { }

  ngOnInit() {
  }

}
