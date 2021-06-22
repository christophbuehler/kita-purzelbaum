import { Component, OnInit, AfterViewInit } from '@angular/core';
import { assetRoot } from '../app.component';
import { Blox } from '../blox';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    const blox = new Blox(canvas);

    const urls = [
      // '../assets/16x22/monalisa.png',
      `${assetRoot}16x22/shapes.png`,
      // '../assets/flower2.png',
    ];
    let i = 0;

    const rebuild: any = () => blox.build({
      url: urls[i++ % urls.length]
    })
      // .then(() => new Promise(resolve => setTimeout(resolve, 10000)))
      // .then(() => rebuild());

    rebuild();
  }
}
