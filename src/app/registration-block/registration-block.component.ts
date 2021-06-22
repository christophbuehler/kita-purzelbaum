import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { assetRoot } from '../app.component';
import { BloxConfig } from '../blox';

@Component({
  selector: 'app-registration-block',
  templateUrl: './registration-block.component.html',
  styleUrls: ['./registration-block.component.scss']
})
export class RegistrationBlockComponent {
  config: BloxConfig = {
    url: `${assetRoot}hoi.png`,
  };

  constructor() { }
}
