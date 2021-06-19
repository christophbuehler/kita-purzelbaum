import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-registration-block',
  templateUrl: './registration-block.component.html',
  styleUrls: ['./registration-block.component.scss']
})
export class RegistrationBlockComponent {
  @ViewChild('form', { read: ElementRef }) form?: ElementRef<HTMLFormElement>;

  children=[{}];

  constructor() { }

  submit() {
    this.form?.nativeElement.submit();
  }

  removeChild(ev: Event, i: number) {
    ev.stopPropagation();
    ev.preventDefault();
    this.children.splice(i, 1);
  }

  addChild(ev: Event) {
    ev.stopPropagation();
    ev.preventDefault();
    this.children.push({});
  }

  trackBy(el: any) {
    return el;
  }
}
