import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { stickyObservers } from './sticky-observers';
import { environment } from '../environments/environment';
import { HeaderBlockComponent } from './header-block/header-block.component';

export const assetRoot = environment.production ? '/wp-content/themes/kita-purzelbaum/dist/kita-purzelbaum/assets/' : '../assets/';

if (environment.production) {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HeaderBlockComponent, { read: ElementRef }) header?: ElementRef<any>;

  constructor(private elRef: ElementRef){}

  ngAfterViewInit(): void {
    stickyObservers(this.elRef?.nativeElement);

    const stickyChange = fromEvent(this.header?.nativeElement, 'sticky-change') as Observable<CustomEvent>;
    stickyChange.pipe(
      map(e => [e.detail.target, e.detail.stuck]),
      tap(([target, stuck]) => target.classList.toggle('stuck', stuck)),
    ).subscribe();
  }
}
