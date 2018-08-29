import { Component,Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  @Input() Locations: any;

  constructor() { }

  ngOnInit() { }

}
