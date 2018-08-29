import { Component,Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'item-gridlist',
  templateUrl: './item-gridlist.component.html',
  styleUrls: ['./item-gridlist.component.scss']
})
export class ItemGridlistComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() { }

}
