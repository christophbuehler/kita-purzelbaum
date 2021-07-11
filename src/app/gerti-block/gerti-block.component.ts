import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerti-block',
  templateUrl: './gerti-block.component.html',
  styleUrls: ['./gerti-block.component.scss']
})
export class GertiBlockComponent implements OnInit {
  blocks = [
    ['#bbbb00', '#bbbb00', '#bbbb00', '#bbbb00', '#bbbb00', '#bbbb00', '#bbbb00'],
    ['#bbbb00', '#bbbb00', '', '', '', '#bbbb00', '#bbbb00'],
    ['#bbbb00', '', '', '', '', '', '#bbbb00'],
    ['#bbbb00', '', '', '', '', '', '#bbbb00'],
    ['#bbbb00', '', '', '', '', '', '#bbbb00'],
    ['#bbbb00', '', '', '', '', '', '#bbbb00'],
    ['#bbbb00', '', '', '', '', '', '#bbbb00'],
    ['#bbbb00', '', '', '', '', '', '#bbbb00'],
    ['#11bb00', '#11bb00', '#11bb00', '#11bb00', '#11bb00', '#11bb00', '#11bb00'],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
