import { Component } from '@angular/core';

@Component({
    selector: 'app-bottom-sheet',
    templateUrl: './bottom-sheet.component.html',
    styleUrls: ['./bottom-sheet.component.scss'],
    standalone: false
})
export class BottomSheetComponent {
  public isShown = false;

  public show(): void {
    this.isShown = true;
  }

  public hide(): void {
    this.isShown = false;
  }
}
