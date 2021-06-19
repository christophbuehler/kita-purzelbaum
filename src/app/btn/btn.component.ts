import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() link?: string;
  @Input() icon?: string;
  @Input() text?: string;
  @Input() appearance = 'filled';

  constructor() { }

  ngOnInit(): void {
  }

}
