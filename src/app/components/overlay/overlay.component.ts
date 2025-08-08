import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-overlay',
    templateUrl: './overlay.component.html',
    styleUrls: ['./overlay.component.scss'],
    standalone: false
})
export class OverlayComponent {
  @Input() public isShown = false;
}

