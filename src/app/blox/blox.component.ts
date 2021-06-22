import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Blox, BloxConfig } from '../blox';

@Component({
  selector: 'app-blox',
  templateUrl: './blox.component.html',
  styleUrls: ['./blox.component.scss']
})
export class BloxComponent implements AfterViewInit {
  @ViewChild('canvas', { read: ElementRef }) canvas?: ElementRef<HTMLCanvasElement>;
  @Input() blocks?: string[][];
  @Input() config?: BloxConfig;

  constructor() { }

  ngAfterViewInit(): void {
    const canvas = this.canvas!.nativeElement;
    const blox = new Blox(canvas);
    blox.build(this.config || {
      blocks: this.blocks,
    });
  }
}
