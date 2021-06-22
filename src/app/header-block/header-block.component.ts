import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { stickyObservers } from '../sticky-observers';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss']
})
export class HeaderBlockComponent {
  nav = [
    ['#angebot', 'Angebot'],
    ['#ueber-uns', 'Über Uns'],
    ['#kontakt', 'Kontakt'],
    ['#anmeldung', 'Anmeldung'],
  ];
}
