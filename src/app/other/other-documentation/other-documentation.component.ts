import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { fadeInOutAnimation } from '../animations/fade-in-out/fade-in-out.animation';
import { IFormDirty } from '../guards/form-dirty/form-dirty.interface';
import { slideRightAnimation } from '../animations/slide-right/slide-right.animation';

@Component({
    selector: 'app-other-documentation',
    templateUrl: './other-documentation.component.html',
    styleUrls: ['./other-documentation.component.scss'],
    animations: [fadeInOutAnimation, slideRightAnimation],
    standalone: false
})
export class OtherDocumentationComponent implements IFormDirty {
  public isInDOM = true;
  public form: UntypedFormGroup;
  public selectedTab = 0;
  public tabs: { title: string, active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];

  constructor(private formBuilder: UntypedFormBuilder) {
    this.initializeForm();
  }

  public submit() {
    this.form.reset(this.form.value);
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
}
