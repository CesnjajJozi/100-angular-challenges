import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.scss'],
    standalone: false
})
export class QuoteComponent {
  @Input() public quote = '';
  @Input() public author = '';
  @Input() public occupation = '';
}
