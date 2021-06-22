import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerti-block',
  templateUrl: './gerti-block.component.html',
  styleUrls: ['./gerti-block.component.scss']
})
export class GertiBlockComponent implements OnInit {
  blocks = [
    ['#ADEBEC', '#ADEBEC', '#ADEBEC', '#ADEBEC', '#ADEBEC', '#ADEBEC', '#ADEBEC'],
    ['#ADEBEC', '#ADEBEC', '', '', '', '#ADEBEC', '#ADEBEC'],
    ['#ADEBEC', '', '', '', '', '', '#ADEBEC'],
    ['#ADEBEC', '', '', '', '', '', '#ADEBEC'],
    ['#ADEBEC', '', '', '', '', '', '#ADEBEC'],
    ['#ADEBEC', '', '', '', '', '', '#ADEBEC'],
    ['#ADEBEC', '', '', '', '', '', '#ADEBEC'],
    ['#ADEBEC', '', '', '', '', '', '#ADEBEC'],
    ['#ADEBEC', '', '', '', '', '', '#ADEBEC'],
    ['#ADEBEC', '', '', '', '', '', '#ADEBEC'],
    ['#ABC6C8', '#ABC6C8', '#ABC6C8', '#ABC6C8', '#ABC6C8', '#ABC6C8', '#ABC6C8'],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
