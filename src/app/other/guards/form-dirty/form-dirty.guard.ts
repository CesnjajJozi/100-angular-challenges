import { Injectable } from '@angular/core';

import { IFormDirty } from './form-dirty.interface';

@Injectable({
  providedIn: 'root'
})
export class FormDirtyGuard  {
  public canDeactivate(component: IFormDirty): boolean {
    if (component.form.dirty) {
      return confirm('Your form is dirty. Are you sure you want to leave?');
    }

    return true;
  }
}
