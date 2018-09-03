import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'item-swiper',
  templateUrl: './item-swiper.component.html',
  styleUrls: ['./item-swiper.component.scss']
})
export class ItemSwiperComponent implements OnInit {

  constructor() { }
  @Input() data: any;

  ngOnInit() { }

}
