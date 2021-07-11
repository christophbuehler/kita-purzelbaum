import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerti-block',
  templateUrl: './gerti-block.component.html',
  styleUrls: ['./gerti-block.component.scss']
})
export class GertiBlockComponent implements OnInit {
  blocks = [
    ['#A3CBF0', '#A3CBF0', '#A3CBF0', '#A3CBF0', '#A3CBF0', '#A3CBF0', '#A3CBF0', '#A3CBF0'],
    ['#ffff88', '#ffff88', '', '', '', '', '#ffff88', '#ffff88'],
    ['#ffff88', '', '', '', '', '', '', '#ffff88'],
    ['#ffff88', '', '', '', '', '', '', '#ffff88'],
    ['#ffff88', '', '', '', '', '', '', '#ffff88'],
    ['#ffff88', '', '', '', '', '', '', '#ffff88'],
    ['#ffff88', '', '', '', '', '', '', '#ffff88'],
    ['#ffff88', '', '', '', '', '', '', '#ffff88'],
    ['#ffff88', '', '', '', '', '', '', '#ffff88'],
    ['#ffff88', '', '', '', '', '', '', '#ffff88'],
    ['#ffff88', '', '', '', '', '', '', '#ffff88'],
    ['#ffff88', '#ffff88', '#ffff88', '#ffff88', '#ffff88', '#ffff88', '#ffff88', '#ffff88'],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
