import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Blox } from '../blox';

@Component({
  selector: 'app-offer-block',
  templateUrl: './offer-block.component.html',
  styleUrls: ['./offer-block.component.scss']
})
export class OfferBlockComponent implements OnInit, AfterViewInit {
  offers = [
    {
      label: 'Ganztag',
      lunch: true,
      info: '08:00-18:00',
      blocks: [
        ['#00aa11', '#00aa11'],
        ['#00aa11', '#00aa11'],
        ['orange', 'orange'],
        ['#00aa11', '#00aa11'],
        ['#00aa11', '#00aa11'],
      ]
    },
    {
      label: 'Vormittag',
      lunch: true,
      info: '08:00-14:00',
      blocks: [
        ['white', 'white'],
        ['white', 'white'],
        ['orange', 'orange'],
        ['#00aa11', '#00aa11'],
        ['#00aa11', '#00aa11'],
      ]
    },
    {
      label: 'Vormittag',
      lunch: false,
      info: '08:00-11:30',
      blocks: [
        ['white', 'white'],
        ['white', 'white'],
        ['white', 'white'],
        ['#00aa11', '#00aa11'],
        ['#00aa11', '#00aa11'],
      ]
    },
    {
      label: 'Nachmittag',
      lunch: true,
      info: '11:30-18:00',
      blocks: [
        ['#00aa11', '#00aa11'],
        ['#00aa11', '#00aa11'],
        ['orange', 'orange'],
        ['white', 'white'],
        ['white', 'white'],
      ]
    },
    {
      label: 'Nachmittag',
      lunch: false,
      info: '13:00-18:00',
      blocks: [
        ['#00aa11', '#00aa11'],
        ['#00aa11', '#00aa11'],
        ['white', 'white'],
        ['white', 'white'],
        ['white', 'white'],
      ]
    }
  ];

  constructor() { }

  ngAfterViewInit(): void {
  
  }

  ngOnInit(): void {
  }
}
